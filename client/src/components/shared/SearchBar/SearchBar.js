import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './SearchBar.scss';

const SearchBar = ({setQuery}) => {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(inputRef.current.value);
    }

    return (
        <form className='search-bar' onSubmit={handleSubmit}>
            <input type="text" className="search-bar-field" name="query" ref={inputRef} />
            <input type="submit" value="Search" className="search-bar-submit" />
        </form>
    );
}

export default SearchBar;
