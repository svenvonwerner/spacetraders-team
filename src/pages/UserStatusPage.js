export default function UserStatusPage({user}) {
  return (
    <main>
      <h1>User status</h1>
        <dl>
          <dt>Username:</dt>
          <dd>{user.username}</dd>
          <dt>Credits:</dt>
          <dd>{user.credits}</dd>
        </dl>
      
    </main>
  );
}
