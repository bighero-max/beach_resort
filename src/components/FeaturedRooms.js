import React, { useContext } from 'react'
import Room from './Room'
import Loading from '../components/Loading';
import Title from './Title';
import { RoomContext } from '../context';

function FeaturedRooms() {
    const [featuredRooms]=useContext(RoomContext).featured
    const [isLoading]=useContext(RoomContext).loading

    const displayRooms = featuredRooms.map(room=>{
        return <Room key={room.id} room={room}/>
    })

    return (
        <section className='featured-rooms'>
            <Title title='Featured rooms' />
            <div className="featured-rooms-center">
                {isLoading? <Loading/> : displayRooms}
            </div>
        </section>
    )
}

export default FeaturedRooms
