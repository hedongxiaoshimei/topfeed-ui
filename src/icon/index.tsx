import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

export interface IconProps {
  type: string;
  className?: string;
  spin?: boolean
}

const Icon = (props: IconProps) => {
  const { type, spin } = props;
  const classString = classNames({
    uiyicon: true,
    ['uiyicon-spin']: !!spin || type === 'loading',
    [`uiyicon-${type}`]: true
  });
  return (
    <i {...omit(props, ['type', 'spin'])} className={classString} />
  )
}
export default Icon;