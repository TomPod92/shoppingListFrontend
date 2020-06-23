import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';

import './forms.scss';

export const PasswordForm = (props) => {
    const [ password, setPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ newPassword2, setNewPassword2 ] = useState('');
// -------------------------------------------------------------------
    const validateForm = () => {
        let valid = true;
    
        if(!password.trim() || password.trim().length <= 6) {
          toast.error(<Toast info="Podaj obecne hasło (minimum 7 znaków)"/>);
          valid = false;
        }

        if(!newPassword.trim() || newPassword.trim().length <= 6) {
          toast.error(<Toast info="Podaj nowe hasło (minimum 7 znaków)"/>);
          valid = false;
        }

        if(!newPassword2.trim() || newPassword2.trim().length <= 6) {
            toast.error(<Toast info="Powtórz nowe hasło (minimum 7 znaków)"/>);
            valid = false;
        }

        if(newPassword.trim() && newPassword2.trim() ) {
            if(newPassword.trim() !== newPassword2.trim()) {
                toast.error(<Toast info="Nowe hasła różnią się"/>);
                valid = false;
            }
        }
    
        return valid;
    }
// -------------------------------------------------------------------
    const handleChangeUserPassword = (event) => {
        event.preventDefault()
        if(!validateForm()) {
            return
        } else {
            console.log('zmien')
            // props.closeForm();
        }

    }
// -------------------------------------------------------------------
    return (
        <form className="changeForm" onSubmit={handleChangeUserPassword}>
            <SectionHeader name="Stare hasło" small />
            <input 
                className="changeForm__input" 
                type="text" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <SectionHeader name="Nowe hasło" small />
            <input 
                className="changeForm__input" 
                type="text" 
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
            />

            <SectionHeader name="Powtórz nowe hasło" small />
            <input 
                className="changeForm__input" 
                type="text" 
                value={newPassword2}
                onChange={(event) => setNewPassword2(event.target.value)}
            />

            <div className="changeForm__buttonContainer">
                <button className="changeForm__button changeButton">Zmień</button>
                <button className="changeForm__button cancelButton" onClick={props.closeForm}>Anuluj</button>
            </div>
        </form>
    )
};