import React from 'react'
import css from './ModalPhoto.module.css'

const ModalPhoto = ({ url, isModalOpen }) => {
    
    const handleClose = () => {
        isModalOpen(false)

    }

    return (
        <>
        <div className={css.modalOverlay} onClick={handleClose}>
            <div className={css.modal} onClick={(e)=>e.stopPropagation()}> 
                    <img src={url} className={ css.photo} />
            </div>
        </div>
    </>
    )
}

export default ModalPhoto