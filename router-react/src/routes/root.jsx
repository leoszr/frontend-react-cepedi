import { Link } from "react-router";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Teste</h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">about</Link>;
            </li>
            <li>
              <Link to="/contacts">contacts</Link>;
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
