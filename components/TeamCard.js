import Image from 'next/image';
import TeamStyles from '../styles/modules/Team.module.scss';
import TeamModal from '../components/TeamModal';

export default function TeamCard({ props }) {
    const name = props.name;
    const title = props.title;
    const headshot = props.headshot;
    const bio = props.bio;

    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card sghi-card">
                <div className={TeamStyles.banner}></div>
                <div className="p-3">
                    <Image
                        src={headshot}
                        alt="Team Member Headshot"
                        className="rounded-circle"
                        width={200}
                        height={200}
                    />
                    <div className="card-body">
                        <p className="team-name">{name}</p>
                        <p className="team-title">{title}</p>
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
                    <button
                        type="button"
                        data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal"
                        className="my-3 btn btn-secondary btn-rounded text-capitalize px-5">
                        Learn More
                    </button>
                    <TeamModal name={name} title={title} headshot={headshot} bio={bio} />
                </div>
            </div>
        </div>
    );
}
