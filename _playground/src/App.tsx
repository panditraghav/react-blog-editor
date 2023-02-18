import './main.css';
// import '../../style/editor_old.css';
import Editor from './Editor';
import React, { useEffect, useState } from 'react';

function Header() {
    const [mode, setMode] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        const currentMode = localStorage.getItem('mode');
        if (currentMode === 'dark') {
            document.documentElement.classList.add(currentMode);
            setMode('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setMode('light');
        }
    });
    function onClickHandler() {
        const currentMode = localStorage.getItem('mode');
        const cl = document.documentElement.classList;
        if (!currentMode) {
            localStorage.setItem('mode', 'dark');
            setMode('dark');
            cl.add(!cl.contains('dark') ? 'dark' : '');
        } else {
            if (currentMode === 'dark') {
                cl.remove('dark');
                localStorage.setItem('mode', 'light');
                setMode('light');
            } else {
                cl.add(!cl.contains('dark') ? 'dark' : '');
                localStorage.setItem('mode', 'dark');
                setMode('dark');
            }
        }
    }
    return (
        <nav className="sticky top-0 z-30 text-editor-p-dark dark:text-editor-p-light h-12 w-full bg-editor-bg-light dark:bg-editor-bg-dark flex justify-between items-center flex-row shadow-sm shadow-slate-200 dark:shadow-gray-800 mb-24">
            <div>CurrentMode: {mode}</div>
            <div>
                <button onClick={onClickHandler} className="mx-4">
                    {mode === 'dark' ? 'Light' : 'Dark'}
                </button>
            </div>
        </nav>
    );
}

function App() {
    return (
        <>
            <Header />
            <Editor />
        </>
    );
}

export default App;
