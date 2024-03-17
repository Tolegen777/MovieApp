import './App.css'
import {Header} from "./components/Header/Header.tsx";
import {MoviesInfoContent} from "./components/MoviesInfoContent/MoviesInfoContent.tsx";
import {Pagination} from "./components/Pagination/Pagination.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {IMovie} from "./types/MovieTypes.ts";

const API_BASE_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8';

function App() {

    // Состояния компонента
    const [data, setData] = useState<IMovie | null>(null); // Для хранения полученных данных
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Пагинация
    const [searchTerm, setSearchTerm] = useState(''); // Поисковой запрос

    // Получаем данные
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Выполняем запрос к API с параметрами пагинации и поиска
                const response = await axios.get<IMovie>(API_BASE_URL, {
                    params: {
                        page: currentPage,
                        s: searchTerm
                    }
                });
                setData(response.data); // Обновляем данные полученными данными
            } catch (error) {
                console.log(error, 'ERROR')
            }
            setLoading(false);
        };

        fetchData(); // Вызываем функцию fetchData при монтировании компонента или при изменении currentPage или searchTerm
    }, [currentPage, searchTerm]);

    return (
        <div className={'app_container'}>
            <Header setSearchTerm={setSearchTerm}/>
            <MoviesInfoContent data={data} searchTerm={searchTerm} isLoading={loading}/>
            <Pagination
                currentPage={currentPage}
                lastPage={Math.ceil(parseInt(data?.totalResults ?? '') / 10) ?? ''}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default App
