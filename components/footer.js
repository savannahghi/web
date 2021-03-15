import Image from 'next/image';
import Link from 'next/link';
import * as AssetConstants from './constants/app_assets';
import FooterStyles from '../styles/modules/footer.module.scss';

export default function Footer() {
    return (
        <div className={FooterStyles.footer}>
            <footer className="text-white text-center text-lg-start">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 mb-4 mb-md-0 p-3">
                            <div className={FooterStyles.footer_main}>
                                <div className={FooterStyles.footer_brand}>
                                    <Image
                                        src={AssetConstants.brandLogoWhite}
                                        alt="Brand Logo"
                                        width={200}
                                        height={100}
                                    />
                                </div>
                                <p className={FooterStyles.footer_title}>About the SGHI</p>

                                <p className={FooterStyles.footer_main_content}>
                                    SGHI is a development ecosystem builder and optimizer that
                                    supports philanthropy and community effort to leverage
                                    investment and deliver lasting impact
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0 pt-5 p-3">
                            <div className={FooterStyles.footer_additional}>
                                <p className={FooterStyles.footer_title}>Additional links</p>

                                <ul className={FooterStyles.footer_additional_links}>
                                    <li>
                                        <Link
                                            className={FooterStyles.footer_item}
                                            aria-current="page"
                                            href="/">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={FooterStyles.footer_item}
                                            aria-current="page"
                                            href="/">
                                            <a>Contact us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={FooterStyles.footer_item}
                                            aria-current="page"
                                            href="/">
                                            <a>Why we exist</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={FooterStyles.footer_item}
                                            aria-current="page"
                                            href="/">
                                            <a>SGHI MISSION AND VISION</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-md-0 pt-5 ml-5">
                            <div className={FooterStyles.footer_tweets}>
                                <p className={FooterStyles.footer_title}>Latest tweets</p>

                                <ul className={FooterStyles.footer_links}>
                                    <li>
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fab fa-twitter"></i>
                                            </div>
                                            <div className="col-10">
                                                <Link aria-current="page" href="/">
                                                    <a className={FooterStyles.tweet_item}>
                                                        RT @wpklik: Here is our selection of 20
                                                        #Worldrevolutionaries @edgethemes
                                                        @selectthemes @mi…
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fab fa-twitter"></i>
                                            </div>
                                            <div className="col-10">
                                                <Link aria-current="page" href="/">
                                                    <a className={FooterStyles.tweet_item}>
                                                        Meet Curly! https://t.co/ Hiy1pJmnKPNow
                                                        trending on twitter, this theme is made for
                                                        #philanthropists... https://t.co/ XNDaTAxXkM
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                            <p className={FooterStyles.footer_title}>Connect with us</p>
                            <div className={FooterStyles.social_icons}>
                                <div className="row">
                                    <div className="col-1 mx-2">
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/company/savannahglobalhealth"
                                            rel="noopener noreferrer">
                                            <i className="fab fa-linkedin-in fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="col-1 mx-2">
                                        <a
                                            target="_blank"
                                            href="https://twitter.com/SGHI76989573"
                                            rel="noopener noreferrer">
                                            <i className="fab fa-twitter fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="col-1 mx-2">
                                        <a
                                            target="_blank"
                                            href="https://twitter.com/SGHI76989573"
                                            rel="noopener noreferrer">
                                            <i className="fab fa-facebook-f fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
