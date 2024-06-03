import React, { FormEvent, useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { useAddForm } from '@/stores/AddForm';
import { AddFormTypes } from '@/types/AddForm'


type Errors = Partial<{
    category: string,
    amount: string,
    selectedDate: string,
    type: string,
    description: string
}>;

interface AddFormProps {
    handleFormSubmit: (formData: AddFormTypes) => void
    handleToggleDialog: () => void
}
const AddForm = ({ handleFormSubmit, handleToggleDialog }: AddFormProps) => {
    const [
        category, setCategory,
        amount, setAmount,
        selectedDate, setSelectedDate,
        type, setType,
        description, setDescription
    ] = useAddForm(state => [
        state.category, state.setCategory,
        state.amount, state.setAmount,
        state.selectedDate, state.setSelectedDate,
        state.type, state.setType,
        state.description, state.setDescription
    ])


    const [errors, setErrors] = useState<Errors>({
        category: '',
        amount: '',
        selectedDate: '',
        type: '',
        description: ''
    });

    const handleDateChange = (date: moment.Moment | null) => {
        setSelectedDate(date);
    };

    const validateForm = () => {
        const errors: Errors = {};
        if (!category.trim()) {
            errors.category = 'Category is required';
        }
        if (amount <= 0) {
            errors.amount = 'Your Amount Cannot Be Empty';
        } else if (isNaN(amount)) {
            errors.amount = 'Amount must be a number';
        }
        if (!type.trim()) {
            errors.type = 'Type is required';
        }
        if (!description.trim()) {
            errors.description = 'Description is required';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const formData: AddFormTypes = { category, amount, selectedDate, type, description }
            console.log('Form submitted:', { category, amount, selectedDate, type, description });
            handleFormSubmit(formData)
            // You can proceed with form submission here
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ padding: '20px' }}>
                <Grid item xs={12} >
                    <TextField
                        label="Category"
                        placeholder="Makanan/Minuman/Gaji"
                        fullWidth
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        error={!!errors.category}
                        helperText={errors.category}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Amount"
                        type="number"
                        placeholder="Isian Besaran Income/Expenses"
                        fullWidth
                        value={amount}
                        onChange={(e) => setAmount(parseInt(e.target.value))}
                        error={!!errors.amount}
                        helperText={errors.amount}
                    />
                </Grid>
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="Tanggal"
                            defaultValue={moment()}
                            value={selectedDate}
                            onChange={handleDateChange}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Type"
                        fullWidth
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        error={!!errors.type}
                        helperText={errors.type}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        placeholder="Deskripsi Dari Income/Expenses"
                        fullWidth
                        multiline
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        error={!!errors.description}
                        helperText={errors.description}
                    />
                </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" sx={{ m: 1 }}>Submit</Button>
            <Button onClick={handleToggleDialog}>Cancel</Button>
        </form>

    );
};

export default AddForm;
