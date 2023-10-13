import React, { useEffect, useState } from 'react';
import style from './BlogDetail.module.scss';
import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(style);

function BlogDetail() {
    const [details, setDetails] = useState({});
    console.log('details', details);

    const location = useLocation();

    useEffect(() => {
        setDetails(location.state.item);
    }, []);

    return (
        // <div className={cx('wrapper')}>
        //     <div className={cx('inner')}>
        //         <div className={cx('contain')}>
        //             <div className={cx('content')}>
        //                 <h2>{details.title}</h2>
        //                 <i>{details.content2}</i>

        //                 <p>
        //                     <b>{details.title2}</b>
        //                 </p>
        //                 <div className={cx('image')}>
        //                     <img src={details.img3} />
        //                     <p>
        //                         <i>{details.note3}</i>
        //                     </p>
        //                 </div>
        //                 <p>{details.content4}</p>
        //                 <div className={cx('image')}>
        //                     <img src={details.img2} />
        //                     <p>
        //                         <i>{details.note3}</i>
        //                     </p>
        //                 </div>
        //                 <p>
        //                     <b>{details.title2}</b>
        //                 </p>
        //                 <p>{details.content4}</p>
        //                 <div className={cx('image')}>
        //                     <img src={details.img} />
        //                     <p>
        //                         <i>{details.note3}</i>
        //                     </p>
        //                 </div>
        //                 <p>
        //                     <b>{details.title2}</b>
        //                 </p>
        //                 <p>{details.content4}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('contain')}>
                    <div className={cx('content')}>
                        <h2>{details.title}</h2>
                        <i>{details.describe}</i>
                        <div className={cx('image')}>
                            {' '}
                            <img src={details.img} />{' '}
                        </div>
                        <i>{details.describe2}</i>

                        <p>
                            <b>{details.title2}</b>
                        </p>
                        <p>{details.content2}</p>
                        <div className={cx('image')}>
                            <img src={details.img2} />
                            <p>
                                <i>{details.note2}</i>
                            </p>
                        </div>
                        <p>{details.content2v1}</p>
                        <p>{details.content2v2}</p>

                        <p>
                            <b>{details.title3}</b>
                        </p>
                        <p>{details.content3}</p>
                        <div className={cx('image')}>
                            <img src={details.img3} />
                            <p>
                                <i>{details.note3}</i>
                            </p>
                        </div>
                        <p>{details.content3v1}</p>
                        <p>{details.content3v2}</p>

                        <p>
                            <b>{details.title4}</b>
                        </p>
                        <p>{details.content4}</p>
                        <div className={cx('image')}>
                            <img src={details.img4} />
                            <p>
                                <i>{details.note4}</i>
                            </p>
                        </div>
                        <p>{details.content4v1}</p>
                        <p>{details.content4v2}</p>

                        <p>
                            <b>{details.title5}</b>
                        </p>
                        <p>{details.content5}</p>
                        <div className={cx('image')}>
                            <img src={details.img5} />
                            <p>
                                <i>{details.note5}</i>
                            </p>
                        </div>
                        <p>{details.content5v1}</p>
                        <p>{details.content5v2}</p>

                        <p>
                            <b>{details.title6}</b>
                        </p>
                        <p>{details.content6}</p>
                        <div className={cx('image')}>
                            <img src={details.img6} />
                            <p>
                                <i>{details.note6}</i>
                            </p>
                        </div>
                        <p>{details.content6v1}</p>
                        <p>{details.content6v2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
