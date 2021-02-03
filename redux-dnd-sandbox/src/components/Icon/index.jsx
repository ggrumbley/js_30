import React from 'react';
import PropTypes from 'prop-types';
import ICON_DATA from './data';

const Icon = ({ children, id, iconStr, colorStr, widthPx }) => {
  const ICON = ICON_DATA[iconStr];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={widthPx || ICON.widthPx}
      height={widthPx ? (widthPx / ICON.widthPx) * ICON.heightPx : ICON.heightPx}
      viewBox={`0 0 ${ICON.widthPx} ${ICON.heightPx}`}
    >
      {children}
      <path
        d={ICON.path}
        fill={colorStr || ((id || id === 0) && `url(#${id})`) || ICON.defaultFillHex}
        fillRule={ICON.fillRule || 'evenodd'}
      />
    </svg>
  );
};

Icon.propTypes = {
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconStr: PropTypes.string.isRequired,
  colorStr: PropTypes.string,
  widthPx: PropTypes.number,
};

export default Icon;
