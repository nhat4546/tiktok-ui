import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Tooltip } from "@mui/material";

import {
  Popper,
  SearchResult,
  Button,
  PopperNotLoginSettings,
  PopperLoginSettings,
  CustomAvatar,
} from "components/common";

import {
  UploadIcon,
  HeaderSettingsIcon,
  LetterIcon,
  MessageIcon,
  CloseIcon,
  SearchIcon,
} from "components/Icons";

import logo from "assets/images/logo.png";
import styles from "./Header.module.scss";

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const wrapInputRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current === document.activeElement) {
        wrapInputRef.current.classList.add(styles.focused);
      } else {
        wrapInputRef.current.classList.remove(styles.focused);
      }
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles["header-container"]}>
        <div className={styles["header-logo"]}>
          <img src={logo} alt="" />
        </div>
        <div className={styles["header-wrap-search"]} ref={wrapInputRef}>
          <Tippy
            visible={searchResult.length > 0}
            offset={[0, 16]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
              <Popper {...attrs} tabIndex={-1}>
                <SearchResult data={searchResult} />
              </Popper>
            )}
          >
            <div className={styles["form-search"]}>
              <input
                type="text"
                className={styles["form-input"]}
                ref={inputRef}
                placeholder="Tìm kiếm tài khoản và video"
              />
              <div className={styles["wrap-btn"]}>
                <button className={styles["btn-close"]}>
                  <CloseIcon className={styles["icon-close"]} />
                </button>
                <span className={styles["span-spliter"]}></span>
                <button className={styles["btn-search"]}>
                  <SearchIcon className={styles["btn-search-icon"]} />
                </button>
              </div>
            </div>
          </Tippy>
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
                  <Tooltip
                    arrow
                    title={<p style={{ fontSize: 16 }}>Tin nhắn</p>}
                    placement="bottom"
                  >
                    <MessageIcon className={styles["btn-message-icon"]} />
                  </Tooltip>
                </div>
                <div className={styles["btn-settings"]}>
                  <Tooltip
                    arrow
                    title={<p style={{ fontSize: 16 }}>Hộp thư</p>}
                    placement="bottom"
                  >
                    <LetterIcon className={styles["btn-letter-icon"]} />
                  </Tooltip>
                </div>
              </div>
              <div className={styles["item-account-avatar"]}>
                <Tippy
                  interactive
                  placement="bottom-end"
                  render={(attrs) => (
                    <Popper {...attrs} tabIndex={-1}>
                      <PopperLoginSettings />
                    </Popper>
                  )}
                >
                  <CustomAvatar
                    src=""
                    alt=""
                    className={styles["item-avatar-img"]}
                  />
                </Tippy>
              </div>
            </>
          ) : (
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
                    <HeaderSettingsIcon
                      className={styles["btn-settings-icon"]}
                    />
                  </div>
                </Tippy>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
