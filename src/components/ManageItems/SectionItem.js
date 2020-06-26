import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert';

import { removeSection } from '../../redux/actions/sections.actions';

import './manageItems.scss';

export const SectionItem = (props) => {
    const dispatch = useDispatch();

    const confirm = () => confirmAlert({  
        title: `Na pewno chcesz usunąc dział "${props.section.name}" i produkty, które się w nim znajdują?`,   
        buttons: [
            {
                label: "Tak",
                onClick: () => dispatch(removeSection(props.section._id))
            },
            {
                label: "Nie",
                onClick: () => {}
            }
        ]
      });

    return (
        <div className="manageItem sectionItem">
            <span>{props.section.name}</span>
            <div onClick={confirm}>
                <FaTrash />
            </div>
        </div>
    )
};