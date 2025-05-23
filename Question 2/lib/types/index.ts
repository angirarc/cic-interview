export type Callback = (resp?: any) => void;

export enum InsuranceTypes {
    LIFE = 'Life Insurance',
    GENERAL = 'General Insurance',
    CAR = 'Car Insurance',
    ASSETS = 'Assets Insurance',
}

export enum PaymentMethod {
    MPESA = 'Mpesa',
    BANK = 'Bank Transfer',
}