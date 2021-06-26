import React from 'react';
import './search-box.css'
const SearchBox = ({placeholder,handlechange}) => {
    return ( <input
        type="search"
        placeholder={placeholder}
        onChange={handlechange} className="search"/>
    );
}
 
export default SearchBox;