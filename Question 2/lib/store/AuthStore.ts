import { create } from 'zustand';

import { Callback } from '@/lib/types';
import { UserModel } from '@/lib/types/models';
import { buildInitialSate, handleError, LoadingStatus, newStatus } from '@/lib/types/state';

import { setItem } from '../utils/storage';
import { loginPayload, registerPayload } from '@/lib/schema/auth';
import { getCurrentUser, performLogin, registerUser, logOutUser } from '../services/authService';

// state interface for authentication state logic
export interface AuthState {
    // Whether the user is logged in or not
    isLoggedIn: boolean;
    // The user object
    user?: UserModel;
    // State for api calls
    state: LoadingStatus;
    // Updating logged in state
    setIsLoggedIn: (value: boolean) => void;
    // Updating user state
    setUser: (user: any) => void;
    // Login function
    userLogin: (payload: loginPayload, callback?: Callback) => Promise<void>
    // Register function
    registerUser: (payload: registerPayload, callback: Callback) => Promise<void>
    // Get current user function
    getCurrentUser: (callback?: Callback) => Promise<void>
    // Logout function
    logout: () => Promise<void>;
    // Reset state
    reset: () => void;
}

export const functions = ['userLogin', 'registerUser', 'getCurrentUser'];
const initial: LoadingStatus = buildInitialSate(functions);

export const useAuthStore = create<AuthState>((set, get) => ({
    isLoggedIn: false,
    user: undefined,
    state: initial,
    setIsLoggedIn: (value: boolean) => set({ isLoggedIn: value }),
    setUser: (user: any) => set({ user }),
    userLogin: async (payload, callback) => {
        const { state } = get();

        // Debouncing requests to prevent multiple requests at the same time
        if (state.userLogin.state === 'LOADING') return;

        // Updating state to loading
        set({ state: newStatus(state, 'userLogin', 'LOADING') });

        try {
            // Perfoming login
            let resp = await performLogin(payload);
            if (resp.error) throw new Error(resp.error);

            if (resp.data) {
                // Updating state to success and setting user
                set({ 
                    state: newStatus(state, 'userLogin', 'SUCCESS'),
                    isLoggedIn: true,
                    user: resp.data.user
                });
                // Setting user in async storage
                setItem('user', JSON.stringify(resp.data.user))
                // Calling callback
                if (callback) callback()
            }
        } catch (e) {
            handleError(e, set, state, 'userLogin');
        }
    },
    registerUser: async (data, callback) => {
        const { state } = get();

        // Debouncing requests to prevent multiple requests at the same time
        if (state.registerUser.state === 'LOADING') return;

        // Updating state to loading
        set({ state: newStatus(state, 'registerUser', 'LOADING') });

        try {
            // Performing registration
            let resp = await registerUser(data);
            // Handling error if any
            if (resp.error) throw new Error(resp.error);

            if (resp.data) {
                // Updating state to success and setting user
                set({ 
                    state: newStatus(state, 'userLogin', 'SUCCESS'),
                    isLoggedIn: true,
                    user: resp.data.user
                });
                setItem('user', JSON.stringify(resp.data.user));
                
                if (callback) callback()
            }
        } catch (e) {
            handleError(e, set, state, 'registerUser');
        }
    },
    getCurrentUser: async (callback) => {
        const { state } = get();

        // Debouncing requests to prevent multiple requests at the same time
        if (state.getCurrentUser.state === 'LOADING') return;

        // Updating state to loading
        set({ state: newStatus(state, 'getCurrentUser', 'LOADING') });

        try {
            // Getting current user
            let resp = await getCurrentUser();
            // Handling error if any
            if (resp.error) throw new Error(resp.error);
            if (resp.data) {
                // Updating state to success and setting user
                set({ 
                    state: newStatus(state, 'getCurrentUser', 'SUCCESS'),
                    isLoggedIn: true,
                    user: resp.data.user
                });
                setItem('user', JSON.stringify(resp.data.user));
                
                if (callback) callback()
            }
        } catch (e) {
            handleError(e, set, state, 'getCurrentUser');
        }
    },
    logout: async () => {
        try {
            let resp = await logOutUser();
            if (resp.error) throw new Error(resp.error);
            if (resp.data) {
                set({
                    ...initial,
                    user: undefined,
                    isLoggedIn: false
                });
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    },
    reset: () => set({
        state: initial,
        isLoggedIn: false
    }),
}))

export default useAuthStore;