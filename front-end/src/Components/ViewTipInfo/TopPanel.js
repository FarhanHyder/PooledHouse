import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

const TopPanel =(props) => {
    const panel = (
    <div>
        <Navbar className="bg-olive justify-content-between">
  
            <Navbar.Brand>
            <img src={ logo } width="200" height="64" className="d-inline-block align-top" alt="Pooled House logo"/>
            </Navbar.Brand>
            
            <Form inline>
                <FormControl type="text" placeholder="ex: upper manhattan" className="mr-sm" />
                <Button type="submit" variant="outline-light"><span>{"\uD83D\uDD0D"}</span></Button>
            </Form>
    
            <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={props.handleChangeView}>
                <ToggleButton value={1} variant="warning">List View</ToggleButton>
                <ToggleButton value={2} variant="warning">Map View</ToggleButton>
            </ToggleButtonGroup>
            </ButtonToolbar>
            
            <ButtonToolbar>
            <Button 
                className="text-color-white" 
                onClick={this.handleTipUpdate}
                > Add New Tips
            </Button>
            <Button onClick={props.handleMyUserTips}>
                My Tips
            </Button>
            </ButtonToolbar>
        </Navbar>
    </div>
    );
    
    return panel;
}

export default TopPanel