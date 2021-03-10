import Image from 'next/image';
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
                <div className="row align-items-center">
                    <div className="col-3">
                        <Image src="/images/USAID.svg" alt="Brand Logo" width={140} height={140} />
                    </div>
                    <div className="col-3">
                        <Image src="/images/pa.svg" alt="Brand Logo" width={120} height={120} />
                    </div>
                    <div className="col-3">
                        <Image
                            src="/images/jhpiego.svg"
                            alt="Brand Logo"
                            width={120}
                            height={120}
                        />
                    </div>
                    <div className="col-3">
                        <Image src="/images/r4d.svg" alt="Brand Logo" width={130} height={130} />
                    </div>
                    <div className="col-3">
                        <Image src="/images/path.svg" alt="Brand Logo" width={90} height={90} />
                    </div>
                    <div className="col-3">
                        <Image src="/images/CHAI.svg" alt="Brand Logo" width={90} height={90} />
                    </div>
                    <div className="col-3">
                        <Image
                            src="/images/AstraZeneca.svg"
                            alt="Brand Logo"
                            width={140}
                            height={140}
                        />
                    </div>
                    <div className="col-3">
                        <Image
                            src="/images/dalberg.svg"
                            alt="Brand Logo"
                            width={120}
                            height={120}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
