import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Works from "../components/works/Works";
import NotFound from "../pages/notFound/NotFound";
import Work from "../pages/work/Work";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#skills" element={<Skills />} />
            <Route path="/#works" element={<Works />} />
            <Route path="/work/:id" element={<Work />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};