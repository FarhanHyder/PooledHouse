import React from 'react';
import Table from 'react-bootstrap/Table'

const TipsHistory = (props) => {
    const tips = props.tipsInfo;
    let num = 0;
    let view =tips.map(tips => {
        return (
            // <div className="border border-primary rounded-lg">
                // <Table striped bordered hover variant="dark">
                    <tbody>
                    <tr>
                        <td>{num += 1}</td>
                        <td>{tips.address}</td>
                        <td>{tips.position}</td>
                        <td>{tips.shift}</td>
                        <td>{tips.hour} Hours</td>
                        <td>${tips.tips}</td>
                    </tr>
                    </tbody>
                // </Table>
                
            // </div>
        );
    });

    return (
        <div className="card container border border-primary rounded-lg">
            <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Locations</th>
                        <th>Position</th>
                        <th>Shift</th>
                        <th>Hours Worked</th>
                        <th>Tips</th>
                    </tr>
                    </thead>
                    {view}
            </Table>
            
        </div>
    );
}

export default TipsHistory;