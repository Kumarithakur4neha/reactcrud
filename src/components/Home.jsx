import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800">
                    Welcome to the Home Page
                </h1>
                <p className="mt-4 text-base sm:text-lg lg:text-xl text-center text-gray-600">
                    This is a responsive home page built with React and styled using Tailwind CSS.
                </p>
                <div className="mt-8 flex justify-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
