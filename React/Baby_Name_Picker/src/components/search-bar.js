import babyNames from '../baby_names.json';
import NameLabel from './name_label';
import FavList from './fav';
import { useState } from "react";


const sortedBabyNames = babyNames.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

function SearchBar () {
    const [babies, setBabies] = useState(sortedBabyNames);
    const [favNames, setFavNames] = useState([]);
    console.log("favNames:" , favNames);

    const filterNames = e => {
        const favNamesSt = favNames.map(baby => baby.name);
        const kidName = e.target.value;
        setBabies(kidName === "" ? sortedBabyNames.filter(baby => !favNamesSt.includes(baby.name)) : babies.filter(baby => 
            baby.name.toLowerCase().includes(kidName.toLowerCase())))
    }

    const addToFav = (e) => {
        const babyID = e.target.id !== "" ? e.target.id : e.target.parentElement.id
        const selectedBaby = sortedBabyNames.find( baby => baby.id === Number(babyID) )
        const allFavNames = [...favNames, selectedBaby]
        setFavNames(allFavNames)

        setBabies( babies.filter(baby => baby.id !== selectedBaby.id) );
    }

    function rmFromFav (e) {
        console.log(e);
        const babyID = e.target.id !== "" ? e.target.id : e.target.parentElement.id
        const selectedBaby = sortedBabyNames.find( baby => baby.id === Number(babyID) )
        
        setFavNames(favNames.filter(baby => baby.id !== selectedBaby.id))
        console.log("favNames", favNames);

        const mainBabyList = [...babies, selectedBaby].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        setBabies(mainBabyList)
    }

    return (
        <div className="App">
            <input type="text" onChange={filterNames} placeholder="search my kid's name" className="search-bar"/>
            <FavList favNames={favNames} rmFav={rmFromFav}/>
            <div className="names-con">
                {
                    babies.map((baby, i) => {
                        return <NameLabel baby={baby} key={i} addFav={addToFav} />
                    })
                }
            </div>
        </div>
    )
}

export default SearchBar;