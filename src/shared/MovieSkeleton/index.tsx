import './styles.css'
import {CustomSkeleton} from "../CustomSkeleton";
export const MovieSkeleton = () => {
    return (
        <div className={'movie_skeleton'}>
            <CustomSkeleton width={'300px'} height={'270px'}/>
            <CustomSkeleton width={'230px'} height={'15px'}/>
            <CustomSkeleton width={'250px'} height={'15px'}/>
            <CustomSkeleton width={'270px'} height={'15px'}/>
        </div>
    );
};
