import React, { useEffect, useRef, useState } from "react";
import Tippy from "@tippyjs/react";

import Popper from "components/common/Popper";
import SearchResult from "../SearchResult";
import { HanldeUseDebound } from "utils";

import { CloseIcon, SearchIcon, LoadingIcon } from "components/Icons";
import styles from "./Search.module.scss";

function Search() {
  const [searchResult, setSearchResult] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowResult, setIsShowResult] = useState(true);

  const [valueInput, setValueInput] = useState("");
  const wrapInputRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const callApi = async (value: any) => {
    setIsLoading(true);
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([1, 2, 3]);
      }, 1000);
    });
    setSearchResult(result);
    setIsLoading(false);
  };

  const debounced = HanldeUseDebound(callApi, 500);

  const handleFocusInput = () => {
    wrapInputRef.current.classList.add(styles.focused);
    if (searchResult) {
      setIsShowResult(true);
    }
  };

  const handleClickOutSide = () => {
    wrapInputRef.current.classList.remove(styles.focused);
    setIsShowResult(false);
  };

  const handleClearInput = () => {
    inputRef.current?.focus();
    setValueInput("");
    setIsShowResult(false);
    setSearchResult([]);
  };

  useEffect(() => {
    if (valueInput) {
      debounced(valueInput);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueInput]);

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
            placeholder="Tìm kiếm tài khoản và video"
            value={valueInput}
            onChange={(e) => setValueInput(e.currentTarget.value)}
            onFocus={handleFocusInput}
            ref={inputRef}
          />
          <div className={styles["wrap-btn"]}>
            {isLoading ? (
              <button className={styles["btn-close"]}>
                <LoadingIcon className={styles["icon-loading"]} />
              </button>
            ) : (
              valueInput && (
                <button
                  className={styles["btn-close"]}
                  onClick={handleClearInput}
                >
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
