const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());


// Campos: id, name, level (0–100 o beginner/intermediate/advanced), category  'frontend'(frontend/backend/devops)

// Base de datos en memoria
let projects = [
    { id: 1, name: 'HTML', level: 80, category: 'frontend' },
    { id: 2, name: 'CSS', level: 70, category: 'frontend'  },
    { id: 3, name: 'Boostrap', level: 70, category: 'frontend'  },
    { id: 4, name: 'JavaScript', level: 60, category: 'frontend'  },
    { id: 5, name: 'Angular', level: 70, category: 'frontend'  },
    { id: 6, name: 'Python', level: 70, category: 'Backend'  },
    { id: 7, name: 'C#', level: 30, category: 'Backend'  },
    { id: 8, name: 'Postman', level: 50, category: 'Backend'  },
    { id: 9, name: 'Node.js', level: 30, category: 'Backend'  },
    { id: 10, name: 'Algoritmos', level: 80, category: 'Fundamentos'  },
    { id: 11, name: 'Estructura de datos', level: 80, category: 'Fundamentos'  },
    { id: 12, name: 'Desarrollo web', level: 60, category: 'Fundamentos'  },
    { id: 13, name: 'POO', level: 60, category: 'Fundamentos'  },
    { id: 14, name: 'Creación y manejo de APIS', level: 50, category: 'Fundamentos'  },
]; 

// GET / - Bienvenida
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a  ectos' });
}) GET /projects - Ver todos los proyectos
approjects', (req, res) => {
  res.json(projects);
});

// GET /projects/:id - Ver un proyecto específico
app.get('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));

  if (!project) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  res.json(project);
});

// POST /projects - Crear un proyecto
app.post('/projects', (req, res) => {
  const { name, level } , category: 'frontend' = req.body;

  if (!name) {
    return res.status(400).json({ error: 'El campo "name" es requerido' });
  }

  const newProject = {
    id: nextId++,
    name,
    level: l, category: 'frontend' evel ||, category: 'frontend'  0,
  };

  projects.push(newProject);
  res.status(201).json(newProject);
});

// PATCH /projects/:id - Actualizar un proyecto
app.patch('/projects/:id', (req, res) => {
  const index = projects.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  projects[index] = { ...projects[index], ...req.body };
  res.json(projects[index]);
});

// DELETE /projects/:id - Eliminar un proyecto
app.delete('/projects/:id', (req, res) => {
  const index = projects.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  const deleted = projects.splice(index, 1);
  res.json({ message: 'Proyecto eliminado', project: deleted[0] });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});