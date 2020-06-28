import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Spinner } from '..//Spinner/Spinner';
import { getAllSections } from '../../redux/actions/sections.actions';

import './sectionsSelect.scss';

export const SectionsSelect = (props) => {
    const dispatch = useDispatch();
    const sections = useSelector(state => state.sections.sections);

    useEffect(() => {
        dispatch(getAllSections());
      }, [dispatch]);

    if(sections.length === 0) {
        return <Spinner />
    }
    
    return (
      <div className="sectionsSelect">
          {sections.map(current => (
                <div key={current._id} className="sectionOption">
                    <input
                        id={current.name}
                        className="sectionOption__input"
                        type="radio" 
                        name="section"
                        value={current.name}
                        checked={props.selectedSection.includes(current.name)} // test
                        onChange={() => props.manageSections(current.name)}
                    />
                    <label className="sectionOption__label" htmlFor={current.name} key={current._id}> {current.name}</label>
                </div>
            ))}
      </div>
    )
};