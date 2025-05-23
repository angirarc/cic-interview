import { create } from 'zustand';

import { Callback } from '@/lib/types';
import { UserModel } from '@/lib/types/models';
import { buildInitialSate, handleError, LoadingStatus, newStatus } from '@/lib/types/state';

import { loginPayload, registerPayload } from '@/lib/schema/auth';
import { getCurrentUser, performLogin } from '../services/authService';
import { setItem } from '../utils/storage';
// import { getCurrentUser, loginAction, registerAction } from '@/lib/services/authService';

export interface AuthState {
    isLoggedIn: boolean;
    user?: UserModel;
    state: LoadingStatus;
    setIsLoggedIn: (value: boolean) => void;
    setUser: (user: any) => void;
    userLogin: (payload: loginPayload, callback?: Callback) => Promise<void>
    registerUser: (payload: registerPayload, callback: Callback) => Promise<void>
    getCurrentUser: (callback?: Callback) => Promise<void>
    logout: () => Promise<void>;
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

        if (state.userLogin.state === 'LOADING') return;

        set({ state: newStatus(state, 'userLogin', 'LOADING') });

        try {
            let resp = await performLogin();
            const user = {
                ...payload,
                phone: "0711022792",
                name: "John Doe"
            };
            set({ 
                state: newStatus(state, 'userLogin', 'SUCCESS'),
                isLoggedIn: true,
                user
            });
            setItem('token', 'abcdedf');
            setItem('user', JSON.stringify(user))
            
            if (callback) callback()
        } catch (e) {
            handleError(e, set, state, 'userLogin');
        }
    },
    registerUser: async (data, callback) => {
        const { state } = get();

        if (state.registerUser.state === 'LOADING') return;

        set({ state: newStatus(state, 'registerUser', 'LOADING') });

        try {
            let resp = await performLogin();
            set({ 
                state: newStatus(state, 'userLogin', 'SUCCESS'),
                isLoggedIn: true,
                user: data
            });
            setItem('token', 'abcdedf');
            setItem('user', JSON.stringify(data));
            
            if (callback) callback()
        } catch (e) {
            handleError(e, set, state, 'registerUser');
        }
    },
    getCurrentUser: async (callback) => {
        const { state } = get();

        if (state.getCurrentUser.state === 'LOADING') return;

        set({ state: newStatus(state, 'getCurrentUser', 'LOADING') });

        const user: UserModel = {
            name: "John Doe",
            email: "john@doe.com",
            phone: "0711022792"
        };

        try {
            let resp = await getCurrentUser();
            set({ 
                state: newStatus(state, 'getCurrentUser', 'SUCCESS'),
                isLoggedIn: true,
                user
            });
            setItem('token', 'abcdedf');
            setItem('user', JSON.stringify(user));
            
            if (callback) callback()
        } catch (e) {
            handleError(e, set, state, 'getCurrentUser');
        }
    },
    logout: async () => {
        try {
            set({
                ...initial,
                user: undefined,
                isLoggedIn: false
            });
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