import React from 'react';
import style from './BlogDetail.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function BlogDetail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <h2>Cách chọn áo sơ mi nam với chiều dài thân áo hợp lý</h2>
                </div>
                <div className={cx('banner')}>
                    <img src="https://pos.nvncdn.net/b5a043-19330/art/20210401_RRhGMiO45aFfqXXlU1HaKVxT.png" />
                </div>
                <div className={cx('sub-title-small')}>
                    <i>
                        Bạn làm công sở, văn phòng? Bạn thường xuyên mặc các áo sơ mi nam, nhưng chưa biết cách chọn áo
                        sơ mi vừa với thân hình của mình. Hãy tham khảo bài viết dưới đây của shop được đúc kết từ kinh
                        nghiệm 8 năm bán hàng, chắc chắn sẽ chọn được áo sơ mi vừa, đẹp với bạn nhất.
                    </i>
                </div>
                <div className={cx('sub-title')}>
                    <b>Cách chọn áo sơ mi nam với chiều dài thân áo hợp lý</b>
                </div>
                <div className={cx('text')}>
                    <p>
                        Thường xuyên, đa số nam giới mặc áo sơ mi chỉ để ý đến chiều ngang bụng áo, ngực, vai áo sơ mi
                        nam hoặc chiều dài tay áo có vừa hay không mà quên không chú trọng đến chiều dài thân áo vừa hay
                        không? Chiều dài thân áo hợp lý không những giúp bạn mặc áo đẹp hơn khi bỏ xuông áo mà những lúc
                        sơ-vin áo cũng không bị thừa quá nhiều dẫn đến “lùng bùng”. Trông không đẹp, chẳng gọn gàng tí
                        nào phải không !
                    </p>
                </div>
                <div className={cx('text')}>
                    <p>Những trường hợp mặc áo quá dài hoặc quá ngắn:</p>
                </div>
                <div className={cx('image')}>
                    <img src="https://namfashion.com/home/wp-content/uploads/2018/07/mac-ao-so-mi-nam-qua-dai.jpg" />
                    <br></br>
                    <i>anh chàng bên trái mặc áo quá dài, rộng phải không nào?</i>
                </div>
                <div className={cx('text')}>
                    <p>Xem hình dưới đây bạn sẽ chọn được áo sơ mi vừa với thân hình, với quần nhất:</p>
                </div>
                <div className={cx('image')}>
                    <img src="https://namfashion.com/home/wp-content/uploads/2018/07/kiem-tra-chieu-dai-than-ao-so-mi-nam.jpg" />
                    <br></br>
                    <i>Độ dài của áo hợp lí</i>
                </div>
                <div className={cx('text')}>
                    <p>
                        Dễ hiểu hơn, bạn cần xem xét nếu áo sơ mi của bạn mặc với gấu áo trong khoảng nửa dưới của khóa
                        quần là hoàn hảo nhất, gấu áo ở phía trên thì áo của bạn có vẻ hơi ngắn rồi hoặc gấu áo đến đũng
                        quần thì cũng quá dài. Chú ý cách này có thể.
                    </p>
                </div>
                <div className={cx('text')}>
                    <p>
                        Chỉ cần chú ý chi tiết nhỏ trên bạn sẽ mặc được áo sơ mi nam chuẩn nhất, vừa lịch lãm, trẻ trung
                        mà cũng chứng tỏ là bạn rất biết cách ăn mặc đẹp. Khám phá các bài viết tư vấn thời trang nam
                        khác tại GABI Store
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
