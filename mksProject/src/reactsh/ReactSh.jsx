import { NavBar } from "../Nav/NavBar";
import { Home } from "../home/Home";
import "./rch.css";
import { Footer } from "../Nav/footer/Footer";
import { Kart } from "../Kart/Kart"
import {useState} from "react";



export const ReactSh = () => {

    const [ visible, setVisible ] = useState(false);



    const handleModeClick = (mod) => {

   setVisible(mod);

    }

    

    return(
        <div>
        < NavBar onClick={handleModeClick}  />
        < Home />
        < Kart visible={visible} onClick={handleModeClick}  />
        < Footer />
        </div>
    )

}