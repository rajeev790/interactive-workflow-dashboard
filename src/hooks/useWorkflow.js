import { useState, useEffect } from 'react';

const useWorkflow = () => {
  const [nodes, setNodes] = useState(() => {
    const savedNodes = localStorage.getItem('workflowNodes');
    return savedNodes ? JSON.parse(savedNodes) : [];
  });
  const [connections, setConnections] = useState(() => {
    const savedConnections = localStorage.getItem('workflowConnections');
    return savedConnections ? JSON.parse(savedConnections) : [];
  });

  const saveWorkflow = () => {
    localStorage.setItem('workflowNodes', JSON.stringify(nodes));
    localStorage.setItem('workflowConnections', JSON.stringify(connections));
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (nodes.length > 0 || connections.length > 0) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [nodes, connections]);

  return { nodes, connections, setNodes, setConnections, saveWorkflow };
};

export default useWorkflow;