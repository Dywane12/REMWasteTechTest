import React from 'react';
import StepTemplate from "../StepTemplate.jsx";


function WasteTypeStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName="Waste Type" onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default WasteTypeStep;