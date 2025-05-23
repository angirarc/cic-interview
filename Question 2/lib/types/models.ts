import { PaymentMethod } from ".";

// user model
export interface UserModel {
    name: string;
    email: string;
    phone: string;
}

// policy model
export interface PolicyModel {
    type: string;
    category: string;
    policyHolder: string;
    policyNumber: string;
    amount: number;
    validUntil: Date;
}

// statement entry model
export interface StatementEntryModel {
    paymentMethod: PaymentMethod;
    amount: number;
    date: Date;
}