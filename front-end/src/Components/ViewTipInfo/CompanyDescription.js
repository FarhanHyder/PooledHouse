import React from 'react';
import Table from 'react-bootstrap/Table';

const Description = (props) => {
    let num = 0;
    const locations = Object.keys(props.locations).map(loc => {
        return (
            <tbody key={loc}>
            <tr>
                <td>{num += 1}</td>
                <td>{loc}</td>
                <td>${Number.parseFloat(props.locations[loc].tipsPerHour.toFixed(2))} / Hour</td>
                <td>${Number.parseFloat(props.avgByZip[loc.slice(-5)].tipsPerHour.toFixed(2))} / Hour</td>
            </tr>
            </tbody>
        )
    });
    
    const desc = (
        <div className="container card">
            <Table striped bordered hover responsive="sm" variant="dark">
                <thead className="bg-info">
                <tr>
                    <th>#</th>
                    <th>Company Locations</th>
                    <th>Average Reported Tips</th>
                    <th>Tips in This Zip Code area</th>
                </tr>
                </thead>
                {locations}
            </Table>
        </div>
    );
    return desc;
};


export default Description;