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
            <div className={styles["account-title-small"]}>Tài khoản</div>
            {data?.map((item: any) => (
                <div className={styles["result-item-account"]} key={item.id}>
                    <div className={styles["item-account-avatar"]}>
                        <CustomAvatar src={item?.avatar} alt={item?.first_name} className={styles["item-avatar-img"]} />
                    </div>
                    <div className={styles["item-account-info"]}>
                        <div className={styles["info-top"]}>
                            <h4 className={styles["result-name"]}>{item.nickname}</h4>
                            {item.tick && (
                                <span className={styles["icon-verify"]}>
                                    <VerifyIcon />
                                </span>
                            )}
                        </div>
                        <h4 className={styles["result-name-profile"]}>{item.full_name}</h4>
                    </div>
                </div>
            ))}
            <div className={styles["serach-result-bottom"]}>
                <p className={styles["result-bottom-text"]}>Xem tất cả kết quả dành cho "nhat"</p>
            </div>
        </div>
    );
}

export default SearchResult;

interface SearchResultProps {
    data?: {}[];
}
