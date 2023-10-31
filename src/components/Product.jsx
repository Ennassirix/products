import React from 'react'

export default function Product({ title, thumbnail, price }) {
    return (
        <div className="card" >
            <img src={`../assets/${thumbnail}`} alt="photo" />
            <div className="card-body">
                <h1 className="card-title">
                    {title}
                </h1>
                <p className="card-text">
                    {price}
                </p>
                <a href="" className='btn btn-primary'>Ajoute au panier</a>
            </div>
        </div>
    )
}
