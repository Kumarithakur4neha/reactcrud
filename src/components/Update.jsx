import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { taskcontext } from "../context/TaskContext";

const Update = () => {
    const navigate = useNavigate();
    const [tasks, settasks] = useContext(taskcontext);
    const { index } = useParams();
    const task = tasks[index];

    const [title, setTitle] = useState(task?.title || "");
    const [status, setStatus] = useState(task?.status || "incomplete");
    const [description, setDescription] = useState(task?.description || "");

    useEffect(() => {
        if (!task) {
            navigate("/show");
        }
    }, [task, navigate]);

    const updateHandler = (e) => {
        e.preventDefault();
        const updatedTask = { title, status, description };
        const updatedTasks = tasks.map((t, i) =>
            i === parseInt(index) ? updatedTask : t
        );
        settasks(updatedTasks);
        navigate("/show");
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
            <h1 className="text-3xl font-extrabold mb-10 text-center text-gray-800">
                Update Task
            </h1>
            <form
                onSubmit={updateHandler}
                className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md"
            >
                <div className="mb-5">
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
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
                            onChange={() => setStatus("complete")}
                            checked={status === "complete"}
                        />
                        <label className="mr-5">Complete</label>
                        <input
                            name="status"
                            type="radio"
                            className="mr-2"
                            onChange={() => setStatus("incomplete")}
                            checked={status === "incomplete"}
                        />
                        <label>Incomplete</label>
                    </div>
                </div>
                <div className="mb-5">
                    <textarea
                        className="w-full px-3 py-2 border rounded-lg"
                        placeholder="Enter description here..."
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Update
                    </button>
                </div>
            </form>
            <button
                onClick={() => navigate(-1)}
                className="mt-5 text-blue-500 hover:underline"
            >
                Back
            </button>
        </div>
    );
};

export default Update;
