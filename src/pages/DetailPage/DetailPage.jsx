import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './detail.scss';

const DetailPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data})=>{setProduct(data)})
    }, [params])
    return (
        <div className="detail">
           <div className="container">

            <div className="row">
                <div className="col-6">
                    <img className="detail-img" src={product.image} alt="" />
                </div>
                <div className="col-6">
                    <h2 className="deatil-title">{product.title}</h2>
                    <p className="detail-description">{product.description}</p>
                    <p>{product.category}</p>
                    <button>buy</button>
                    <button onClick={()=>{
                        navigate(-1)
                    }}>go back</button>
                </div>
            </div>

           </div>
        </div>
    );
}

export default DetailPage;
