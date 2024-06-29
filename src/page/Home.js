import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Home = () => {
    const [search, setSearch] = useState('')
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
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <div className='d-flex justify-content-center'>
                            <input className='form-control me-2' type='search' placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />
                            {/* <button className='btn btn-outline-success text-white bg-success'>search</button> */}
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://awik.io/wp-content/uploads/2024/03/process-img-nodejs-sharp.jpg" className="d-block h-50 w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://awik.io/wp-content/uploads/2024/03/find-kill-port2-med.jpg" className="d-block h-50 w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://awik.io/wp-content/uploads/2023/08/writefile.jpg" className="d-block h-50 w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container fs-3'>
                {
                    foodCat.map((category, index) => {
                        return (
                            <div className='row mb-3'>
                                <div key={index} >
                                    <h3 className='text-white'>{category?.CategoryName}</h3>
                                </div>
                                {
                                    foodItems?.filter((filterItem) => (filterItem?.CategoryName === category.CategoryName) && (filterItem.name.toLowerCase().includes(search)))?.map((filterItems, index) => {
                                        return (
                                            <div className='col-12 col-md-6 col-lg-3'>
                                                <Card key={index} foodItem={filterItems} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })

                }
                {/* <Card /> */}
            </div>
        </div>
    )
}

export default Home