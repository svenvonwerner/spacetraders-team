import styled from 'styled-components';

export default function MarketPage({ ships }) {
  return (
    <main>
      <h1>Marketplace</h1>

      <p>List of ships...</p>

      {ships.map(ship => (
        <ShipList key={ship.type} role="list">
          <ShipListItem> {ship.type}</ShipListItem>
          <ShipListItem> {ship.maxCargo}</ShipListItem>
          <ShipListItem> {ship.maxCargo}</ShipListItem>
          <ShipListItem> {ship.maxCargo}</ShipListItem>
          <ShipListItem> {ship.maxCargo}</ShipListItem>
          <ShipListItem> {ship.maxCargo}</ShipListItem>
        </ShipList>
      ))}
    </main>
  );
}
const ShipList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  border-radius: 6px;
  gap: 8px;
  border: 1px solid gold;
`;

const ShipListItem = styled.li`
  padding: 6px;
`;
