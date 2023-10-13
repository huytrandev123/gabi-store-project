import React from 'react';
import classNames from 'classnames/bind';
import styles from './Story.module.scss';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Story() {
    return (
        // <div className={cx('wrapper')}>
        //     <img src="https://mcdn.coolmate.me/image/September2023/mceclip5_29.jpg" />

        //     <div className={cx('inner')}>
        //         <div className={cx('inner-first')}>
        //             <h2 className={cx('title')}>áo thời trang nam chất</h2>
        //             <h2 className={cx('brand')}>gabistore</h2>
        //         </div>

        //         <div className={cx('inner-middle')}>
        //             <div className={cx('middle-left')}>
        //                 <img src="https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/March2023/DSC04764_copy_35.jpg" />
        //             </div>

        //             <div className={cx('middle-right')}>
        //                 <h2 className={cx('title')}>ÁO THỜI TRANG NAM CHẤT</h2>
        //                 <p className={cx('desc')}>
        //                    <span className={cx('bold')}> Áo Nam Gabi Store</span> là những mẫu áo cao cấp dành cho nam giới được thiết kế theo xu hướng thanh
        //                     lịch, đơn giản, trẻ trung, năng động. Bên cạnh đó, <span className={cx('bold')}>Gabi Store</span> luôn coi trọng sự đa năng nên
        //                     những chiếc áo dành cho nam luôn được thiết kế để có thể mặc trong mọi sự kiện khác nhau như
        //                     đi làm, đi chơi, dạo phố, hẹn hò, chơi thể thao,... trở thành người bạn đồng hành của các
        //                     chàng trai trong cuộc sống hằng ngày.
        //                 </p>

        //                 <p className={cx('desc')}>
        //                     Về tổng thể, áo nam thời trang tại <span className={cx('bold')}>Gabi Store</span> được thiết kế với đa dạng kiểu dáng khác nhau, từ
        //                     áo tay ngắn đến áo tay dài phù hợp với mọi vóc dáng và phong cách. Áo được may từ những chất
        //                     liệu cao cấp có nguồn gốc từ thiên nhiên, vừa thân thiện với môi trường vừa an toàn cho làn
        //                     da của người mặc.
        //                 </p>

        //                 <p className={cx('desc')}>
        //                     Mặc dù đi theo lối thiết kế đơn giản nhưng áo nam chính hãng tại <soan className={cx('bold')}>Gabi Store</soan> vẫn có những họa
        //                     tiết độc đáo, mang xu hướng mới lạ, tạo điểm nhấn riêng.
        //                 </p>

        //                 <p className={cx('desc')}>
        //                     Bên cạnh đó, với tiêu chí <span className={cx('bold')}>"Good Mood - Good Day"</span>, nên các sản phẩm áo nam cao cấp tại
        //                     <span className={cx('bold')}> Gabi Store</span> cũng có những thiết kế basic, dễ dàng phối đồ dành cho các bạn nam.
        //                 </p>

        //                 <p className={cx('desc')}>
        //                     Giờ đây, bạn có thể khám phá những mẫu áo nam hàng hiệu, đẹp nhất, mới nhất tại hệ thống cửa
        //                     hàng áo nam trên toàn Việt Nam, những shop áo nam của <span className={cx('bold')}>Gabi Store</span> đã có mặt tại những thành phố
        //                     lớn như Hà Nội, Đà Nẵng, Bình Thuận, Nha Trang, Hồ Chí Minh, Cà Mau,...
        //                 </p>

        //                 <div className={cx('sub')}>good mood - good day</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className={cx('content')}>
            <div className={cx('card')}>
                <img src={'https://i.pinimg.com/564x/3e/43/bb/3e43bbe3369aa024d0ca4189d1a5073f.jpg'}></img>
                <h4>Đây là câu chuyện của chúng tôi</h4>
                <p>
                    “Gabi Store sinh ra với mong muốn trở thành điển hình về mô hình DOANH NGHIỆP TRÁCH NHIỆM bằng cách
                    vừa làm kinh doanh bài bản, có lợi nhuận và đồng thời mang lại những giá trị thiết thực và lâu dài
                    cho khách hàng, cho nhân viên, cho đối tác, cho cộng đồng, xã hội và cho cổ đông".
                </p>
            </div>
            <div className={cx('card')}>
                <img src={'https://i.pinimg.com/564x/2e/52/a1/2e52a11efe043f28c332f916da2d6db0.jpg'}></img>
                <h4>Chúng tôi luôn nghiên cứu sản phẩm </h4>
                <p>
                    Ở Gabi Store, mỗi ngày chúng tôi luôn tìm tòi, học hỏi thêm những kiến thức mới để cho ra nhiều sản
                    phẩm chất lượng cao, loại vải luôn mát, nhằm tạo cảm giác thoải mái nhất cho khách hàng. Mang đến
                    những sản phẩm thời trang ứng dụng công nghệ tiên tiến.
                </p>
            </div>
        </div>
    );
}

export default Story;
