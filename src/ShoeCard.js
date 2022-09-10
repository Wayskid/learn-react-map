

export default function ShoeCard(props) {
  return (
    <div id="shoeCard" className={props.scaleClass} onClick={props.handleClick}>
        <img src={`images/${props.image}`} className="image" />
        <div className="details">
            <h2>{props.name}</h2>
            <p>Size: {props.size}</p>
            <h3>${props.price}</h3>
            <button>Add To Cart</button>
        </div>
    </div>
  )
}

