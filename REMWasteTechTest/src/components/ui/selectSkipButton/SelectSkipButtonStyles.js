import {COLORS} from "../../../config/strings.js";

export function SelectSkipButtonStyles(selected, isDisabled) {
    return {
        marginTop: 2,
        padding: '0.75rem',
        fontSize: '1rem',
        backgroundColor: selected ? COLORS.blue : COLORS.selectSkipButtonColor,
        color: isDisabled ? COLORS.selectSkipButtonDisabledText : COLORS.white,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: selected ? COLORS.blueHover : COLORS.selectSkipButtonHover,
        },
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: 500
    }
}

export const ArrowForwardIconStyles = {
    marginLeft: 1,
    fontSize: '1rem'
}