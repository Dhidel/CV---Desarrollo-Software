const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());


// Campos: id, name, level (0–100 o beginner/intermediate/advanced), category  'Frontend'(Frontend/backend/devops)

// Base de datos en memoria
let skills = [
    { id: 1, name: 'HTML', level: 80, category: 'Frontend' },
    { id: 2, name: 'CSS', level: 70, category: 'Frontend'  },
    { id: 3, name: 'Boostrap', level: 70, category: 'Frontend'  },
    { id: 4, name: 'JavaScript', level: 60, category: 'Frontend'  },
    { id: 5, name: 'Angular', level: 70, category: 'Frontend'  },
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


let nextId = 15;

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
  const id = skills.find(p => p.id === parseInt(req.params.id));

  if (!id) {
    return res.status(404).json({ error: 'Habilidad no encontrada' });
  }

  res.json(id);
});

// GET /skills/:name- Ver el nombre
app.get('/skills/name/:name', (req, res) => {
  const name = skills.find(p => p.name.toLowerCase() === req.params.name.toLowerCase());

  if (!name) {
    return res.status(404).json({ error: 'Habilidad no encontrada' });
  }

  res.json(name);
});

// GET /skills/level/:level - Filtrar por nivel mínimo
app.get('/skills/level/:level', (req, res) => {
  const minLevel = parseInt(req.params.level);

  // Validamos que el usuario haya enviado un número válido
  if (isNaN(minLevel)) {
    return res.status(400).json({ error: 'El nivel debe ser un número válido' });
  }

  // Filtramos todas las que tengan un nivel igual o mayor
  const filteredSkills = skills.filter(p => p.level == minLevel);

  if (filteredSkills.length === 0) {
    return res.status(404).json({ error: 'No se encontraron habilidades con ese nivel' });
  }

  res.json(filteredSkills);
});

// GET /skills/category/:category - Ver una categoria específico
app.get('/skills/category/:category', (req, res) => {
  const filtered = skills.filter(p => p.category.toLowerCase() === req.params.category.toLowerCase());

  if (filtered.length === 0) {
    return res.status(404).json({ error: 'Categoría no encontrada' });
  }

  res.json(filtered);
});


// POST /skills - Crear un proyecto
app.post('/skills', (req, res) => {
  const { name, level, category } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Los campos "name" y "category" son requeridos' });
  }

  const newSkill = {
    id: nextId++,
    name,
    level: parseInt(level) || 0, 
    category
  };

  skills.push(newSkill);
  res.status(201).json(newSkill);
});




// PATCH /skills/:id - Actualizar un proyecto
app.patch('/skills/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = skills.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Habilidad no encontrada' });
  }

  const { name, level, category } = req.body;

  skills[index] = {
    ...skills[index],
    ...(name && { name }),
    ...(level && { level: parseInt(level) }), // Lo mantenemos como número
    ...(category && { category })
  };

  res.json(skills[index]);
});

// DELETE /skills/:id - Eliminar un proyecto
app.delete('/skills/:id', (req, res) => {
  const index = skills.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Habilidad no encontrada' });
  }

  const deleted = skills.splice(index, 1);
  res.json({ message: 'Habilidad eliminada', project: deleted[0] });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});