import React, {Component} from 'react';

class Task extends Component {
    state = {
        task: null
    };

    componentDidMount() {
        this.setState({ task: this.props.task });
    }

    render() {
        if (!this.state.task) {
            return <div>Loading task...</div>
        }

        return (
            <div className="task">
                <h5 className="title-task">{this.state.task.content}</h5>
            </div>
        );
    }
}

export default Task;