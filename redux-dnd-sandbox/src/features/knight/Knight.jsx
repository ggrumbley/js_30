import React from 'react';
import { KNIGHT } from '../../constants';
import { useDrag } from 'react-dnd';

export const Knight = () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: KNIGHT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="knight" style={{ opacity: isDragging ? 0.5 : 1 }}>
      ♘
    </div>
  );
};
