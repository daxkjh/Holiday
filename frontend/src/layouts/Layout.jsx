import { Link, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App";

function Layout() {
  const [user, setUser] = useAtom(userAtom);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/holidays/">Holidays</Link>
          </li>
          {user.name ? (
            <li>
              <Link to="/holidays/62a95260d334fce1be1c17cf">Detail</Link>
            </li>
          ) : null}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
