import { PaymentMethod } from ".";

export interface UserModel {
    name: string;
    email: string;
    phone: string;
}

export interface PolicyModel {
    type: string;
    category: string;
    policyHolder: string;
    policyNumber: string;
    amount: number;
    validUntil: Date;
}

export interface StatementEntryModel {
    paymentMethod: PaymentMethod;
    amount: number;
    date: Date;
}