import StoryStles from '../styles/modules/Story.module.scss';

export default function Story({ props }) {
    return (
        <div id="our-story" className="container">
            <div className={StoryStles.story}>
                <div className="row align-items-center set_gutters">
                    <div className="col-sm-12 col-md-6 h-100">
                        <iframe
                            className={StoryStles.video_component}
                            src={props.video}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"></iframe>
                        <p className={StoryStles.salutation}>
                            <span className={StoryStles.name}>{props.name}</span>
                            <br></br> {props.position}
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-6 h-100">
                        <p className={StoryStles.story_title}>
                            <span className={StoryStles.story_title_first}>
                                {props.first_title}
                            </span>
                            {props.second_title}
                        </p>
                        <p className={StoryStles.story_sub}>{props.subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
