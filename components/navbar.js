import NavBarStyles from '../styles/modules/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Search from './search';

export default function NavBar() {
    return (
        <div className={NavBarStyles.sghi_nav}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
                <div className="container">
                    <div className={(NavBarStyles.logo, 'navbar-brand')}>
                        <Image
                            src="/images/SGHI_logo.svg"
                            alt="Brand Logo"
                            width={200}
                            height={200}
                        />
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className={'d-flex collapse navbar-collapse'} id="navbarSupportedContent">
                        <ul className={(NavBarStyles.item, 'navbar-nav me-auto mb-2 mb-lg-0')}>
                            <li className="nav-item">
                                <Link
                                    className={(NavBarStyles.active, 'nav-link')}
                                    aria-current="page"
                                    href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a>Our Story</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a>Our Work</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a>Our DNA</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/products">
                                    <a>Products</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/insights">
                                    <a>Insights</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a>Partners</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/team">
                                    <a>Teams</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">
                                    <a>Contacts</a>
                                </Link>
                            </li>
                        </ul>

                        <Search />
                    </div>
                </div>
            </nav>
        </div>
    );
}
