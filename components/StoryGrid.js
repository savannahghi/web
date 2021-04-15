// import Image from 'next/image';
import StoryGridStyles from '../styles/modules/StoryGrid.module.scss';

export default function StoryGrid({ props }) {
    return (
        <div className="container">
            <div className={StoryGridStyles.main}>
                <div>
                    <div className={StoryGridStyles.image}>
                        <img
                            className={StoryGridStyles.story_image}
                            src={props.image}
                            alt={props.image_alt}
                        />
                    </div>
                    <div className={StoryGridStyles.name}>
                        <p>
                            <strong>{props.name}</strong>, {props.position}
                        </p>
                    </div>
                </div>
                <div>
                    <div className={StoryGridStyles.title}>
                        <p>
                            <strong>{props.title_one}</strong> {props.title_two}
                        </p>
                    </div>
                    <div className={StoryGridStyles.content}>
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
