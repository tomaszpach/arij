import React from 'react';
import Task from './Task';

class Column extends React.Component {
    render() {
        return (
            <div className="container">
                <h3 className="title-column">{this.props.column.title}</h3>
                <div className="tasks-wrapper">
                    {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
                </div>
            </div>
        )
    }
}

export default Column;