import Image from 'next/image';
import * as AssetConstants from '../components/constants/app_assets';
import * as StringConstants from '../components/constants/app_strings';
import StoryStles from '../styles/modules/story.module.scss';

export default function Story() {
    return (
        <div id="our-story" className="container">
            <div className={StoryStles.story}>
                <div className="row align-items-center set_gutters">
                    <div className="col-sm-12 col-md-6 h-100">
                        <div className={StoryStles.video_component}>
                            <Image
                                src={AssetConstants.ourStoryVideoThumbnail}
                                alt="Our story"
                                width={250}
                                height={250}
                            />
                            <p className={StoryStles.salutation}>
                                <span className={StoryStles.name}>
                                    {StringConstants.sghiPresidentName}
                                </span>
                                <br></br> {StringConstants.sghiPresident}
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 h-100">
                        <p className={StoryStles.story_title}>
                            <span className={StoryStles.story_title_first}>
                                {StringConstants.ourText}
                            </span>{' '}
                            {StringConstants.storyText}
                        </p>
                        <p className={StoryStles.story_sub}>{StringConstants.storyContents}</p>
                    </div>
                </div>
                <div className={StoryStles.mission}>
                    <div className="row align-items-center set_gutters">
                        <div className="col-sm-12 col-md-7">
                            <p className={StoryStles.mission_title}>
                                {StringConstants.missionTitle}
                                <br></br>
                                <span className={StoryStles.mission_1}>
                                    {StringConstants.missionHealthCareTitle}
                                </span>
                            </p>
                            <p className={StoryStles.mission_content}>
                                {StringConstants.missionContent}
                                <span className={StoryStles.story_subtitle}>
                                    {StringConstants.tripleTransition}
                                </span>
                            </p>
                            <div className={StoryStles.story_btn}>
                                <button className="btn btn-secondary btn-rounded text-capitalize px-5">
                                    {StringConstants.readMoreBtnText}
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5">
                            <div className={StoryStles.africa_graphic}>
                                <Image
                                    src={AssetConstants.africaGraphic}
                                    alt="Our story"
                                    width={700}
                                    height={700}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
