import styled from "styled-components";

export default function ShipsPage({myShips}) {
  return (
    <main>
      {myShips.map((ship, index) => (
          <ShipList key={ship.id}>
            <ShipListItem>Manufacturer: {ship.manufacturer}</ShipListItem>
            <ShipListItem>Type: {ship.type}</ShipListItem>
            <ShipListItem>Current-Cargo: {ship.cargo}</ShipListItem>
            <ShipListItem>Max-Cargo: {ship.maxCargo}</ShipListItem>
            <ShipListItem>Available Space: {ship.spaceAvailable}</ShipListItem>
            <ShipListItem>Location: {ship.location}</ShipListItem>
            <ShipListItem> Speed: {ship.speed}000</ShipListItem>
            <ShipListItem> Weapons: {ship.weapons}</ShipListItem>
            <ShipListItem> Plating: {ship.plating}</ShipListItem>
          </ShipList>
        ))}
    </main>
  );
}

const ShipList = styled.ul`
  list-style: none;
  border-radius: 6px;
  padding: 8px;
  border: 1px solid gold;
  width: 240px;


`;



const ShipListItem = styled.li`
  padding: 6px;

  &:first-child {
    font-weight: bold;
    font-size: 112%;
    margin-bottom: 10px;
  }
`;