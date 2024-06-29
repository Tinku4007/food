import React, { useEffect, useRef, useState } from 'react';
import { CartProvider, useCart, useDispatch } from './ContextReducer';
import { Link } from 'react-router-dom';

const Card = ({ foodItem }) => {
    const data = useCart()
    const sizeRef = useRef()
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const options = foodItem.options[0]
    let priceOptions = Object.keys(options)
    let finalPrice = qty * parseInt(options[size])

    const handleAddTocart = async () => {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: foodItem.img })
        console.log(data)
    }


    useEffect(() => {
        if (sizeRef) {
            return setSize(sizeRef.current.value)
        }
    }, [])

    const isItemInCart = data.some(item => item.id === foodItem._id);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={foodItem?.img} className="card-img-top" alt={foodItem?.name || "Food item"} style={{ height: '140px', objectFit: "fill" }} />
            <div className="card-body">
                <h5 className="card-title">{foodItem?.name}</h5>
                <p className="card-text">Some quick example text</p>
                <div>
                    <select onChange={(e) => setQty(e.target.value)}>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                )
                            })
                        }
                    </select>
                    <select ref={sizeRef} className='m-2 h-100 bg-success rounded' onChange={(e) => setSize(e.target.value)}>
                        {
                            priceOptions?.map((item) => {
                                return (
                                    <option key={item} value={item}>{item}</option>

                                )
                            })
                        }
                    </select>
                    <div className='d-inline h-100 fs-5'>
                        ₹{finalPrice}/
                    </div>
                    <hr />
                    {
                        isItemInCart ?
                            <Link to={'/cart'} className={`btn btn-success justify-content-center ms-2`}>Go to Cart</Link>
                            :
                            <div className={`btn btn-success justify-content-center ms-2`} onClick={handleAddTocart}>Add to Cart</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;
