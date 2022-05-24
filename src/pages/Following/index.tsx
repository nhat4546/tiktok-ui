import classNames from 'classnames';
import { Header, Sitebar } from '../../components';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

type Props = {
    children: JSX.Element;
};

function Following() {
    return <h1>Following content</h1>;
}

export default Following;
