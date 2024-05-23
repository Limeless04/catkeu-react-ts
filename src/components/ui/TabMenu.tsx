import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabMenuProps {
    value: string,
    handleChange: (event: React.SyntheticEvent, newValue: string) => void
}

function TabMenu({ value, handleChange }: TabMenuProps) {
    const tabTitleMenus: string[] = ["Harian", "Mingguan", "Bulanan", "Tahunan"]

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
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