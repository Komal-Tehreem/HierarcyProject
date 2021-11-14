import React from "react";
import styled from "@emotion/styled";

const Card = (props) => {
  const StyledNode = styled.div({
    padding: '5px',
    borderRadius: '100%',
    position: 'absolute',
    top: '-25px',
    left: '45px',
    zIndex: '2',
    background: '#ccddf9',
  });
      
  const StyledCard = styled.div({
    padding: '4px',
    flexDirection: 'column',
    width: '140px',
    height: '70px',
    display: 'inline-block',
    borderRadius: '10%',
    position: 'relative',
    backgroundColor: props.color
    });
      
    const TitleCard = styled.div({
      position: 'relative',
      top: '30px',
      fontSize: '12px',
    });

  return (<StyledCard color={props.color}>
    <StyledNode>
      <img
        alt="img"
        src={props.img}
        width={45}
        height={45}
      />
    </StyledNode>
    <TitleCard>
      <b>{props.name}</b>
    </TitleCard>
    <TitleCard>
      <span>{props.region}</span>
    </TitleCard>
  </StyledCard>);
};

export default Card;
