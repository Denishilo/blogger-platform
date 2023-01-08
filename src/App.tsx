import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {Navigation} from "./components/navigation/navigation";
import {Blogs} from "./components/blogs/blogs";
import {Posts} from "./components/posts/posts";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <>
            <Header/>
            <section className='sectionWrapper'>
                <Navigation/>
                <div className='contentWrapper'>
                    <Routes>
                        <Route path={'/'} element={<Blogs/>}/>
                        <Route path={'blogs'} element={<Blogs/>}/>
                        <Route path={'posts'} element={<Posts/>}/>
                    </Routes>
                </div>
            </section>


        </>
    );
}

export default App;
