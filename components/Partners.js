import Image from 'next/image';
import * as AssetConstants from './constants/app_assets';
import * as StringConstants from './constants/app_strings';
import PartnerStyles from '../styles/modules/Partners.module.scss';

export default function Partners() {
    return (
        <div id="partners" className={PartnerStyles.partners}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className={PartnerStyles.partners_title}>
                            {StringConstants.ourText}
                            <span className={PartnerStyles.partners_title_second}>
                                {StringConstants.partnerTitle}
                            </span>
                        </p>
                    </div>
                </div>
                <div className={PartnerStyles.all_partner_items}>
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src={AssetConstants.usaidLogo}
                                    alt="USAID Logo"
                                    width={140}
                                    height={140}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src="/images/world_bank_group.svg"
                                    alt="World Bank Group Logo"
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src="/images/bandm.png"
                                    alt="Bill And Melinda Gates Foundation Logo"
                                    width={230}
                                    height={200}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src="/images/brand_challenges_canada.svg"
                                    alt="Brand Challenges Canada Logo"
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src="/images/sdg_philanthropy_platform.svg"
                                    alt="SDG Philanthropy Platform Logo"
                                    width={150}
                                    height={150}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src="/images/mcf.jpeg"
                                    alt="Master Card Foundation Logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src={AssetConstants.astraZenecaLogo}
                                    alt="AstraZeneca Logo"
                                    width={140}
                                    height={140}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src="/images/well.png"
                                    alt="Wellcome Trust Logo"
                                    width={90}
                                    height={90}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
