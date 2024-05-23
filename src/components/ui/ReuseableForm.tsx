import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'

interface FormField {
    name: string,
    label: string,
    type: string,
    validation: (value: string) => string
}

interface ReuseableFormProps {
    fields: FormField[],
    onSubmit: (formState: { [key: string]: string }) => void
}

function ReuseableForm({ fields, onSubmit }: ReuseableFormProps) {
    const initialState = fields.reduce((state, field) => {
        state[field.name] = ''
        return state
    }, {} as { [key: string]: string })

    const [formState, setFormState] = useState<{ [key: string]: string }>(initialState)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const validate = (): boolean => {
        let tempErrors: { [key: string]: string } = {}
        fields.forEach(field => {
            tempErrors[field.name] = field.validation(formState[field.name])
        })

        setErrors(tempErrors)
        return Object.values(tempErrors).every((x) => x === '')
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validate()) {
            onSubmit(formState)
        }
    }
    return (
        <Box
            component="form"
            sx={{
                width: '100%',
                '& .MuiTextField-root': { m: 1, width: '100%' },
                '& .MuiButton-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {fields.map((field) => (
                <TextField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    value={formState[field.name]}
                    onChange={handleChange}
                    error={!!errors[field.name]}
                    helperText={errors[field.name]}
                    variant="outlined"
                />
            ))}
        </Box>
    )
}

export default ReuseableForm