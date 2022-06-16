import { Link, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App";

function Layout() {
  const [user, setUser] = useAtom(userAtom);

  return (
    <>
    <p>Hi { user.name} </p>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/holidays/">Main</Link>
          </li>
          <li>
            {user.name ? (
              <Link to="/holidays/62a950b94c3fbabc57bfabc9">Detail</Link>
            ) : null}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
