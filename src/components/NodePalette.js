import React from 'react';
import { useDrag } from 'react-dnd';

const NodePalette = () => {
  const nodeTypes = [
    { id: '1', type: 'Task', name: 'Sample Task', executionTime: 100 },
    { id: '2', type: 'Decision', name: 'Sample Decision', executionTime: 200 },
    { id: '3', type: 'Start', name: 'Start Node', executionTime: 0 },
    { id: '4', type: 'End', name: 'End Node', executionTime: 0 },
  ];

  return (
    <div className="node-palette">
      <h3>Node Palette</h3>
      {nodeTypes.map((node) => {
        const [{ isDragging }, drag] = useDrag({
          type: 'NODE',
          item: node,
          collect: (monitor) => ({
            isDragging: !!monitor .isDragging(),
          }),
        });

        return (
          <div
            key={node.id}
            ref={drag}
            className={`node ${isDragging ? 'dragging' : ''}`}
            style={{ cursor: 'move' }}
          >
            {node.name}
          </div>
        );
      })}
    </div>
  );
};

export default NodePalette;