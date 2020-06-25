import React, { useState, useEffect } from 'react';
import './manageForms.scss';

export const SectionForm = (props) => {
  return (
    <div className="sectionForm">
      <input className="manageForm__input" type="text" placeholder="Nazwa działu"/>
      <button className="manageForm__button">Dodaj</button>
    </div>
  )
};