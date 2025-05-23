import * as yup from 'yup';

export const registerSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(/^(?:\+254|0)?([71]\d{8})$/, 'Please use the format 07XXXXXXXX, 01XXXXXXXX, or +254XXXXXXXX!').required(),
    password: yup.string().required(),
});

export type registerPayload = yup.InferType<typeof registerSchema>

export const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export type loginPayload = yup.InferType<typeof loginSchema>