import { Link } from "react-router-dom";

function NavLink({ linkname, img, url, index }) {
  if (linkname) {
    return (
      <Link  to={url}>
        {linkname}
      </Link>
    );
  } else {
    return (
      <Link to={url}>
        <img src={img} alt={linkname} />
      </Link>
    );
  }
}

export default NavLink;
