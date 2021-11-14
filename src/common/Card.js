import React from 'react';
import styled from '@emotion/styled';

const Card = (props) => {
  const StyledNode = styled.div({
    padding: props.manyChildren ? '2px' : '5px',
    borderRadius: '100%',
    position: 'absolute',
    top: '-25px',
    left: props.manyChildren ? '20px' : '45px',
    zIndex: '2',
    background: '#ccddf9',
  });
      
  const StyledCard = styled.div({
    padding: props.manyChildren ? '2px' : '4px',
    flexDirection: 'column',
    width: props.manyChildren ? '60px' : '140px',
    height: props.manyChildren ? '25px' : '70px',
    display: 'inline-block',
    borderRadius: '10%',
    position: 'relative',
    backgroundColor: props.color
    });
      
    const TitleCard = styled.div({
      position: 'relative',
      top: `${props.manyChildren ? '6px' : '30px'}`,
      fontSize: `${props.manyChildren ? '8px' : '12px'}`,
    });

  return (<StyledCard color={props.color}>
    {!props.manyChildren && <StyledNode>
      <img
        alt='img'
        src={props.img}
        width={`${props.manyChildren ? 22 : 45}`}
        height={`${props.manyChildren ? 22 : 45}`}
      />
    </StyledNode>}
    <TitleCard>
      <b>{props.name}</b>
    </TitleCard>
    <TitleCard>
      <span>{props.region}</span>
    </TitleCard>
  </StyledCard>);
};

export default Card;
