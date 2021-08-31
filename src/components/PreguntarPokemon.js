import React from "react";
import ObtenerPokemon from "./ObtenerPokemon";


export default class PreguntarPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <label>
                    Nombre o número
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <ObtenerPokemon nombre={this.state.value}/>
            </div>
        );
    }
}
