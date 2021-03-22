import Image from 'next/image';
import * as AssetConstants from './constants/app_assets';
import * as StringConstants from './constants/app_strings';
import WorkStyles from '../styles/modules/work.module.scss';

export default function Work() {
    return (
        <div id="our-work" className={WorkStyles.work}>
            <div className="container">
                <div className="row align-items-center set_gutters">
                    <div className="col-sm-12 col-md-6">
                        <p className={WorkStyles.work_title}>
                            {StringConstants.ourText}
                            <span className={WorkStyles.work_title_second}>
                                {StringConstants.workText}
                            </span>
                        </p>
                        <p className={WorkStyles.work_subtitle}>{StringConstants.ourWorkContent}</p>
                        <div className={WorkStyles.read_more_btn}>
                            <button className="btn btn-secondary btn-rounded text-capitalize px-5">
                                {StringConstants.readMoreBtnText}
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={WorkStyles.map_graphic}>
                            <Image
                                src={AssetConstants.mapComponentPlaceholder}
                                alt="Our story"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
