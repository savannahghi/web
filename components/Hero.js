import * as StringConstants from './constants/app_strings';
import HeroStyles from '../styles/modules/Hero.module.scss';

export default function Hero() {
    return (
        <div id="hero" className={HeroStyles.hero}>
            <div className={HeroStyles.hero_text}>
                <h1 className="hero_title">{StringConstants.heroTitle}</h1>
                <p className="hero_subtitle">{StringConstants.heroSubTitle}</p>
                <button aria-label="Hero Call to action Button" className="hero_cta">
                    {StringConstants.learnMoreBtnText}
                </button>
            </div>
        </div>
    );
}
