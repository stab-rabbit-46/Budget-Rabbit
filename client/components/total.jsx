import React from 'react';

export default function total({ total }) {
  return (
    <div className="total">
      {'Total: $' + total?.toFixed(2)}
    </div>
  )
}
