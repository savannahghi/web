import Image from 'next/image';
import Link from 'next/link';
import FooterStyles from '../styles/modules/footer.module.scss';

export default function Footer() {
    return (
        <div className={FooterStyles.footer}>
            <footer className="text-white text-center text-lg-start">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <Image
                                src="/images/SGHI_White.svg"
                                alt="Brand Logo"
                                width={200}
                                height={100}
                            />
                            <p className={FooterStyles.footer_title}>About the SGHI</p>

                            <p>
                                SGHI is a development ecosystem builder and optimizer that supports
                                philanthropy and community effort to leverage investment and deliver
                                lasting impact
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 pt-3">
                            <p className={FooterStyles.footer_title}>Additional links</p>

                            <ul className={FooterStyles.footer_links}>
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

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0 pt-3">
                            <p className={FooterStyles.footer_title}>Latest tweets</p>

                            <ul className={FooterStyles.footer_links}>
                                <li>
                                    <div className="row">
                                        <div className="col-4"></div>
                                        <div className="col-8">
                                            <Link
                                                className={FooterStyles.footer_item}
                                                aria-current="page"
                                                href="/">
                                                <a>Services</a>
                                            </Link>
                                        </div>
                                    </div>
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
                </div>

                <div className="text-center p-3">
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">
                        MDBootstrap.com
                    </a>
                </div>
            </footer>
        </div>
    );
}
