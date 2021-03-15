import Image from 'next/image';
import * as AssetConstants from './constants/app_assets';
import DNAStyles from '../styles/modules/OurDna.module.scss';

export default function OurDna() {
    return (
        <div className={DNAStyles.main}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className={DNAStyles.dna_title}>
                            Our <span className={DNAStyles.dna_title_first}>DNA</span> is centered
                            on four key pillars
                        </p>
                    </div>
                </div>
                <div className={DNAStyles.dna_pillars}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 py-3">
                            <div className={DNAStyles.dna_item}>
                                <div className="p-3 align-items-center card">
                                    <div className={DNAStyles.illustration}>
                                        <Image
                                            src={AssetConstants.healthProfessionalTeamIllustration}
                                            alt="Our story"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className={DNAStyles.dna_content}>
                                        We strengthen healthcare systems to make them more
                                        resilient, agile and responsive to the{' '}
                                        <span className={DNAStyles.dna_content_bold}>
                                            triple transition
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 py-3">
                            <div className={DNAStyles.dna_item}>
                                <div className="p-3 align-items-center card">
                                    <div className={DNAStyles.illustration}>
                                        <Image
                                            src={AssetConstants.currentLocationIllustration}
                                            alt="Our story"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className={DNAStyles.dna_content}>
                                        We are local and understand healthcare delivery in Africa
                                        and emerging markets and design localized solutions and
                                        approaches
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 py-3">
                            <div className={DNAStyles.dna_item}>
                                <div className="p-3 align-items-center card">
                                    <div className={DNAStyles.illustration}>
                                        <Image
                                            src={AssetConstants.companyIllustration}
                                            alt="Our story"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className={DNAStyles.dna_content}>
                                        We are entrepreneurial. We come from a startup environment
                                        and take a sustainable, innovative and agile growth mindset
                                        to the projects we undertake
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 py-3">
                            <div className={DNAStyles.dna_item}>
                                <div className="p-3 align-items-center card">
                                    <div className={DNAStyles.illustration}>
                                        <Image
                                            src={AssetConstants.doctorIllustration}
                                            alt="Our story"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className={DNAStyles.dna_content}>
                                        We deliver more health for the money. We are driven by
                                        delivering results and impact that help strengthen
                                        healthcare systems in emerging markets
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
