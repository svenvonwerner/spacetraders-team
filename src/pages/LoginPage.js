import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ token, user, onLogin, isUsernameTaken }) {
  let navigate = useNavigate('');

  return (
    <section>
      <h1>FLY AWAY...</h1>
      {isUsernameTaken && <p>Username already taken!</p>}
      <UserForm onSubmit={handleSubmit}>
        <label htmlFor="username">Login and start your adventure!</label>
        <UserInput
          id="username"
          name="username"
          placeholder="Username e.g."
          required
          type="text"
        ></UserInput>
        <Button type="submit">Login</Button>
      </UserForm>
    </section>
  );
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.username;
    onLogin(input.value);
    navigate('/userstatus', { replace: true });
  }
}

const UserForm = styled.form`
  display: grid;
  place-items: center;
  gap: 14px;
`;

const UserInput = styled.input`
  padding: 14px;
  border-radius: 6px;
  border: 3px solid gold;
  background-color: #021e3e;
  color: gold;
  font-size: 112%;

  &:focus {
    box-shadow: 0 0 0 5px rgba(255, 215, 0, 0.44);
  }
`;

export const Button = styled.button`
  padding: 8px 12px;
  width: 140px;
  font-weight: bold;
  font-size: 112%;
  background-color: gold;
  border-radius: 6px;
  border: none;
  box-shadow: 4px 4px;

  &:hover {
    opacity: 0.7;
  }
`;
