import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  useEffect(() => { axios.get('http://127.0.0.1:8000/api/todos/').then(res => setTodos(res.data)); }, []);
  const addTodo = () => { axios.post('http://127.0.0.1:8000/api/todos/', { title }).then(res => setTodos([...todos, res.data])); setTitle(''); };
  return (<div className="p-4">
    <h1 className="text-2xl font-bold mb-4">TODO List</h1>
    <input value={title} onChange={e => setTitle(e.target.value)} className="border p-2 mr-2" />
    <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2">Add</button>
    <ul className="mt-4">{todos.map(t => <li key={t.id}>{t.title}</li>)}</ul>
  </div>);
}
