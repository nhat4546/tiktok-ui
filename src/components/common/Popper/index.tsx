import styles from "./Popper.module.scss";

function Popper({ children, ...props }: PopperProps) {
    return (
        <div className={styles["wrap-popper"]} {...props}>
            {children}
        </div>
    );
}

export default Popper;

interface PopperProps {
    children: JSX.Element;
    tabIndex: number;
}
