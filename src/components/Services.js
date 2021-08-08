import React, { useState } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title'

function Services() {
    const [serviceData]=useState([
        {
            icon: <FaCocktail/>,
            title: 'Free Cocktails',
            info: 'There are content which describes services features '
        },
        {
            icon: <FaHiking/>,
            title: 'Free Hiking',
            info: 'There are content which describes services features '
        },
        {
            icon: <FaShuttleVan/>,
            title: 'Free Shuttle',
            info: 'There are content which describes services features '
        },
        {
            icon: <FaBeer/>,
            title: 'Free Beer',
            info: 'There are content which describes services features '
        }
    ])
    return (
        <div className="services">
                <Title title='Services' />
                <div className="services-center">
                    {
                        serviceData.map((item,index)=>{
                            return <article key={index} className='service'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })
                    }
                </div>
        </div>
    )
}

export default Services
