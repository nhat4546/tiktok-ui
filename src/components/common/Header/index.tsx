import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Tooltip } from "@mui/material";

import { Popper, Button, CustomAvatar } from "components/common";

import { UploadIcon, HeaderSettingsIcon, LetterIcon, MessageIcon } from "components/Icons";

import logo from "assets/images/logo.png";
import styles from "./Header.module.scss";
import { NotLogin, PopperLoginSettings, PopperNotLoginSettings, Search } from "./components";

function Header() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className={styles.header}>
            <div className={styles["header-container"]}>
                <div className={styles["header-logo"]}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles["header-wrap-search"]}>
                    <Search />
                </div>
                <div className={styles["header-settings"]}>
                    <Button classnames={styles["btn-upload"]}>
                        <>
                            <UploadIcon className={styles["btn-upload-icon"]} />
                            <span className={styles["btn-upload-text"]}>Tải lên</span>
                        </>
                    </Button>
                    {isLogin ? (
                        <>
                            <div className={styles["btn-settings-not-login"]}>
                                <div className={styles["btn-settings"]}>
                                    <Tooltip arrow title={<p style={{ fontSize: 16 }}>Tin nhắn</p>} placement="bottom">
                                        <MessageIcon className={styles["btn-message-icon"]} />
                                    </Tooltip>
                                </div>
                                <div className={styles["btn-settings"]}>
                                    <Tooltip arrow title={<p style={{ fontSize: 16 }}>Hộp thư</p>} placement="bottom">
                                        <LetterIcon className={styles["btn-letter-icon"]} />
                                    </Tooltip>
                                </div>
                            </div>
                            <div className={styles["item-account-avatar"]}>
                                <Tippy
                                    hideOnClick={false}
                                    interactive
                                    placement="bottom-end"
                                    render={(attrs) => (
                                        <Popper {...attrs} tabIndex={-1}>
                                            <PopperLoginSettings />
                                        </Popper>
                                    )}
                                >
                                    <CustomAvatar src="" alt="" className={styles["item-avatar-img"]} />
                                </Tippy>
                            </div>
                        </>
                    ) : (
                        <NotLogin />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
