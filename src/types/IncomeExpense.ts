import * as Realm from 'realm-web';

export type incomeExpense = {
    _id: Realm.BSON.ObjectId;
    amount?: number;
    category?: string;
    createdAt?: Date;
    description?: string;
    type?: string;
};

export const incomeExpenseSchema = {
    name: 'income-expense',
    properties: {
        _id: 'objectId',
        amount: 'int?',
        category: 'string?',
        createdAt: 'date?',
        description: 'string?',
        type: 'string?',
    },
    primaryKey: '_id',
};

