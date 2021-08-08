import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

function RoomsFilter({rooms}) {
    const getUnique=(items,value)=>{
        return [...new Set(items.map(item => item[value]))]
    }
    const contextData=useContext(RoomContext)
    const [type,setType]=contextData.type
    const [breakfast, setBreakfast]=contextData.breakfast
    const [pets, setPets]=contextData.pets
    const [capacity, setCapacity] = contextData.capacity
    const [minPrice] = contextData.minPrice
    const [maxPrice] = contextData.maxPrice
    const [price, setPrice] = contextData.price
    const [minSize, setMinSize]=contextData.minSize
    const [maxSize, setMaxSize]=contextData.maxSize

    // mapping types jsx
    let types=getUnique(rooms,'type')
    types=['all',...types]
    types=types.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    // mapping guests jsx
    let guests = getUnique(rooms, 'capacity')
    guests= guests.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    // filtering rooms by type
    const typeHandler=(e)=>{
        setType(e.target.value)
    }
    // filtering rooms by breakfast
    const breakfastHandler=(e)=>{
        setBreakfast(e.target.checked);
    }
    //filtering rooms by pets
    const petsHandler=(e)=>{
        setPets(e.target.checked)
    }

    //filtering rooms by capacity
    const capacityHandler=(e)=>{
        setCapacity(e.target.value)
    }

    //filtering rooms by price
    const priceHandle=(e)=>{
        setPrice(e.target.value)
    }

    //filter by sizes
    const minSizeHandler=(e)=>{
        setMinSize(e.target.value)
    }
    const maxSizeHandler=(e)=>{
        setMaxSize(e.target.value)
    }
    
   
    return (
        <section className="filter-container">
            <Title title='search rooms'/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room  type</label>
                    <select onChange={typeHandler} className='form-control'  name="type" id="type" value={type}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="type">guests</label>
                    <select onChange={capacityHandler} className='form-control'  name="capacity" id="capacity" value={capacity}>
                        {guests}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input className='form-control' type="range" name="price" id="price" min={minPrice} max={maxPrice} value={price} onChange={priceHandle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="ssize">Room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} className='size-input' onChange={minSizeHandler} />
                        <input type="number" name="maxSize" id="size" value={maxSize} className='size-input' onChange={maxSizeHandler} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" checked={breakfast} onChange={breakfastHandler} name="breakfast" id="breakfast" />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div> 
                    <div className="single-extra">
                        <input type="checkbox" checked={pets} onChange={petsHandler} name="pets" id="pets" />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default RoomsFilter
