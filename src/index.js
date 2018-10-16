import React from 'react';
import ReactDOM from 'react-dom';

import './myStyles.scss';

class App extends React.Component {
    state = {
        CaptainKirkBio: {}
    };

    componentDidMount() {
        this.onGetKirkBio();
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
        const { CaptainKirkBio } = this.state;
        return (
            <div className="app">
                <img src="/dist/images/header.jpg" alt="header" className="app-header"/>
                <p>
                    We are a most promising species, Mr. Spock, as predators go. Did you know that? I frequently
                    have my doubts. I dont. Not any more. And maybe in a thousand years or so, we will be able
                    to prove it.
                </p>
                <p>- Captain Kirk</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));