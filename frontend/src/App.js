import React, { Component }  from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Vehicle from './components/Vehicles/index';
import './App.css';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Grid className="App">
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography color='inherit'>
                Test Challenge React NodeJs
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Vehicle/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
