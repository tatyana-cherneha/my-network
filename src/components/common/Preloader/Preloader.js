import preloader from "../../../assets/img/preloading.gif";
import React from "react";
import './Preloader.scss';

let Preloader = () => {
    return(
        <div className='preloader'>
            <img src={preloader} alt='preloader' />
        </div>
    )
}

export default Preloader
