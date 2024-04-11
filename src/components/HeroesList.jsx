function HeroesList(props) {
    return (
        <div className="container">
            <img src={props.url} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.superpowers}</p>
            <p>{props.info}</p>
        </div>
    )
}

export default HeroesList