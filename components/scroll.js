import React, { useState } from 'react';
import ScrollToTopBtn from '../components/scrollToTop';

export default function ScrollArrow() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 630) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 630) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    return <ScrollToTopBtn onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }} />;
}
