import babyNames from '../baby_names.json';
import NameLabel from './name_label';
import FavList from './fav';
import { useState } from "react";


const sortedBabyNames = babyNames.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
export const favNames = [];

function SearchBar () {
    const [babies, setBabies] = useState(sortedBabyNames);  

    const filterNames = e => {
        const kidName = e.target.value;
        setBabies(kidName === "" ? sortedBabyNames : sortedBabyNames.filter(baby => 
            baby.name.toLowerCase().includes(kidName.toLowerCase())))
    }

    const addRemoveFromFav = (e) => {
        const babyID = e.target.id !== "" ? e.target.id : e.target.parentElement.id
        const selectedBaby = babies.find( baby => baby.id === Number(babyID) )
        const selectedBabyIndex = babies.indexOf(selectedBaby);
        console.log("index:", selectedBabyIndex);

        favNames.push(selectedBaby);
        console.log("favNames:", favNames);

        setBabies( babies.filter(baby => baby.id !== selectedBaby.id) );
        console.log("babies:", babies);
    }

    return (
        <div className="App">
            <input type="text" onChange={filterNames} placeholder="search my kid's name" className="search-bar"/>
            <FavList />
            <div className="names-con">
                {
                    babies.map((baby, i) => {
                        return <NameLabel baby={baby} key={i} addFav={addRemoveFromFav} />
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar;