import {COLORS} from "../../../config/strings.js";

export function CardStyles(selected, isDisabled) {
    return {
        maxWidth: 400,
        backgroundColor: COLORS.backgroundColor,
        color: COLORS.white,
        borderRadius: 2,
        boxShadow: 3,
        border: selected ? `2px solid ${COLORS.blue}` : `2px solid ${COLORS.disabled}`,
        padding: 2,
        position: 'relative',
        '&:hover': {
            borderColor: isDisabled ? COLORS.disabled : COLORS.blue,
            transition: '0.3s',
        },
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1,
    }
}

export const SizeChipStyles = {
    position: 'absolute',
    right: '1rem',
    top: '1rem',
    backgroundColor: COLORS.blue,
    color: COLORS.white,
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 500,
    fontSize: '1rem'
}

export function TypographyStyles (isMarginLeft) {
    return {
        marginLeft: isMarginLeft ? 1 : 0,
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: 500
    }
}

export const PriceBoxStyles = {
    display: 'flex',
    alignItems: 'baseline',
    marginTop: 1
}