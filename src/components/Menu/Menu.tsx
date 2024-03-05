import { Link } from "react-router-dom";
import "./Menu.scss";
import { menu } from '../../data'

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
              <div className="item" key={item.id}>
              <span className="title">{item.title}</span>
             {item.listItems.map((i) => (
               <Link key={i.id} to={i.url} className="listItem">
               <img src={i.icon} alt="" />
               <span className="listItemTitle">{i.title}</span>
             </Link>
             ))}
            </div>
      ))}
    </div>
  );
};

export default Menu;
