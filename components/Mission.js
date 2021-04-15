import Image from 'next/image';
import Link from 'next/link';
import FadeInAnimation from './Animation';
import useIsInViewport from 'use-is-in-viewport';
import * as StringConstants from './constants/app_strings';
import * as AssetConstants from '../components/constants/app_assets';
import MissionStyles from '../styles/modules/Mission.module.scss';

export default function Mission() {
    const [isInViewport, targetRef] = useIsInViewport();

    return (
        <div ref={targetRef}>
            <div className={MissionStyles.mission}>
                <div className="row align-items-center set_gutters">
                    <div className="col-sm-12 col-md-7">
                        {isInViewport ? (
                            <FadeInAnimation wrapperElement="div" direction="left" delay={0.5}>
                                <p className={MissionStyles.mission_title}>
                                    {StringConstants.missionTitle}
                                    <br></br>
                                    <span className={MissionStyles.mission_1}>
                                        {StringConstants.missionHealthCareTitle}
                                    </span>
                                </p>
                                <p className={MissionStyles.mission_content}>
                                    {StringConstants.missionContent}
                                    <span className={MissionStyles.story_subtitle}>
                                        {StringConstants.tripleTransition}
                                    </span>
                                </p>
                                <div className={MissionStyles.story_btn}>
                                    <Link href="/posts/mission">
                                        <div className="btn btn-secondary btn-rounded text-capitalize px-5">
                                            {StringConstants.readMoreBtnText}
                                        </div>
                                    </Link>
                                </div>
                            </FadeInAnimation>
                        ) : null}
                    </div>

                    <div className="col-sm-12 col-md-5">
                        {isInViewport ? (
                            <FadeInAnimation wrapperElement="div" direction="right" delay={0.5}>
                                <div className={MissionStyles.africa_graphic}>
                                    <Image
                                        src={AssetConstants.africaGraphic}
                                        alt="Our story"
                                        width={700}
                                        height={700}
                                    />
                                </div>
                            </FadeInAnimation>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
