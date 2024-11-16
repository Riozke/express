import { Request, Response } from "express";
import { tasks } from "../models/task";

export const getTasks = (req: Request, res: Response) => {
  res.status(200).json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }
  res.status(200).json(task);
};

export const createTask = (req: Request, res: Response) => {
  const { title, description } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const task = tasks.find((t) => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.completed = completed ?? task.completed;

  res.status(200).json(task);
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(id));
  if (taskIndex === -1) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }
  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: "Tarea eliminada" });
};
