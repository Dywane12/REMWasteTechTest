import {styled} from "@mui/system";
import {StepLabel} from "@mui/material";
import {COLORS} from "../../../config/strings.js";

export const CustomStepLabel = styled(StepLabel)(({ active, completed, disabled }) => ({
    display: 'flex',
    alignItems: 'center',
    color: completed ? COLORS.blue : COLORS.disabled,
    fontSize: '0.5rem',
    whiteSpace: 'nowrap',
    fontFamily: 'Inter, system-ui, sans-serif',
    '& .MuiStepLabel-label': {
        fontSize: '1.1rem',
        color: completed ? COLORS.white : COLORS.disabled,
        cursor: disabled ? 'not-allowed' : 'pointer',
    },
    '& .MuiStepLabel-label.Mui-active': {
        color: COLORS.white,
    },
    '& .MuiStepLabel-label.Mui-completed': {
        color: COLORS.white,
    },
    '& .MuiSvgIcon-root': {
        fontSize: '2rem',
        color: completed || active ? COLORS.blue : COLORS.disabled,
        cursor: disabled ? 'not-allowed' : 'pointer',
    },
    '&.Mui-disabled .MuiSvgIcon-root': {
        color: COLORS.disabled,
        cursor: disabled ? 'not-allowed' : 'pointer',
    },
}));