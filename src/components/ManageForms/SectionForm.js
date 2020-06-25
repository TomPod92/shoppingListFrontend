import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllSections } from '../../redux/actions/sections.actions';

import './manageForms.scss';

export const SectionForm = (props) => {
  const dispatch = useDispatch();
  const sections = useSelector(state => state.sections.sections);
  const [ sectionName, setSectionName ] = useState('');
  const [ allSectionPanelVisible, setAllSectionPanelVisible ] = useState(false);

  useEffect(() => {
    dispatch(getAllSections());
  }, [dispatch]);

  return (
    <div className="manageForm sectionForm">
      <input 
        className="manageForm__input"
        type="text"
        placeholder="Nazwa działu"
        value={sectionName}
        onChange={(event) => setSectionName(event.target.value)}
      />

      <button className="manageForm__button">Dodaj</button>

      <div className="manageForm__panelButton" >
        <button onClick={() => setAllSectionPanelVisible(prevState => !prevState)}>
          { allSectionPanelVisible ? "Zwiń" : "Pokaż" } listę działów
        </button>
      </div>
      

    </div>
  )
};