import React, { useContext } from 'react'
import { RoomContext } from '../context'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

function RoomsContainer() {
    const contextData=useContext(RoomContext)
    const[rooms]=contextData.allRooms
    const [sortedRooms]=contextData.sorted
    return (
        <div>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    )
}

export default RoomsContainer
