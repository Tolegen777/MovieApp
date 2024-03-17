import './style.css'

type Props = {
    searchTerm: string
    count: string
}
export const ResultsCountInfo = ({count, searchTerm}: Props) => {
    return (
        <div className={'results_count_wrapper'}>
            <p>You searched for:</p>
            <p className={'search_text'}>{searchTerm}</p>
            <div className={'results_count_info'}>
                {count} results
            </div>
        </div>
    );
};
