import Image from 'next/image';
import * as AssetConstants from './constants/app_assets';
import PartnerStyles from '../styles/modules/partners.module.scss';

export default function Partners() {
    return (
        <div className={PartnerStyles.partners}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className={PartnerStyles.partners_title}>
                            Our
                            <span className={PartnerStyles.partners_title_second}> Partners</span>
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
                                    src={AssetConstants.pharmAccessLogo}
                                    alt="Pharm Access Logo"
                                    width={120}
                                    height={120}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src={AssetConstants.jhpiegoLogo}
                                    alt="jhpiego Logo"
                                    width={120}
                                    height={120}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src={AssetConstants.resultsForDevLogo}
                                    alt="Results for development Logo"
                                    width={130}
                                    height={130}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src={AssetConstants.pathLogo}
                                    alt="path Logo"
                                    width={90}
                                    height={90}
                                />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className={PartnerStyles.partner_item}>
                                <Image
                                    src={AssetConstants.chaiLogo}
                                    alt="CHAI Logo"
                                    width={90}
                                    height={90}
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
                                    src={AssetConstants.dalbergLogo}
                                    alt="Dalberg Logo"
                                    width={120}
                                    height={120}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
