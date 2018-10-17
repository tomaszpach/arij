import React, { Component } from 'react';
import Column from './Column';

class Board extends Component {
    state = {
        initialData: this.props.initialData
    };

    render() {
        const { initialData } = this.state;
        return initialData.columnOrder.map(columnId => {
            const column = initialData.columns[columnId];
            const tasks = column.taskIds.map(taskId => initialData.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
        })
    }
}

export default Board;