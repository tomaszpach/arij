import React from 'react';
import ReactDOM from 'react-dom';

import './myStyles.scss';

class App extends React.Component {
    state = {
        CaptainKirkBio: {},
        Board: null, // Board is out component
    };

    componentDidMount() {
        this.onGetKirkBio();
        import(/* webpackChunkName: 'Board' */ './Board').then(Board => {
            this.setState({ Board: Board.default });
        })
    }

    onGetKirkBio = async () => {
        try {
            const result = await fetch('http://stapi.co/api/v1/rest/character/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: {
                    title: 'James T. Kirk',
                    name: 'James T. Kirk',
                },
            });

            const resultJSON = await result.json();
            const character = resultJSON.characters[0];
            this.setState({ CaptainKirkBio: character });
        } catch (error) {
            console.log('error: ', error);
        }
    };

    render() {
        const { CaptainKirkBio, Board } = this.state;
        return (
            <div className="app">
                {Board ? <Board bar="test" /> : <p>Board is loading</p>}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));