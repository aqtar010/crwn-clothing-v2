import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
`;
export const ImageContainer = styled.div`
  width: 15%;
  height: auto;
`;
export const ImagesDiv = styled.img`
  width: 100%;
  height: 100%;
`;

export const PriceSpan = styled.span`
  width: 23%;
  display: flex;
  justify-content: center;
`;
export const QuantitySpan = styled.span`
  display: flex;
`;

export const ArrowDiv = styled.div`
  cursor: pointer;
`;
export const ValueSpan = styled.span`
  margin: 0 10px;
`;
export const RemoveButton = styled.div`
  padding: 12px;
  cursor: pointer;
`;
