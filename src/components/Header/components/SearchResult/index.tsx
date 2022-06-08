import styles from './index.module.scss';
import searchIcon from 'assets/icon/search-icon.svg';
import clsx from 'clsx';

function SearchResult({ list }: SearchResultProps) {
    console.log('list', list);

    return (
        <div className={styles['wrapper-result']}>
            <div className={styles.contanier}>
                <div className={styles.list}>
                    <div className={styles['wrap-item']}>
                        {list?.map((item: item, index) => (
                            <div key={index} className={clsx('d-flex', 'align-center', styles.item)}>
                                <img src={searchIcon} alt="" className={styles.icon} />
                                <span className={styles.result}>{item?.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;

interface SearchResultProps {
    list?: {}[];
}

type item = {
    name?: string;
    id?: string | number;
};
