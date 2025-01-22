import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
}

export function TaskList({ tasks, onToggleTask }: TaskListProps) {
  const sortedTasks = [...tasks].sort((a, b) => a.endDate.getTime() - b.endDate.getTime());

  return (
    <div className="space-y-3">
      {sortedTasks.map((task) => (
        <div
          key={task.id}
          className={`p-4 rounded-lg border ${
            task.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
          } transition-colors duration-200`}
        >
          <div className="flex items-start gap-3">
            <button
              onClick={() => onToggleTask(task.id)}
              className="mt-1 text-gray-500 hover:text-green-600 transition-colors"
            >
              {task.completed ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              ) : (
                <Circle className="w-5 h-5" />
              )}
            </button>
            <div className="flex-1">
              <h3 className={`font-medium ${task.completed ? 'text-green-700' : 'text-gray-900'}`}>
                {task.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(task.startDate).toLocaleDateString()} - {new Date(task.endDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}