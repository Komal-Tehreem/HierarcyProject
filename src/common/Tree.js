import React from 'react';
import { Tree, TreeNode } from "react-organizational-chart";
import Card from './Card';

const TreeComponent = (props) => {
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

  return (<div
    style={{
      position: "relative",
      top: "30px"
    }}
  >
    <Tree
      lineHeight={"60px"}
      label={Card({ ...data, color: getColor(data.status) })}
    >
    {treeNodes(data)}
    </Tree>
  </div>
)};

export default TreeComponent;
