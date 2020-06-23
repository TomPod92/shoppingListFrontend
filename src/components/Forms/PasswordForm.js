import React, { useState } from 'react';

import { SectionHeader } from '../../components/SectionHeader/SectionHeader';

import './forms.scss';

export const PasswordForm = (props) => {
    const [ password, setPassword ] = useState('');
    const [ newPassword, setNewPassword ] = useState('');
    const [ newPassword2, setNewPassword2 ] = useState('');

    const handleChangeUserPassword = () => {
        props.closeForm();
    }

    return (
        <form className="changeForm" onSubmit={handleChangeUserPassword}>
            <SectionHeader name="Stare hasło" small />
            <input 
                className="changeForm__input" 
                type="text" 
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
            />

            <SectionHeader name="Nowe hasło" small />
            <input 
                className="changeForm__input" 
                type="text" 
                value={newPassword}
                required
                onChange={(event) => setNewPassword(event.target.value)}
            />

            <SectionHeader name="Powtórz nowe hasło" small />
            <input 
                className="changeForm__input" 
                type="text" 
                value={newPassword2}
                required
                onChange={(event) => setNewPassword2(event.target.value)}
            />

            <div className="changeForm__buttonContainer">
                <button className="changeForm__button changeButton">Zmień</button>
                <button className="changeForm__button cancelButton" onClick={props.closeForm}>Anuluj</button>
            </div>
        </form>
    )
};