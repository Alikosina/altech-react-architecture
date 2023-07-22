import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { MainPage } from './assets/components/pages/MainPage';
import { TaskDetailPage } from './assets/components/pages/TaskDetailPage';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/detail' element={<TaskDetailPage />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
