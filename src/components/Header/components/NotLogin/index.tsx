import clsx from 'clsx';
import { Button } from 'components/common';

import styles from './index.module.scss';
import uploadIcon from 'assets/icon/upload-icon.svg';
import settingIcon from 'assets/icon/setting-icon.svg';

function NotLogin() {
    return (
        <div className={clsx(styles.wrapper, 'd-flex', 'align-center')}>
            <Button className={styles['btn-upload']}>
                <img src={uploadIcon} alt="icon" className={styles.iconLeft} />
                <span className={styles['text-upload']}>Tải lên</span>
            </Button>
            <Button className={styles['btn-login']}>
                <span className={styles['text-login']}>Đăng nhập</span>
            </Button>

            <div className={styles['btn-setting']}>
                <img src={settingIcon} alt="icon" className={styles['icon-setting']} />
            </div>
        </div>
    );
}

export default NotLogin;
