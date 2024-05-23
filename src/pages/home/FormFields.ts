const formFields = [
    {
        name: 'category',
        label: 'Category',
        type: 'text',
        validation: (value: string) => (value ? '' : 'Name is required'),
    },
    {
        name: 'amount',
        label: 'Amount',
        type: 'text',
        validation: (value: string) => (value ? '' : 'Amount is required'),
    },
    // {
    //     name: 'date',
    //     label: 'Date',
    //     type: 'password',
    //     validation: (value: string) =>
    //         value.length > 5 ? '' : 'Password must be at least 6 characters long',
    // },
];

export default formFields