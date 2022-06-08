import classNames from 'classnames';
import { Header, Sitebar } from 'components';
import styles from './index.module.scss';

type Props = {
    children: JSX.Element;
};

function LayoutDefault({ children }: Props) {
    return (
        <div className="wrapper">
            <Header />
            <Sitebar />
            {children}
        </div>
    );
}

export default LayoutDefault;
