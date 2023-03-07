import React from "react"
import './NewTask.css'

import TaskForm from "./TaskForm"

const NewTask = (props) => {
    const saveTaskDataHandler = (enteredTaskData) => {
        const taskData = {
            ...enteredTaskData,
            id: Math.random().toString()
        }
        if (isNaN(enteredTaskData.date)) {
            alert("The date is invalid")
        } else {
            props.onAddTask(taskData)
        }
    }

    return (
        <div className="new-task">
            <TaskForm onSaveTaskData={saveTaskDataHandler}></TaskForm>
        </div>
    )
}

export default NewTask