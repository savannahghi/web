import NavBarStyles from '../styles/modules/navbar.module.scss';
import Image from 'next/image';

export default function NavBar() {
    return (
        <div className={NavBarStyles.nav}>
            <div className={NavBarStyles.brand}>
                <Image
                    src="/images/SGHI_logo.svg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                />
            </div>

            <div>
                <ul className={NavBarStyles.active}>
                    <li>Home</li>
                </ul>
                <ul>
                    <li>Our Story</li>
                </ul>
                <ul>
                    <li>Our Work</li>
                </ul>
                <ul>
                    <li>Our DNA</li>
                </ul>
                <ul>
                    <li>Products</li>
                </ul>
                <ul>
                    <li>Insights</li>
                </ul>
                <ul>
                    <li>Partners</li>
                </ul>
                <ul>
                    <li>Teams</li>
                </ul>
                <ul>
                    <li>Contacts</li>
                </ul>
                <ul>
                    <li>Search</li>
                </ul>
            </div>
        </div>
    );
}
