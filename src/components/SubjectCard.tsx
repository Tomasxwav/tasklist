import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Subject } from '../types'
import { TaskList } from './TaskList'

interface SubjectCardProps {
  subject: Subject
  onToggleTask: (taskId: string) => void
  expanded?: boolean
}

export function SubjectCard({
  subject,
  onToggleTask,
  expanded = false,
}: SubjectCardProps) {
  const [expandedUnits, setExpandedUnits] = React.useState<string[]>(
    expanded ? subject.units.map((unit) => unit.id) : []
  )

  const toggleUnit = (unitId: string) => {
    setExpandedUnits((prev) =>
      prev.includes(unitId)
        ? prev.filter((id) => id !== unitId)
        : [...prev, unitId]
    )
  }

  return (
    <div className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'>
      <div className='p-6 bg-gradient-to-r from-blue-600 to-blue-700'>
        <h2 className='text-2xl font-semibold text-white'>{subject.name}</h2>
      </div>
      <div className='divide-y divide-gray-200 flex justify-between'>
        {subject.units.map((unit) => (
          <div key={unit.id} className='p-4 w-full'>
            <button
              onClick={() => toggleUnit(unit.id)}
              className='w-full flex items-center justify-between text-left'
            >
              <h3 className='text-lg font-medium text-gray-900'>
                {unit.title}
              </h3>
              {expandedUnits.includes(unit.id) ? (
                <ChevronUp className='w-5 h-5 text-gray-500' />
              ) : (
                <ChevronDown className='w-5 h-5 text-gray-500' />
              )}
            </button>
            {expandedUnits.includes(unit.id) && (
              <div className='mt-4'>
                <TaskList tasks={unit.tasks} onToggleTask={onToggleTask} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
