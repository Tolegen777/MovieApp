import searchIcon from './../../../assets/searchIcon.svg'
import './style.css'
import {ChangeEvent, memo, useState} from "react";

type Props = {
    setSearchTerm: (searchTerm: string) => void
}
export const Search = memo(({setSearchTerm}: Props) => {
    const [timer, setTimer] = useState(null);
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        setInputValue(value)

        // Очищаем предыдущий таймер
        if (timer) {
            clearTimeout(timer);
        }

        // Устанавливаем новый таймер для задержки изменения ввода
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const newTimer: NodeJS.Timeout = setTimeout(() => {
            console.log('Значение ввода:', value); // Можно заменить на нужное действие
            setSearchTerm(value);
            // Делайте здесь что угодно с введенным значением, например, вызывайте API
        }, 500); // Настройте задержку задержки (в миллисекундах) по вашему усмотрению

        // Обновляем состояние таймера
        setTimer(newTimer);
    };


    return (
        <div className={'search_container'}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
                placeholder={'Введите текст'}/>
            <img src={searchIcon} alt="Search icon"/>
        </div>

    );
});
