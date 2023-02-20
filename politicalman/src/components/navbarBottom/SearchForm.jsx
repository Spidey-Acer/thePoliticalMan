import React, { useState } from "react";
import "./searchForm.scss";

function SearchForm() {
    const [searchTerm, setSearchTerm] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        // handle the search functionality here
        console.log(`Search for ${searchTerm}...`);
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;
