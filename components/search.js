import NavBarStyles from '../styles/modules/navbar.module.scss';
import Image from 'next/image';

export default function Search() {
    return (
        <div className={NavBarStyles.search}>
            <div className={NavBarStyles.search_box}>
                <input placeholder="Search" />
                <div className={NavBarStyles.search_icon}>
                    <Image src="/images/search.png" alt="Search" width={22} height={22} />
                </div>
            </div>
        </div>
    );
}
