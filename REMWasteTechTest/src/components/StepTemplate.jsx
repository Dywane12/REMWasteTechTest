import React from 'react';
import { Box, Typography } from '@mui/material';
import ContinueButton from "./ContinueButton.jsx";
import BackButton from "./BackButton.jsx";

function StepTemplate({ stepName, onNext, onBack, activeStep }) {
    return (
        <Box sx={{ padding: 3, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 'bold' }}>
                {stepName}
            </Typography>
            <Box sx={{ marginTop: 2 }}>
                {activeStep > 0 ? (
                    <BackButton onBack={onBack} />
                ) : null}
                {activeStep < 5 ? (
                    <ContinueButton onNext={onNext} />
                ) : null}
            </Box>
        </Box>
    );
}

export default StepTemplate;