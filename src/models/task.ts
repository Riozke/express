export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const tasks: Task[] = [
  {
    id: 1,
    title: "Primera tarea",
    description: "Descripción de la primera tarea",
    completed: false,
  },
];
