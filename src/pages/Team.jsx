import React from 'react';
import { Box, Typography } from '@mui/material';
import { SubLayout } from '../layouts/SubLayout';
import Teams from '../components/Teams/Teams';


export const Team = () => {

    return (
        <SubLayout>
            <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2">
                Teams
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(800px, 1fr))',
                    gap: '10px',
                }}
            >
                <Teams />

            </Box>
        </SubLayout>
    );
};
