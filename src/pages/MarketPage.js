import styled from 'styled-components';
import { Button } from './LoginPage.js';

export default function MarketPage({ ships }) {
  return (
    <main>
      <h1>Marketplace</h1>

      <p>List of ships...</p>

      <ShipListContainer>
        {ships.map(ship => (
          <ShipList key={ship.type} role="list">
            <ShipListItem>Manufacturer: {ship.manufacturer}</ShipListItem>
            <ShipListItem>Type: {ship.type}</ShipListItem>
            <ShipListItem>Max-Cargo: {ship.maxCargo}</ShipListItem>
            <ShipListItem> Speed: {ship.speed}000</ShipListItem>
            <ShipListItem> Weapons: {ship.weapons}</ShipListItem>
            <ShipListItem> Plating: {ship.plating}</ShipListItem>
            <ShipListItem>
              Ship Price: {ship.purchaseLocations[0].price} Credits
            </ShipListItem>
            <div>
              <Button>Buy</Button>
            </div>
          </ShipList>
        ))}
      </ShipListContainer>
    </main>
  );
}

const ShipListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ShipList = styled.ul`
  list-style: none;
  border-radius: 6px;
  padding: 8px;
  border: 1px solid gold;
  width: 240px;

  & div {
    display: flex;
    justify-content: center;
    margin: 15px 0;
  }
`;

const ShipListItem = styled.li`
  padding: 6px;

  &:first-child {
    font-weight: bold;
    font-size: 112%;
    margin-bottom: 10px;
  }
`;
