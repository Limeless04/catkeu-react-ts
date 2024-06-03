import React, { useState } from 'react'
import TabMenu from '@components/ui/TabMenu'
import { Button, Box, SelectChangeEvent, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ReuseableDialog from '@components/ui/ReuseableDialog';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from "@styles/theme"
import { useHomeStores } from '@/stores/HomeStores';
import { useShallow } from 'zustand/react/shallow';
import AddForm from './AddForm';
import { AddFormTypes } from "@/types/AddForm"
import { useAddForm } from '@/stores/AddForm';
import { useRealm } from '@/context/RealmContext';

function HomePage() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [value, setValue, toggleDialog, setToggleDialog, recordType, setRecordType] = useHomeStores(useShallow(state => [state.value, state.setValue, state.toggleDialog, state.setToggleDialog, state.recordType, state.setRecordType]))
    const [clearForm] = useAddForm(state => [state.clearForm])
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        event.preventDefault()
        setValue(newValue);
    };

    const { user } = useRealm()
    console.log(user)

    const handleToggleDialog = () => {
        const newDialogOpen = !toggleDialog
        setToggleDialog(newDialogOpen)
    }

    const handleFormSubmit = ({ category, amount, selectedDate, type, description }: AddFormTypes) => {
        const formatedDate = selectedDate?.toISOString()

        // Handle form submission
        console.log('Form submitted successfully:', { category, amount, formatedDate, type, description });
        clearForm()
    };

    const handleChangeType = (event: SelectChangeEvent) => {
        setRecordType(event.target.value as string)
    }

    return (
        <>
            {
                isMobile ? (
                    <>
                        <TabMenu value={value} handleChange={handleChange} />
                        <Box sx={{ display: 'flex', justifyContent: "space-between", paddingTop: "20px" }}>
                            <FormControl sx={{ width: isMobile ? "40%" : "20%" }}>
                                <InputLabel id="select-label">Type</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="select"
                                    value={recordType}
                                    label="Type"
                                    onChange={handleChangeType}
                                >
                                    <MenuItem value={"income"}>Income</MenuItem>
                                    <MenuItem value={"expenses"}>Expenses</MenuItem>
                                </Select>
                            </FormControl>

                            <Button variant="contained" onClick={handleToggleDialog}><AddIcon /> {recordType}</Button>
                        </Box>

                    </>
                ) : (
                    <Box sx={{ display: 'flex', justifyContent: "space-between", paddingTop: "20px" }}>
                        <FormControl sx={{ width: isMobile ? "40%" : "20%" }}>
                            <InputLabel id="select-label">Type</InputLabel>
                            <Select
                                labelId="select-label"
                                id="select"
                                value={recordType}
                                label="Type"
                                onChange={handleChangeType}
                            >
                                <MenuItem value={"income"}>Income</MenuItem>
                                <MenuItem value={"expenses"}>Expenses</MenuItem>
                            </Select>
                        </FormControl>
                        <TabMenu value={value} handleChange={handleChange} />
                        <Button variant="contained" onClick={handleToggleDialog} sx={{
                            width: '100pt'
                        }}><AddIcon /> {recordType}</Button>
                    </Box>
                )
            }

            <ReuseableDialog
                open={toggleDialog}
                onClose={handleToggleDialog}
                title={`New ` + recordType[0].toUpperCase() + recordType.slice(1) + ' ' + value}
            >
                <AddForm handleFormSubmit={handleFormSubmit} handleToggleDialog={handleToggleDialog} />
            </ReuseableDialog>
        </>
    )
}

export default HomePage