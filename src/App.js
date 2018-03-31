import React, { Component } from 'react';
import '../node_modules/material-components-web/dist/material-components-web.min.css';
import './App.css';
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarIcon
} from 'rmwc/Toolbar';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryText,
  ListItemGraphic,
  ListItemMeta
} from 'rmwc/List';
import { Grid, GridCell } from 'rmwc/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <ToolbarMenuIcon use="menu"/>
              <ToolbarTitle>Toolbar</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection alignEnd>
              <ToolbarIcon use="save"/>
              <ToolbarIcon use="print"/>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>

        <Grid>
          <GridCell desktop="2" tablet="1" phone="0"></GridCell>
          <GridCell desktop="8" tablet="6" phone="4">Some content</GridCell>
          <GridCell desktop="2" tablet="1" phone="0"></GridCell>
        </Grid>

        <List twoLine>
          <ListItem>
            <ListItemText>
              Two-line item
              <ListItemSecondaryText>Secondary text</ListItemSecondaryText>
            </ListItemText>
          </ListItem>
        </List>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
