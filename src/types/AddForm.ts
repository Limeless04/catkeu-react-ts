import moment from 'moment';
export interface AddFormTypes {
    category: string;
    amount: number;
    selectedDate: moment.Moment | null;
    type: string;
    description: string;
}