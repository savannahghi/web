import FadeInAnimation from './Animation';
import useIsInViewport from 'use-is-in-viewport';
import StoryGridStyles from '../styles/modules/StoryGrid.module.scss';

export default function StoryGrid({ props }) {
    const [isInViewport, targetRef] = useIsInViewport();

    return (
        <div ref={targetRef} className="container">
            <div className={StoryGridStyles.main}>
                <div>
                    {isInViewport ? (
                        <FadeInAnimation wrapperElement="div" direction="left" delay={0.5}>
                            <div>
                                <div className={StoryGridStyles.image}>
                                    <img
                                        className={StoryGridStyles.story_image}
                                        src={props.image}
                                        alt={props.image_alt}
                                    />
                                </div>
                                <div className={StoryGridStyles.name}>
                                    <p className="text-center">
                                        <strong className="signature">{props.name}</strong>{' '}
                                        <br></br> {props.position}
                                    </p>
                                </div>
                            </div>
                        </FadeInAnimation>
                    ) : (
                        <div className="spacer">
                            <div className={StoryGridStyles.image}>
                                <img
                                    className={StoryGridStyles.story_image}
                                    src={props.image}
                                    alt={props.image_alt}
                                />
                            </div>
                            <div className={StoryGridStyles.name}>
                                <p>
                                    <strong className={StoryGridStyles.signature}>
                                        {props.name}
                                    </strong>
                                    , {props.position}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {isInViewport ? (
                        <FadeInAnimation wrapperElement="div" direction="right" delay={1}>
                            <div className={StoryGridStyles.title}>
                                <p className="text-left">
                                    <strong>{props.title_one}</strong> {props.title_two}
                                </p>
                            </div>
                            <div className={StoryGridStyles.content}>
                                <p>{props.content}</p>
                            </div>
                        </FadeInAnimation>
                    ) : (
                        <div className="spacer">
                            <div className={StoryGridStyles.title}>
                                <p>
                                    <strong>{props.title_one}</strong> {props.title_two}
                                </p>
                            </div>
                            <div className={StoryGridStyles.content}>
                                <p>{props.content}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
