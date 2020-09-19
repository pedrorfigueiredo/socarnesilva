import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Info, Name, Description, Price, ImageContainer, Image } from "./styles";

const ItemCard = ({ item }) => {
  return (
    <Wrapper>
      <Info>
        <Name>{item.name}</Name>
        <Description>{item.description.replace(/^(.{80}[^\s]*).*/, "$1") + "..."}</Description>
        <Price>R$ {item.price.toFixed(2)}</Price>
      </Info>
      <ImageContainer>
        <Image src={item.image.url} />
      </ImageContainer>
    </Wrapper>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemCard;
