import React, { Component }  from 'react'

export default class WeatherDisplay extends Component {

    constructor () {
        super()
        this.state = {
            weatherData: null
        }
    }

    componentDidMount () {
        const { place } = this.props
        const { zip, country } = place
        const apiKey = '089562f0603ab27038f60fa5e62d43e2'
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${apiKey}&units=metric`
        fetch(apiUrl)
            .then(res => res.json())
            .then(weatherData => this.setState({weatherData}))

    }

    render () {
        const { place } = this.props

        return (
            <div> Display some Weather! {place.name}</div>
        )
    }
}
