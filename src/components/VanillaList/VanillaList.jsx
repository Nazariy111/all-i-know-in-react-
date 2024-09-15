import React from 'react'
import VanillaListItem from '../VanillaListItem/VanillaListItem'
import css from './VanillaList.module.css'
import ModalPhoto from '../ModalPhoto/ModalPhoto'
import { useState } from 'react'

const VanillaList = ({ photos }) => {
    const [modalUrl, setModalUrl] = useState('');
    const [isModalPhotoOpen, setIsModalPhotoOpen] = useState(false);

    return (
        <div>
            <ul className={css.list}>
                {photos.map(photo =>
                (<li className={css.listItem} key={photo.id}>
                    <VanillaListItem
                        photo={photo}
                        onModal={setModalUrl}
                        isModalOpen={setIsModalPhotoOpen} />
                </li>))}
            </ul>
            {isModalPhotoOpen && <ModalPhoto
                url={modalUrl}
                isModalOpen={setIsModalPhotoOpen} />}
            
        </div>
        
    )
}

export default VanillaList