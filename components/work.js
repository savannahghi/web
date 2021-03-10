import Image from 'next/image';
import WorkStyles from '../styles/modules/work.module.scss';

export default function Work() {
    return (
        <div className={WorkStyles.work}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <p className={WorkStyles.work_title}>
                            Our <span className={WorkStyles.work_title_second}>Work</span>
                        </p>
                        <p className={WorkStyles.work_subtitle}>
                            Regions where SGHI has experts and have done relevant work
                        </p>
                        <button className="btn btn-secondary btn-rounded text-capitalize">
                            Read More
                        </button>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Image
                            src="/images/hard_map.png"
                            alt="Our story"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
