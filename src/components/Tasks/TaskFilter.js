import React from 'react';

import './TaskFilter.css';

const TaskFilter = (props) => {
    const priorityHamdler = (e) => {
        e.preventDefault()
        props.onModifyTaskFilter(e.target.value)
    }

    return (
        <div className='tasks-filter'>
            <div className='tasks-filter__control'>
                <label>Filter by priority</label>
                <select onChange={priorityHamdler}>
                    <option value='0'>all</option>
                    <option value='1'>low</option>
                    <option value='2'>medium</option>
                    <option value='3'>high</option>
                    <option value='4'>urgent</option>
                </select>
            </div>
        </div>
    );
};

export default TaskFilter;