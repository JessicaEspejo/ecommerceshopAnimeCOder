import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ productos }) => {
    function formatNumber(number){
        return new Intl.NumberFormat().format(number)
    }

    return (
        <div>
            {productos.map((prod, img) => {
                return (
                    <div className=" gradient-border  ">
                        <div className="box">
                    <div className="card cardDetail " key={prod.id}>
                        <img
                            src={prod.img}
                            className=" img"
                            alt="..."
                        />
                        <div className="card-body bg-war">
                            <h5 className="card-title fw-bold">{prod.producto}</h5>
                            <p className="card-text fw-bolder">
                                Precio: ${formatNumber(prod.precio)}
                            </p>
                            <p className="card-text">Descripcion: {prod.descripcion}</p>
                            <p className="card-text fw-bolder">Stock: {prod.cantidad}</p>
                            <ItemCount stock={prod.cantidad} />
                            <Link to={"/cart"}>
                                <button className="btn btn-secondary">Agregar al carrito</button>
                            </Link>
                        </div>
                    </div>
                    </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemDetail;
