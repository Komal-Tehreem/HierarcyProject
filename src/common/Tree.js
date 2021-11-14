import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from '@emotion/styled';
import Card from './Card';

const TreeComponent = (props) => {
  const Div = styled.div({
    position: 'relative',
    top: '30px'
  });

  const getColor = (status) => {
    switch(status) {
      case 'warning':
        return ('#efe597');

      case 'normal':
        return ('#e4f5e2');

      default:
        return ('#ecb9b9')
    }
  }

  const treeNodes = (value) => {
    return value?.children && value.children.map((childValue, childKey) =>
      <TreeNode
        key={childKey}
        label={Card({
          ...childValue,
          color: getColor(childValue.status)
        })}
      >
        {childValue?.children?.length &&
          treeNodes(childValue)
        }
      </TreeNode>
    );
  };

  const { data } = props;

  return (<Div>
    <Tree
      lineHeight={'60px'}
      label={Card({ ...data, color: getColor(data.status) })}
    >
    {treeNodes(data)}
    </Tree>
  </Div>
)};

export default TreeComponent;
