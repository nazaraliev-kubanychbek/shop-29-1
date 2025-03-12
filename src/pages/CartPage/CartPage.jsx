import { useSelector, useDispatch } from "react-redux";
import './cart.scss';
import { addCart, deleteCart, decrementCart } from "../../redux/reducer";

const CartPage = () => {
   const cartData = useSelector( s => s.reducer.cart );
   const dispatch = useDispatch();
    return (
        <div className="cart">
           <div className="container">
                {
                    cartData.map(item =>{
                        return      <div className="cart-item" key={item.id}>
                        <div className="cart-item-left">
                            <img src={item.image} alt="" />
                            <div>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                        <div className="cart-item-right">
                            <p className="cart-item-count"> 
                                 <button onClick={()=>{
                                    dispatch(addCart(item))
                                 }}>+</button>
                                <span>{item.count}</span>
                                <button onClick={()=>{
                                    dispatch(decrementCart(item.id))
                                }} >-</button>
                                </p>
                            <p className="cart-item-price">
                                ${(item.price * item.count).toFixed(2)}
                            </p>
                            <button onClick={()=>{
                                    dispatch(deleteCart(item.id))
                                }}>delete</button>
                        </div>
                    </div>
                    })
                }
                <br />
                    <p>Total: ${
                        cartData.reduce((acc, rec)=>{
                            return acc + (rec.count * rec.price)
                        }, 0)
                        }</p>
                        <br />
                        <br />
           </div>
        </div>
    );
}

export default CartPage;
