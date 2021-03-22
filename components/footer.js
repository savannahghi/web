import Image from 'next/image';
import Link from 'next/link';
import * as AssetConstants from './constants/app_assets';
import * as StringConstants from './constants/app_strings';
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
                                <p className={FooterStyles.footer_title}>
                                    {StringConstants.footerTitle}
                                </p>

                                <p className={FooterStyles.footer_main_content}>
                                    {StringConstants.footerContent}
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0 pt-5 p-3">
                            <div className={FooterStyles.footer_additional}>
                                <p className={FooterStyles.footer_title}>
                                    {StringConstants.additionalLinksTitle}
                                </p>

                                <ul className={FooterStyles.footer_additional_links}>
                                    <li>
                                        <Link
                                            className={FooterStyles.footer_item}
                                            aria-current="page"
                                            href="/">
                                            <a>{StringConstants.services}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={FooterStyles.footer_item}
                                            aria-current="page"
                                            href="/">
                                            <a>{StringConstants.contactUs}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={FooterStyles.footer_item}
                                            aria-current="page"
                                            href="/">
                                            <a>{StringConstants.whyWeExist}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={FooterStyles.footer_item}
                                            aria-current="page"
                                            href="/">
                                            <a>{StringConstants.missionAndVision}</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-md-0 pt-5 ml-5">
                            <div className={FooterStyles.footer_tweets}>
                                <p className={FooterStyles.footer_title}>
                                    {StringConstants.latestTweets}
                                </p>

                                <ul className={FooterStyles.footer_links}>
                                    <li>
                                        <div className="row">
                                            <div className="col-2">
                                                <i className="fab fa-twitter"></i>
                                            </div>
                                            <div className="col-10">
                                                <Link aria-current="page" href="/">
                                                    <a className={FooterStyles.tweet_item}>
                                                        {StringConstants.tweetPlaceholder}
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
                                                        {StringConstants.tweetPlaceholder}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                            <p className={FooterStyles.footer_title}>
                                {StringConstants.conectWithUs}
                            </p>
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
