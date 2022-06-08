import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './index.module.scss';

interface ButtonProps {
    children: any;
    to?: string;
    href?: string;
    others?: any;
    className?: string;
}

function Button({ children, to, href, className, ...others }: ButtonProps) {
    let Compo: any = 'button';
    const style: {
        to?: string;
        href?: string;
    } = {};

    if (to) {
        Compo = Link;
        style.to = to;
    }

    if (href) {
        Compo = 'a';
        style.href = href;
    }

    return (
        <Compo {...style} className={clsx('d-flex', 'align-center', 'justify-center', styles.btn, className)}>
            {children}
        </Compo>
    );
}

export default Button;
