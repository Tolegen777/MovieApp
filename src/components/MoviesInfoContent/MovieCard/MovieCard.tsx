import './style.css'

type Props = {
    name: string,
    year: string,
    id: string,
    type: string,
    poster: string
}
export const MovieCard = ({name, id, year, type, poster}: Props) => {
    return (
        <div className={'card_container'}>
            <div className={'card_img_wrapper'}>
                <img src={poster} alt="movie image"/>
            </div>
            <div className={'card_description'}>
                <p>Name: {name}</p>
                <p>Year: {year}</p>
                <p>imbdID: {id}</p>
                <p>Type: {type}</p>
            </div>
        </div>
    );
};
