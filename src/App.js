import React, {Component} from 'react';
import './App.css';
import List from './components/funnels-list/funnels-list';
import FunnelData from "./components/funnel-data/funnel-data";
import Filter from "./components/funnel-filter/funnel-filter";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            funnels: [],
            activeFunnel: {},
            input: []
        }
    }

    componentDidMount = () => {
        fetch('https://bitcoin-blueprint-app.com/funnels')
            .then(response => response.json())
            .then(data => this.setState({funnels: data,
                                                activeFunnel: data[0]}))
    }

    handleClick = (event) => {
        let choice = this.state.funnels.filter(funnel => funnel.site === event.target.innerText);
        this.setState({activeFunnel: choice[0]})
        // fetch(`http://${this.state.activeFunnel.domain}/assets/img/screenshot.png`, {mode: 'no-cors'})
        //     .then(response => console.log(response))
            // .then(response => this.setState({activeFunnel: Object.assign({}, this.state.activeFunnel, {img: response.url}) }))

    }

    handleChange = (event) => {
        let filtered = this.state.funnels.filter(funnel => funnel.site.includes(event.target.value));
        this.setState({input: filtered})
    }
    render() {
        const {funnels,activeFunnel,input} = this.state;
        return(
            <div className="App">
                <div className="search-field">
                <Filter handleChange={this.handleChange}/>
                <List funnels={funnels}  input={input} handleClick={this.handleClick}/>
                    <div className='total'><b>Total:</b> {input.length ? input.length :funnels.length}</div>
                </div>
                <FunnelData activeFunnel={activeFunnel}/>
            </div>
        )
    }
}

export default App;
