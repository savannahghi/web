import Image from 'next/image';
import FadeInAnimation from './Animation';
import useIsInViewport from 'use-is-in-viewport';
import * as StringConstants from './constants/app_strings';
import DNAStyles from '../styles/modules/OurDna.module.scss';

export default function OurDna() {
    const [isInViewport, targetRef] = useIsInViewport();

    return (
        <div ref={targetRef} id="dna" className={DNAStyles.main}>
            <div className="container">
                {isInViewport ? (
                    <FadeInAnimation wrapperElement="div" direction="down" delay={0.5}>
                        <div className="row">
                            <div className="col-12 text-center">
                                <p className={DNAStyles.dna_title}>
                                    {StringConstants.ourText}
                                    <span className={DNAStyles.dna_title_first}>
                                        {StringConstants.dnaText}
                                    </span>
                                    {StringConstants.ourDNATitle}
                                </p>
                            </div>
                        </div>
                    </FadeInAnimation>
                ) : null}
                <div className={DNAStyles.dna_pillars}>
                    <div className="row">
                        {dnaData.map((dna) => (
                            <div key={dna.id} className="col-sm-12 col-md-6 py-3">
                                {isInViewport ? (
                                    <FadeInAnimation
                                        wrapperElement="div"
                                        direction="left"
                                        delay={dna.delay}>
                                        <div>
                                            <div className={DNAStyles.dna_item}>
                                                <div className="p-3 align-items-center dna-card">
                                                    <div className={DNAStyles.illustration}>
                                                        <Image
                                                            src={dna.image}
                                                            alt="Our story"
                                                            width={150}
                                                            height={150}
                                                        />
                                                    </div>
                                                    <p className={DNAStyles.dna_content}>
                                                        {dna.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </FadeInAnimation>
                                ) : (
                                    <div className="spacer">
                                        <div className={DNAStyles.dna_item}>
                                            <div className="p-3 align-items-center dna-card">
                                                <div className={DNAStyles.illustration}>
                                                    <Image
                                                        src={dna.image}
                                                        alt="Our story"
                                                        width={150}
                                                        height={150}
                                                    />
                                                </div>
                                                <p className={DNAStyles.dna_content}>
                                                    {dna.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const dnaData = [
    {
        id: 0,
        image: '/images/health_professional_team_cuate.svg',
        delay: '0.4',
        direction: 'right',
        content:
            'We strengthen healthcare systems to make them more resilient, agile and responsive to the Triple Transition'
    },
    {
        id: 1,
        image: '/images/current_location_rafiki.svg',
        delay: '0.8',
        direction: 'left',
        content:
            'We are local. We design solutions based on our understanding of  healthcare delivery in Africa and emerging markets '
    },
    {
        id: 2,
        image: '/images/company_cuate.svg',
        delay: '1.2',
        direction: 'right',
        content:
            'We are entrepreneurial. We come from a startup environment and take a sustainable, innovative and agile growth mindset to the projects we undertake'
    },
    {
        id: 3,
        image: '/images/doctor.svg',
        delay: '1.6',
        direction: 'left',
        content:
            'We deliver more health for the money. We are driven by delivering results and impact. '
    }
];
