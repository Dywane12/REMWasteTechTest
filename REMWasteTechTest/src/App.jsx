import './App.css';
import Navbar from "./components/Navbar.jsx";
import React, { useState } from 'react';
import PostcodeStep from "./components/steps/PostcodeStep.jsx";
import WasteTypeStep from "./components/steps/WasteTypeStep.jsx";
import SelectSkipStep from "./components/steps/SelectSkipStep.jsx";
import PermitCheckStep from "./components/steps/PermitCheckStep.jsx";
import ChooseDateStep from "./components/steps/ChooseDateStep.jsx";
import PaymentStep from "./components/steps/PaymentStep.jsx";


function App() {
    const [activeStep, setActiveStep] = useState(2); // Start at "Select Skip" step

    const handleNext = () => {
        setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, 5));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    const renderStep = () => {
        switch (activeStep) {
            case 0:
                return <PostcodeStep onNext={handleNext} onBack={handleBack} activeStep={activeStep} />;
            case 1:
                return <WasteTypeStep onNext={handleNext} onBack={handleBack} activeStep={activeStep} />;
            case 2:
                return <SelectSkipStep onNext={handleNext} onBack={handleBack} />;
            case 3:
                return <PermitCheckStep onNext={handleNext} onBack={handleBack} activeStep={activeStep} />;
            case 4:
                return <ChooseDateStep onNext={handleNext} onBack={handleBack} activeStep={activeStep} />;
            case 5:
                return <PaymentStep onNext={handleNext} onBack={handleBack} activeStep={activeStep} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Navbar activeStep={activeStep} setActiveStep={setActiveStep} />
            {renderStep()}
        </>
    );
}

export default App;