export default function LoginPage() {
  return (
    <section>
      <form>
        <label for="username"></label>
        <input
          id="username"
          placeholder="Username e.g."
          required
          type="text"
        ></input>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
