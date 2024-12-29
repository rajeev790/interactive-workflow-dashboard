export const validateWorkflow = (nodes, connections) => {
    const startNodes = nodes.filter(node => node.type === 'Start');
    if (startNodes.length !== 1) {
      return 'There must be exactly one Start node.';
    }
    // Additional validation logic can be added here
    return null;
  };