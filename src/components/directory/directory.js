import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item';
import { data } from './constants';
import './directory-styles.scss';

const Directory = () => {
  const [sections] = useState(data);
  return (
    <div className="directory-menu">
      {
        sections.map(({ id, ...sectionProps }) => {
          return (
            <MenuItem key={id} {...sectionProps} />
          )})
      }
    </div>
  );
};

export default Directory;
