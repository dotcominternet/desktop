'use strict';

const remote = require('electron').remote;
const settings = require('../common/settings');

const React = require('react');
const ReactDOM = require('react-dom');
const ReactBootstrap = require('react-bootstrap');

const Grid = ReactBootstrap.Grid;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;
const Input = ReactBootstrap.Input;
const Button = ReactBootstrap.Button;
const ListGroup = ReactBootstrap.ListGroup;
const ListGroupItem = ReactBootstrap.ListGroupItem;
const Glyphicon = ReactBootstrap.Glyphicon;

function backToIndex() {
  remote.getCurrentWindow().loadURL('file://' + __dirname + '/index.html');
}

var SettingsPage = React.createClass({
  getInitialState: function() {
    var config;
    try {
      config = settings.readFileSync(this.props.configFile);
    } catch (e) {
      config = settings.loadDefault();
    }
    return {
      teams: config.teams,
      hideMenuBar: config.hideMenuBar
    };
  },
  handleTeamsChange: function(teams) {
    this.setState({
      teams: teams
    });
  },
  handleSave: function() {
    var config = {
      teams: this.state.teams,
      hideMenuBar: this.state.hideMenuBar,
      version: settings.version
    };
    settings.writeFileSync(this.props.configFile, config);
    if (process.platform === 'win32' || process.platform === 'linux') {
      var currentWindow = remote.getCurrentWindow();
      currentWindow.setAutoHideMenuBar(config.hideMenuBar);
      currentWindow.setMenuBarVisibility(!config.hideMenuBar);
    }
    backToIndex();
  },
  handleCancel: function() {
    backToIndex();
  },
  handleChangeHideMenuBar: function() {
    this.setState({
      hideMenuBar: this.refs.hideMenuBar.getChecked()
    });
  },
  render: function() {
    var teams_row = (
    <Row>
      <Col md={ 12 }>
      <h2>Setup Teams</h2>
      <TeamList teams={ this.state.teams } onTeamsChange={ this.handleTeamsChange } />
      </Col>
    </Row>
    );

    var options = [];
    if (process.platform === 'win32' || process.platform === 'linux') {
      options.push(<Input ref="hideMenuBar" type="checkbox" label="Hide Menu Bar (Press Alt to show Menu Bar)" checked={ this.state.hideMenuBar } onChange={ this.handleChangeHideMenuBar } />);
    }
    var options_row = (options.length > 0) ? (
      <Row>
        <Col md={ 12 }>
        <h2>Options</h2>
        { options }
        </Col>
      </Row>
      ) : null;

    return (
      <Grid className="settingsPage">
        { teams_row }
        { options_row }
        <Row>
          <Col md={ 12 }>
          <h4>Click save to continue:</h4>
          <Button id="btnCancel" onClick={ this.handleCancel }>Cancel</Button>
          { ' ' }
          <Button id="btnSave" bsStyle="primary" onClick={ this.handleSave } disabled={ this.state.teams.length === 0 }>Save</Button>
          </Col>
        </Row>
      </Grid>
      );
  }
});

var TeamList = React.createClass({
  handleTeamRemove: function(index) {
    console.log(index);
    var teams = this.props.teams;
    teams.splice(index, 1);
    this.props.onTeamsChange(teams);
  },
  handleTeamAdd: function(team) {
    var teams = this.props.teams;
    teams.push(team);
    this.props.onTeamsChange(teams);
  },
  render: function() {
    var thisObj = this;
    var teamNodes = this.props.teams.map(function(team, i) {
      var handleTeamRemove = function() {
        thisObj.handleTeamRemove(i);
      };
      return (
        <TeamListItem index={ i } name={ team.name } url={ team.url } onTeamRemove={ handleTeamRemove } />
        );
    });
    return (
      <ListGroup class="teamList">
        { teamNodes }
        <TeamListItemNew onTeamAdd={ this.handleTeamAdd } />
      </ListGroup>
      );
  }
});

var TeamListItem = React.createClass({
  handleTeamRemove: function() {
    this.props.onTeamRemove();
  },
  render: function() {
    var style = {
      left: {
        "display": 'inline-block'
      }
    };
    return (
      <div className="teamListItem list-group-item">
        <div style={ style.left }>
          <h4 className="list-group-item-heading">{ this.props.name }</h4>
          <p className="list-group-item-text">
            { this.props.url }
          </p>
        </div>
        <div className="pull-right">
          <Button bsSize="xsmall" onClick={ this.handleTeamRemove }>
            <Glyphicon glyph="remove" />
          </Button>
        </div>
      </div>
      );
  }
});

var TeamListItemNew = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      url: ''
    };
  },
  handleSubmit: function(e) {
    console.log('submit');
    e.preventDefault();
    this.props.onTeamAdd({
      name: this.state.name.trim(),
      url: this.state.url.trim()
    });
    this.setState(this.getInitialState());
  },
  handleNameChange: function(e) {
    console.log('name');
    this.setState({
      name: e.target.value
    });
  },
  handleURLChange: function(e) {
    console.log('url');
    this.setState({
      url: e.target.value
    });
  },
  shouldEnableAddButton: function() {
    return (this.state.name.trim() !== '') && (this.state.url.trim() !== '');
  },
  render: function() {
    return (
      <ListGroupItem>
        <h4>Add another team:</h4>
        <form className="form-inline" onSubmit={ this.handleSubmit }>
          <div className="form-group">
            <label for="inputTeamName">Name</label>
            { ' ' }
            <input type="text" className="form-control" id="inputTeamName" placeholder="Example team" value={ this.state.name } onChange={ this.handleNameChange } />
          </div>
          { ' ' }
          <div className="form-group">
            <label for="inputTeamURL">URL</label>
            { ' ' }
            <input type="url" className="form-control" id="inputTeamURL" placeholder="https://example.com/team" value={ this.state.url } onChange={ this.handleURLChange } />
          </div>
          { ' ' }
          <Button type="submit" disabled={ !this.shouldEnableAddButton() }>Add</Button>
        </form>
      </ListGroupItem>
      );
  }
});

var configFile = remote.getGlobal('config-file');

var contextMenu = require('./menus/context');
var menu = contextMenu.createDefault();
window.addEventListener('contextmenu', function(e) {
  menu.popup(remote.getCurrentWindow());
}, false);

ReactDOM.render(
  <SettingsPage configFile={ configFile } />,
  document.getElementById('content')
);
