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
            input: [],
            configs: {"PAGE_TITLE": "btc-traderapp.com",
                "TEMPLATE_NAME": "btc-traderapp.com",
                "TRANSLATIONS_TYPE": "JSON",
                "TRANSLATIONS_MODE": "COUNTRY",
                "SUPPORTED_LANGUAGES": "DA,DE-AT,DE-CH,DE,EN,ES,ET,FI,FO,FR,IT,LT,LV,NL,NO,PL,PT,RU,SK,SL,SV",
                "CUSTOM_MAP_LANGUAGES": {
                    "MD": "RU",
                    "UA": "RU",
                    "GE": "RU",
                    "AT": "DE",
                    "CL": "ES",
                    "AR": "ES",
                    "BR": "PT",
                    "CO": "ES",
                    "CR": "ES",
                    "DO": "ES",
                    "EC": "ES",
                    "SV": "ES",
                    "MX": "ES",
                    "PA": "ES",
                    "PE": "ES",
                    "PR": "ES",
                    "VE": "ES",
                    "DK": "DA",
                    "CH": "DE",
                    "SE": "SV",
                    "BE": "FR"
                },
                "CUSTOMER_ID": [3]}
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
    }

    handleChange = (event) => {
        let filtered = this.state.funnels.filter(funnel => funnel.site.includes(event.target.value));
        this.setState({input: filtered})
    }
    render() {
        const {funnels,activeFunnel,input,configs} = this.state;
        return(
            <div className="App">
                <div className='total total_mob'><b>Total:</b> {input.length ? input.length :funnels.length}</div>
                <div className="search-field">
                <Filter handleChange={this.handleChange}/>
                <List funnels={funnels}  input={input} handleClick={this.handleClick}/>
                    <div className='total'><b>Total:</b> {input.length ? input.length :funnels.length}</div>
                </div>
                <FunnelData activeFunnel={activeFunnel} configs={configs}/>
            </div>
        )
    }
}

export default App;
