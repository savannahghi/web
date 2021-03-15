import Image from 'next/image';
import * as AssetConstants from './constants/app_assets';
import WorkStyles from '../styles/modules/work.module.scss';

export default function Work() {
    return (
        <div className={WorkStyles.work}>
            <div className="container">
                <div className="row align-items-center set_gutters">
                    <div className="col-sm-12 col-md-6">
                        <p className={WorkStyles.work_title}>
                            Our <span className={WorkStyles.work_title_second}>Work</span>
                        </p>
                        <p className={WorkStyles.work_subtitle}>
                            Regions where SGHI has experts and have done relevant work
                        </p>
                        <div className={WorkStyles.read_more_btn}>
                            <button className="btn btn-secondary btn-rounded text-capitalize px-5">
                                Read More
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
