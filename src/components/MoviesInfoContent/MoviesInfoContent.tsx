import {ResultsCountInfo} from "./ResultsCountInfo/ResultsCountInfo.tsx";
import './style.css'
import {memo} from "react";
import {IMovie} from "../../types/MovieTypes.ts";
import {MovieCard} from "./MovieCard/MovieCard.tsx";
import {MovieSkeleton} from "../../shared/MovieSkeleton";

type Props = {
    data: IMovie | null
    searchTerm: string
    isLoading: boolean
}

export const MoviesInfoContent = memo(({data, searchTerm, isLoading}: Props) => {
    return (
        <body className={'movies_info_container'}>
        <ResultsCountInfo count={data?.totalResults ?? ''} searchTerm={searchTerm}/>
        <div className={'movies_info_list'}>
            {isLoading && [1,2,3,4,5,6,7,8].map(item => <MovieSkeleton key={item}/>)}
            {data?.Search?.map(movie => <MovieCard
                key={movie?.imdbID}
                id={movie?.imdbID}
                name={movie?.Title}
                poster={movie?.Poster}
                type={movie?.Type}
                year={movie?.Year}
            />)}
            {!data?.Search && <div className={'no_data'}>
                {searchTerm?.length ?
                    'По вашему запросу ничего не найдено. Попробуйте изменить критерии поиска или попробовать позже.' :
                    'Введите название фильма... '}
            </div>}
        </div>
        </body>
    );
});
