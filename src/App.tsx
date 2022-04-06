import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";

function App() {
    return (
        <HashRouter>
            <div className="app">
                <div className="app__wrapper">
                    <Header/>
                    <div className="content">

                        <div className="content__load">
                            <Routes>
                                <Route path="/main" element={<div>SpaseX</div>}/>
                                <Route path="/technology" element={<div className={"load__plug"}>Технология</div>}/>
                                <Route path="/schedule" element={<div className={"load__plug"}>График полетов</div>}/>
                                <Route path="/warranty" element={<div className={"load__plug"}>Гарантии</div>}/>
                                <Route path="/about" element={<div className={"load__plug"}>О компании</div>}/>
                                <Route path="/contacts" element={<div className={"load__plug"}>Контакты</div>}/>
                                <Route path="/" element={<div>Welcome to "Takeoff Staff" contacts SPA</div>}/>
                                <Route path="*" element={<div>404 PAGE NOT FOUND</div>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
