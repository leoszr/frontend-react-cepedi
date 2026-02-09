import api from '../api/axios.js';

export const getTasks = async () => {
  const response = await api.get('/todos?_limit=10');
  return response.data;
};

export const createTask = async (newTask) => {
  const response = await api.post('/todos', newTask);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await api.delete(`/todos/${id}`);
  return response.data;
};
