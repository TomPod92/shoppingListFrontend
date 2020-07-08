import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Toast } from '../../components/Toast/Toast';
import { ManageList } from '../ManageList/ManageList';
import { getAllSections, createSection } from '../../redux/actions/sections.actions';

import './manageForms.scss';

export const SectionForm = (props) => {
  const dispatch = useDispatch();
  const sections = useSelector(state => state.sections.sections);
  const [ sectionName, setSectionName ] = useState('');
  const [ allSectionPanelVisible, setAllSectionPanelVisible ] = useState(false);

  useEffect(() => {
    dispatch(getAllSections());
  }, [dispatch]);

  const handleCreateSection = () => {
    if(!sectionName.trim()) {
      toast.error(<Toast info="Podaj nazwę nowego działu"/>);
      return;
    } else {
      dispatch(createSection(sectionName));
      setSectionName('');
    }
  }

  return (
    <div className="manageForm sectionForm">
      <input 
        className="manageForm__input"
        type="text"
        placeholder="Nazwa działu"
        value={sectionName}
        onChange={(event) => setSectionName(event.target.value)}
      />

      <button className="manageForm__button--add" onClick={handleCreateSection}>Dodaj</button>

      <div className="manageForm__panelButton" >
        <button onClick={() => setAllSectionPanelVisible(prevState => !prevState)}>
          { allSectionPanelVisible ? "Zwiń" : "Pokaż" } listę działów
        </button>
      </div>

      { allSectionPanelVisible && <ManageList items={sections} type="sections"/> }
    </div>
  )
};