import {styled} from "@mui/system";
import {StepConnector} from "@mui/material";
import {COLORS} from "../../../config/strings.js";

export const CustomBlueConnector = styled(StepConnector)(() => ({
    '& .MuiStepConnector-line': {
        borderColor: COLORS.blue,
        borderWidth: 2,
    },
}));