import React, { useState } from 'react';
import classNames from 'classnames';

import useStyles from './index.style';

const Dropzone = (props) => {
  const { className, children, onDrop: handleAddFiles } = props;
  const classes = useStyles();

  const [dragging, setDragging] = useState(false);

  const onDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const onDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };

  const onDrop = (event) => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    if (files && files.length) {
      handleAddFiles(Array.from(files));
    }
    setDragging(false);
  };

  return (
    <div
      className={classNames(classes.root, {
        [className]: className !== undefined,
        [classes.dragActive]: dragging,
      })}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
};

export default Dropzone;
