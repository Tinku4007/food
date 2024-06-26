import React from 'react';

const Card = ({ foodItem }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={foodItem?.img} className="card-img-top" alt={foodItem?.name || "Food item"} />
            <div className="card-body">
                <h5 className="card-title">{foodItem?.name}</h5>
                <p className="card-text">Some quick example text</p>
                <div>
                    <select className='m-2 h-100 w-100 bg-success rounded'>
                        {
                            foodItem?.options?.map((item, index) => (
                                <option key={index} value={item.full}>{item.full}</option>
                            ))
                        }
                    </select>
                    <select className='m-2 h-100 w-100 bg-success rounded'>
                        <option value='half'>Half</option>
                        <option value='full'>Full</option>
                    </select>
                    <div className='d-inline h-100 fs-5'>
                        Total Price
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
