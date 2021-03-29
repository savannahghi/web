import Image from 'next/image';
import * as AssetConstants from './constants/app_assets';
import * as StringConstants from './constants/app_strings';

export default function TeamCard() {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card sghi-card p-3">
                <Image
                    src={AssetConstants.testTeamMemberAvatar}
                    alt="Team Member Photo"
                    className="rounded-circle"
                    width={150}
                    height={150}
                />
                <div className="card-body">
                    <p className="team-name">{StringConstants.sghiPresidentName}</p>
                    <p className="team-title">{StringConstants.sghiPresident}</p>
                </div>
            </div>
        </div>
    );
}
