import NavBarStyles from '../styles/modules/navbar.module.scss';
import Image from 'next/image';
import Menu from './menu';
import Search from './search';

export default function NavBar() {
    return (
        <div className={NavBarStyles.sghi_nav}>
            <div className={NavBarStyles.logo}>
                <Image
                    src="/images/SGHI_logo.svg"
                    alt="Brand Logo"
                    width={200}
                    height={200}
                />
            </div>

            <Menu />

            <Search />
        </div>
    );
}
