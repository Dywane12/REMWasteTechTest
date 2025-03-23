import { Stepper, Step, StepLabel, Box, StepConnector, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import {
    LocationOnOutlined as Location,
    DeleteOutlined as DeleteIcon,
    LocalShippingOutlined as TruckIcon,
    ShieldOutlined as ShieldIcon,
    CalendarTodayOutlined as CalendarIcon,
    CreditCardOutlined as CreditCardIcon,
} from '@mui/icons-material';
import {strings} from "../strings/strings.js";

// Styled connector
const BlueConnector = styled(StepConnector)(({ theme }) => ({
    '& .MuiStepConnector-line': {
        borderColor: '#0037C1',
        borderWidth: 2,
    },
}));

// Custom step label style
const CustomStepLabel = styled(StepLabel)(({ active, completed, disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    color: completed ? '#0037C1' : '#555',
    fontSize: '0.5rem',
    whiteSpace: 'nowrap',
    fontFamily: 'Inter, system-ui, sans-serif',
    '& .MuiStepLabel-label': {
        fontSize: '1.1rem',
        color: completed ? '#fff' : '#555',
        cursor: disabled ? 'not-allowed' : 'pointer',
    },
    '& .MuiStepLabel-label.Mui-active': {
        color: '#fff',
    },
    '& .MuiStepLabel-label.Mui-completed': {
        color: '#fff',
    },
    '& .MuiSvgIcon-root': {
        fontSize: '2rem',
        color: completed || active ? '#0037C1' : '#555',
        cursor: disabled ? 'not-allowed' : 'pointer',
    },
    '&.Mui-disabled .MuiSvgIcon-root': {
        color: '#555',
        cursor: disabled ? 'not-allowed' : 'pointer',
    },
}));

const Navbar = ({ activeStep, setActiveStep }) => {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const steps = [
        { label: strings.postcodeLabel, icon: <Location /> },
        { label: strings.wasteTypeLabel, icon: <DeleteIcon /> },
        { label: strings.selectSkipLabel, icon: <TruckIcon /> },
        { label: strings.permitCheckLabel, icon: <ShieldIcon /> },
        { label: strings.chooseDateLabel, icon: <CalendarIcon /> },
        { label: strings.paymentLabel, icon: <CreditCardIcon /> },
    ];

    const handleStepClick = (index) => {
        if (index <= activeStep) {
            setActiveStep(index);
        }
    };

    return (
        <Box
            sx={{
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                padding: isSmallScreen ? '10px' : '20px',
                width: '100%',
            }}
        >
            <Stepper
                activeStep={activeStep}
                connector={<BlueConnector />}
                sx={{
                    width: '100%',
                    maxWidth: '75rem',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {steps.map((step, index) => (
                    <Step
                        key={index}
                        completed={index < activeStep}
                        disabled={index > activeStep}
                        sx={{
                            flexShrink: 0,
                            cursor: index <= activeStep ? 'pointer' : 'not-allowed',
                        }}
                        onClick={() => handleStepClick(index)}
                    >
                        <CustomStepLabel
                            icon={step.icon}
                            active={index === activeStep}
                            completed={index < activeStep}
                            disabled={index > activeStep}
                        >
                            {step.label}
                        </CustomStepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};

export default Navbar;