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
    const { error, integrations } = this.props;
    const { intl } = this.context;

    let errorNode;
    let listNode;
    if (error) {
      errorNode = (
        <Notification
          status='critical'
          size='large'
          state={error.message}
          message='An unexpected error happened, please try again later'
        />
      );
    } else if (integrations.length === 0) {
      listNode = (
        <Box
          direction='row'
          responsive={false}
          pad={{ between: 'small', horizontal: 'medium', vertical: 'medium' }}
        >
          <Spinning /><span>Loading...</span>
        </Box>
      );
    } else {
      const integrationsNode = (integrations || []).map(integration => (
        <ListItem
          key={`integration_${integration.id}`}
          justify='between'
        >
          <Label><Anchor path={`/integrations/${integration.id}`} label={integration.name} /></Label>
          <Box
            direction='row'
            responsive={false}
            pad={{ between: 'small' }}
          >
            <Value
              value={integration.percentComplete}
              units='%'
              align='start'
              size='small'
            />
            <Meter value={integration.percentComplete} />
          </Box>
        </ListItem>
      ));

      listNode = (
        <List>
          {integrationsNode}
        </List>
      );
    }

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
        {errorNode}
        <Box pad={{ horizontal: 'medium' }}>
          <Paragraph size='large'>
            The backend here is using websocket.
          </Paragraph>
        </Box>
        {listNode}
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
  intl: PropTypes.object
};

const select = state => ({ ...state.integrations });

export default connect(select)(Integrations);
