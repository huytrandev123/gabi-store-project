// import React, { useEffect, useState } from 'react';
// import style from './BlogDetail.module.scss';
// import classNames from 'classnames/bind';
// import { useLocation } from 'react-router-dom';

// const cx = classNames.bind(style);

// function BlogDetail() {
//     const [details, setDetails] = useState({})
//     console.log('details', details);

//     const location = useLocation()

//     useEffect(() => {
//         setDetails(location.state.item);
//     }, []);

//     return (
//         <div className={cx('wrapper')}>
//             <div className={cx('inner')}>
//                 <div className={cx('title')}>
//                     <h2>{details.title}</h2>
//                 </div>
//                 <div className={cx('banner')}>
//                     <img src={details.img2} />
//                 </div>
//                 <div className={cx('sub-title-small')}>
//                     <i>
//                        {details.content2}
//                     </i>
//                 </div>
//                 <div className={cx('sub-title')}>
//                     <b>{details.title2}</b>
//                 </div>
//                 <div className={cx('text')}>
//                     <p>
//                        {details.content3}
//                     </p>
//                 </div>
//                 <div className={cx('text')}>
//                     <p>Những trường hợp mặc áo quá dài hoặc quá ngắn:</p>
//                 </div>
//                 <div className={cx('image')}>
//                     <img src="https://namfashion.com/home/wp-content/uploads/2018/07/mac-ao-so-mi-nam-qua-dai.jpg" />
//                     <br></br>
//                     <i>anh chàng bên trái mặc áo quá dài, rộng phải không nào?</i>
//                 </div>
//                 <div className={cx('text')}>
//                     <p>Xem hình dưới đây bạn sẽ chọn được áo sơ mi vừa với thân hình, với quần nhất:</p>
//                 </div>
//                 <div className={cx('image')}>
//                     <img src="https://namfashion.com/home/wp-content/uploads/2018/07/kiem-tra-chieu-dai-than-ao-so-mi-nam.jpg" />
//                     <br></br>
//                     <i>Độ dài của áo hợp lí</i>
//                 </div>
//                 <div className={cx('text')}>
//                     <p>
//                         Dễ hiểu hơn, bạn cần xem xét nếu áo sơ mi của bạn mặc với gấu áo trong khoảng nửa dưới của khóa
//                         quần là hoàn hảo nhất, gấu áo ở phía trên thì áo của bạn có vẻ hơi ngắn rồi hoặc gấu áo đến đũng
//                         quần thì cũng quá dài. Chú ý cách này có thể.
//                     </p>
//                 </div>
//                 <div className={cx('text')}>
//                     <p>
//                         Chỉ cần chú ý chi tiết nhỏ trên bạn sẽ mặc được áo sơ mi nam chuẩn nhất, vừa lịch lãm, trẻ trung
//                         mà cũng chứng tỏ là bạn rất biết cách ăn mặc đẹp. Khám phá các bài viết tư vấn thời trang nam
//                         khác tại GABI Store
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default BlogDetail;



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
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('contain')}>
                    <div className={cx('content')}>
                        <h2>{details.title}</h2>
                        <i>{details.content2}</i>

                        <p>
                            <b>{details.title2}</b>
                        </p>
                        <div className={cx('image')}>
                            <img src={details.img3} />
                            <p>
                                <i>{details.note3}</i>
                            </p>
                        </div>
                        <p>{details.content4}</p>
                        <div className={cx('image')}>
                            <img src={details.img2} />
                            <p>
                                <i>{details.note3}</i>
                            </p>
                        </div>
                        <p>
                            <b>{details.title2}</b>
                        </p>
                        <p>{details.content4}</p>
                        <div className={cx('image')}>
                            <img src={details.img} />
                            <p>
                                <i>{details.note3}</i>
                            </p>
                        </div>
                        <p>
                            <b>{details.title2}</b>
                        </p>
                        <p>{details.content4}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
