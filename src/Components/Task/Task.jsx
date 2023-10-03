import React, { useState } from 'react';
import classes from './Task.module.scss';
import { DropDown } from './DropDown/DropDown';
import { Close } from './DropDown/Close/Close';



export const Task = ({style, item, from}) => {
  

  return (
    <ul>
      {item.length > 0 && item.map((task, index) => (
        <li className={classes.listTodo} style={style} key={index}>
          <p>{task}</p>
        <div className={classes.dropDown}>
          <DropDown id={index} text={task} from={from}/>
          <Close id={index} text={task} from={from}/>
        </div>
        </li>
      ))}
    </ul>
  );
};

