import React from 'react';
import Tooltip from './Tooltip';

const Node = ({ node, onSelect }) => {
  return (
    <div
      className="node"
      style={{ left: node.x, top: node.y, position: 'absolute' }}
      onClick={() => onSelect(node)}
      data-tip
      data-for={`node-tooltip-${node.id}`} // Unique ID for the tooltip
    >
      {node.type}: {node.name}
      <Tooltip id={`node-tooltip-${node.id}`} content={`Execution Time: ${node.executionTime} ms`} />
    </div>
  );
};

export default Node;