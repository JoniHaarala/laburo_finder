import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

function Searchbar({ query, setQuery, placeholder, setStyles }) {

    const [searchText, setSearchText] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setSearchText(e.target.value);
        setQuery(e.target.value)
    }

    const clearInput = () => {
        setSearchText("");
        setQuery("")
    };

    return (
        <div className="px-2 flex items-center justify-between w-full sm:h-8 text-sm">
            <input
                className={setStyles}
                onChange={handleChange}
                type="text"
                value={query}
                placeholder={placeholder}
            />
            {
                searchText.length > 0
                    ? <CloseIcon className="cursor-pointer" onClick={clearInput} />
                    : <SearchIcon />
            }
        </div>

    );
}

export default Searchbar;


// const SearchBar = ({ placeholder, data }) => {
//     const [filteredData, setFilteredData] = useState([]);
//     const [wordEntered, setWordEntered] = useState("");

//     const handleFilter = (event) => {
//         const searchWord = event.target.value;
//         setWordEntered(searchWord);
//         const newFilter = data.filter((value) => {
//             return value.name.toLowerCase().includes(searchWord.toLowerCase());
//         });

//         //searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
//         if (searchWord === "") {
//             setFilteredData([]);
//         } else {
//             setFilteredData(newFilter);
//         }
//     };

//     const clearInput = () => {
//         setFilteredData([]);
//         setWordEntered("");
//     };

//     return (
//         // para mejor calidad q la imagen de fondo sean de esa url y de 5120x1440
//         <div className="flex justify-between h-10 w-3/4 md:h-14 px-2 md:px-4 bg-white items-center self-center">
//             <WorkOutlineIcon />
//             <input type="text" className="px-2 w-2/3 sm:w-4/5 sm:h-8 text-sm placeholder:text-xs placeholder:text-center" placeholder={placeholder} data={"wordEntered"} onChange={handleFilter}></input>
//             <CloseIcon className="cursor-pointer" onClick={clearInput} />
//             <button className=" h-7 w-16 md:h-11 sm:w-1/6 sm:text-sm bg-blue-400 text-center text-white text-xs">Buscar</button>
//         </div>
//     );
// }

// export default SearchBar;