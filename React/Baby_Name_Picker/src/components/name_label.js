import boyLogo from '../img/boy-icon.png';
import girlLogo from '../img/girl-icon.png';

function NameLabel ({baby}) {
    const boy = baby.sex === "m";

    return (
        <div className="label" style=
        {boy ? 
        {"backgroundColor": "#6E91D7" , "color": "#15284D"} :
        {"backgroundColor": "pink", "color": "#830B79"}}>

            <img src={boy ? boyLogo : girlLogo} alt={boy ? "boy logo" : "girl logo"} width="20" height="20" />
            <p>{baby.name}</p>
        </div>
    )
}

export default NameLabel;