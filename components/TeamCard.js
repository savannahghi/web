import Image from 'next/image';
import TeamStyles from '../styles/modules/Team.module.scss';

export default function TeamCard({ props }) {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card sghi-card">
                <div className={TeamStyles.banner}></div>
                <div className="p-3">
                    <Image
                        src={props.headshot}
                        alt="Team Member Photo"
                        className="rounded-circle"
                        width={200}
                        height={200}
                    />
                    <div className="card-body">
                        <p className="team-name">{props.name}</p>
                        <p className="team-title">{props.title}</p>
                        <div>
                            <a
                                className="btn btn-primary linkedIn btn-floating mx-2"
                                href="/"
                                role="button">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a
                                className="btn btn-primary google btn-floating mx-2"
                                href="/"
                                role="button">
                                <i className="fab fa-google"></i>
                            </a>
                            <a
                                className="btn btn-primary twitter btn-floating mx-2"
                                href="/"
                                role="button">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className="btn btn-secondary btn-rounded text-capitalize px-5">
                        Learn More
                    </div>
                </div>
            </div>
        </div>
    );
}
