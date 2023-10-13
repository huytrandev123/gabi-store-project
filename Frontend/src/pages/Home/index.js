import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import BestSeller from './BestSeller';
import Description from './Description';
import PostItem from './PostItem';
import Question from './Question';
import Slider from './Slider';
import Story from './Story';
import Category from './Catelog';
import { useEffect, useState } from 'react';
import NewProducts from './NewProducts';
import DarkModeToggle from '../../components/DarkModeToggle';
import banner1 from '../../img/1.jpg';
import banner2 from '../../img/banner-2.jpg';

const cx = classNames.bind(styles);

function Home() {
    const slides = [
        { url: banner1, title: 'banner 1' },
        { url: banner2, title: 'banner 2', content: "về chúng tôi"},
    ];
    return (
        <div className={cx('total')}>
            <div className={cx('containerStyles')}>
                <Slider slides={slides} />
            </div>
            <Question />
            <Category />
            {/* <PostItem/> */}
            <BestSeller />
            <NewProducts type="GABI Xuân Hè" />
            <Description />
            <Story />
        </div>
    );
}

export default Home;
