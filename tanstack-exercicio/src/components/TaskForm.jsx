import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTask } from '../services/tasksService.js';

export function TaskForm() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createTask,
    onSuccess: (newTask) => {
      // Otimistic update: adiciona a tarefa ao cache imediatamente
      queryClient.setQueryData(['tasks'], (oldData) => {
        return oldData ? [...oldData, newTask] : [newTask];
      });
      
      setTitle('');
      setMessage('Tarefa criada com sucesso!');
      setTimeout(() => setMessage(''), 3000);
    },
    onError: () => {
      setMessage('Erro ao criar tarefa');
      setTimeout(() => setMessage(''), 3000);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      mutation.mutate({ title, userId: 1, completed: false });
    }
  };

  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
      <h3>Adicionar Tarefa</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite uma tarefa"
          style={{ marginRight: '10px', padding: '8px', width: '70%' }}
          disabled={mutation.isPending}
        />
        <button 
          type="submit" 
          disabled={mutation.isPending}
          style={{ padding: '8px 15px', cursor: mutation.isPending ? 'not-allowed' : 'pointer' }}
        >
          {mutation.isPending ? 'Criando...' : 'Adicionar'}
        </button>
      </form>
      {message && (
        <p style={{ 
          color: mutation.isError ? 'red' : 'green',
          marginTop: '10px'
        }}>
          {message}
        </p>
      )}
    </div>
  );
}
