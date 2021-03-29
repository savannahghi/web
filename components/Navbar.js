import Image from 'next/image';
import Link from 'next/link';
import * as AssetConstants from './constants/app_assets';
import * as StringConstants from './constants/app_strings';
import NavBarStyles from '../styles/modules/Navbar.module.scss';

export default function NavBar({ props }) {
    return (
        <nav id="navbar" className="navbar sticky-top navbar-expand-lg navbar-light bg-light w-100">
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
                    className="navbar-toggler"
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
                            <a
                                className={props.title == 'Home' ? 'nav-link active' : 'nav-link'}
                                aria-current="page"
                                href="/">
                                {StringConstants.homeNav}
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href={props.title == 'Home' ? '#our-story' : '/#our-story'}>
                                    <a>{StringConstants.storyNav}</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href={props.title == 'Home' ? '#our-work' : '/#our-work'}>
                                    <a>{StringConstants.workNav}</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href={props.title == 'Home' ? '#dna' : '/#dna'}>
                                    <a>{StringConstants.dnaNav}</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <Link href={props.title == 'Home' ? '#partners' : '/#partners'}>
                                    <a>{StringConstants.partnersNav}</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className={
                                    props.title == 'Our Products' ? 'nav-link active' : 'nav-link'
                                }>
                                <Link href="/products">
                                    <a>{StringConstants.productsNav}</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className={
                                    props.title == 'Our Insights' ? 'nav-link active' : 'nav-link'
                                }>
                                <Link href="/insights">
                                    <a>{StringConstants.insightsNav}</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className={
                                    props.title == 'Our Team' ? 'nav-link active' : 'nav-link'
                                }>
                                <Link href="/team">
                                    <a>{StringConstants.teamNav}</a>
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className={
                                    props.title == 'Contact Us' ? 'nav-link active' : 'nav-link'
                                }>
                                <Link href="/contact">
                                    <a>{StringConstants.contactsNav}</a>
                                </Link>
                            </div>
                        </li>
                        <div className={NavBarStyles.search}>
                            <form className="d-flex input-group search-bar-item ">
                                <input
                                    type="search"
                                    className="form-control round"
                                    placeholder="Search"
                                    aria-label={StringConstants.searchPlaceHolder}></input>
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
