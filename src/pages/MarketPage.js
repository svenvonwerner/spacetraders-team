import styled from 'styled-components';
import { Button } from './LoginPage.js';

export default function MarketPage({
  ships,
  user,
  token,
  myShips,
  setMyShips,
}) {
  return (
    <main>
      <h1>Marketplace</h1>
      {user && user.credits} Credits
      <p>List of ships...</p>
      <ShipListContainer>
        {ships?.map((ship, index) => (
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
              <Button onClick={handleBuy} value={index}>
                Buy
              </Button>
            </div>
          </ShipList>
        ))}
      </ShipListContainer>
    </main>
  );

  async function handleBuy(e) {
    const arrayOfLocations = ships.map(
      ship => ship.purchaseLocations[0].location
    );
    const arrayOfTypes = ships.map(ship => ship.type);
    const response = await fetch(
      `https://api.spacetraders.io/my/ships?token=${token}&location=${
        arrayOfLocations[e.target.value]
      }&type=${arrayOfTypes[e.target.value]}`,
      {
        method: 'POST',
      }
    ).catch(error => {
      console.log('ERROR', error.message);
    });

    if (response.ok) {
      const data = await response.json();
      setMyShips([...myShips, data.ship]);
      window.location.reload();
      alert('Nice choice!!!');
    }
  }
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
