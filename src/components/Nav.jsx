import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="mb-10 flex flex-col sm:flex-row gap-y-4 sm:gap-x-10 bg-gray-800 p-4 rounded-lg shadow-md">
            <NavLink
                style={(s) => ({ fontWeight: s.isActive ? "bold" : "normal" })}
                className={(s) => (s.isActive ? "text-red-400" : "text-white")}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                style={(s) => ({ fontWeight: s.isActive ? "bold" : "normal" })}
                className={(s) => (s.isActive ? "text-red-400" : "text-white")}
                to="/create"
            >
                Create
            </NavLink>
            <NavLink
                style={(s) => ({ fontWeight: s.isActive ? "bold" : "normal" })}
                className={(s) => (s.isActive ? "text-red-400" : "text-white")}
                to="/show"
            >
                Show
            </NavLink>
        </nav>
    );
};

export default Nav;
