import NameLabel from "./name_label";
// import { favNames } from "./search-bar";

function FavList ({favNames, rmFav}) {
    return (
        <div className="fav-con">
            <p>Click on your fav names to add to fav list</p>
            <div className="fav">
                {favNames.map((baby, i) => {
                    return (
                        <div onClick={rmFav} key={i}>
                            <NameLabel baby={baby} />
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}

export default FavList;