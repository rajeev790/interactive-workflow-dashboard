import React from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltip = ({ id, content }) => {
  return (
    <div>
      <ReactTooltip id={id} place="top" effect="solid">
        {content}
      </ReactTooltip>
    </div>
  );
};

export default Tooltip;