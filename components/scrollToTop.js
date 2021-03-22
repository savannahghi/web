import Link from 'next/link';
import ScrollToTopStyles from '../styles/modules/scrollToTop.module.scss';

export default function ScrollToTopBtn() {
    return (
        <Link href="/">
            <button id="to-top" className={ScrollToTopStyles.toTop}>
                <i className="fas fa-arrow-up fa-2x"></i>
            </button>
        </Link>
    );
}
