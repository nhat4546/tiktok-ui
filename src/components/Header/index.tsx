import React, { ReactElement, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useDebouncedCallback } from 'use-debounce';

import { Logined, NotLogin, SearchResult } from './components';

import styles from './index.module.scss';
import logo from 'assets/img/tiktok-logo.png';
import searchIcon from 'assets/icon/search-icon.svg';
import loadingIcon from 'assets/icon/loading-icon.gif';
import closeIcon from 'assets/icon/close-icon.svg';
import { fakeData } from 'utils';

function Header() {
    const [isLogin, setIsLogin] = useState(false);
    const [searchValue, setValueSearch] = useState('');
    const [searchResult, setResultSearch] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    // delay call api
    const debounced = useDebouncedCallback(async (value) => {
        setLoading(true);
        const data: any = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fakeData);
            }, 1000);
        });
        if (data.length > 0) {
            setResultSearch(data);
        }
        setLoading(false);
    }, 500);

    const handleCloseInput = (e: any) => {
        // handle nổi bọt
        e.stopPropagation();

        setValueSearch('');
        inputRef.current?.focus();
        setIsShow(false);
    };

    useEffect(() => {
        if (searchValue) {
            debounced(searchValue);
        }
    }, [searchValue]);

    useEffect(() => {
        if (searchResult.length > 0) {
            setIsShow(true);
        }
    }, [searchResult]);

    useEffect(() => {
        const handleClick = () => {
            if (inputRef.current === document.activeElement) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        };
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className={styles.header}>
            <div className={clsx(styles.contanier, 'd-flex', 'justify-space-bettween', 'align-center')}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>

                {/* search */}
                <div className={styles['wrapper-search']}>
                    <div className={clsx(styles.search, 'd-flex')}>
                        <input
                            value={searchValue}
                            onChange={(e) => setValueSearch(e.currentTarget.value)}
                            type="text"
                            className={styles.input}
                            placeholder="Tìm kiếm tài khoản và video"
                            ref={inputRef}
                        />
                        <button className={styles['btn-search']}>
                            <img src={searchIcon} alt="" />
                        </button>
                        {loading ? (
                            <img src={loadingIcon} alt="" className={styles['loading-icon']} />
                        ) : (
                            <img src={closeIcon} alt="" className={styles['close-icon']} onClick={handleCloseInput} />
                        )}
                    </div>

                    {/* result search */}
                    {isShow && searchResult.length > 0 && <SearchResult list={searchResult} />}
                </div>
                <div className={styles.setting}>{isLogin ? <Logined /> : <NotLogin />}</div>
            </div>
        </div>
    );
}

export default Header;
