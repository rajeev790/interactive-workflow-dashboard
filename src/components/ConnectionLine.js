import React from 'react';

const ConnectionLine = ({ connection }) => {
  const { start, end } = connection;
  const style = {
    position: 'absolute',
    left: Math.min(start.x, end.x),
    top: Math.min(start.y, end.y),
    width: Math.abs(start.x - end.x),
    height: Math.abs(start.y - end.y),
    border: '1px solid black',
    transform: `rotate(${Math.atan2(end.y - start.y, end.x - start.x)}rad)`,
    transformOrigin: '0 0',
  };

  return <div style={style} />;
};

export default ConnectionLine;