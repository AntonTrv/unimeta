import React, {Component} from 'react';
import './App.css';
import List from './components/funnels-list/funnels-list';
import FunnelData from "./components/funnel-data/funnel-data";
import Filter from "./components/funnel-filter/funnel-filter";
import arr from './configs'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            funnels: [],
            activeFunnel: {},
            input: [],
            configs: [...arr],
            active_configs: {}
        }
    }

    componentDidMount = () => {
        fetch('https://bitcoin-blueprint-app.com/funnels')
            .then(response => response.json())
            .then(data => this.setState({funnels: data,
                                                activeFunnel: data[0],
                                                active_configs: this.state.configs[0]}))
    }

    handleClick = (event) => {
        let choice = this.state.funnels.filter(funnel => funnel.site === event.target.innerText);
        let choice_config = this.state.configs.filter(config => config.TEMPLATE_NAME === event.target.innerText.split('/')[0]);
        this.setState({activeFunnel: choice[0], active_configs: choice_config[0]})
    }

    handleChange = (event) => {
        let filtered = this.state.funnels.filter(funnel => funnel.site.includes(event.target.value));
        this.setState({input: filtered})
    }

    render() {

        console.log(this.state.active_configs)

        const {funnels,activeFunnel,input,active_configs} = this.state;
        return(
            <div className="App">
                <div className='total total_mob'><b>Total:</b> {input.length ? input.length :funnels.length}</div>
                <div className="search-field">
                <Filter handleChange={this.handleChange}/>
                <List funnels={funnels}  input={input} handleClick={this.handleClick}/>
                    <div className='total'><b>Total:</b> {input.length ? input.length :funnels.length}</div>
                </div>
                <FunnelData activeFunnel={activeFunnel} configs={active_configs}/>
            </div>
        )
    }
}

export default App;
