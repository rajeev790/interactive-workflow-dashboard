import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';
import AnalyticsPanel from './components/AnalyticsPanel';
import NodePalette from './components/NodePalette';
import useWorkflow from './hooks/useWorkflow';
import { validateWorkflow } from './utils/workflowUtils';
import './styles/App.css';

const App = () => {
  const { nodes, connections, setNodes, setConnections, saveWorkflow } = useWorkflow();
  const [selectedNode, setSelectedNode] = useState(null);

  const handleDrop = (item) => {
    const newNode = { ...item, x: 100, y: 100 }; // Example positioning
    setNodes((prev) => [...prev, newNode]);
  };

  const handleNodeSelect = (node) => {
    setSelectedNode(node);
  };

  const handleSave = () => {
    const error = validateWorkflow(nodes, connections);
    if (error) {
      alert(error);
    } else {
      saveWorkflow();
    }
  };

  return (
    <div className="App">
      <button onClick={handleSave}>Save Workflow</button>
      <NodePalette />
      <Canvas nodes={nodes} connections={connections} onDrop={handleDrop} onNodeSelect={handleNodeSelect} />
      <Sidebar selectedNode={selectedNode} onChange={setSelectedNode} />
      <AnalyticsPanel nodes={nodes} />
    </div>
  );
};

export default App;