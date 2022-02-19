import styled from 'styled-components';
import { Button } from './LoginPage.js';
// import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

export default function UserStatusPage({ user, token, data }) {
  // const [loan, setLoan] = useState([]);
  const myFirstshipID = 'ckztxz0qi6083315s6qk3n5ho4';
  const [loan, setLoan] = useLocalStorage('loan', []);
  console.log(loan.status);
  return (
    <main>
      <h1>User status</h1>
      {user && (
        <UserInformation role="list">
          <li>Username: {user.username}</li>
          <li>Credits: {user.credits}</li>
        </UserInformation>
      )}
      <section>
        {loan !== [] ? (
          <div>
            <p>{loan.type} </p>
            <p>{loan.due} </p>
            <p>{loan.repaymentAmount} </p>
            <p>{loan.status} </p>
          </div>
        ) : (
          data.map(loan => (
            <div key={loan.type}>
              <p>{loan.amount} Credits</p>
              <p>Rate: {loan.rate}</p>
              <p>Type: {loan.type}</p>
              <Button onClick={handleGetLoan}>Get loan</Button>
            </div>
          ))
        )}
      </section>
    </main>
  );

  async function handleGetLoan() {
    const loanType = 'STARTUP';
    const response = await fetch(
      `https://api.spacetraders.io/my/loans?token=${token}&type=${loanType}`,
      {
        method: 'POST',
      }
    ).catch(error => {
      console.log('ERROR', error.message);
    });

    if (response.ok) {
      const data = await response.json();
      setLoan(data.loan);
      window.location.reload();
      alert('Transaction successfull!');
    }
  }
}

const UserInformation = styled.ul`
  list-style: none;
  padding: 10px;

  & li {
    padding: 5px;
  }
`;
