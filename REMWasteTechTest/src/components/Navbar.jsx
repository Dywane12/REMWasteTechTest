import { Stepper, Step, StepLabel, Box } from '@mui/material';
import { LocationOnOutlined as Location, DeleteOutlined as DeleteIcon, LocalShippingOutlined as TruckIcon, ShieldOutlined as ShieldIcon, CalendarTodayOutlined as CalendarIcon, CreditCardOutlined as CreditCardIcon } from '@mui/icons-material';

const Navbar = () => {
    const steps = [
        { label: 'Postcode', icon: <Location /> },
        { label: 'Waste Type', icon: <DeleteIcon /> },
        { label: 'Select Skip', icon: <TruckIcon /> },
        { label: 'Permit Check', icon: <ShieldIcon /> },
        { label: 'Choose Date', icon: <CalendarIcon /> },
        { label: 'Payment', icon: <CreditCardIcon /> },
    ];

    return (
        <Box sx={{ padding: '20px', color: '#fff' }}>
            <Stepper activeStep={2}>
                {steps.map((step, index) => (
                    <Step key={index} completed={index < 2}>
                        <StepLabel
                            icon={step.icon}
                            sx={{
                                flexDirection: 'row',
                                '& .MuiStepLabel-label': {
                                    color: index <= 2 ? '#fff' : '#888',
                                    marginLeft: '8px',
                                },
                                '& .MuiStepIcon-root': {
                                    color: index <= 2 ? '#0037C1' : '#888',
                                    marginRight: '8px',
                                },
                            }}
                        >
                            {step.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}

export default Navbar;