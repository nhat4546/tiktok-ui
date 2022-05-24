import classNames from 'classnames/bind';
import styles from './index.module.scss';

import logo from '../../assets/img/tiktok-logo.png';
import searchIcon from '../../assets/icon/search-icon.png';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('contanier d-flex justify-center align-center')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                </div>
                <div className={cx('search')}>
                    <input type="text" placeholder="Tìm kiếm tài khoản và video" />
                    <button className={cx('btn-search')}>
                        <img src={searchIcon} alt="" />
                    </button>
                </div>
                <div className={cx('setting')}></div>
            </div>
        </div>
    );
}

export default Header;
