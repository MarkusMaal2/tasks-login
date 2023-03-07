import React, {useState} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import NewTask from '../NewTask/NewTask.js'

const Home = (props) => {
    const DUMMY_TASKS = [
        {
            id: 'e1',
            date: new Date(2023, 0, 10),
            title: "Study React.js",
            priority: 3
        },
        {
            id: 'e2',
            date: new Date(2024, 6, 23),
            title: "Study Javascript",
            priority: 3
        }
    ]

    const [currentPriority, setCurrentPriority] = useState(0)
    const addTaskHandler = (task) => {
        props.onAddTask(task)
    }
    const changePriorityHandler = (priority) => {
        setCurrentPriority((previousPriority) => {
            return priority
        })
    }
  return (
    <>
      <NewTask onAddTask={addTaskHandler}></NewTask>
    </>
  );
};

export default Home;
