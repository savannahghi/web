import Image from 'next/image';
import * as AssetConstants from './constants/app_assets';
import * as StringConstants from './constants/app_strings';
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
                        <span className="font-weight-bold">{StringConstants.silCEOName}</span>{' '}
                        <br></br>
                        {StringConstants.silCEOTitle}
                    </p>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className={WhyNowStyles.why_content}>
                        <p className={WhyNowStyles.why_title}>
                            {StringConstants.whyText}
                            <span className={WhyNowStyles.why_title_second}>
                                {StringConstants.nowText}
                            </span>
                        </p>
                        <p className={WhyNowStyles.why_sub}>{StringConstants.whyNowContent}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
