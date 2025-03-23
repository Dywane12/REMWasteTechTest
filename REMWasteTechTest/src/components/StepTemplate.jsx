import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function StepTemplate({ stepName, onNext, onBack, activeStep }) {
    return (
        <Box sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 'bold' }}>
                {stepName}
            </Typography>
            <Box sx={{ marginTop: 2 }}>
                {activeStep > 0 ? (
                    <Button
                        variant="contained"
                        onClick={onBack}
                        sx={{
                            backgroundColor: '#2A2A2A',
                            marginX: '0.5rem',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#3A3A3A',
                            },
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontWeight: 500,
                            fontSize: '1rem'
                        }}
                    >
                        Back
                    </Button>
                ) : null}
                {activeStep < 5 ? (
                    <Button
                        variant="contained"
                        onClick={onNext}
                        sx={{
                            backgroundColor: '#0037C1',
                            marginX: '0.5rem',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#002DA1',
                            },
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontWeight: 500,
                            fontSize: '1rem',
                        }}
                    >
                        Continue
                        <ArrowForwardIcon sx={{ marginLeft: 1, fontSize: '1rem' }} />
                    </Button>
                ) : null}
            </Box>
        </Box>
    );
}

export default StepTemplate;