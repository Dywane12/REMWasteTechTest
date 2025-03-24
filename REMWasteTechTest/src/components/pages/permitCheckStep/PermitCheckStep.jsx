import React from 'react';
import StepTemplate from "../../templates/stepTemplate/StepTemplate.jsx";
import {strings} from "../../../config/strings.js";


function PermitCheckStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName={strings.permitCheckLabel} onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default PermitCheckStep;