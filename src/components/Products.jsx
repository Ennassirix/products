import React from 'react'
import Product from './Product'
import { products } from '../Data'
export default function Products() {
    return (
        <div className="row">
            {
                products.map(product => {
                    return (
                        <div className="col col-lg-4 mb-3">
                            <Product title={product.title}  thumbnail={product.thumbnail} price={product.price} />
                        </div>
                    )
                })
            }

        </div>
    )
}
