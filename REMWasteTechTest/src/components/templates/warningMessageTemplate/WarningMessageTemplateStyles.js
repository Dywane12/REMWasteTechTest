import {COLORS} from "../../../config/strings.js";

export function WarningMessageTemplateBoxStyles(bottomPosition) {
    return {
        minWidth: '60%',
        position: 'absolute',
        left: '1rem',
        bottom: bottomPosition,
        backgroundColor: COLORS.black,
        opacity: 0.9,
        padding: '0.5rem',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
    }
}

export function WarningIconStyles(color) {
    return {
        color: color,
        marginRight: '0.5rem',
        fontSize: '1rem'
    }
}

export const TypographyStyles = {
    fontSize: '0.75rem',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 500
}
