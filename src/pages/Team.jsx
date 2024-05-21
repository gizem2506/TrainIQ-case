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
            <Teams />
        </SubLayout>
    );
};
