import styled from 'styled-components';

export default function LoginPage() {
  return (
    <section>
      <h1>FLY AWAY...</h1>
      <UserForm>
        <label for="username"></label>
        <UserInput
          id="username"
          placeholder="Username e.g."
          required
          type="text"
        ></UserInput>
        <LoginButton type="submit">Login</LoginButton>
      </UserForm>
    </section>
  );
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

const LoginButton = styled.button`
  padding: 8px 12px;
  width: 40%;
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
