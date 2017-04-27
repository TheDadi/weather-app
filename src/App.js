import React, { Component } from 'react'
import WeatherDisplay from './WeatherDisplay'

import logo from './assets/icons/logo.svg'
import './App.css'

const PLACES = [
    {
        name: 'Winterthur',
        zip: 8400,
        country: 'ch'
    },
    {
        name: 'Zürich',
        zip: 8000,
        country: 'ch'
    },
    {
        name: 'Eschlikon',
        zip: 8360,
        country: 'ch'
    },
    {
        name: 'WIl',
        zip: 8400,
        country: 'ch'
    }
]
class App extends Component {

    constructor () {
       super();
       this.state = {
           selectedPlace: null
       }
    }

    buttonClicked (place) {
        this.setState({ selectedPlace: place })
    }

    render () {
        const { selectedPlace } = this.state
        return (
            <div className='App'>
                {PLACES.map((place, index) => {
                        <button
                            key={index}
                            onClick={() => {
                                this.buttonClicked(place)
                            }}>
                            {place.name}
                        </button>
                    }
                )}
                {selectedPlace &&
                <WeatherDisplay key={selectedPlace} place={selectedPlace} />
                }
            </div>
        )
    }
}

export default App
