import Image from 'next/image';
import Link from 'next/link';
import * as AssetConstants from './constants/app_assets';
import * as StringConstants from './constants/app_strings';
import HeroStyles from '../styles/modules/Hero.module.scss';

export default function Hero() {
    return (
        <div id="hero" className={HeroStyles.hero}>
            <div className={HeroStyles.hero_text}>
                <h1 className="hero_title">{StringConstants.heroTitle}</h1>
                <p className="hero_subtitle">{StringConstants.heroSubTitle}</p>
                <button aria-label="Learn More Button" className="hero_cta">
                    {StringConstants.learnMoreBtnText}
                </button>
                <button aria-label="Search Button" className={HeroStyles.hero_scroll_btn}>
                    <Link href="#our-story">
                        <Image
                            src={AssetConstants.scrollBtn}
                            alt="Scroll Icon"
                            width={40}
                            height={40}
                        />
                    </Link>
                </button>
            </div>
        </div>
    );
}
