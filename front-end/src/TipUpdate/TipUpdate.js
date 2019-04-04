import React from "react";
import DatePicker from "react-datepicker";

//unfinished, doesn't work

class TipUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            startDate: new Date()
        };

        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleSubmit(event) {
        alert('Tip information accepted!');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Date
                </label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <label>
                    AM/PM
                </label>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value='am'>AM</option>
                    <option value='pm'>PM</option>
                </select>
                <label>
                    Shift Length
                </label>
                <label>
                    Position
                </label>
                <label>
                    Take Home
                </label>
            
            </form>
        )
    }
}
