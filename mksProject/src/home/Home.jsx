import axios from "axios"
import { useState, useEffect } from "react"
import { Card } from "../card/Card";
import "./home.css";
import { Kart } from "../Kart/Kart";


export const Home = () => {

    
    const initialState = [];
    const [products, setProducts] = useState(initialState);


    const getApiData = async () => {

        await axios.get("https://api-get-1.onrender.com/")
            .then((res) => (setProducts(res.data)))
            .catch((err) => (console.log(err)));

    }
    useEffect(() => {

        getApiData();

    }, []);


    return (
        <>
        <div className="princ"  >
            {products.map((product) => (

                <Card key={product.id} photo={product.photo} id={product.id} name={product.name} brand={product.brand} description={product.description} price={product.price}/>
                
            ))}
        </div>
    
        </>
    )



}