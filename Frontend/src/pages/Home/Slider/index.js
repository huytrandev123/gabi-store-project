// import styles from './Slider.module.scss';
// import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { useEffect, useState } from 'react';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

// const cx = classNames.bind(styles);

// function Slider({ slides }) {
//     console.log('slides', slides);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const goToPrevious = () => {
//         const isFirstSlide = currentIndex === 0;
//         const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//         setCurrentIndex(newIndex);
//     };

//     const goToNext = () => {
//         const isLastSlide = currentIndex === slides.length - 1;
//         const newIndex = isLastSlide ? 0 : currentIndex + 1;
//         setCurrentIndex(newIndex)
//     };

//     useEffect(() => {
//         Aos.init();
//     }, []);

//     return (
//         <div
//             className={cx('sliderStyles')}
//             data-aos="fade-left"
//             data-aos-offset="200"
//             data-aos-easing="ease-in-sine"
//             data-aos-duration="600"
//         >
//             {/* <img
//                 src={
//                     'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'
//                 }
//             /> */}

//             <div className={cx('leftArrow')}>
//                 <FontAwesomeIcon icon={faArrowLeft} onClick={goToPrevious} />
//             </div>

//             <div className={cx('rightArrow')}>
//                 <FontAwesomeIcon icon={faArrowRight} onClick={goToNext} />
//             </div>

//             <div className={cx('slideStyles')} style={{ backgroundImage: `url(${slides[currentIndex].url})`}}></div>
//         </div>
//     );
// }

// export default Slider;

import React, { useState } from 'react';
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg',
        'https://mcdn.coolmate.me/image/September2023/mceclip5_29.jpg',
        'https://images.unsplash.com/photo-1517938889432-a2ac9241a486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };
    return (
        <div className={cx('slider')}>
            <div className={cx('container')} style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="banner-1" />
                <img src={data[1]} alt="banner-2" className={cx('banner-2')} />
                <img src={data[2]} alt="banner-3" />
            </div>

            <div className={cx('icons')}>
                <div className={cx('icon')} onClick={prevSlide}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className={cx('icon')} onClick={nextSlide}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </div>
    );
}

export default Slider;
