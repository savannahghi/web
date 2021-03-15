import Image from 'next/image';
import * as AssetConstants from './constants/app_assets';
import WhyNowStyles from '../styles/modules/why_now.module.scss';

export default function WhyNow() {
    return (
        <div className={WhyNowStyles.why}>
            <div className="row pt-3 set_gutters why_now_gutter">
                <div className="col-sm-12 col-md-6">
                    <div className={WhyNowStyles.video_component}>
                        <Image
                            src={AssetConstants.whyNowVideoThumbnail}
                            alt="Our story"
                            width={300}
                            height={300}
                        />
                    </div>
                    <p className={WhyNowStyles.salutation}>
                        <span className="font-weight-bold">John Muthee</span> <br></br> CEO,
                        Savannah Informatics
                    </p>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className={WhyNowStyles.why_content}>
                        <p className={WhyNowStyles.why_title}>
                            Why <span className={WhyNowStyles.why_title_second}>Now</span>
                        </p>
                        <p className={WhyNowStyles.why_sub}>
                            COVID19 has challenged the healthcare system in multiple ways which has
                            further impacted on access, affordability to care and is likely to
                            worsen health outcomes for decades to come…
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
