import HeroStyles from '../styles/modules/hero.module.scss';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className={HeroStyles.hero}>
            <div className={HeroStyles.hero_text}>
                <h1 className={HeroStyles.hero_title}>We’re on a mission</h1>
                <p className={HeroStyles.hero_subtitle}>
                    Access to quality affordable care remains out <br></br> of reach for millions of
                    Africans
                </p>
                <button className={HeroStyles.hero_cta}>Learn More</button>
                <button className={HeroStyles.hero_scroll_btn}>
                    <Image src="/icons/scroll_icon.svg" alt="Scroll Icon" width={50} height={50} />
                </button>
            </div>
        </div>
    );
}
