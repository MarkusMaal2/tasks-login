import React from "react";
import './TaskList.css'
import TasksItem from "./TasksItem";

const TaskList = (props) => {
    // return message, when no tasks are found
    if (props.filteredTasks.length === 0) {
        return <p className="task-list__fallback">No tasks found</p>
    }
    // otherwise map each TasksItem component to a task from the list
    return (
        <ul className="task-list">
            {props.filteredTasks.map((task) => {
                return <TasksItem
                    key={task.id}
                    title={task.title}
                    priority={task.priority}
                    date={task.date}></TasksItem>
            })}
        </ul>
    )
}
export default TaskList