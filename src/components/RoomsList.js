import React from 'react'
import Room from './Room'

function RoomsList({rooms}) {
    if(rooms.length===0){
        return (
        <div className='empty-search'>
                <h3>unfortunately no rooms match your search parametrs</h3>
            </div>
            )

    }
    return (
    <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item=>{
                        return <Room key={item.id} room={item}/>
                    })
                }
            </div>
        </section>
    )
}

export default RoomsList
