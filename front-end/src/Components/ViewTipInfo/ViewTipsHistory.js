import React from 'react';
import Table from 'react-bootstrap/Table'

const TipsHistory = (props) => {
    const tips = props.tipsHistory;
    let num = 0;
    let view =tips.map(tips => {
        return (
            <tbody key = {num + tips.address}>
            <tr>
                <td>{num += 1}</td>
                <td>{tips.address}</td>
                <td>{tips.position}</td>
                <td>{tips.shift}</td>
                <td>{tips.hour} Hours</td>
                <td>${tips.tips}</td>
            </tr>
            </tbody>
        );
    });

    return (
        <div className="card container border border-primary rounded-lg">
            <Table striped bordered hover responsive="sm" variant="dark">
                    <thead className="bg-secondary">
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