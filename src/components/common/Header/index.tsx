import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import {
  Popper,
  SearchResult,
  Button,
  PopperNotLoginSettings,
  PopperLoginSettings,
} from "components/common";

import logo from "assets/images/logo.png";
import uploadIcon from "assets/icons/upload-icon.svg";
import settingsIcon from "assets/icons/settings-icon.svg";
import letterIcon from "assets/icons/header-letter-icon.svg";
import messageIcon from "assets/icons/header-message-icon.svg";
import closeIcon from "assets/icons/close-icon.svg";

import styles from "./Header.module.scss";
import { Tooltip } from "@mui/material";

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const wrapInputRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

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
                <img
                  src={closeIcon}
                  alt="icon"
                  className={styles["icon-close"]}
                />
                {/* <button className={styles["icon-loading"]}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button> */}
                <span className={styles["span-spliter"]}></span>
                <button className={styles["btn-search"]}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
          </Tippy>
        </div>
        <div className={styles["header-settings"]}>
          <Button classnames={styles["btn-upload"]}>
            <>
              <img
                src={uploadIcon}
                alt="icon"
                className={styles["btn-upload-icon"]}
              />
              <span className={styles["btn-upload-text"]}>Tải lên</span>
            </>
          </Button>

          {!isLogin ? (
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
                    <img
                      src={settingsIcon}
                      alt=""
                      className={styles["btn-settings-icon"]}
                    />
                  </div>
                </Tippy>
              </div>
            </>
          ) : (
            <>
              <div className={styles["btn-settings-not-login"]}>
                <div className={styles["btn-settings"]}>
                  <Tooltip
                    arrow
                    title={<p style={{ fontSize: 16 }}>Tin nhắn</p>}
                    placement="bottom"
                  >
                    <img
                      src={messageIcon}
                      alt="icon"
                      className={styles["btn-message-icon"]}
                    />
                  </Tooltip>
                </div>
                <div className={styles["btn-settings"]}>
                  <Tooltip
                    arrow
                    title={<p style={{ fontSize: 16 }}>Hộp thư</p>}
                    placement="bottom"
                  >
                    <img
                      src={letterIcon}
                      alt="icon"
                      className={styles["btn-letter-icon"]}
                    />
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
                  <img
                    src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/161684580_2590122681288472_5013727967317194644_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rIvvjJOoUvoAX_tQoYm&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8V8ES5jgzlPYu9doJtNYWHX4NnpW7faqFP7SkJdplbcQ&oe=62DE1ED0"
                    alt=""
                    className={styles["item-avatar-img"]}
                  />
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
