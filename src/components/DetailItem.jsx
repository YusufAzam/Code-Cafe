import React from 'react';
import './DetailItem.css';
import { useParams } from 'react-router-dom';

function DetailItem() {
  const { id } = useParams();
  return (
    <div className="detail-item-component">
      { id }
    </div>
  );
}

export default DetailItem;
