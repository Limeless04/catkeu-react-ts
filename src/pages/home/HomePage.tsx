import React, { useState } from 'react'
import TabMenu from '@components/ui/TabMenu'
import { Button, Box, SelectChangeEvent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ReuseableDialog from '@components/ui/ReuseableDialog';
import ReuseableForm from '@components/ui/ReuseableForm';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from "@styles/theme"
import formFields from './FormFields'
function HomePage() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [value, setValue] = useState<string>('Harian');
    const [toggleDialog, setToggleDialog] = useState<boolean>(false)

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleToggleDialog = () => {
        const newDialogOpen = !toggleDialog
        setToggleDialog(newDialogOpen)
    }



    const handleFormSubmit = (formState: { [key: string]: string }) => {
        // Handle form submission
        console.log('Form submitted successfully:', formState);
    };

    const [recordType, setRecordType] = useState<string>('income')
    const handleChangeType = (event: SelectChangeEvent) => {
        setRecordType(event.target.value as string)
    }



    return (
        <>
            <TabMenu value={value} handleChange={handleChange} />
            <Box sx={{ display: 'flex', justifyContent: "space-between", paddingTop: "35px" }}>
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
                <Button variant="contained" onClick={handleToggleDialog}><AddIcon /> Add {recordType} {value}</Button>
            </Box>
            <ReuseableDialog
                open={toggleDialog}
                onClose={handleToggleDialog}
                title={`Add New ` + recordType[0].toUpperCase() + recordType.slice(1)}
                actions={
                    <>

                        <Button onClick={handleToggleDialog}>Cancel</Button>
                        <Button onClick={handleToggleDialog} type="submit" variant="contained" color="primary" sx={{ m: 1 }}>Submit</Button>
                    </>
                }
            >
                <ReuseableForm
                    fields={formFields}
                    onSubmit={handleFormSubmit}
                />
            </ReuseableDialog>
        </>
    )
}

export default HomePage