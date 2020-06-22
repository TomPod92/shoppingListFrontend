import React, { useState, useEffect } from 'react';
import './sectionHeader.scss';

export const SectionHeader = (props) => {
  return (
    <div className="sectionHeader">
        <span className="sectionHeader__line"></span>
        <span className="sectionHeader__name">{props.name}</span>
        <span className="sectionHeader__line"></span>
    </div>
  )
};