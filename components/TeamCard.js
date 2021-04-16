import Image from 'next/image';
import FadeInAnimation from './Animation';
import useIsInViewport from 'use-is-in-viewport';
import TeamStyles from '../styles/modules/Team.module.scss';
import Link from 'next/link';

export default function TeamCard({ props }) {
    const [isInViewport, targetRef] = useIsInViewport();

    return (
        <div ref={targetRef} className="col-lg-4 col-md-4 col-sm-12">
            {isInViewport ? (
                <FadeInAnimation wrapperElement="div" direction="left" delay={props.delay}>
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
                            <Link href="/">
                                <a className="my-3 btn btn-secondary btn-rounded text-capitalize px-5">
                                    Learn More
                                </a>
                            </Link>
                        </div>
                    </div>
                </FadeInAnimation>
            ) : (
                <div className="spacer card sghi-card">
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
                        <Link href="/">
                            <a className="my-3 btn btn-secondary btn-rounded text-capitalize px-5">
                                Learn More
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
