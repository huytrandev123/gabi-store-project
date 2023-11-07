import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { Button } from 'react-bootstrap';
import 'tippy.js/dist/tippy.css';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCartShopping,
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faHome,
    faMagnifyingGlass,
    faShirt,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

import ButtonComponent from '../../../Button';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../../Poppers/Menu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from '../../../../pages/Cart';
import DarkModeToggle from '../../../DarkModeToggle';
const cx = classNames.bind(styles);

function Header() {
    const currentUsers = false;
    const [auth, setAuth] = useState(false);
    console.log(auth);
    const [name, setName] = useState('');
    console.log(name);
    const [message, setMessage] = useState('');
    // usestate cart
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000').then((res) => {
            if (res.data.Status === 'SUCCESS') {
                setAuth(true);
                setName(res.data.name);
            } else {
                setMessage(res.data.Error);
            }
        });
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-top-header')}>
                    <div className={cx('left-icon')}>
                        <label htmlFor="nav-mobile-input">
                            <FontAwesomeIcon className={cx('bars-icon')} icon={faBars} />
                            
                        </label>
                        <FontAwesomeIcon className={cx('shirt-icon')} icon={faShirt} />
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </div>
                    <div className={cx('header-brand')}>
                        <Link to="/" style={{ borderRadius: '50%' }}>
                            <h2 className={cx('brand')}>gabistore</h2>
                        </Link>
                    </div>

                    <div className={cx('icon')}>
                        {auth ? (
                            <div className={cx('icon__main')}>
                                <Link to="/login">
                                    <button className={cx('icon-btn')}>
                                        <img
                                            src="https://i.pinimg.com/564x/2c/68/78/2c687844ea0792946c292d163f1dac68.jpg"
                                            className={cx('avatar')}
                                        />
                                    </button>
                                </Link>

                                <Link to="/cart">
                                    <div className={cx('cartIcon')}>
                                        <FontAwesomeIcon
                                            className={cx('cart')}
                                            icon={faCartShopping}
                                            // onClick={() => setOpen(!open)}
                                        />
                                        <span>0</span>
                                    </div>
                                </Link>
                            </div>
                        ) : (
                            <div className={cx('not-auth')}>
                                <Link to="/">
                                    {' '}
                                    <FontAwesomeIcon className={cx('home')} icon={faHome} />
                                </Link>

                                <Link to="/login">
                                    <FontAwesomeIcon className={cx('user')} icon={faUser} />
                                </Link>

                                <Link to="/cart">
                                    {' '}
                                    <FontAwesomeIcon className={cx('cart')} icon={faCartShopping} />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                {/* HeaderMenu */}
                <div className={cx('headerMenu')}>
                    <ul>
                        <li>
                            <Link to="/" className={cx('item')}>
                                Trang chủ
                            </Link>
                        </li>

                        <li>
                            <Link to="/about">Câu chuyện</Link>
                        </li>

                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>

                        <li>
                            <Link to="/product">Sản phẩm</Link>
                        </li>

                        <li>
                            <Link to="/contact">Liên hệ</Link>
                        </li>

                        <li>
                            <Link to="/policy">Chính sách</Link>
                        </li>
                    </ul>
                </div>

                {/* Input */}
                <input type="checkbox" className={cx('nav_input')} id="nav-mobile-input" />

                {/* Overlay */}
                <label htmlFor="nav-mobile-input" className={cx('nav_overlay')}></label>

                {/* Header mobile */}
                <div className={cx('headerMenu__mobile')}>
                    <label htmlFor='nav-mobile-input' className={cx('headerMenu__mobile-close')}>
                        <FontAwesomeIcon icon={faTimes} />
                    </label>
                    <ul className={cx('headerMenu__mobile-list')}>
                        <li>
                            <Link to="/" className={cx('headerMenu__mobile-link')}>
                                Trang chủ
                            </Link>
                        </li>

                        <li>
                            <Link to="/about" className={cx('headerMenu__mobile-link')}>
                                Câu chuyện
                            </Link>
                        </li>

                     

                        <li>
                            <Link to="/blog" className={cx('headerMenu__mobile-link')}>
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link to="/product" className={cx('headerMenu__mobile-link')}>
                                Sản phẩm
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact" className={cx('headerMenu__mobile-link')}>
                                Liên hệ
                            </Link>
                        </li>

                        <li>
                            <Link to="/policy" className={cx('headerMenu__mobile-link')}>
                                Chính sách
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {open && <Cart />}
        </header>
    );
}

export default Header;
