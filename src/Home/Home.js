import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import TodoList from '../components/TodoList/TodoList';
import Footer from '../components/Footer/Footer';

const Home = () => {
   return (
      <div
    className="grid place-items-center bg-gray-100 h-screen px-6 font-sans"
>
    <Navbar />

    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

        <Header />
        <hr className="mt-4" />

        <TodoList />

        <hr className="mt-4" />

        <Footer />
    </div>
</div>
   );
};

export default Home;