import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero'
import { RoomContext } from '../context'

function SingleRoom({match}) {
    const getRoom=useContext(RoomContext).getRoom
    let slug=match.params.slug
    let room=getRoom(slug)
    console.log(room);


    if(!room){
        return <div className="error">
            <h3>There is no such room</h3>
            <Link to='/rooms' className='btn-primary'>Back to Rooms Page</Link>
        </div>
    }

    const { name, breakfast, capacity, price, size, description, extras, images, pets} = room

    const [mainImg,...restImages]=images
    return (
        <>
            <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {
                        restImages.map((item,index)=>{
                            return <img src={item} alt={name} key={index}/>
                        })
                    }
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: {size} SQFT</h6>
                        <h6>capacity: max capacity: 
                            {
                                capacity>1?`${capacity} people`:`${capacity} person`
                            }
                        </h6>
                        <h6>{pets?'pets allowed':'no pets allowed'}</h6>
                        <h6>{breakfast && 'free breakfast includeded'}</h6>
                    </article>
                    
                </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {
                        extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })
                    }
                </ul>
            </section>
        </>
    )
}

export default SingleRoom
