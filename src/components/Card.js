import React from 'react'

const Card = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example</p>
                <div>
                    <select className='m-2 h-100 w-100 bg-success rounded'>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })
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
    )
}

export default Card