import React from 'react'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

const Home = () => {
    return (
        <div>
            <div>
                <Carousal />
            </div>
            <div className='m-3'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home