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
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/holidays/">Holidays</Link>
          </li>
          <li>
            {user.name ? (
              <Link to="/holidays/62a95260d334fce1be1c17cf">Detail</Link>
            ) : null}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
