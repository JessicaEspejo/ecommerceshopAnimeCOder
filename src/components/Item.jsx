import React from 'react'
import "../App.css"
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'



function Item({ id, producto, precio, cantidad, img}) {

    function formatNumber(number){
        return new Intl.NumberFormat().format(number)
    }
    return (
        <>
            <div className=' mydiv animate-bg'>

     
            <div className="cardList sometxt" key={id}>
                <img src={img} className="img" alt="..." />
                <div className="card-body">
                <h5 className="card-title fw-bold">{producto}</h5>
                    <p className="card-text fw-bolder">Precio : ${formatNumber(precio)}</p>
                    <p className="card-text fw-bolder">Stock: {cantidad}</p>
                    <Link to={`/item/${id}`}>
                    <p className="btn btn-secondary">Detalles</p>
                    </Link>
                </div>
            </div>
            </div>
        </>
    )
}

export default Item