import React from 'react';
import { Box, Typography } from '@mui/material';
import SkillsInDevelopment from '../components/Skills/SkillsInDevelopment';
import { SubLayout } from '../layouts/SubLayout';
import TopSkills from '../components/Skills/TopSkills';

export const Skills = () => {
    
    return (
        <SubLayout>
            <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2">
                Skills
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(auto-fill, minmax(200px, 1fr))', 
                        sm: 'repeat(auto-fill, minmax(500px, 1fr))', 
                    },
                    gap: '20px',
                    marginTop: 4,
                }}
            >
                <SkillsInDevelopment />
                <TopSkills />
            </Box>
        </SubLayout>
    );
};
