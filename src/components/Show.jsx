import { useContext } from "react";
import css from "../App.module.css";
import { taskcontext } from "../context/TaskContext";
import { Link, Outlet, useLocation } from "react-router-dom";

const Show = () => {
    const location = useLocation();
    const [tasks, settasks] = useContext(taskcontext);

    const deletehandler = (i) => {
        const copytasks = [...tasks];
        copytasks.splice(i, 1);
        settasks(copytasks);
    };

    const mycss = {
        color: "royalblue",
    };

    let rendertasks = <h1>Loading...</h1>;
    if (tasks.length > 0) {
        rendertasks = tasks.map((t, i) => {
            return (
                <li
                    key={i}
                    className="rounded mb-3 p-2 w-full sm:w-2/3 lg:w-1/2 flex justify-between items-center bg-zinc-200"
                >
                    <span className="text-red-500 text-lg sm:text-xl lg:text-2xl">
                        {t.title}
                    </span>
                    <span className="text-xl flex gap-x-3">
                        <Link
                            to={`${location.pathname}/${i}`}
                            style={mycss}
                            className="ri-pencil-line"
                        ></Link>
                        <i
                            onClick={() => deletehandler(i)}
                            className="ri-close-fill cursor-pointer text-red-500"
                        ></i>
                    </span>
                </li>
            );
        });
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
            <h1 className={`${css.typoWord} mb-10 text-3xl font-extrabold text-center text-gray-800`}>
                Pending Tasks
            </h1>
            <ul className="list-decimal w-full flex flex-col items-center">
                {rendertasks}
            </ul>
            <hr className="w-full my-10 border-gray-300" />
            <Outlet />
        </div>
    );
};

export default Show;
