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

    state = {
        selectedPlace : null
    }

    buttonClicked(place){
        this.setState({selectedPlace: place})
    }

    render () {
        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h2>Welcome to React</h2>
                </div>
                {PLACES.map((place, index) => {
                    return (<button key={index} onClick={()=>{this.buttonClicked(place)}}>{place.name}</button>)
                })}
                {this.state.selectedPlace &&
                    <WeatherDisplay place={this.state.selectedPlace}/>
                }
                <p className='App-intro'>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
}

export default App
