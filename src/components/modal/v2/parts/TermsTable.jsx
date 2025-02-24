/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import OfferCard from './OfferCard';
import OfferAccordion from './OfferAccordion';
import LoadingShimmer from './LoadingShimmer';

const TermsTable = ({
    isLoading,
    view: { meta, offers },
    aprDisclaimer,
    useV4Design,
    useV5Design,
    useNewCheckoutDesign
}) => {
    const { offerCountry } = meta;
    /**
     * numOffers/setNumOffers is used to dynamically change the number of loading shimmers that are rendered
     * depending on the last number of offers that were displayed.
     */
    const [numOffers, setNumOffers] = useState();
    const [activeSelection, setActiveSelection] = useState(0);

    if (isLoading) {
        return (
            <div className="offer__wrapper">
                <LoadingShimmer
                    numOffers={offerCountry !== 'DE' ? numOffers : 4}
                    offerCountry={offerCountry}
                    useNewCheckoutDesign={useNewCheckoutDesign}
                />
            </div>
        );
    }

    const qualifyingOffers = offers
        .filter(offer => offer.meta.qualifying === 'true')
        .map((offer, idx) => {
            // Only DE uses the accordion style for presentation of offers in the modal.
            if (offerCountry !== 'DE') {
                return (
                    <OfferCard
                        offer={offer}
                        index={idx}
                        useV4Design={useV4Design}
                        useV5Design={useV5Design}
                        useNewCheckoutDesign={useNewCheckoutDesign}
                    />
                );
            }
            const disclaimer =
                aprDisclaimer.length < offers.length
                    ? aprDisclaimer[aprDisclaimer.length - 1].aprDisclaimer
                    : aprDisclaimer[idx].aprDisclaimer;
            return (
                <OfferAccordion
                    offer={offer}
                    index={idx}
                    aprDisclaimer={disclaimer}
                    activeSelection={activeSelection}
                    setActiveSelection={setActiveSelection}
                    useV5Design={useV5Design}
                />
            );
        });

    setNumOffers(qualifyingOffers.length === 0 ? undefined : qualifyingOffers.length);

    return <div className="offer__wrapper">{qualifyingOffers}</div>;
};

export default TermsTable;
