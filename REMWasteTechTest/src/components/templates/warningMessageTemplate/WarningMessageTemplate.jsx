import { Box, Typography } from "@mui/material";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import React from "react";
import {TypographyStyles, WarningIconStyles, WarningMessageTemplateBoxStyles} from "./WarningMessageTemplateStyles.js";

const WarningMessageTemplate = ({ message, color, bottomPosition }) => (
    <Box sx={WarningMessageTemplateBoxStyles(bottomPosition)}>
        <WarningAmberOutlinedIcon sx={WarningIconStyles(color)} />
        <Typography variant="body2" color={color} sx={TypographyStyles}>
            {message}
        </Typography>
    </Box>
);

export default WarningMessageTemplate;