

import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode chamar a função de login do seu serviço de autenticação
    console.log(`Logging in with username: ${username} and password: ${password}`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-72 p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-center mb-6 text-gray-800 text-lg font-semibold">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            Username:
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300"
            />
          </label>
          <label className="block mb-4">
            Password:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-md border border-gray-300"
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md border-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;