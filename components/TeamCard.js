import Image from 'next/image';

export default function TeamCard({ props }) {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card sghi-card p-3">
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
                </div>
            </div>
        </div>
    );
}
