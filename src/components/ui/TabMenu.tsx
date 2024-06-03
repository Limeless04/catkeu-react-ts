import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import theme from '@/styles/theme';

interface TabMenuProps {
    value: string,
    handleChange: (event: React.SyntheticEvent, newValue: string) => void
}

function TabMenu({ value, handleChange }: TabMenuProps) {
    const tabTitleMenus: string[] = ["Harian", "Mingguan", "Bulanan", "Tahunan"]

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            '& .MuiTab-root': {
                color: "#808080", // Change the text color of tabs
            },
            '& .Mui-selected': {
                color: theme.palette.primary.darker, // Change the text color of selected tab
            },
            '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.darker, // Change the indicator color
            }
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                aria-label="secondary tabs example"
            >
                {
                    tabTitleMenus.map(title => (
                        <Tab key={title} value={title} label={title} />
                    ))
                }
            </Tabs>
        </Box>
    )
}

export default TabMenu