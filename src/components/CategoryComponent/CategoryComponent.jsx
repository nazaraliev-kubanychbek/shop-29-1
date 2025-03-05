import axios from "axios";
import Card from '../Card/Card';
import { useState, useEffect } from "react";

const CategoryComponent = ({limit = null, category}) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios(
            limit
            ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}`
        )
        .then(({data}) => setData(data))
    },[])
    return (
        <div className="container">
            <br />
            <h2>{category}</h2>
            <br />
            <div className="row">
            {
                data.map(item =>{
                    return <div key={item.id} className="col-3">
                         <Card product={item} />
                    </div>
                })
            }
            </div>
            <br />
        </div>
    );
}

export default CategoryComponent;
