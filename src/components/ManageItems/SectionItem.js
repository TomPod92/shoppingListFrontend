import React from 'react';
import { FaTrash } from 'react-icons/fa';

import './manageItems.scss';

export const SectionItem = (props) => {
    const handleDeleteSection = () => {
        console.log(props.section._id)
        console.log(props.section.name)
    }

    return (
        <div className="manageItem sectionItem">
            <span>{props.section.name}</span>
            <div onClick={handleDeleteSection}>
                <FaTrash />
            </div>
        </div>
    )
};