import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineThunderbolt } from "react-icons/ai";
import css from "./ClickCounter.module.css";


const ClickCounter = () => {

    const [clicks, setClicks] = useState(11);

    const handlePlus = () => setClicks(clicks + 1);
    const handleMinus = () => setClicks(clicks - 1);
    
    useEffect(() => {
        if (clicks === 0) {
            toast.error("Sorry, the number of clicks can't be under zero");
        }
    },[clicks])
    

    return (
        <div className={css.Container}>
            <h3 className={css.Title}>CLICK COUNTER</h3>
            <p className={css.text}>
                <AiOutlineThunderbolt size={20} className={ css.icon} />number of clicks:
                <b>{clicks}</b>
            </p>
            <ul className={css.btnBox}>
                <li>
                    <button onClick={handlePlus}>+1</button>
                </li>
                <li>
                    <button onClick={handleMinus} disabled={clicks <= 0}>-1</button>
                </li>
            </ul>
            
            
            
        </div>
    )
}

export default ClickCounter