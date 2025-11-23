import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;