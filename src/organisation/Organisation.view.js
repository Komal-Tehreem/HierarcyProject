import React from 'react';
import { dataManagementHeavy, data, dataManagementLean } from './organisation.utils';
import Tree from '../common/Tree';

const Organisation = () => {
  return (
    <div>
      {data.map((value, key) => 
        <Tree key={key} data={value} />
      )}
    </div>
  )
};

export default Organisation;
