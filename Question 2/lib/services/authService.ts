'use server';

import { prisma } from "@/db/prisma";

import { handleError } from "@/lib/utils/";
import { supabase } from "@/lib/utils/supabase";
import { loginPayload, registerPayload } from "@/lib/schema/auth";

export const performLogin = async (payload: loginPayload) => {
    try {
        // Authenticate the user
        const { data, error } = await supabase.auth.signInWithPassword(payload)
        
        if (error) throw error;

        // Fetch the user data from your database
        const user = await prisma.user.findUnique({
            where: { userId: data.user.id }
        });

        // Combine Supabase user and user data
        return { data: { user: { ...data.user, ...user } }, error: null };
    } catch (err) {
        return handleError(err);
    }
}

export const registerUser = async (payload: registerPayload) => {
    try {
        // Creating supabase user with signup data
        const { data, error } = await supabase.auth.signUp({
            email: payload.email,
            password: payload.password,
        })
    
        if (error) throw error;
    
        const userId = data.user?.id;
        if (!userId) throw new Error('User not found');
    
        let { password, ...userPayload } = payload;

        // Creating user in database
        const user = await prisma.user.create({
            data: userPayload
        })

        if (!user) throw new Error('Failed to create user');
        
        return { data: { user: { ...data.user, ...user } }, error: null };
    } catch (err) {
        return handleError(err);
    }
}

export const logOutUser = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;

        return { data: null, error: null };
    } catch (err) {
        return handleError(err);
    }
}

export const getCurrentUser = async () => {
    try {
        // Get the Supabase user
        const { data: { user: account }, error } = await supabase.auth.getUser();
        
        if (error || !account) {
            return handleError(error ?? new Error('User not found'));
        }

        // Get the user details from your database
        const user = await prisma.user.findUnique({
            where: { userId: account.id }
        });

        if (!user) {
            return handleError(new Error('User not found'));
        }

        // Combine Supabase user and user data
        return { 
            data: { 
                ...user,
                ...user
            }, 
            error: null 
        };
    } catch (err) {
        return handleError(err);
    }
}