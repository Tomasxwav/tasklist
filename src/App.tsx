import React from 'react'
import { GraduationCap } from 'lucide-react'
import { SubjectCard } from './components/SubjectCard'
import { initialData } from './data'
import { Subject } from './types'

function App() {
  const [subjects, setSubjects] = React.useState<Subject[]>(() => {
    // Load completed tasks from localStorage
    const completedTasks = JSON.parse(
      localStorage.getItem('completedTasks') || '{}'
    )

    // Apply completed status to initial data
    return initialData.map((subject) => ({
      ...subject,
      units: subject.units.map((unit) => ({
        ...unit,
        tasks: unit.tasks.map((task) => ({
          ...task,
          completed: completedTasks[task.id] || false,
        })),
      })),
    }))
  })

  const [selectedSubject, setSelectedSubject] = React.useState<Subject | null>(
    null
  )

  const handleToggleTask = (taskId: string) => {
    // Update selected subject
    setSelectedSubject((prevSubject) => {
      if (!prevSubject) return null
      const updatedSubject = {
        ...prevSubject,
        units: prevSubject.units.map((unit) => ({
          ...unit,
          tasks: unit.tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          ),
        })),
      }
      return updatedSubject
    })

    // Update all subjects to keep them in sync
    setSubjects((prevSubjects) => {
      const newSubjects = prevSubjects.map((subject) => ({
        ...subject,
        units: subject.units.map((unit) => ({
          ...unit,
          tasks: unit.tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          ),
        })),
      }))

      // Save completed tasks to localStorage
      const completedTasks = {}
      newSubjects.forEach((subject) => {
        subject.units.forEach((unit) => {
          unit.tasks.forEach((task) => {
            if (task.completed) {
              completedTasks[task.id] = true
            }
          })
        })
      })
      localStorage.setItem('completedTasks', JSON.stringify(completedTasks))

      return newSubjects
    })
  }

  return (
    <div className='min-h-screen bg-gray-50 '>
      <header className='bg-white border-b border-gray-200shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
          <div className={`flex items-center justify-center h-16`}>
            <div className='flex items-center'>
              <GraduationCap className='w-8 h-8 text-blue-600' />
              <h1 className='ml-2 text-xl font-semibold text-gray-900'>
                Organizador Académico
              </h1>
            </div>
            {selectedSubject && (
              <button
                onClick={() => setSelectedSubject(null)}
                className='absolute text-blue-600 hover:text-blue-700 font-medium right-4 top-4'
              >
                Volver a Materias
              </button>
            )}
          </div>
        </div>
      </header>

      <main className='min-h-[calc(100vh-4rem)] flex flex-wrap gap-2 w-screen'>
        {selectedSubject ? (
          <div className='max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <SubjectCard
              subject={selectedSubject}
              onToggleTask={handleToggleTask}
              expanded
            />
          </div>
        ) : (
          <div className='flex flex-row flex-wrap gap-6 p-6 w-full'>
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject)}
                className='flex-1 min-w-[300px] max-w-[400px] bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 h-64'
              >
                <div className='h-full flex flex-col'>
                  <div className='p-6 bg-gradient-to-r from-blue-600 to-blue-700 flex-grow flex items-center justify-center'>
                    <h2 className='text-2xl font-semibold text-white text-center'>
                      {subject.name}
                    </h2>
                  </div>
                  <div className='p-4 bg-white'>
                    <p className='text-gray-600 text-center'>
                      {subject.units.length} Unidades
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
