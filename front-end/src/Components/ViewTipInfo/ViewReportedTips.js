// import all functions
// display based on the functions
import React from 'react';
import ViewBarChart from './ViewBarChart';

class ViewReportedTips extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartOption: "position"
        }
    }

    render() {
        const view = (
            <div className="container">
                <div className="row">
                    <div className="col-3 btn-group-vertical position-left">
                        <button type="button" class="btn btn-dark active" onClick ={()=>{this.setState({chartOption: "position"})}} >Tips By Position</button>
                        <button type="button" class="btn btn-dark" onClick ={()=>{this.setState({chartOption: "day"})}} >Tips By Day</button>
                        <button type="button" class="btn btn-dark" onClick ={()=>{this.setState({chartOption: "zip"})}} >Tips By Zip Code</button>
                        <button type="button" class="btn btn-dark" onClick ={()=>{this.setState({chartOption: "neighborhood"})}} >Tips By neighborhood</button>
                        <button type="button" class="btn btn-dark" onClick ={()=>{this.setState({chartOption: "shift"})}} >Tips By Shift</button>
                    </div>
                    <div className="col-7 card">
                        <div>Average Tips Reported : $ / Hour</div>
                        <div>Average Tips in this Zip Code: $ / Hours</div>
                        <div>Average in this neighborhood</div>
                        <div>Average Tips for different Position</div>
                    </div>
                
                </div>
                <div className="">
                    <ViewBarChart
                        chartOption = {this.state.chartOption}
                        dailyTipsAvg = {this.props.dailyTipsAvg}
                        avgByPosition = {this.props.avgByPosition}
                    />
                </div>
                
            </div>
        );
        return view;
    }
}

export default ViewReportedTips;