import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { checkIfValidEmail } from '../../helpers/checkIfValidEmail';
import { updateUser } from '../../redux/actions/user.actions';

import './forms.scss';

export const EmailForm = (props) => {
    const [ email, setEmail ] = useState('');
    const [ email2, setEmail2 ] = useState('');
    const dispatch = useDispatch();
// -------------------------------------------------------------------
    const validateForm = () => {
        let valid = true;
    
        if(!email.trim() ) {
          toast.error(<Toast info="Podaj nowy adres email"/>);
          valid = false;
        } else if(!checkIfValidEmail(email)) {
            toast.error(<Toast info="Niepoprawny format email (nowy email)"/>);
            valid = false;
        }
        
        if(!email2.trim()) {
          toast.error(<Toast info="Podaj nowy adres email"/>);
          valid = false;
        }
        
        if(email.trim() && email2.trim() ) {
            if(email.trim() !== email2.trim()) {
                toast.error(<Toast info="Podane adresy email się różnią"/>);
                valid = false;
            }
        }
    
        return valid;
    }
// -------------------------------------------------------------------
    const handleChangeUserEmail = (event) => {
        event.preventDefault()
        if(!validateForm()) {
            return
        } else {
            dispatch(updateUser({ email: email }))
            props.closeForm();
        }
    }
// -------------------------------------------------------------------
    return (
        <form className="changeForm" onSubmit={handleChangeUserEmail}>
            <SectionHeader name="Nowy email" small />
            <input 
                className="changeForm__input" 
                type="text" 
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <SectionHeader name="Powtórz nowy email" small />
            <input 
                className="changeForm__input" 
                type="text" 
                value={email2}
                onChange={(event) => setEmail2(event.target.value)}
            />

            <div className="changeForm__buttonContainer">
                <button type="submit" className="changeForm__button changeButton">Zmień</button>
                <button type="button" className="changeForm__button cancelButton" onClick={props.closeForm}>Anuluj</button>
            </div>
            
        </form>
    )
};