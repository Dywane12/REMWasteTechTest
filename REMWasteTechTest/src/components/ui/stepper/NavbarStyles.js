import {COLORS} from "../../../config/strings.js";

export const NavbarBoxStyles = {
    color: COLORS.white,
    display: 'flex',
    justifyContent: 'center',
    padding: 'max-width: 600px' ? '10px' : '20px',
    width: '99%',
}

export const NavbarStepperStyles = {
    width: '100%',
    maxWidth: '75rem',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
}

export function NavBarStepStyles(index, activeStep) {
    return {
        flexShrink: 0,
        cursor: index <= activeStep ? 'pointer' : 'not-allowed',
    }
}