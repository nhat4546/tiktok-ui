import React from "react";

import { SearchResultIcon, VerifyIcon } from "components/Icons";
import styles from "./SearchResult.module.scss";
import { CustomAvatar } from "components/common";

function SearchResult({ data }: SearchResultProps) {
  return (
    <div className={styles["wrap-search-result"]}>
      <div className={styles["result-item"]}>
        <SearchResultIcon className={styles["result-icon"]} />
        <h4 className={styles["result-name"]}>Nhat Nguyen</h4>
      </div>
      <div className={styles["result-item"]}>
        <SearchResultIcon className={styles["result-icon"]} />
        <h4 className={styles["result-name"]}>Nhat Nguyen</h4>
      </div>
      <div className={styles["result-item"]}>
        <SearchResultIcon className={styles["result-icon"]} />
        <h4 className={styles["result-name"]}>Nhat Nguyen</h4>
      </div>
      <div className={styles["result-item"]}>
        <SearchResultIcon className={styles["result-icon"]} />
        <h4 className={styles["result-name"]}>Nhat Nguyen</h4>
      </div>
      <div className={styles["account-title-small"]}>Tài khoản</div>
      <div className={styles["result-item-account"]}>
        <div className={styles["item-account-avatar"]}>
          <CustomAvatar
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/161684580_2590122681288472_5013727967317194644_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rIvvjJOoUvoAX_tQoYm&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8V8ES5jgzlPYu9doJtNYWHX4NnpW7faqFP7SkJdplbcQ&oe=62DE1ED0"
            alt=""
            className={styles["item-avatar-img"]}
          />
        </div>
        <div className={styles["item-account-info"]}>
          <div className={styles["info-top"]}>
            <h4 className={styles["result-name"]}>nhatnv1420</h4>
            <span className={styles["icon-verify"]}>
              <VerifyIcon />
            </span>
          </div>
          <h4 className={styles["result-name-profile"]}>Nhat Nguyen</h4>
        </div>
      </div>
      <div className={styles["result-item-account"]}>
        <div className={styles["item-account-avatar"]}>
          <CustomAvatar
            src="https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/161684580_2590122681288472_5013727967317194644_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rIvvjJOoUvoAX_tQoYm&_nc_ht=scontent.fhan14-2.fna&oh=00_AT8V8ES5jgzlPYu9doJtNYWHX4NnpW7faqFP7SkJdplbcQ&oe=62DE1ED0"
            alt=""
            className={styles["item-avatar-img"]}
          />
        </div>
        <div className={styles["item-account-info"]}>
          <div className={styles["info-top"]}>
            <h4 className={styles["result-name"]}>nhatnv1420</h4>
            <span className={styles["icon-verify"]}>
              <VerifyIcon />
            </span>
          </div>
          <h4 className={styles["result-name-profile"]}>Nhat Nguyen</h4>
        </div>
      </div>
      <div className={styles["serach-result-bottom"]}>
        <p className={styles["result-bottom-text"]}>
          Xem tất cả kết quả dành cho "nhat"
        </p>
      </div>
    </div>
  );
}

export default SearchResult;

interface SearchResultProps {
  data?: {}[];
}
