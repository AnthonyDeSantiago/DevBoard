import { useState } from 'react'
import './App.css'

import KanbanBoard from './components/KanbanBoard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-center text-2xl font-bold pt-6">DevBoard</h1>
      <KanbanBoard />
    </div>
  );
}

export default App
