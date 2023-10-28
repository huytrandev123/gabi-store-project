import React, { useEffect, useState } from 'react';
import styles from './NewProducts.module.scss';
import classNames from 'classnames/bind';
import Card from './Card';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleDown,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faCircleDot,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function NewProducts({ type }) {
    const [newProduct, setNewProduct] = useState([]);
    const [checked, setChecked] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    console.log('newproduct', newProduct);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= newProduct.length) {
            newIndex = newProduct.length - 1;
        }
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        fetch('http://localhost:8000/new')
            .then((res) => res.json())
            .then((new_product) => setNewProduct(new_product));
    }, []);

    useEffect(() => {
        Aos.init({
            delay: 200,
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('inner')}
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
                data-aos="fade-zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
            >
                <div className={cx('inner-top')}>
                    <h1>Bộ sưu tập {type}</h1>
                    <p>
                        Mặc mỗi ngày, thoải mái mỗi ngày Với triết lí “thời trang cho tất cả mọi người”, bộ sưu tập mới
                        của GABI sẽ mang đến cho bạn sự thoải mái, dễ chịu và thanh lịch cho dù bạn là ai, ở bất kì độ
                        tuổi nào, trong hoàn cảnh nào. Bảng màu đa dạng cùng chất liệu thân thiện với môi trường không
                        chỉ khơi nguồn cảm hứng mà còn bảo vệ sức khoẻ của bạn và người thân trong mọi hoạt động hàng
                        ngày. Mùa hè này, hãy để GABI đồng hành cùng bạn!
                    </p>
                </div>
                <div className={cx('inner-bottom')}>
                    {newProduct.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
            </div>

            <div onClick={() => {
                updateIndex(activeIndex - 1)
            }}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} className={cx('icon-left')} />
            </div>
            <div className={cx('indicators')}>
                {newProduct.map((item, index) => (
                    // <button><FontAwesomeIcon icon={faCircleDot} className={cx('circleDot')} /></button>
                    <div key={item.id} className={cx('indicators-input')}>
                        <input
                            className={cx('btn-radio')}
                            type="radio"
                            onChange={() => setChecked(item.id)}
                            checked={checked === item.id}
                        />
                    </div>
                ))}

                <div  onClick={() => {
                    updateIndex(activeIndex + 1)
                }}>
                    <FontAwesomeIcon icon={faArrowAltCircleRight} className={cx('icon-right')} />
                </div>
            </div>
        </div>
    );
}

export default NewProducts;
