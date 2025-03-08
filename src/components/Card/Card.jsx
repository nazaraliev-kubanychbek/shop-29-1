import './card.scss';

const Card = ({product}) => {
    return (
        <div className='card'>
            <img src={product.image} alt="" className="card-img" />

            <h4 className="card-title">{
            product.title.length > 30
            ? product.title.substr(0, 27).trim() + '...'
            : product.title
            }</h4>
            <p className='card-description'>{
            product.description.length > 30
            ? product.description.substr(0, 27).trim() + '...'
            : product.description
            }</p>

            <div className="card-block">
                <p className="card-price">{product.price}</p>

                <button className="card-btn">buy</button>
            </div>
        </div>
    );
}

export default Card;
