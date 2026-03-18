const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());


// Campos: id, name, level (0–100 o beginner/intermediate/advanced), category  'frontend'(frontend/backend/devops)

// Base de datos en memoria
let skills = [
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


let nextId = 4;

// GET / - Bienvenida
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Proyectos' });
});

// GET /skills - Ver todos los proyectos
app.get('/skills', (req, res) => {
  res.json(skills);
});

// GET /skills/:id - Ver un proyecto específico
app.get('/skills/:id', (req, res) => {
  const project = skills.find(p => p.id === parseInt(req.params.id));

  if (!project) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  res.json(project);
});

// GET /skills/:name- Ver el nombre
app.get('/skills/:name', (req, res) => {
  const project = skills.find(p => p.name === parseInt(req.params.name));

  if (!project) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  res.json(project);
});

// GET /skills/:level - Ver el nivel
app.get('/skills/:level', (req, res) => {
  const project = skills.find(p => p.level === parseInt(req.params.level));

  if (!project) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  res.json(project);
});

// GET /skills/:category - Ver una categoria específico
app.get('/skills/:category', (req, res) => {
  const project = skills.find(p => p.category === parseInt(req.params.category));

  if (!project) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  res.json(project);
});


// POST /skills - Crear un proyecto
app.post('/skills', (req, res) => {
  const { name, stars } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'El campo "name" es requerido' });
  }

  const newProject = {
    id: nextId++,
    name,
    stars: stars || 0,
  };

  skills.push(newProject);
  res.status(201).json(newProject);
});




// PATCH /skills/:id - Actualizar un proyecto
app.patch('/skills/:id', (req, res) => {
  const index = skills.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  skills[index] = { ...skills[index], ...req.body };
  res.json(skills[index]);
});

// DELETE /skills/:id - Eliminar un proyecto
app.delete('/skills/:id', (req, res) => {
  const index = skills.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Proyecto no encontrado' });
  }

  const deleted = skills.splice(index, 1);
  res.json({ message: 'Proyecto eliminado', project: deleted[0] });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});