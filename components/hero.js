import HeroStyles from '../styles/modules/hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import * as AssetConstants from './constants/app_assets';

export default function Hero() {
    return (
        <div className={HeroStyles.hero}>
            <div className={HeroStyles.hero_text}>
                <h1 className="hero_title">We’re on a mission</h1>
                <p className="hero_subtitle">
                    Access to quality affordable care remains out of reach for millions of Africans
                </p>
                <button className="hero_cta">Learn More</button>
                <button className={HeroStyles.hero_scroll_btn}>
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
