import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';

import './myStyles.scss';

class App extends React.Component {
    state = {
        initialData,
        Header: null,
        Board: null, // Board is out component
    };

    componentDidMount() {
        import(/* webpackChunkName: 'Header' */ './Header').then(Header => {
            this.setState({ Header: Header.default });
        });
        import(/* webpackChunkName: 'Board' */ './Board').then(Board => {
            this.setState({ Board: Board.default });
        })
    }

    render() {
        const { initialData, Header, Board } = this.state;

        return(
            <div>
                {Header ? <Header /> : <p>Loading</p>}
                {Board ? <Board initialData={initialData} /> : <p>Loading</p>}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));