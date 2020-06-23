import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaWrench, FaTrash } from "react-icons/fa";

import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { EmailForm } from '../../components/Forms/EmailForm';
import { PasswordForm } from '../../components/Forms/PasswordForm';

import './account.scss';

export const Account = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const [ formOpen, setFormOpen ] = useState({
    open: false,
    type: ''
  });

  const handleOpenForm = (type) => () => {
    setFormOpen({
      open: true,
      type: type
    });
  }

  const handleCloseForm = () => setFormOpen({ open: false, type: '' })

  return (
    <div className="page account">
      <SectionHeader name="Twoje Dane"/>
      
      <div className="field">
        <div className="field__name">
          <span>Email:</span>
          <span>{user.email}</span>
        </div>

        {!formOpen.open &&
          <div className="field__icon" onClick={handleOpenForm("email")}><FaWrench /></div>
        }
      </div>

      <div className="field">
        <div className="field__name">
          <span>Hasło:</span>
          <span>*************</span>
        </div>

        {!formOpen.open &&
          <div className="field__icon" onClick={handleOpenForm("password")}><FaWrench /></div>
        }
      </div>

      {formOpen.open && formOpen.type === "email" && (
        <EmailForm closeForm={handleCloseForm}/>
      )}

      {formOpen.open && formOpen.type === "password" && (
        <PasswordForm closeForm={handleCloseForm} />
      )}

    </div>
  )
};