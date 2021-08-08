import React, { createContext, useEffect, useState } from 'react'
import {items} from './data'
export const RoomContext= createContext()

const RoomProvider=({children})=>{
    const[rooms,setRooms]= useState([])
    const [isLoading,setLoading]=useState(false)
    const [featuredRooms,setFeaturedRooms]=useState([])
    const [sortedRooms,setSortedRooms]=useState([])
    const [price,setPrice]=useState(0)
    const [maxPrice,setMaxPrice]=useState(0)
    const [maxSize,setMaxSize]=useState(0)
    const [minPrice,setMinPrice]=useState(0)
    const [minSize,setMinSize]=useState(0)
    const [pets,setPets]=useState(false)
    const [breakfast,setBreakfast]=useState(false)
    const [type,setType]=useState('all')
    const [capacity,setCapacity]=useState(0)

    useEffect(()=>{
        let rooms = formatData(items)
        let featured=rooms.filter(el=> el.featured===true)
        let maxPrice=Math.max(...rooms.map(item=> item.price))
        let maxSize=Math.max(...rooms.map(item=> item.size))
        setRooms(rooms)
        setFeaturedRooms(featured)
        setSortedRooms(rooms)
        setPrice(maxPrice)
        setMaxPrice(maxPrice)
        setMaxSize(maxSize)
    },[])

    const formatData=(items)=>{
        let tempItems=items.map(item=>{
            let id=item.sys.id;
            let images=item.fields.images.map(image=> image.fields.file.url)
            let room = {...item.fields,images,id}
            return room
        })
        return tempItems
    }

    const getRoom=(slug)=>{
        let tempRooms=[...rooms];
        const room=tempRooms.find(el=> el.slug === slug)
        return room
    }
    

    const contextData={
        allRooms: [rooms, setRooms],
        loading: [isLoading, setLoading],
        featured: [featuredRooms, setFeaturedRooms],
        sorted: [sortedRooms, setSortedRooms],
        maxPrice: [maxPrice, setMaxPrice],
        maxSize: [maxSize,setMaxSize],
        minPrice: [minPrice,setMinPrice],
        minSize: [minSize,setMinSize],
        price: [price,setPrice],
        pets: [pets,setPets],
        breakfast: [breakfast,setBreakfast],
        type: [type, setType],
        capacity: [capacity, setCapacity],
        getRoom
    }

    useEffect(() => {
        let filtered = rooms.filter(room => {
            let byType = type === 'all' ? true : room.type === type ? true : false
            let byBreakfast = room.breakfast === breakfast
            let byPets = room.pets === pets
            let byCapacity = room.capacity >= capacity
            let byPrice= room.price <= price
            let bySize= room.size>=minSize && room.size<=maxSize
            let defaultParams = byType && byPrice && bySize
            if(breakfast){
                defaultParams= defaultParams && byBreakfast
            }
            if(pets){
                defaultParams= defaultParams && byPets
            }
            if(capacity !==1){
                defaultParams= defaultParams && byCapacity
            }
            return defaultParams
        })
        setSortedRooms(filtered)
    }, [type, breakfast, pets, capacity,price,minSize,maxSize,rooms])
    return(
        <RoomContext.Provider value={contextData}>
            {children}
        </RoomContext.Provider>
    )
}
export default RoomProvider;