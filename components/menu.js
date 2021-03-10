import NavBarStyles from '../styles/modules/navbar.module.scss';
import Link from 'next/link'

export default function Menu() {
    return (
            <ul className={NavBarStyles.menu}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Our Story</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Our Work</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Our DNA</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Products</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Insights</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Partners</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Teams</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>Contacts</a>
                    </Link>
                </li>
            </ul>
    );
}
