import styles from './Slider.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles);

function Slider({ slides }) {
    console.log('slides', slides);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div
            className={cx('sliderStyles')}
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
        >
            {/* <img
                src={
                    'https://file.hstatic.net/1000184601/file/cover-02_e1e23ea0fb6f402b9b880a11f88a7ec7.jpg'
                }
            /> */}

            <div className={cx('leftArrow')}>
                <FontAwesomeIcon icon={faArrowLeft} onClick={goToPrevious} />
            </div>

            <div className={cx('rightArrow')}>
                <FontAwesomeIcon icon={faArrowRight} onClick={goToNext} />
            </div>

            <div className={cx('slideStyles')} style={{ backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        </div>
    );
}

export default Slider;
