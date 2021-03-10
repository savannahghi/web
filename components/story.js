import Image from 'next/image';
import StoryStles from '../styles/modules/story.module.scss';

export default function Story() {
    return (
        <div className="container">
            <div className={StoryStles.story}>
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6 h-100">
                        <div>
                            <Image src="/images/phd.svg" alt="Our story" width={250} height={250} />
                            <p>
                                <span className={StoryStles.name}>Riro Matiko</span> <br></br> SGHI
                                President
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 h-100">
                        <p className={StoryStles.story_title}>
                            <span className={StoryStles.story_title_first}>Our</span> Story
                        </p>
                        <p className={StoryStles.story_sub}>
                            Our belief is that by strengthening African healthcare systems so as to
                            make them more resilient to the triple transition, we will be able to
                            change and impact on the lives of our fellow Africans in the next
                            decade…
                        </p>
                    </div>
                </div>
                <div className={StoryStles.mission}>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-7">
                            <p className={StoryStles.mission_title}>
                                We’re on a mission to make <br></br>
                                <span className={StoryStles.mission_1}>healthcare accessible</span>
                            </p>
                            <p>
                                Our vision is to improve access to quality and affordable healthcare
                                to millions of African’s through the use of technology so as to
                                strengthen healthcare systems which are undergoing the
                                <span className={StoryStles.story_subtitle}>
                                    {' '}
                                    Triple Transition
                                </span>
                            </p>
                            <div className={StoryStles.story_btn}>
                                <button className="btn btn-secondary btn-rounded text-capitalize">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5">
                            <Image
                                src="/images/africa.svg"
                                alt="Our story"
                                width={700}
                                height={700}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
