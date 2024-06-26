import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

const Home = () => {

    const [foodCat, setFoodCat] = useState([])
    const [foodItems, setFoodItems] = useState([])

    const fetchFoodData = async () => {
        try {
            const responce = await fetch("http://localhost:5000/api/foodData")
            const json = await responce.json()
            setFoodItems(json?.foodItems)
            setFoodCat(json?.foodCategory)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchFoodData()
    }, [])

    return (
        <div>
            <div>
                <Carousal />
            </div>
            <div className='m-3'>
                {
                    foodCat.map((category, index) => {
                        return (
                            <>
                                <div key={index} className='container fs-3 m-3'>
                                    <h3 className='text-white'>{category?.CategoryName}</h3>
                                </div>
                                {
                                    foodItems?.filter((filterItem) => filterItem?.CategoryName === category.CategoryName)?.map((filterItems, index) => {
                                        return (
                                            <>
                                                <h1 key={index} className='text-white'>{filterItems.description}</h1>
                                                <Card key={index} foodItem={filterItems} />
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    })

                }
                {/* <Card /> */}
            </div>
        </div>
    )
}

export default Home