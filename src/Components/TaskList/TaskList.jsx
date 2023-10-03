import React from 'react';
import classes from './TaskList.module.scss';
import { Task } from '../Task/Task';
import {Loader} from '../Loader/Loader';
import { useSelector } from 'react-redux';

export const TaskList = () => {
  const todoList = useSelector(state=>state?.kanban?.todo);
  const progressList = useSelector(state=>state?.kanban?.progress);
  const holdList = useSelector(state=>state?.kanban?.hold);
  const completeList = useSelector(state=>state?.kanban?.complete);
  return todoList.length === 0 ? 
  (
    <Loader/>
  )
  :
  (
    <div className={classes.taskListWrapper}>
      <div className={classes.todo}>
        <h2 className={classes.titleTodo}>Todo</h2>
        <Task style={{borderLeft:'2px solid #4F9CE8'}} item={todoList} from={'todo'}/>
      </div>
      <div className={classes.progress}>
        <h2 className={classes.titleProgress}>Progress</h2>
        <Task style={{borderLeft:'2px solid #9C81E9'}} item={progressList} from={'progress'}/>
      </div>
      <div className={classes.hold}>
        <h2 className={classes.titleHold}>Hold</h2>
        <Task style={{borderLeft:'2px solid #c62b85'}} item={holdList} from={'hold'}/>
      </div>
      <div className={classes.complete}>
        <h2 className={classes.titleComplete}>Complete</h2>
        <Task style={{borderLeft:'2px solid #39CC85'}} item={completeList} from={'complete'}/>
      </div>
    </div>
  );
};

<Task/>