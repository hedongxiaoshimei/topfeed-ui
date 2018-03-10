import * as React from 'react';
import * as ReactDOM from 'react-dom';
export interface PortalProps {
  getContainer?: () => Element;
  children: React.ReactNode;
}

export default class Portal extends React.Component<PortalProps, any> {
  static defaultProps = {
    getContainer: () => document.body
  };
  _container: Element;
  componentDidMount() {
    this.createContainer();
  }
  componentWillUnmount() {
    this.removeContainer();
  }
  createContainer = () => {
    if (this.props.getContainer !== undefined) {
      this._container = this.props.getContainer();
    }
    this.forceUpdate();
  };
  removeContainer = () => {
    if (this._container) {
      this._container;
    }
  };
  render() {
    if (this._container) {
      return ReactDOM.createPortal(this.props.children, this._container);
    }
    return null;
  }
}
