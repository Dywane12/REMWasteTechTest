import { Stepper, Step, Box, useMediaQuery } from '@mui/material';
import {
    LocationOnOutlined as Location,
    DeleteOutlined as DeleteIcon,
    LocalShippingOutlined as TruckIcon,
    ShieldOutlined as ShieldIcon,
    CalendarTodayOutlined as CalendarIcon,
    CreditCardOutlined as CreditCardIcon,
} from '@mui/icons-material';
import {strings} from "../../../config/strings.js";
import {CustomStepLabel} from "./CustomStepLabel.js";
import {CustomBlueConnector} from "./CustomBlueConnector.js";
import {NavbarBoxStyles, NavbarStepperStyles, NavBarStepStyles} from "./NavbarStyles.js";


const Navbar = ({ activeStep, setActiveStep }) => {

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
            sx={NavbarBoxStyles}
        >
            <Stepper
                activeStep={activeStep}
                connector={<CustomBlueConnector />}
                sx={NavbarStepperStyles}
            >
                {
                    steps.map((step, index) => (
                    <Step
                        key={index}
                        completed={index < activeStep}
                        disabled={index > activeStep}
                        sx={NavBarStepStyles(index, activeStep)}
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
                ))
                }
            </Stepper>
        </Box>
    );
};

export default Navbar;