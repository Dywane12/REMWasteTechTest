import React from 'react';
import StepTemplate from "../StepTemplate.jsx";
import {strings} from "../../strings/strings.js";


function PermitCheckStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName={strings.permitCheckLabel} onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default PermitCheckStep;