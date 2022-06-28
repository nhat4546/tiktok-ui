import React from "react";
import Tippy from "@tippyjs/react/headless";

import { Button, Popper } from "components/common";
import PopperNotLoginSettings from "../PopperNotLoginSettings";
import { HeaderSettingsIcon } from "components/Icons";

import styles from "./NotLogin.module.scss";

function NotLogin() {
    return (
        <>
            <Button classnames={styles["btn-login"]} primary={1}>
                <span>Đăng nhập</span>
            </Button>
            <div className={styles["wrap-btn-settings"]}>
                <Tippy
                    interactive
                    placement="bottom-end"
                    render={(attrs) => (
                        <Popper {...attrs} tabIndex={-1}>
                            <PopperNotLoginSettings />
                        </Popper>
                    )}
                >
                    <div className={styles["btn-settings"]}>
                        <HeaderSettingsIcon className={styles["btn-settings-icon"]} />
                    </div>
                </Tippy>
            </div>
        </>
    );
}

export default NotLogin;
