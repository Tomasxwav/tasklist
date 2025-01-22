export interface Task {
  id: string
  title: string
  startDate: Date
  endDate: Date
  completed: boolean
  grade: number
}

export interface Subject {
  id: string
  name: string
  units: Unit[]
}

export interface Unit {
  id: string
  title: string
  tasks: Task[]
}
