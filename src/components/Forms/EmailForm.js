import React, { useState } from 'react';

import { SectionHeader } from '../../components/SectionHeader/SectionHeader';

import './forms.scss';

export const EmailForm = (props) => {
    const [ email, setEmail ] = useState('');
    const [ email2, setEmail2 ] = useState('');

    const handleChangeUserEmail = () => {
        props.closeForm();
    }

    return (
        <form className="changeForm" onSubmit={handleChangeUserEmail}>
            <SectionHeader name="Nowy email" small />
            <input 
                className="changeForm__input" 
                type="text" 
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
            />

            <SectionHeader name="Powtórz nowy email" small />
            <input 
                className="changeForm__input" 
                type="text" 
                value={email2}
                required
                onChange={(event) => setEmail2(event.target.value)}
            />

            <div className="changeForm__buttonContainer">
                <button type="submit" className="changeForm__button changeButton">Zmień</button>
                <button type="button" className="changeForm__button cancelButton" onClick={props.closeForm}>Anuluj</button>
            </div>
            
        </form>
    )
};