import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

type Props = {
    children: JSX.Element;
};

function Profile() {
    return <h1>Profile content</h1>;
}

export default Profile;
