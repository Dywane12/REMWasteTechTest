import {COLORS} from "../../../config/strings.js";

export const BackButtonStyles= {
    backgroundColor: COLORS.backButton,
    margin: 1,
    textTransform: 'none',
    '&:hover': {
        backgroundColor: COLORS.backButtonHover,
    },
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 500,
    fontSize: '1rem',
}

export const ArrowBackwardIconStyles = {
    marginRight: 1,
    fontSize: '1rem',
};