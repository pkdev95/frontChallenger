import "./card.css";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { productAdd } from "../redux/kart/actions";




export const Card = ({photo ,id, name, brand, description, price}) => {


const dispatch = useDispatch();


const handleAddClick = () => {

    dispatch(productAdd({photo ,id, name, brand, description, price}));

}

 const desc = description.substr(0,100);

    return(
        <div className="cd" id={id}>
            <div className="cdIn">
            <div className="img">
            <img className="pic" src={photo}/>
            </div>
            <div className="expositor">
            <h3 className="nm">{name}</h3>
            <h4 className="br">{brand}</h4>
            <h5 className="dsc">{desc}</h5>
            <div className="price">
            <button className="button" ><span> R$: {price}</span></button>
            </div>
            <div className="kartAddItem">
            <h4 onClick={handleAddClick}>Adicionar ao carrinho<TiShoppingCart size={23} className="kartAdd" /></h4>
            </div>
            </div>
            </div>
        </div>
    )
}