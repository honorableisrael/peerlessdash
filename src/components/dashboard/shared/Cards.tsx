import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  min-width: 321px;
  @media (min-width: 768px) {
    min-width: 24%;
  }
  @media (max-width: 900px) {
   margin-bottom:.8rem;
  }
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  padding: 1rem;
  @media (min-width: 640px) {
    padding: 1.75rem;
  }
  border: 1px solid #f4f0ff;
  border-radius: 10px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.125rem;
`;

const Amount = styled.div`
  font-size: 32px;
  margin-top: 0.5rem;
  font-weight: 600;
`;

const Currency = styled.span`
  font-size: 24px;
  color: #667085;
  margin: 0 0.25rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 16px;
  color: #4b5563;
`;

const Icon = styled.svg`
  width: 16px;
  height: 17px;
  cursor: pointer;
  color: #2563eb;
  &:hover {
    color: #1e40af;
  }
`;
interface Item {
  title: string;
  amount: number;
  phone: string;
}

interface ItemCardProps {
  item: Item;
  className?:string;
}
const ItemCard: React.FC<ItemCardProps> = ({ item }) => { 
  return (
    <CardContainer>
      <CardContent>
        <Title>{item.title}</Title>
        <Amount>
          <Currency>₦</Currency>
          {item.amount}
          <Currency>.20</Currency>
        </Amount>
        <Info>
          <span>{item.phone}</span>
        </Info>
      </CardContent>
    </CardContainer>
  );
};

export default ItemCard;