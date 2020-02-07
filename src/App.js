import React, {Component} from 'react';
import './App.css';
import List from './components/funnels-list/funnels-list';
import FunnelData from "./components/funnel-data/funnel-data";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            funnels: [],
            activeFunnel: []
        }
    }

    componentDidMount = () => {
        fetch('https://bitcoin-blueprint-app.com/funnels')
            .then(response => response.json())
            .then(data => this.setState({funnels: data,
                                                activeFunnel: data[0]}))
    }

    handleClick = (event) => {
        let choice = this.state.funnels.filter(funnel => funnel.site === event.target.value);
        this.setState({activeFunnel: choice[0]})


    }
    render() {
        const {funnels,activeFunnel} = this.state;
        return(
            <div className="App">
                <List funnels={funnels} handleClick={this.handleClick}/>
                <FunnelData activeFunnel={activeFunnel} total={funnels.length}/>
            </div>
        )
    }
}

export default App;
