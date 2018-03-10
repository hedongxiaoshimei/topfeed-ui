import * as React from 'react';
import classnames from 'classnames';
import './index.scss';

export type ButtonType = 'primary' | 'text';
export type ButtonSize = 'small' | 'default' | 'larget';
export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  prefixCls?: string;
  active?: boolean;
  className?: string;
  loading?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
}
export default class Button extends React.Component<ButtonProps, any> {
  static defaultProps = {
    type: 'primary',
    size: 'default',
    prefixCls: 'y-btn',
    active: false,
    disabled: false
  };
  render() {
    const {
      prefixCls,
      type,
      size,
      active,
      loading,
      className,
      disabled,
      children
    } = this.props;
    const cls = classnames(prefixCls, {
      [`${prefixCls}-size-${size}`]: size,
      [`${prefixCls}-${type}`]: type,
      active,
      loading,
      className
    });
    return (
      <button disabled={disabled || loading} className={cls}>
        {children}
      </button>
    );
  }
}
