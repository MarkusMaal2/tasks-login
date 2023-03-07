import './TaskDate.css'

function TaskDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()

    return (
        <div className="task-date">
            {month} {day} {year}
        </div>
    )
}

export default TaskDate