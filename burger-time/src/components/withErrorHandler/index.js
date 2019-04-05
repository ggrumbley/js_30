import React, { Component, Fragment } from 'react';

import Modal from '../Modal';

const withErrorHandler = (WrappedComponent, api) => class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.reqInterceptor = api.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = api.interceptors.response.use(
        res => res,
        (error) => {
          this.setState({ error });
        },
      );
    }

    componentWillUnmount() {
      api.interceptors.request.eject(this.reqInterceptor);
      api.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      const { error } = this.state;
      return (
        <Fragment>
          <Modal
            show={error}
            modalClosed={this.errorConfirmedHandler}
          >
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
};

export default withErrorHandler;
