import arrowLeft from './../../assets/arrowLeft.svg'
import arrowRight from './../../assets/arrowRight.svg'
import './style.css'
import {memo} from "react";

type Props = {
    lastPage: number,
    currentPage: number
    setCurrentPage: (page: number) => void
}

// default pagination items
const items = [
    {
        value: 1,
        isActive: true
    },
    {
        value: 2,
        isActive: true
    },
    {
        value: 3,
        isActive: true
    },
    {
        value: '...',
        isActive: false
    }
]
export const Pagination = memo(({lastPage, setCurrentPage, currentPage}: Props) => {

    const paginationItems = lastPage ? [...items, {value: lastPage, isActive: true}] : items

    const preparedPaginationItems = paginationItems.map((item, index) => {
        if (item.isActive && index < 3 && currentPage !== lastPage) {
            return {
                ...item,
                value: currentPage + index
            }
        }
        if (currentPage === lastPage && index > 3) {
            return {
                ...item,
                value: currentPage
            }
        }
        return item
    })

    return (
        <footer className={'footer_container'}>
            <div className={'pagination_container'}>
                <div className={'pagination_item'} onClick={() => setCurrentPage(currentPage - 1)}>
                    <img src={arrowLeft} alt="arrowLeft icon"/>
                </div>
                {preparedPaginationItems.map(item => <div
                    key={item?.value}
                    className={`pagination_item ${currentPage === item?.value ? 'active' : ''}`}
                    onClick={() => {
                        if (item?.isActive) {
                            setCurrentPage(item?.value as number)
                        }
                    }}
                >
                    {item?.value}
                </div>)}
                <div className={'pagination_item'} onClick={() => setCurrentPage(currentPage + 1)}>
                    <img src={arrowRight} alt="arrowRight icon"/>
                </div>
            </div>
        </footer>
    );
});
