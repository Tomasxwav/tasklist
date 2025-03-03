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
            grade: 2,
          },
          {
            id: '1.2',
            title: 'Mantenimiento y sus definiciones',
            startDate: new Date('2025-01-27'),
            endDate: new Date('2025-02-02'),
            completed: false,
            grade: 3,
          },
          {
            id: '1.3',
            title: 'Objetivos y tipos de mantenimiento',
            startDate: new Date('2025-02-03'),
            endDate: new Date('2025-02-09'),
            completed: false,
            grade: 5,
          },
          {
            id: '1.4',
            title: 'Mantenimiento Productivo Total',
            startDate: new Date('2025-02-10'),
            endDate: new Date('2025-02-16'),
            completed: false,
            grade: 5,
          },
          {
            id: '1.5',
            title: 'Conservación Industrial',
            startDate: new Date('2025-02-17'),
            endDate: new Date('2025-02-23'),
            completed: false,
            grade: 5,
          },
          {
            id: '1.6',
            title: 'Lubricación en el Mantenimiento',
            startDate: new Date('2025-02-24'),
            endDate: new Date('2025-03-02'),
            completed: false,
            grade: 5,
          },
          {
            id: '1.7',
            title: 'Software',
            startDate: new Date('2025-03-03'),
            endDate: new Date('2025-03-09'),
            completed: false,
            grade: 5,
          },
          {
            id: '1.8',
            title: 'Examen Medio Curso',
            startDate: new Date('2025-03-03'),
            endDate: new Date('2025-03-09'),
            completed: false,
            grade: 10,
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
            grade: 5,
          },
          {
            id: '2.2',
            title: 'Caso Práctico Análisis de Problemas',
            startDate: new Date('2025-03-31'),
            endDate: new Date('2025-04-06'),
            completed: false,
            grade: 5,
          },
          {
            id: '2.3',
            title: 'Herramientas para administrar',
            startDate: new Date('2025-04-07'),
            endDate: new Date('2025-04-13'),
            completed: false,
            grade: 5,
          },
          {
            id: '2.4',
            title: 'Mantenibilidad y Fiabilidad',
            startDate: new Date('2025-04-14'),
            endDate: new Date('2025-05-04'),
            completed: false,
            grade: 5,
          },
          {
            id: '2.5',
            title: 'Plan contingente',
            startDate: new Date('2025-04-21'),
            endDate: new Date('2025-05-11'),
            completed: false,
            grade: 5,
          },
          {
            id: '2.6',
            title: 'Administración de la Conservación Industrial',
            startDate: new Date('2025-04-28'),
            endDate: new Date('2025-05-18'),
            completed: false,
            grade: 10,
          },
          {
            id: '2.7',
            title: 'Examen Ordinario',
            startDate: new Date('2025-04-28'),
            endDate: new Date('2025-05-18'),
            completed: false,
            grade: 10,
          },
          {
            id: '2.8',
            title: 'PIA',
            startDate: new Date('2025-04-28'),
            endDate: new Date('2025-05-18'),
            completed: false,
            grade: 15,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'TEMAS SELECTOS DE TI & SOFTWARE I ',
    units: [
      {
        id: 'u1-tsti',
        title: 'Unidad 1: Conmutacion en redes',
        tasks: [
          {
            id: 'tsti-1.1',
            title: 'Fundamentos: Resumen 20 hojas a mano',
            startDate: new Date('2025-01-20'),
            endDate: new Date('2025-01-27'),
            completed: false,
            grade: 5,
          },
          {
            id: 'tsti-1.2',
            title: 'Probemario IPV4: Contestar el problemario a MANO',
            startDate: new Date('2025-01-28'),
            endDate: new Date('2025-02-09'),
            completed: false,
            grade: 10,
          },
          {
            id: 'tsti-1.3',
            title: 'EXAMEN MEDIO CURSO (Caps. del 1 al 7 de NETACAD)',
            startDate: new Date('2025-03-10'),
            endDate: new Date('2025-03-11'),
            completed: false,
            grade: 10,
          },
        ],
      },
      {
        id: 'u2-tsti',
        title: 'Unidad 2: Administración de Procesos',
        tasks: [
          {
            id: 'tsti-2.1',
            title: 'Conceptos Basicos de Protocolos: Resumen 12 hojas a mano',
            startDate: new Date('2025-03-16'),
            endDate: new Date('2025-03-23'),
            completed: false,
            grade: 5,
          },
          {
            id: 'tsti-2.2',
            title: 'Probemario IPV6: Contestar el problemario a MANO',
            startDate: new Date('2025-03-17'),
            endDate: new Date('2025-03-24'),
            completed: false,
            grade: 10,
          },
          {
            id: 'tsti-2.3',
            title: 'Examen Ordinario (Caps. del 8 al 14 de NETACAD)',
            startDate: new Date('2025-05-05'),
            endDate: new Date('2025-05-06'),
            completed: false,
            grade: 10,
          },
        ],
      },
      {
        id: 'u3-tsti',
        title: 'PIA',
        tasks: [
          {
            id: 'tsti-3.1',
            title: 'PIA',
            startDate: new Date('2025-01-19'),
            endDate: new Date('2025-04-03'),
            completed: false,
            grade: 50,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'SISTEMAS DE INFORMACION  ',
    units: [
      {
        id: 'u1-si',
        title: 'Unidad 1: Sistemas de información',
        tasks: [
          {
            id: 'si-1.1-1.2',
            title: 'Act 1 y Act 2: Crusigrama, cuestionario',
            startDate: new Date('2025-01-27'),
            endDate: new Date('2025-02-03'),
            completed: false,
            grade: 10,
          },
          {
            id: 'si-1.3',
            title: 'A3: Cuestionario',
            startDate: new Date('2025-02-10'),
            endDate: new Date('2025-02-17'),
            completed: false,
            grade: 5,
          },
          {
            id: 'si-emc',
            title: 'Guia y Examen Medio Curso',
            startDate: new Date('2025-03-19'),
            endDate: new Date('2025-03-19'),
            completed: false,
            grade: 21,
          },
          {
            id: 'si-1.4',
            title: 'A4: Cuestionario y resumen',
            startDate: new Date('2025-03-02'),
            endDate: new Date('2025-03-03'),
            completed: false,
            grade: 5,
          },
          {
            id: 'si-1.5',
            title: 'A5: Sopa de letras',
            startDate: new Date('2025-03-24'),
            endDate: new Date('2025-03-31'),
            completed: false,
            grade: 5,
          },
          {
            id: 'si-1.6',
            title: 'A6: Resumen y actividad',
            startDate: new Date('2025-05-07'),
            endDate: new Date('2025-04-14'),
            completed: false,
            grade: 5,
          },
          {
            id: 'si-1.7',
            title: 'A7: Resumen y actividad',
            startDate: new Date('2025-04-28'),
            endDate: new Date('2025-05-05'),
            completed: false,
            grade: 5,
          },
          {
            id: 'si-pia',
            title: 'Presentacion del pia',
            startDate: new Date('2025-05-21'),
            endDate: new Date('2025-05-23'),
            completed: false,
            grade: 18,
          },
          {
            id: 'si-1.8',
            title: 'A8: Investigacion',
            startDate: new Date('2025-05-09'),
            endDate: new Date('2025-05-11'),
            completed: false,
            grade: 5,
          },

          {
            id: 'si-1.12',
            title: 'Examen Ordinario y guia',
            startDate: new Date('2025-06-03'),
            endDate: new Date('2025-06-03'),
            completed: false,
            grade: 21,
          },
        ],
      },
    ],
  },
]
