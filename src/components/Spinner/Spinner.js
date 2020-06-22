import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";

import './spinner.scss';

export const Spinner = () => (
    <div className="page spinner">
        <BeatLoader loading color='#2E2D2C' />
    </div>
)