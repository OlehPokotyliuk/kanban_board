import React, { useState } from 'react';
import classes from './DropDown.module.scss';
import { useDispatch } from 'react-redux';
import { getDropDownValue } from '../../redux/kanbanSice';

export const DropDown = ({id, text, from}) => {
  const dispatch = useDispatch();
  const [openDropDown, setOpenDropDown] = useState(false);
  const [value, setValue] = useState(null);

  const toggleDropdown = ()=>{
    setOpenDropDown(!openDropDown);
  }

  const handleItemClick = (val ,id) =>{
    setValue(val);
    setOpenDropDown(!openDropDown);
    dispatch(getDropDownValue({id:id, from:from, to: val, text:text}))
  }


  return (
    <div className={classes.dropdown}>
    <span onClick={toggleDropdown}>move to : ▼</span>
    {openDropDown&&(
      <div className={classes.dropdownContent}>
          <div className={classes.itemList} onClick={() => handleItemClick("todo", id)}>Todo</div>
          <div className={classes.itemList} onClick={() => handleItemClick("progress", id)}>Progress</div>
          <div className={classes.itemList} onClick={() => handleItemClick("hold", id)}>Hold</div>
          <div className={classes.itemList} onClick={() => handleItemClick("complete", id)}>Complete</div>
        </div>
    )}
  </div>
    
  );
};

