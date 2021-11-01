import babyNames from '../baby_names.json';
import NameLabel from './name_label';
import { useState } from "react";
const sortedBabyNames = babyNames.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

function SearchBar () {
    const [babies, setBabies] = useState(sortedBabyNames);   
    const filterNames = e => {
        const kidName = e.target.value;
        setBabies(kidName === "" ? sortedBabyNames : sortedBabyNames.filter(baby => 
            baby.name.toLowerCase().includes(kidName.toLowerCase())))
    }
    
    return (
        <div className="App">
            <input type="text" onChange={filterNames} placeholder="search my kid's name" className="search-bar"/>
            <div className="names-con">
                {
                    babies.map((baby, i) => {
                        return <NameLabel baby={baby} key={i}/>
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar;