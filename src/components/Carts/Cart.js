import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import "../../assets/styles/cart.css";
import { clearCart,removeItem } from '../../store/cartslice';


const Cart = () => {
  const item_list = useSelector((e) => e.items);
  const dispatch=useDispatch();
  console.log("e", item_list);

  return (
    <>
 
    <div className="cart-container">
          <div className="cart-header">
            <p><b><u>YOUR ITEMS LIST</u></b></p>
          </div>
        <div className="cart">
          {item_list.length === 0 ? (
          <div className="empty-cart-message">
            <p>Your cart is empty.</p>
            <p>Start adding items to your cart!</p>
          </div>
        ) 
        :
        (
          <>
            <button
              className="clear-cart-button"
              onClick={(e) => {
                  dispatch(clearCart(e))
              }}
            >
              Clear Cart
            </button>
{          item_list.map((item) => (
          <motion.div
            key={item.id}
            className="cart-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img className="item-image" src={item.image} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
            </div>
          <button 
                className='delete-button'  
                onClick={(e) => {
                  dispatch(removeItem(e))
              }}>
              DELETE
          </button>
          </motion.div>
        ))}
        </>)}
        </div>
    </div>
    </>
  );
};

export default Cart;
