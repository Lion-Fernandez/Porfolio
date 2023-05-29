import React from "react";
import {Spinner} from "reactstrap";

import SpinnerCss from "./Spinner.module.css";


function Loading (){
    return (
        <div>
            <div>
            <h2 color="red">Spinner corriendo</h2>
            </div>
            <div className={SpinnerCss.ctn} >
                <Spinner className={SpinnerCss.spin}/>
            </div>
            <div >
                <Spinner />
            </div>
        </div>
    );
}

export default Loading;