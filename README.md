# Organizador Académico

Una aplicación web para organizar y dar seguimiento a tareas académicas, agrupadas por materias y unidades.

## Características

- 📚 Organización de tareas por materias y unidades
- 📅 Ordenamiento automático por fechas
- ✅ Sistema de marcado de tareas completadas
- 💾 Persistencia local de tareas completadas
- 📱 Diseño responsivo adaptable a diferentes dispositivos
- 🎨 Interfaz moderna y fácil de usar

## Tecnologías Utilizadas

- React
- TypeScript
- Tailwind CSS
- Lucide Icons
- Vite

## Requisitos Previos

- Node.js (versión 16 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd organizador-academico
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador y visita `http://localhost:5173`

## Uso

### Vista Principal
- La página principal muestra todas las materias en un formato de tarjetas
- Cada tarjeta muestra el nombre de la materia y el número de unidades
- Haz clic en cualquier materia para ver sus detalles

### Vista de Materia
- Muestra todas las unidades de la materia seleccionada
- Cada unidad puede expandirse/colapsarse
- Las tareas se muestran ordenadas por fecha
- Puedes marcar/desmarcar tareas como completadas

### Persistencia
- El estado de las tareas completadas se guarda automáticamente en el navegador
- Al recargar la página, se mantiene el estado de las tareas completadas

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── SubjectCard.tsx # Tarjeta de materia
│   └── TaskList.tsx    # Lista de tareas
├── types.ts            # Definiciones de tipos TypeScript
├── data.ts             # Datos de ejemplo
└── App.tsx             # Componente principal
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la versión de producción
- `npm run lint`: Ejecuta el linter

## Personalización

### Agregar Nuevas Materias

Para agregar nuevas materias, modifica el archivo `src/data.ts` siguiendo la estructura existente:

```typescript
{
  id: 'unique-id',
  name: 'Nombre de la Materia',
  units: [
    {
      id: 'unit-id',
      title: 'Título de la Unidad',
      tasks: [
        {
          id: 'task-id',
          title: 'Título de la Tarea',
          startDate: new Date('YYYY-MM-DD'),
          endDate: new Date('YYYY-MM-DD'),
          completed: false
        }
      ]
    }
  ]
}
```

## Licencia

MIT