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

// Styled connector
const BlueConnector = styled(StepConnector)(({ theme }) => ({
    '& .MuiStepConnector-line': {
        borderColor: '#1976d2',
        borderWidth: 2,
    },
}));

// Custom step label style
const CustomStepLabel = styled(StepLabel)(({ active, completed, disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    color: completed ? '#1976d2' : '#555',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontSize: '0.5rem',
    whiteSpace: 'nowrap',
    '& .MuiStepLabel-label': {
        fontSize: '1rem',
        color: completed ? '#fff' : '#555',
    },
    '& .MuiStepLabel-label.Mui-active': {
        color: '#fff',
    },
    '& .MuiStepLabel-label.Mui-completed': {
        color: '#fff',
    },
    '& .MuiSvgIcon-root': {
        fontSize: '2rem',
        color: completed || active ? '#1976d2' : '#555',
    },
    '&.Mui-disabled .MuiSvgIcon-root': {
        color: '#555',
    },
}));

const Navbar = () => {
    const activeStep = 2;
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const steps = [
        { label: 'Postcode', icon: <Location /> },
        { label: 'Waste Type', icon: <DeleteIcon /> },
        { label: 'Select Skip', icon: <TruckIcon /> },
        { label: 'Permit Check', icon: <ShieldIcon /> },
        { label: 'Choose Date', icon: <CalendarIcon /> },
        { label: 'Payment', icon: <CreditCardIcon /> },
    ];

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
                    maxWidth: '75rem', // Set a max-width to ensure it doesn't exceed the container
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap', // Allow steps to wrap on smaller screens
                }}
            >
                {steps.map((step, index) => (
                    <Step
                        key={index}
                        completed={index < activeStep}
                        disabled={index > activeStep}
                        sx={{
                            flexShrink: 0,
                        }}
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