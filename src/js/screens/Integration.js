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

import {
  loadIntegration, unloadIntegration
} from '../actions/integrations';

import { pageLoaded } from './utils';

class Integration extends Component {
  componentDidMount() {
    const { match: { params }, dispatch } = this.props;
    pageLoaded('Integration');
    dispatch(loadIntegration(params.id));
  }

  componentWillUnmount() {
    const { match: { params }, dispatch } = this.props;
    dispatch(unloadIntegration(params.id));
  }

  render() {
    const { error, integration } = this.props;

    let errorNode;
    let integrationNode;
    if (error) {
      errorNode = (
        <Notification
          status='critical'
          size='large'
          state={error.message}
          message='An unexpected error happened, please try again later'
        />
      );
    } else if (!integration) {
      integrationNode = (
        <Box
          direction='row'
          responsive={false}
          pad={{ between: 'small', horizontal: 'medium', vertical: 'medium' }}
        >
          <Spinning /><span>Loading...</span>
        </Box>
      );
    } else {
      integrationNode = (
        <Box pad='medium'>
          <Label>Status: {integration.status}</Label>
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
        </Box>
      );
    }

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
          <Anchor path='/integrations'>
            <LinkPrevious a11yTitle='Back to Integrations' />
          </Anchor>
          <Heading margin='none' strong={true}>
            {integration ? integration.name : 'Integration'}
          </Heading>
        </Header>
        {errorNode}

        {integrationNode}
      </Article>
    );
  }
}

Integration.defaultProps = {
  error: undefined,
  integration: undefined
};

Integration.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  match: PropTypes.object.isRequired,
  integration: PropTypes.object
};

const select = state => ({ ...state.integrations });

export default connect(select)(Integration);
