import React from 'react'
import { CheckCircle2, Circle } from 'lucide-react'
import { Task } from '../types'

interface TaskListProps {
  tasks: Task[]
  onToggleTask: (taskId: string) => void
}

export function TaskList({ tasks, onToggleTask }: TaskListProps) {
  const sortedTasks = [...tasks].sort(
    (a, b) => a.endDate.getTime() - b.endDate.getTime()
  )

  const isOverdue = (task: Task) => {
    return !task.completed && new Date(task.endDate) < new Date()
  }

  return (
    <div className='space-y-3'>
      {sortedTasks.map((task) => {
        const overdue = isOverdue(task)
        return (
          <div
            key={task.id}
            className={`p-4 rounded-lg border transition-colors duration-200 ${
              task.completed
                ? 'bg-green-50 border-green-200'
                : overdue
                ? 'bg-red-50 border-red-200'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className='flex items-start gap-3'>
              <button
                onClick={() => onToggleTask(task.id)}
                className={`mt-1 transition-colors ${
                  task.completed
                    ? 'text-green-600 hover:text-green-700'
                    : overdue
                    ? 'text-red-500 hover:text-red-600'
                    : 'text-gray-500 hover:text-green-600'
                }`}
              >
                {task.completed ? (
                  <CheckCircle2 className='w-5 h-5 text-green-600' />
                ) : (
                  <Circle
                    className={`w-5 h-5 ${overdue ? 'text-red-500' : ''}`}
                  />
                )}
              </button>
              <div className='flex-1'>
                <h3
                  className={`font-medium ${
                    task.completed
                      ? 'text-green-700'
                      : overdue
                      ? 'text-red-700'
                      : 'text-gray-900'
                  }`}
                >
                  {task.title}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    overdue ? 'text-red-500' : 'text-gray-500'
                  }`}
                >
                  {new Date(task.startDate).toLocaleDateString()} -{' '}
                  {new Date(task.endDate).toLocaleDateString()}
                  <br />
                  valor: {task.grade}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
