import ShoeCard from './ShoeCard'
import ShoeData from "./DataList"
import { useState } from 'react'


export default function App() {

  const [ shoesUse, setShoes ] = useState(ShoeData)

  function toggle(id) {
     setShoes(prevShoes=>{
      return prevShoes.map(el=>{
        return el.id === id ? {...el, on: !el.on} : el
      })
     })
  }
  

  const shoes = shoesUse.map(shoe => {

    const style = shoe.on ? "scale" : "noScale";

    return (
        <ShoeCard 
          key= {shoe.id}
          image= {shoe.image}
          name= {shoe.name}
          size= {shoe.size}
          price= {shoe.price}
          scaleClass={style}
          handleClick= {()=>{toggle(shoe.id)}}
        />
    );
  })

  return (
    <div className='containerBody'>
      {shoes}
    </div>
  ) 
}


