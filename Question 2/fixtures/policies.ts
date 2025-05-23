import { InsuranceTypes, PaymentMethod } from "@/lib/types";
import { PolicyModel, StatementEntryModel } from "@/lib/types/models";

export const activePolicies: PolicyModel[] = [
    {
        type: InsuranceTypes.CAR,
        category: 'Comprehensive',
        amount: 5000000,
        policyHolder: 'Reinhardt Angira',
        policyNumber: '647890254',
        validUntil: new Date()
    },
    {
        type: InsuranceTypes.LIFE,
        category: 'Third Party',
        amount: 5000000,
        policyHolder: 'Reinhardt Angira',
        policyNumber: '647890254',
        validUntil: new Date()
    },
    {
        type: InsuranceTypes.ASSETS,
        category: 'Third Party',
        amount: 5000000,
        policyHolder: 'Reinhardt Angira',
        policyNumber: '647890254',
        validUntil: new Date()
    }
]

export const statementEntries: StatementEntryModel[] = [
    {
        date: new Date(),
        amount: 50000,
        paymentMethod: PaymentMethod.MPESA
    },
    {
        date: new Date(),
        amount: 50000,
        paymentMethod: PaymentMethod.BANK
    },
    {
        date: new Date(),
        amount: 50000,
        paymentMethod: PaymentMethod.MPESA
    },
    {
        date: new Date(),
        amount: 50000,
        paymentMethod: PaymentMethod.BANK
    },
    {
        date: new Date(),
        amount: 50000,
        paymentMethod: PaymentMethod.MPESA
    }
]