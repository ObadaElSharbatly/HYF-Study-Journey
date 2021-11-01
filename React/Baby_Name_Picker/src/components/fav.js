import NameLabel from "./name_label";
import { favNames } from "./search-bar";

function FavList () {
    
    
    return (
        <div className="fav-con">
            <p>Click on your fav names to add to fav list</p>
            <div className="fav">
                {favNames.map((baby, i) => {
                    return <NameLabel baby={baby} key={i}/>
                })}
            </div>
            <hr/>
        </div>
    )
}

export default FavList;