import Image from 'next/image';
import TeamStyles from '../styles/modules/Team.module.scss';

export default function TeamCard({ props }) {
    const name = props.name;
    const title = props.title;
    const headshot = props.headshot;

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
                    </div>
                </div>
            </div>
        </div>
    );
}
