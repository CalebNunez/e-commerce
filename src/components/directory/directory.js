import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item';
import { data } from './constants';
import './directory-styles.scss';

const Directory = () => {
  const [sections] = useState(data);
  return (
    <div className="directory-menu">
      {
        sections.map(({ id, imageUrl, title, size }) => {
          return (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
          )})
      }
    </div>
  );
};

export default Directory;
