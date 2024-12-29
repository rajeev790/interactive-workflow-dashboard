import React from 'react';
import { useDrop } from 'react-dnd';
import Node from './Node';
import ConnectionLine from './ConnectionLine';

const Canvas = ({ nodes, connections, onDrop, onNodeSelect }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'NODE',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`canvas ${isOver ? 'highlight' : ''}`}>
      {nodes.map((node) => (
        <Node key={node.id} node={node} onSelect={onNodeSelect} />
      ))}
      {connections.map((conn) => (
        <ConnectionLine key={conn.id} connection={conn} />
      ))}
    </div>
  );
};

export default Canvas;