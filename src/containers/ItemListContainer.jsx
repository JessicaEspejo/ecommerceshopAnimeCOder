import React, { useEffect }  from "react";
import ItemList from "../components/ItemList";
import "../App.css"
import { useParams } from "react-router-dom";
import Info from "../../data.json"



const ItemListContainer = () =>{
    
    const { categoryid } = useParams();
    const itemFilter = Info.filter((product) =>product.category === categoryid)
    return(
        <>
            {categoryid ? <ItemList product={itemFilter}/> : <ItemList product={Info}/>}
        </>
    );
}

export default ItemListContainer;
