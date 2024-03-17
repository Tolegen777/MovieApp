import {Logo} from "./Logo/Logo.tsx";
import {Search} from "./Search/Search.tsx";
import {UserInfo} from "./UserInfo/UserInfo.tsx";
import './style.css'
import {memo} from "react";

type Props = {
    setSearchTerm: (searchTerm: string) => void
}
export const Header = memo(({setSearchTerm}: Props) => {
    return (
        <header className={'header_container'}>
            <Logo/>
            <Search setSearchTerm={setSearchTerm}/>
            <UserInfo/>
        </header>
    );
});
