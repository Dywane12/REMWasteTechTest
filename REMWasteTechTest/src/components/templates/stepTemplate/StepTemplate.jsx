import React from 'react';
import { Box, Typography } from '@mui/material';
import ContinueButton from "../../ui/continueButton/ContinueButton.jsx";
import BackButton from "../../ui/backButton/BackButton.jsx";
import {StepTemplateBox, TypographyStyles} from "./StepTemplateStyles.js";

function StepTemplate({ stepName, onNext, onBack, activeStep }) {
    return (
        <Box sx={StepTemplateBox(false)}>
            <Typography variant="h4" sx={TypographyStyles}>
                {stepName}
            </Typography>
            <Box sx={StepTemplateBox(true)}>
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