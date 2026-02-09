import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTasks, deleteTask } from '../services/tasksService.js';

export function TaskList() {
  const { data = [], isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
    staleTime: Infinity // Dados nunca ficam stale
  });

  const [completedIds, setCompletedIds] = useState(new Set());
  const [deletingIds, setDeletingIds] = useState(new Set());
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onMutate: (id) => {
      // Otimistic update: remove do UI imediatamente
      setDeletingIds((prev) => new Set([...prev, id]));
      queryClient.setQueryData(['tasks'], (oldData) => 
        oldData.filter((task) => task.id !== id)
      );
    },
    onError: (error, id) => {
      // Reverte em caso de erro
      setDeletingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      // Recarrega a lista em caso de erro
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
    onSettled: (data, error, id) => {
      setDeletingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  const handleToggleComplete = (id) => {
    if (completedIds.has(id)) {
      setCompletedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    } else {
      setCompletedIds((prev) => new Set([...prev, id]));
    }
  };

  if (isLoading) return <div style={{ padding: '20px' }}>Carregando tarefas...</div>;
  if (isError) return <div style={{ padding: '20px', color: 'red' }}>Erro ao carregar tarefas</div>;

  return (
    <div style={{ padding: '10px', border: '1px solid #ddd' }}>
      <h2>Lista de Tarefas ({data.length})</h2>
      {data.length === 0 ? (
        <p>Nenhuma tarefa ainda. Adicione uma!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {data.map((task) => {
            const isCompleted = completedIds.has(task.id);
            const isDeleting = deletingIds.has(task.id);
            
            return (
              <li 
                key={task.id} 
                style={{ 
                  marginBottom: '10px', 
                  padding: '10px', 
                  border: '1px solid #ccc',
                  backgroundColor: isDeleting ? '#f0f0f0' : isCompleted ? '#e8f5e9' : 'white',
                  opacity: isDeleting ? 0.6 : 1,
                  textDecoration: isCompleted ? 'line-through' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>
                    <button
                      onClick={() => handleToggleComplete(task.id)}
                      style={{
                        marginRight: '10px',
                        cursor: 'pointer',
                        fontSize: '20px',
                        border: 'none',
                        background: 'none',
                        padding: 0
                      }}
                      title={isCompleted ? 'Marcar como pendente' : 'Marcar como concluído'}
                    >
                      {isCompleted ? '✅' : '⬜'}
                    </button>
                    {task.title}
                  </span>
                  <button
                    onClick={() => handleDelete(task.id)}
                    disabled={isDeleting}
                    style={{ 
                      padding: '5px 10px',
                      cursor: isDeleting ? 'not-allowed' : 'pointer',
                      opacity: isDeleting ? 0.5 : 1
                    }}
                  >
                    {isDeleting ? 'Excluindo...' : 'Excluir'}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
