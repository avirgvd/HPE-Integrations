/**
 * Created by govind on 9/5/18.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Meter from 'grommet/components/Meter';
import Notification from 'grommet/components/Notification';
import Value from 'grommet/components/Value';
import Spinning from 'grommet/components/icons/Spinning';
import LinkPrevious from 'grommet/components/icons/base/LinkPrevious';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Headline from 'grommet/components/Headline';

import {
  loadSettings, unloadSettings
} from '../actions/settings';

import { pageLoaded } from './utils';

class Settings extends Component {
  componentDidMount() {
    console.log("Settings: componentDidMount");
    this.props.dispatch(loadSettings());
  }

  componentWillUnmount() {
    const { match: { params }, dispatch } = this.props;
    dispatch(unloadSettings(params.id));
  }

  render() {
    console.log("Settings: this.props: ", this.props);
    const { error, settings} = this.props;

    let settings_temp = {availableIntegrations:
      [
        {serviceName: "Nagios", version: "v1.0.0"},
        {serviceName: "ServiceNow Incident Management", version: "v1.1.0"},
        {serviceName: "Splunk", version: "v1.2.0"}
      ]
    };

    let availableIntegrations = settings_temp.availableIntegrations.map((item, index) => {
      console.log("item", index, ": ", item);
      return (
        <ListItem justify='between'
                  separator='horizontal'>
              <span>
                {item.serviceName}
              </span>
              <span className='secondary'>
                {item.version}
              </span>
        </ListItem>
      );
    });

    console.log("Settings: settings: ", settings);

    return (
      <Article primary={true} full={true}>
        <Header
          direction='row'
          size='large'
          colorIndex='light-2'
          align='center'
          responsive={false}
          pad={{ horizontal: 'small' }}
        >
          <Anchor path='/dashboard'>
            <LinkPrevious a11yTitle='Back to Dashboard' />
          </Anchor>
          <Heading margin='none' strong={true}>
            {settings ? settings.name : 'Settings...'}
          </Heading>
        </Header>

        <Headline size="small" strong="true">
          Available Integrations...
        </Headline>

        <List>
          {availableIntegrations}
        </List>


      </Article>
    );
  }
}

Settings.defaultProps = {
  error: undefined,
  settings: undefined
};

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  match: PropTypes.object.isRequired,
  settings: PropTypes.object
};

const select = state => ({ ...state.settings });

export default connect(select)(Settings);
