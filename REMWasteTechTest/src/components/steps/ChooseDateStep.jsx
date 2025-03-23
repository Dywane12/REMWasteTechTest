import React from 'react';
import StepTemplate from "../StepTemplate.jsx";


function ChooseDateStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName="Choose Date" onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default ChooseDateStep;