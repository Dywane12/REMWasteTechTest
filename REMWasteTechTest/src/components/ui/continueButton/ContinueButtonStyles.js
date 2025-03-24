import {COLORS} from "../../../config/strings.js";

export const ContinueButtonStyles = {
    backgroundColor: COLORS.blue,
    margin: 1,
    textTransform: 'none',
    '&:hover': {
        backgroundColor: COLORS.blueHover,
    },
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 500,
    fontSize: '1rem',
};

export const ArrowForwardIconStyles = {
    marginLeft: 1,
    fontSize: '1rem',
};