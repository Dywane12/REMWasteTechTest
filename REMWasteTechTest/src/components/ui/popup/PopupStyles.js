import {COLORS} from "../../../config/strings.js";

export function PopupBoxAnimationStyles(animationDirection) {
    return {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.backgroundColor,
        color: COLORS.white,
        padding: 2,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
        animation: `${animationDirection === 'up' ? 'slideUp' : 'slideDown'} 0.3s ease-out`,
        '@keyframes slideUp': {
            from: {transform: 'translateY(100%)'},
            to: {transform: 'translateY(0)'},
        },
        '@keyframes slideDown': {
            from: {transform: 'translateY(0)'},
            to: {transform: 'translateY(100%)'},
        },
    }
}

export const PopupBoxStyles = {
    maxWidth: '75rem',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingX: 4,
    '@media (max-width: 1024px)': {
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingX: 2,
        '& > div': {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 1,
        },
        '& button': {
            flex: 1,
            marginX: 1,
        },
    },
}

export const YardSizeTypographyStyles = {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 500
}

export const BluePriceTypographyStyles = {
    color: COLORS.blue,
    fontWeight: 600,
    marginLeft: '0.25rem',
    fontSize: '1.75rem',
    fontFamily: 'Inter, system-ui, sans-serif'
}

export const PlusVATTypographyStyles = {
    fontSize: '1rem',
    marginLeft: '0.25rem',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: 500
}