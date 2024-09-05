import React, { useEffect, useState } from 'react'
import css from './WelcomeModal.module.css'
import toast from 'react-hot-toast';

const WelcomeModal = () => {
    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    const handleChange=(e)=>{
        const query = e.target.value;
        setValue(query)
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        if (value.toLowerCase() === "ready") {
            setIsOpen(false);
            toast.success("u did it! yeeeeaaah");
        }
    },[value])

    return (
        <>
        {isOpen && <div className={css.modalOverlay} onClick={handleClose}>
            <div className={css.modal} onClick={(e)=>e.stopPropagation()}> 
                <button className={css.closeBtn} onClick={handleClose}>×</button>
                <h1>welcome to my app</h1>
                    <p>type <span className={css.span}>&quot;ready&quot;</span> if you are ready<br/> or just click on the close button
                </p>
                
                <input type="text" value={value} onChange={handleChange} />
            </div>
        </div>}
    </>
    )
    
    
}

export default WelcomeModal