import styled from 'styled-components';
import useFetch from '../hooks/useFetch.js'

export default function UserStatusPage({ user}) {
  
  const [loans] = useFetch();

  const newwnew = loans.loans[0].amount
  console.log()
  
  return (
    <main>
      <h1>User status</h1>
      <UserInformation role="list">
        <li>Username: {user.username}</li>
        <li>Credits: {user.credits}</li>
      </UserInformation>
      <section>
        <p></p>
      </section>
    </main>
  );
}

const UserInformation = styled.ul`
  list-style: none;
  padding: 10px;

  & li {
    padding: 5px;
  }
`;
