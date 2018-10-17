import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Footer from './Footer';
import initialData from './initial-data';

import './myStyles.scss';

class App extends React.Component {
    state = {
        initialData,
        // Header: null,
        Board: null, // Board is out component
    };

    componentDidMount() {
        // import(/* webpackChunkName: 'Header' */ './Header').then(Header => {
        //     this.setState({ Header: Header.default });
        // });
        import(/* webpackChunkName: 'Board' */ './Board').then(Board => {
            this.setState({ Board: Board.default });
        })
    }

    render() {
        const { initialData, Board } = this.state;

        return(
            <div className="app-wrapper">
                <Header />

                {Board ? <Board initialData={initialData} /> : <p>Loading</p>}

                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));