import { useContext, useState } from "react";
import { taskcontext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const [tasks, settasks] = useContext(taskcontext);
    const [title, settitle] = useState("");
    const [status, setstatus] = useState("incomplete");
    const [description, setdescription] = useState("");

    const submithandler = (e) => {
        e.preventDefault();
        const newtask = { title, status, description };
        const copytasks = [...tasks];
        copytasks.push(newtask);
        settasks(copytasks);
        navigate("/show");
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
            <h1 className="text-3xl font-extrabold mb-10 text-center text-gray-800">
                Two Way Binding | Rendering
            </h1>
            <form
                onSubmit={submithandler}
                className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md"
            >
                <div className="mb-5">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Title"
                        onChange={(e) => settitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-gray-700">Status</label>
                    <div className="flex items-center">
                        <input
                            name="status"
                            type="radio"
                            className="mr-2"
                            onChange={() => setstatus("complete")}
                            checked={status === "complete"}
                        />
                        <label className="mr-5">Complete</label>
                        <input
                            name="status"
                            type="radio"
                            className="mr-2"
                            onChange={() => setstatus("incomplete")}
                            checked={status === "incomplete"}
                        />
                        <label>Incomplete</label>
                    </div>
                </div>
                <div className="mb-5">
                    <textarea
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Enter description here..."
                        onChange={(e) => setdescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Create;
