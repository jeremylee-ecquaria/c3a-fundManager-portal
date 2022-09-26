import branding from "../css/branding.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import {useRef} from "react";
import {debounce} from '../helpers';

function SearchBar(props) {
    const searchInputRef = useRef();

    function searchInput(){
        props.onSearch(searchInputRef.current.value)
    }
    const processChange = debounce(() => searchInput());

    return (
        <div className={branding.searchBarContainer}>
            <SearchIcon />
            <input type={"search"} className={branding.searchBar} placeholder="Search ..." ref={searchInputRef} onChange={processChange}/>
            {/*<button onClick={() => props.onSearch(searchInputRef.current.value)}>Search</button>*/}
        </div>
    );
}

export default SearchBar;