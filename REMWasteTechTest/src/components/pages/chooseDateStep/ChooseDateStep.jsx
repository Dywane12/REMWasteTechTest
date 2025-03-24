import React from 'react';
import StepTemplate from "../../templates/stepTemplate/StepTemplate.jsx";
import {strings} from "../../../config/strings.js";


function ChooseDateStep({ onNext, onBack, activeStep }) {
    return <StepTemplate stepName={strings.chooseDateLabel} onNext={onNext} onBack={onBack} activeStep={activeStep} />;
}

export default ChooseDateStep;