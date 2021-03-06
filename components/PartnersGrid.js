import PartnersGridStyles from '../styles/modules/PartnersGrid.module.scss';
import * as StringConstants from '../components/constants/app_strings';

export default function PartnersGrid() {
    return (
        <div id="partners" className="container py-5 ">
            <div className="row">
                <div className="col-12">
                    <p className={PartnersGridStyles.title}>
                        {StringConstants.ourText}
                        <strong>{StringConstants.partnerTitle}</strong>
                    </p>
                </div>
            </div>
            <div className={PartnersGridStyles.main}>
                {partnersData.map((partner) => (
                    <div className="dna-card" key={partner.id}>
                        <img src={partner.image} alt={partner.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

const partnersData = [
    {
        id: 0,
        title: 'USAID Logo',
        image: '/images/partners/usaid.svg'
    },
    {
        id: 1,
        title: 'The World Bank Logo',
        image: '/images/partners/worldBankLogo.svg'
    },
    {
        id: 2,
        title: 'Bill and Melinda Gates Foundation Logo',
        image: '/images/partners/billAndMelinda.svg'
    },
    {
        id: 3,
        title: 'Grand Challenges Canada Logo',
        image: '/images/partners/grandChallengesCanada.svg'
    },
    {
        id: 4,
        title: 'SDG Philanthropy Platform Logo',
        image: '/images/partners/sdgPhilanthropyPlatform.svg'
    },
    {
        id: 5,
        title: 'MasterCard Foundation Logo',
        image: '/images/partners/mcf.svg'
    },
    {
        id: 6,
        title: 'AstraZeneca Logo',
        image: '/images/partners/astraZeneca.svg'
    },
    {
        id: 7,
        title: 'Wellcome Trust Logo',
        image: '/images/partners/wellcomeTrust.svg'
    },
    {
        id: 8,
        title: 'Abt Associates Logo',
        image: '/images/partners/abtAssociates.svg'
    },
    {
        id: 9,
        title: 'Safaricom Logo',
        image: '/images/partners/safaricom.svg'
    },
    {
        id: 10,
        title: 'intelliSoft Logo',
        image: '/images/partners/intelliSoft.svg'
    },
    {
        id: 11,
        title: 'University of Nairobi Logo',
        image: '/images/partners/uon.svg'
    }
];
