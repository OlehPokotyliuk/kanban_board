import React, { useState } from 'react';
import classes from './AddTask.module.scss';
import { useDispatch } from 'react-redux';
import { getFormValue } from '../redux/kanbanSice';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState();
  const getData = (e)=>{
    e.preventDefault();
    dispatch(getFormValue(formData));
    setFormData('');
  }

  return (
    <div className={classes.headerWrapper}>
      <div className={classes.logo}>
        <a href='#' onClick={()=>window.location.reload()}>
          <img src={'assets/logo.png'} alt="" />
        </a>
        
      </div>
      <h1>Hello Task Service</h1>
      <form onSubmit={(e)=>getData(e)} className={classes.form}>
      <input
        type="text"
        name="text"
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
      />
      <button type="submit">add task</button>
    </form>

    </div>
  );
};

