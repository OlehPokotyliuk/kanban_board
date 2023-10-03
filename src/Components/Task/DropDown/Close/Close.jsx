import React from 'react';
import {deleteItem} from '../../../redux/kanbanSice';
import { useDispatch } from 'react-redux';

export const Close = ({id, text, from}) => {
  const dispatch = useDispatch();
  const closeHandler = (id,from) =>{
    dispatch(deleteItem({id:id,from:from}));
  }
  return (
    
    <>
      <button style={{fontSize:'11px'}} onClick={()=>closeHandler(id,from)}>🗙</button>
    </>
  );
};

