import React, { useEffect, useState } from 'react';
import SingleCard from '../singleCard/SingleCard.jsx';
import { Grid, CircularProgress, Box } from '@mui/material';
import Popup from "../popup/Popup.jsx";
import {fetchSkips} from "../../../utils/api.js";
import {CardListBoxStyles, CardListGridStyles} from "./CardListStyles.js";

function CardList({ onNext, onBack }) {
    const [skips, setSkips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);
    const [animationDirection, setAnimationDirection] = useState('up');

    useEffect(() => {
        const loadSkips = async () => {
            try {
                const data = await fetchSkips();
                setSkips(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        loadSkips();
    }, []);

    const handleCardSelect = (index) => {
        if (selectedCardIndex === index) {
            setAnimationDirection('down');
            setTimeout(() => setSelectedCardIndex(null), 300);
        } else {
            setAnimationDirection('up');
            setSelectedCardIndex(index);
        }
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box sx={CardListBoxStyles}>
            <Grid container spacing={3} justifyContent="center" alignItems="center" maxWidth="lg">
                {
                    skips.map((skip, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} sx={CardListGridStyles}>
                        <SingleCard
                            image={skip.imageUrl}
                            size={skip.size}
                            hirePeriod={skip.hire_period_days}
                            price={skip.price_before_vat}
                            selected={selectedCardIndex === index}
                            onSelect={() => handleCardSelect(index)}
                            allowedOnRoad={skip.allowed_on_road}
                            allowsHeavyWaste={skip.allows_heavy_waste}
                        />
                    </Grid>
                ))
                }
            </Grid>
            {selectedCardIndex !== null && (
                <Popup skip={skips[selectedCardIndex]}
                       animationDirection={animationDirection}
                       onNext={onNext}
                       onBack={onBack} />
            )}
        </Box>
    );
}

export default CardList;