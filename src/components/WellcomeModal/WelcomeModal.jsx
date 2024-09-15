import React, { useEffect, useState } from 'react'
import css from './WelcomeModal.module.css'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { offWelcomeModal } from '../../redux/welcomeModal/welcomeModalSlice';
import { useNavigate } from 'react-router-dom';

const WelcomeModal = () => {
    const [value, setValue] = useState('');
    // const [isOpen, setIsOpen] = useState(false);
    const isOpen = useSelector(state => state.welcomeModalInfo.isWelcomeModal);

    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    

    const handleChange=(e)=>{
        const query = e.target.value;
        setValue(query)
    }

    const handleClose = () => {
        dispatch(offWelcomeModal());
        navigate("/", { replace: true });
    }

    useEffect(() => {
        if (value.toLowerCase() === "ready") {
            dispatch(offWelcomeModal());
            navigate("/", { replace: true });
            toast.success("u did it! yeeeeaaah");
        }
    },[value])

    return (
        <>
        {isOpen && <div className={css.modalOverlay} onClick={handleClose}>
            <div className={css.modal} onClick={(e)=>e.stopPropagation()}> 
                <button className={css.closeBtn} onClick={handleClose}>×</button>
                <h1>welcome to my app</h1>
                    <p className={css.text}>type <span className={css.span}>&quot;ready&quot;</span> if you are ready
                        <br /> or just click on the close button
                        <br/> or somewhere on the background
                </p>
                
                <input type="text" value={value} onChange={handleChange} />
            </div>
        </div>}
    </>
    )
    
    
}

export default WelcomeModal