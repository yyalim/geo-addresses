import React, { useState } from 'react';
import './DropZone.css';

export default function JSONReader({ onDrop }) {
  const [inDropZone, setInDropZone] = useState(false);

  const handleDragEnter = event => {
    setInDropZone(true);
  }

  const handleDragOver = event => {
    event.dataTransfer.effectAllowed = 'copy';
    event.dataTransfer.dropEffect = 'copy'
  }

  const handleDrop = event => {
    event.preventDefault();
    event.stopPropagation();

    onDrop(event.dataTransfer.files);
    setInDropZone(false);
  }

  const handleDragLeave = event => {
    setInDropZone(false);
  }

  return (
    <div
      className={inDropZone ? 'dropzone in-dropzone' : 'dropzone'}
      data-testid="dropzone"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      { !inDropZone && <div className="dropzone__plus-icon" data-testid="plus-icon"></div> }
    </div>
  );
}
