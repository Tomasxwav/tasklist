import { Subject } from './types'

export const initialData: Subject[] = [
  {
    id: '1',
    name: 'Administración de Mantenimiento',
    units: [
      {
        id: 'u1',
        title: 'Unidad 1: Introducción al Mantenimiento',
        tasks: [
          {
            id: '1.1',
            title:
              'Realiza un calendario con las actividades por fecha de entrega y su valor',
            startDate: new Date('2025-01-20'),
            endDate: new Date('2025-01-26'),
            completed: false,
            grade: 0,
          },
          {
            id: '1.2',
            title: 'Mantenimiento y sus definiciones',
            startDate: new Date('2025-01-27'),
            endDate: new Date('2025-02-02'),
            completed: false,
            grade: 0,
          },
          {
            id: '1.3',
            title: 'Objetivos y tipos de mantenimiento',
            startDate: new Date('2025-02-03'),
            endDate: new Date('2025-02-09'),
            completed: false,
            grade: 0,
          },
          {
            id: '1.4',
            title: 'Mantenimiento Productivo Total',
            startDate: new Date('2025-02-10'),
            endDate: new Date('2025-02-16'),
            completed: false,
            grade: 0,
          },
          {
            id: '1.5',
            title: 'Conservación Industrial',
            startDate: new Date('2025-02-17'),
            endDate: new Date('2025-02-23'),
            completed: false,
            grade: 0,
          },
          {
            id: '1.6',
            title: 'Lubricación en el Mantenimiento',
            startDate: new Date('2025-02-24'),
            endDate: new Date('2025-03-02'),
            completed: false,
            grade: 0,
          },
          {
            id: '1.7',
            title: 'Software',
            startDate: new Date('2025-03-03'),
            endDate: new Date('2025-03-09'),
            completed: false,
            grade: 0,
          },
        ],
      },
      {
        id: 'u2',
        title:
          'Unidad 2: Herramientas y Casos Prácticos en Conservación Industrial',
        tasks: [
          {
            id: '2.1',
            title: 'Herramientas para administrar la conservación industrial',
            startDate: new Date('2025-03-24'),
            endDate: new Date('2025-03-30'),
            completed: false,
            grade: 0,
          },
          {
            id: '2.2',
            title: 'Caso Práctico Análisis de Problemas',
            startDate: new Date('2025-03-31'),
            endDate: new Date('2025-04-06'),
            completed: false,
            grade: 0,
          },
          {
            id: '2.3',
            title: 'Herramientas para administrar',
            startDate: new Date('2025-04-07'),
            endDate: new Date('2025-04-13'),
            completed: false,
            grade: 0,
          },
          {
            id: '2.4',
            title: 'Mantenibilidad y Fiabilidad',
            startDate: new Date('2025-04-14'),
            endDate: new Date('2025-05-04'),
            completed: false,
            grade: 0,
          },
          {
            id: '2.5',
            title: 'Plan contingente',
            startDate: new Date('2025-04-21'),
            endDate: new Date('2025-05-11'),
            completed: false,
            grade: 0,
          },
          {
            id: '2.6',
            title: 'Administración de la Conservación Industrial',
            startDate: new Date('2025-04-28'),
            endDate: new Date('2025-05-18'),
            completed: false,
            grade: 0,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Sistemas Operativos',
    units: [
      {
        id: 'u1-so',
        title: 'Unidad 1: Introducción a los Sistemas Operativos',
        tasks: [
          {
            id: 'so-1.1',
            title:
              'Investigación sobre la evolución de los sistemas operativos',
            startDate: new Date('2024-01-22'),
            endDate: new Date('2024-01-28'),
            completed: false,
            grade: 0,
          },
          {
            id: 'so-1.2',
            title: 'Práctica: Instalación de máquina virtual',
            startDate: new Date('2024-01-29'),
            endDate: new Date('2024-02-04'),
            completed: false,
            grade: 0,
          },
        ],
      },
      {
        id: 'u2-so',
        title: 'Unidad 2: Administración de Procesos',
        tasks: [
          {
            id: 'so-2.1',
            title: 'Ejercicios de planificación de procesos',
            startDate: new Date('2024-02-05'),
            endDate: new Date('2024-02-11'),
            completed: false,
            grade: 0,
          },
          {
            id: 'so-2.2',
            title: 'Implementación de algoritmos de planificación',
            startDate: new Date('2024-02-12'),
            endDate: new Date('2024-02-18'),
            completed: false,
            grade: 0,
          },
        ],
      },
      {
        id: 'u3-so',
        title: 'Unidad 3: Gestión de Memoria',
        tasks: [
          {
            id: 'so-3.1',
            title: 'Análisis de técnicas de paginación',
            startDate: new Date('2024-02-19'),
            endDate: new Date('2024-02-25'),
            completed: false,
            grade: 0,
          },
          {
            id: 'so-3.2',
            title: 'Simulador de administración de memoria',
            startDate: new Date('2024-02-26'),
            endDate: new Date('2024-03-03'),
            completed: false,
            grade: 0,
          },
        ],
      },
    ],
  },
]
