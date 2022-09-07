import Button from '@mui/material/Button';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState } from 'react';


const SearchModule = ({ setSearch, type = "company" }) => {
    let searchState;
    const handleOnSearch = (string) => {
        searchState = string;
    }
    const sendState = () => {
        if (searchState) {
            setSearch(searchState)
        }
    }
    return (
        <div>
            <ReactSearchAutocomplete
                onSearch={handleOnSearch}
                showNoResults={false}
                autoFocus={true}
                placeholder='Enter search term..'
            />
            <Button variant="contained" onClick={sendState}>Search!</Button>
        </div>
    )
}
export default SearchModule