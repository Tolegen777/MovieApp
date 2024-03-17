import userIcon from './../../../assets/userIcon.svg'
import './style.css'

export const UserInfo = () => {
    return (
        <div className={'user_container'}>
            <img src={userIcon} alt="User icon"/>
            <p>Tolegen</p>
        </div>

    );
};
