

export default function Die(props){

    return(<>
        <button className="dice" style={{ background: props.isHeld ? "#59E391" : "#FFFFFF"}}>{props.value}</button>
    </>)
}