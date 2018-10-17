import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';

import './myStyles.scss';

class App extends React.Component {
    state = {
        initialData,
        Board: null, // Board is out component
    };

    componentDidMount() {
        import(/* webpackChunkName: 'Board' */ './Board').then(Board => {
            this.setState({ Board: Board.default });
        })
    }

    render() {
        const { initialData, Board } = this.state;
        return initialData.columnOrder.map(columnId => {
            const column = initialData.columns[columnId];
            const tasks = column.taskIds.map(taskId => initialData.tasks[taskId]);

            return column.title;
        })
    }
}

ReactDOM.render(<App />, document.getElementById('app'));