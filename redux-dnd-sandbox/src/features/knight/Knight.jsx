import React from 'react';
import { KNIGHT } from '../../constants';
import { useDrag } from 'react-dnd';

const knightStyle = {
  fontSize: 80,
  fontWeight: 'bold',
  cursor: 'grab',
};

export const Knight = () => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: KNIGHT },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div ref={drag} style={{ ...knightStyle, opacity: isDragging ? 0.5 : 1 }}>
      ♘
    </div>
  );
};
