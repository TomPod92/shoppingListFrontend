import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import './button.scss';

export const Button = (props) => {
    const [ classesState, setClassesState ] = useState({
        primary: false,
        secondary: false
    });

    const buttonClasses = classNames(
        {primary: classesState.primary},
        {secondary: classesState.secondary}
    );

    useEffect(() => {
        // setClassesState({
        //     ...classesState,
        //     [props.type]: !classesState[props.type]
        // })

        setClassesState(prevState => ({
            ...prevState,
            [props.type]: !prevState[props.type]
        }))
    }, [props.type])

    return (
        <button className={`button ${buttonClasses}`}>{props.children}</button>
    )
};