import { useMemo } from "react";
import { TiShoppingCart } from "react-icons/ti";
import "./navBar.css";
import { RiNumber0 } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectProductsCount } from "../redux/kart/kart.selectors";







export const NavBar = ({onClick}) => {

const {products} = useSelector(rootReducer => rootReducer.kartReducer);


const productsCount = useSelector(selectProductsCount);



    return(
<div className="navBar">
<h2 className="title"> <FaReact /> React <span className="sp">Shopping </span></h2>
<div className="boxCart" onClick={ () => onClick(true)}>
<div className="boxCartSingle">
<TiShoppingCart className="cart" size={32}/>
<span className="qtd">({productsCount})</span>
</div>
</div>
</div>
    )
}