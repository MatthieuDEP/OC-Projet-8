import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home";
import Skills from "../pages/skills/Skills";
import Works from "../pages/works/Works";
import NotFound from "../pages/notFound/NotFound";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};