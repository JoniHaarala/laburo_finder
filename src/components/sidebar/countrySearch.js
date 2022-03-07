import React, { useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';

function SidebarSearchBar({ placeholder, data }) { 
    
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        //searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="bg-white md:w-80 h-10 px-2 font-['roboto','sans-serif'] rounded-lg shadow flex items-center my-5 mx-1">
            <PublicIcon color="disabled" />
            <div className="text-black flex items-center w-full ">
                <input
                    className="px-4 w-full h-8 md:w-72  text-black rounded-lg text-md text-xs md:text-sm placeholder:text-xs"
                    type="text"
                    placeholder={placeholder}
                    data={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length !== 0 ? (
                        <CloseIcon className="cursor-pointer" id="clearBtn" onClick={clearInput} />

                    ) : ("")}
                </div>
            </div>
            
            {filteredData.length !== 0 && (

                <div className="mt-3 md:mt-6 w-full md:w-80 rounded-2xl min-h-min max-h-48 absolute bg-white shadow-md overflow-hidden overflow-y-visible text-xs md:text-sm">
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a key={value.id} href={'/information?id=' + value.id} className="w-full h-12 flex items-center text-black no-underline hover:bg-gray-200">
                                <p className="ml-3">{value.name} </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SidebarSearchBar;