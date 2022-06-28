import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react";

import Popper from "components/common/Popper";
import SearchResult from "../SearchResult";

import { useDebouned } from "hooks";
import * as searchService from "service/searchService";
import { CloseIcon, SearchIcon, LoadingIcon } from "components/Icons";
import styles from "./Search.module.scss";

function Search() {
    const [searchResult, setSearchResult] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowResult, setIsShowResult] = useState(true);

    const [valueInput, setValueInput] = useState("");
    const wrapInputRef = useRef<any>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const debounedInput = useDebouned(valueInput, 500);

    const handleFocusInput = () => {
        wrapInputRef.current.classList.add(styles.focused);
        if (searchResult) {
            setIsShowResult(true);
        }
    };

    const handleClickOutSide = () => {
        setIsShowResult(false);
    };

    const handleBlurInput = () => {
        wrapInputRef.current.classList.remove(styles.focused);
    };

    const handleClearInput = () => {
        inputRef.current?.focus();
        setValueInput("");
        setSearchResult([]);
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = e.target.value;
        if (!valueInput.startsWith(" ")) {
            setValueInput(e.currentTarget.value);
        }
    };

    useEffect(() => {
        if (!valueInput) {
            setSearchResult([]);
        }
    }, [valueInput]);

    useEffect(() => {
        const searchData = async (value: any) => {
            setIsLoading(true);
            const params = {
                q: value,
                type: "less",
            };
            const [result, error] = await searchService.search(params);

            if (error) {
                return;
            }

            setSearchResult(result.data);
            setIsLoading(false);
        };

        if (debounedInput) {
            searchData(debounedInput);
        }
    }, [debounedInput]);

    return (
        <div className={styles["header-form-search"]} ref={wrapInputRef}>
            <Tippy
                visible={isShowResult && searchResult.length > 0}
                interactive
                // content={
                //   isShowResult &&
                //   searchResult.length > 0 && (
                //     <Popper tabIndex={-1}>
                //       <SearchResult data={searchResult} />
                //     </Popper>
                //   )
                // }
                render={(attrs) =>
                    isShowResult &&
                    searchResult.length > 0 && (
                        <Popper {...attrs} tabIndex={-1}>
                            <SearchResult data={searchResult} />
                        </Popper>
                    )
                }
                onClickOutside={handleClickOutSide}
            >
                <div className={styles["form-search"]}>
                    <input
                        type="text"
                        className={styles["form-input"]}
                        placeholder="Tìm kiếm tài khoản và videos"
                        value={valueInput}
                        onChange={handleChangeInput}
                        onFocus={handleFocusInput}
                        onBlur={handleBlurInput}
                        ref={inputRef}
                    />
                    <div className={styles["wrap-btn"]}>
                        {isLoading ? (
                            <button className={styles["btn-close"]}>
                                <LoadingIcon className={styles["icon-loading"]} />
                            </button>
                        ) : (
                            valueInput && (
                                <button className={styles["btn-close"]} onClick={handleClearInput}>
                                    <CloseIcon className={styles["icon-close"]} />
                                </button>
                            )
                        )}
                        <span className={styles["span-spliter"]}></span>
                        <button className={styles["btn-search"]}>
                            <SearchIcon className={styles["btn-search-icon"]} />
                        </button>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
