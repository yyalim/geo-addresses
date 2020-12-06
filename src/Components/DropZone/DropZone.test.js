import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DropZone from './DropZone';

it('should fire onDrop function when item droped', () => {
  const handleDrop = jest.fn();
  render(<DropZone onDrop={handleDrop} />)

  fireEvent.drop(screen.getByTestId('dropzone'), {
    dataTransfer: {}
  })

  expect(handleDrop).toBeCalled();
});

it('should change class when dragged item enters', () => {
  const { queryByTestId } = render(<DropZone />);

  const dropZone = screen.getByTestId('dropzone');
  expect(queryByTestId(/plus-icon/)).not.toBeNull();

  fireEvent.dragEnter(dropZone);

  expect(dropZone).toHaveClass('in-dropzone');
  expect(queryByTestId(/plus-icon/)).toBeNull();
});

it('should return to initial state when dragged item leaves', () => {
  const { queryByTestId } = render(<DropZone />);

  const dropZone = screen.getByTestId('dropzone');

  fireEvent.dragLeave(dropZone);

  expect(dropZone).not.toHaveClass('in-dropzone');
  expect(queryByTestId(/plus-icon/)).not.toBeNull();
});

it('should allow data transfer effects', () => {
  const mockedEvent = { dataTransfer: {} }

  render(<DropZone />);

  const dropZone = screen.getByTestId('dropzone');

  fireEvent.dragOver(dropZone, mockedEvent);

  expect(mockedEvent.dataTransfer.effectAllowed).toBe('copy');
  expect(mockedEvent.dataTransfer.dropEffect).toBe('copy');
});