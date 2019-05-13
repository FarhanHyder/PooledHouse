// import all functions
// display based on the functions
import React from 'react';
import ViewBarChart from './ViewBarChart';
import Table from 'react-bootstrap/Table';

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
                <div className="card">
                    <br></br>
                    <div className="row btn-group">
                        <button type="button" className="btn btn-dark" onClick ={()=>{this.setState({chartOption: "position"})}} >Tips By Position</button>
                        <button type="button" className="btn btn-dark" onClick ={()=>{this.setState({chartOption: "day"})}} >Tips By Day</button>
                        {/* <button type="button" className="btn btn-dark" onClick ={()=>{this.setState({chartOption: "zip"})}} >Tips By Zip Code</button> */}
                        {/* <button type="button" className="btn btn-dark" onClick ={()=>{this.setState({chartOption: "neighborhood"})}} >Tips By neighborhood</button> */}
                        <button type="button" className="btn btn-dark" onClick ={()=>{this.setState({chartOption: "shift"})}} >Tips By Shift And Position</button>
                    </div>
                    <br></br>
                </div>
                <div className="row fluid">
                    <div className="col-4">
                        {this.state.chartOption === "position"?
                            <Table striped bordered hover responsive="sm" variant="dark">
                                <thead className="bg-secondary">
                                <tr>
                                    <th>Position</th>
                                    <th>Hourly Tips</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Bartender</td>
                                    <td>${Number.parseFloat(this.props.avgByPosition.Bartender.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Server</td>
                                    <td>${Number.parseFloat(this.props.avgByPosition.Server.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Barback</td>
                                    <td>${Number.parseFloat(this.props.avgByPosition.Barback.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Busser</td>
                                    <td>${Number.parseFloat(this.props.avgByPosition.Busser.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Other</td>
                                    <td>${Number.parseFloat(this.props.avgByPosition.Other.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                </tbody>
                            </Table>
                        : null}
                        
                        {this.state.chartOption === "day"?
                            <Table striped bordered hover responsive="sm" variant="dark">
                                <thead className="bg-secondary">
                                <tr>
                                    <th>Day</th>
                                    <th>Hourly Tips</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Saturday</td>
                                    <td>${Number.parseFloat(this.props.avgByDay.Saturday.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>${Number.parseFloat(this.props.avgByDay.Sunday.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Monday</td>
                                    <td>${Number.parseFloat(this.props.avgByDay.Monday.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>${Number.parseFloat(this.props.avgByDay.Tuesday.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>${Number.parseFloat(this.props.avgByDay.Wednesday.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>${Number.parseFloat(this.props.avgByDay.Thursday.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>${Number.parseFloat(this.props.avgByDay.Friday.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                </tbody>
                            </Table>
                        : null}
                        {this.state.chartOption === "shift"?
                            <Table striped bordered hover responsive="sm" variant="dark">
                                <thead className="bg-secondary">
                                <tr>
                                    <th>Position</th>
                                    <th>Shift</th>
                                    <th>Hourly Tips</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Bartender</td>
                                    <td>AM</td>
                                    <td>${Number.parseFloat(this.props.avgByPosShift.AM.Bartender.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Bartender</td>
                                    <td>PM</td>
                                    <td>${Number.parseFloat(this.props.avgByPosShift.PM.Bartender.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Server</td>
                                    <td>AM</td>
                                    <td>${Number.parseFloat(this.props.avgByPosShift.AM.Server.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Server</td>
                                    <td>PM</td>
                                    <td>${Number.parseFloat(this.props.avgByPosShift.PM.Server.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Barback</td>
                                    <td>AM</td>
                                    <td>${Number.parseFloat(this.props.avgByPosShift.AM.Barback.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Barback</td>
                                    <td>PM</td>
                                    <td>${Number.parseFloat(this.props.avgByPosShift.PM.Barback.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Busser</td>
                                    <td>AM</td>
                                    <td>${Number.parseFloat(this.props.avgByPosShift.AM.Busser.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Busser</td>
                                    <td>PM</td>
                                    <td>${Number.parseFloat(this.props.avgByPosShift.PM.Busser.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Other</td>
                                    <td>AM</td>
                                    <td>${Number.parseFloat(this.props.avgByPosShift.AM.Other.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                <tr>
                                    <td>Other</td>
                                    <td>PM</td>
                                    <td>${Number.parseFloat(this.props.avgByPosShift.PM.Other.tipsPerHour.toFixed(2))}</td>
                                </tr>
                                </tbody>
                            </Table>
                        : null}
                        
                    </div>
                    <div className="col-8">
                    <ViewBarChart
                        chartOption = {this.state.chartOption}
                        avgByDay = {this.props.avgByDay}
                        avgByPosition = {this.props.avgByPosition}
                        avgByPosShift = {this.props.avgByPosShift}
                    />
                    </div>
                
                </div>
            </div>
        );
        return view;
    }
}

export default ViewReportedTips;