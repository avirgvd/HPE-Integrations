import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Notification from 'grommet/components/Notification';
import Meter from 'grommet/components/Meter';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Spinning from 'grommet/components/icons/Spinning';
import Headline from 'grommet/components/Headline';

import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';

import {
  loadIntegrations, unloadIntegrations
} from '../actions/integrations';

import { pageLoaded } from './utils';

class Integrations extends Component {
  componentDidMount() {
    pageLoaded('Integrations');
    this.props.dispatch(loadIntegrations());
  }

  componentWillUnmount() {
    this.props.dispatch(unloadIntegrations());
  }

  render() {
    console.log("Integrations: this.props: ", this.props);
    const { error, integrations} = this.props;
    const { intl } = this.context;

    let integrations_temp = {configuredIntegrations:
      [
        {serviceName: "Nagios", state: "online"},
        {serviceName: "ServiceNow Incident Management", state: "online"},
        {serviceName: "Splunk", state: "offline"}
      ]
    };

    let configuredIntegrations = integrations_temp.configuredIntegrations.map((item, index) => {
      console.log("Integration item", index, ": ", item);
      return (
        <ListItem justify='between'
                  separator='horizontal'>
              <span>
                {item.serviceName}
              </span>
              <span className='secondary'>
                {item.state}
              </span>
        </ListItem>
      );
    });






    return (
      <Article primary={true}>
        <Header
          direction='row'
          justify='between'
          size='large'
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          <NavControl name={getMessage(intl, 'Integrations')} />
        </Header>
        {configuredIntegrations}
      </Article>
    );
  }
}

Integrations.defaultProps = {
  error: undefined,
  integrations: []
};

Integrations.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  integrations: PropTypes.arrayOf(PropTypes.object)
};

Integrations.contextTypes = {
  intl: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  integrations: PropTypes.object
};

const select = state => ({ ...state.integrations });

export default connect(select)(Integrations);
