import NavBarStyles from '../styles/modules/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import * as AssetConstants from './constants/app_assets';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <Image
                        src={AssetConstants.navBarBrand}
                        alt="Brand Logo"
                        width={150}
                        height={80}
                    />
                </a>

                <button
                    className="navbar-toggler menu-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                <div
                    className="collapse navbar-collapse text-center menu-links"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href="/">
                                    <a>Our Story</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href="/">
                                    <a>Our Work</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href="/">
                                    <a>Our DNA</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href="/">
                                    <a>Products</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href="/">
                                    <a>Insights</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href="/">
                                    <a>Partners</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href="/">
                                    <a>Teams</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href="/">
                                    <a>Contacts</a>
                                </Link>
                            </div>
                        </li>
                        <div className={NavBarStyles.search}>
                            <form className="d-flex input-group search-bar">
                                <input
                                    type="search"
                                    className="form-control round"
                                    placeholder="Search"
                                    aria-label="Search"></input>
                                <button
                                    className="btn btn-sm btn-secondary round"
                                    type="button"
                                    data-mdb-ripple-color="dark">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
