import * as React from 'react';
import ReactCSSTranstionGroup from 'react-addons-css-transition-group';

export interface TranstionProps {
  name: string;
}
export default class Transition extends React.Component<TranstionProps, any> {
  render() {
    const { name } = this.props;
    return (
      <ReactCSSTranstionGroup
        transitionName={name}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {this.props.children}
      </ReactCSSTranstionGroup>
    );
  }
}
