import TeamStyles from '../../styles/modules/Team.module.scss';
import Image from 'next/image';

// import { useRouter } from 'next/router';

const Post = () => {
    // const router = useRouter();
    // const { name, title, bio, headshot } = router.query;

    return (
        <div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="card team_modal_card">
                    <div className={TeamStyles.banner}></div>
                    <div className="m-2"></div>
                    <Image
                        src="/images/team/team_member.svg"
                        alt="Team Member Photo"
                        className="rounded-circle"
                        width={200}
                        height={200}
                    />
                    <div className="mt-3 card-body text-center">
                        <p>
                            <strong>Dr. Abdi Adan</strong>
                        </p>
                        <p>SGHI President</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ad,
                            ipsam velit perferendis, similique alias facilis iure reprehenderit eos
                            commodi consequuntur dolor numquam. Aliquam voluptas debitis accusamus
                            aspernatur ipsam nulla cumque quidem delectus reprehenderit cupiditate
                            quibusdam animi dolores repellendus quos reiciendis incidunt error quis
                            laborum nesciunt alias, consectetur tenetur. Laboriosam?
                        </p>
                    </div>
                    <div className="card-footer text-center">
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
                    <div className="mb-5 mt-3 btn btn-secondary btn-rounded text-capitalize px-5">
                        Close
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
