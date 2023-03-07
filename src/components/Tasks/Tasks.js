import './Tasks.css'
//import TasksItem from "./TasksItem";
import TaskList from "./TaskList";
import TaskFilter from "./TaskFilter";
import Card from "../UI/Card/Card";
import React, {useState} from "react";

function Tasks(props) {
    const [currentPriority, setCurrentPriority] = useState(props.currentPriority)
    // create an array of filtered tasks with specified priority
    let filteredTasks
    if (currentPriority > 0) {
        filteredTasks = props.tasks.filter((item) => {
            return item.priority === Number(currentPriority)
        })
    } else {
        filteredTasks = props.tasks
    }

    // display result
    return (
        <Card className="tasks">
            <TaskFilter onModifyTaskFilter={(priority) => { setCurrentPriority(priority); props.onChangePriority(currentPriority);}}></TaskFilter>
            <TaskList filteredTasks={filteredTasks} />
        </Card>
    )
}

export default Tasks