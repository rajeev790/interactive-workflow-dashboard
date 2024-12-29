import React, { useState } from 'react';

const Sidebar = ({ selectedNode, onChange }) => {
  const [name, setName] = useState(selectedNode ? selectedNode.name : '');
  const [executionTime, setExecutionTime] = useState(selectedNode ? selectedNode.executionTime : '');

  const handleUpdate = () => {
    if (selectedNode) {
      onChange({ ...selectedNode, name, executionTime });
    }
  };

  return (
    <div className="sidebar">
      {selectedNode ? (
        <div>
          <h3>Node Details</h3>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <label>Execution Time:</label>
          <input type="number" value={executionTime} onChange={(e) => setExecutionTime(e.target.value)} />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => onChange(null)}>Deselect</button>
        </div>
      ) : (
        <p>Select a node to see details</p>
      )}
    </div>
  );
};

export default Sidebar;