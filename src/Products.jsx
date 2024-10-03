import { useDispatch, useSelector } from "react-redux"
import { addCart, deleteCart } from "./Slice/ProdcutSlice/productSlice"
import { useState } from "react"


const Products = () => {
    const { products, cart } = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    
    const cartCount = eval(Object.values(cart).join('+'))
   
    return (
        <div>
            {show && <h1>Cart Count : {cartCount || 0}</h1>}
            <button onClick={() => { setShow(!show) }}>Show Cart</button>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {
                    products.map((product, i) => <div style={{ padding: '20px', border: 'solid 1px grey', borderRadius: '5px' }} key={i}>

                        <h3>{product}</h3>
                        <div > <button onClick={() => { dispatch(addCart(product)) }}>+</button>Add Cart <button onClick={() => { dispatch(deleteCart(product)) }}>-</button></div>
                    </div>)


                }
            </div>
            <ul>
                {
                    Object.entries(cart).map(([productname, count], i) => <li key={i}>{productname} : {count}</li>)
                }
            </ul>
        </div>
    )
}

export default Products