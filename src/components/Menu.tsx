import { AiOutlineUser, AiTwotoneShop } from "react-icons/ai";
import { Avatar, Badge, Button } from "@nextui-org/react";
import { PiBriefcase, PiChatTeardropTextFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useSignInContext } from "./context/SignIn";
import { useMenuContext } from "./context/MenuToggler";

const Menu: React.FC = () => {
  const { isSignIn, signOut } = useSignInContext();
  const { menuIsOn } = useMenuContext();

  // I should add pr-2 to every div when it's clicked
  return (
    <p
      className={`bg-indigo-700 lg:basis-1.5 sm:basis-1.5 relative h-screen ${
        menuIsOn ? "flex" : "hidden"
      } sm:flex flex-col justify-between`}
    >
      <div className="flex flex-col items-center justify-around h-1/4 text-slate-100">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full rounded-none cursor-pointerpy-3 flex justify-center bg-white inverted-border-menu pr-2"
              : "w-full rounded-none cursor-pointerpy-3 flex justify-center "
          }
          to="/"
        >
          <PiChatTeardropTextFill className="lg:size-10 size-7 text-lightblue" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full rounded-none cursor-pointerpy-3 flex justify-center bg-white inverted-border-menu text-indigo-900"
              : "w-full rounded-none cursor-pointerpy-3 flex justify-center pr-2"
          }
          to="/shopping"
        >
          <AiTwotoneShop className="lg:size-10 size-7 w-full" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full rounded-none cursor-pointerpy-3 flex justify-center bg-white inverted-border-menu text-indigo-900"
              : "w-full rounded-none cursor-pointerpy-3 flex justify-center pr-2"
          }
          to="/profile"
        >
          <AiOutlineUser className="lg:size-10 size-7 w-full" />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "w-full rounded-none cursor-pointerpy-3 flex justify-center bg-white inverted-border-menu text-indigo-900"
              : "w-full rounded-none cursor-pointerpy-3 flex justify-center pr-2"
          }
          to="/works"
        >
          <PiBriefcase className="lg:size-10 size-7" />
        </NavLink>
      </div>
      <div className="flex flex-col items-center justify-end">
        {isSignIn && (
          <Button color="secondary" onClick={signOut}>
            SignOut
          </Button>
        )}

        <Badge content="" color="success" shape="circle">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            className="lg:w-14 lg:h-14 relative"
          />
        </Badge>
      </div>
    </p>
  );
};

export default Menu;
