import React, { useState, useEffect } from 'react';
import './sectionHeader.scss';

export const SectionHeader = (props) => {
  return (
    <div className={`sectionHeader ${props.small && 'sectionHeader--small'}`}>
        <span className="sectionHeader__line"></span>
        <span className="sectionHeader__name">
          {`${props.name[0].toUpperCase()}${props.name.slice(1)}`}
        </span>
        <span className="sectionHeader__line"></span>
    </div>
  )
};