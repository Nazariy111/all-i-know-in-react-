import React from 'react'
import css from './VanillaListItem.module.css'

const VanillaListItem = ({ photo , onModal, isModalOpen}) => {
    const { urls, description} = photo;
    const onPhotoClick = () => {
        onModal(urls.full);
        isModalOpen(true);
        
    }
    
    return (
        
        <img src={urls.small} alt={description} className={ css.photo} onClick={onPhotoClick}/>
        
    )
}

export default VanillaListItem