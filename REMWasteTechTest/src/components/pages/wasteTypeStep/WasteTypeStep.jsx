import React from 'react';
import StepTemplate from "../../templates/stepTemplate/StepTemplate.jsx";
import {strings} from "../../../config/strings.js";


function WasteTypeStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName={strings.wasteTypeLabel} onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default WasteTypeStep;