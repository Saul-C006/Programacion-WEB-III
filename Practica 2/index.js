// index.js
import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';

// Conexión a la base de datos
const sequelize = new Sequelize('bdpractica2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, 
});

const conectaDB = async () => {
  try {
    await sequelize.authenticate(); 
    console.log(' Conectado a MySQL.');
    await sequelize.sync();
    console.log(' Modelos sincronizados.');
  } catch (error) {
    console.error(' Error de conexión:', error);
    process.exit(1); 
  }
};

// Middleware
const app = express();
app.use(express.json());

conectaDB();

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
    tableName: 'categorias',
    timestamps: false 
});

const Producto = sequelize.define('Producto', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    precio: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },

    categoriaId: {
        type: DataTypes.INTEGER
    }

},{
    tableName: 'productos',
    timestamps: false
});

Categoria.hasMany(Producto, {
    foreignKey: 'categoriaId'
});

Producto.belongsTo(Categoria, {
    foreignKey: 'categoriaId'
});

//EJERCICIO 1:  POST /categorias
app.post('/categorias', async (req, res) => {

    try {

        const { nombre, descripcion } = req.body;

        const resultado = await Categoria.create({
            nombre,
            descripcion
        });

        res.status(201).json(resultado);

    } catch(error) {

        res.status(500).json({
            mensaje: 'Error al crear categoria'
        });

    }

});

//EJERCICIO 2:  GET /categorias
app.get('/categorias', async (req, res) => {
  try {
    const resultado = await Categoria.findAll();
    res.status(200).json(resultado);
  }catch (error) {
    res.status(500).json({ message: 'Error al obtener categorias', error });
  }
});

//EJERCICIO 3:  GET /categorias/:id
app.get('/categorias/:id', async (req, res) => {
  try {
    const resultado = await Categoria.findByPk(req.params.id, {include: Producto});
    if (!resultado) {
      return res.status(404).json({ message: 'Categoria no encontrada' });
    }
    res.status(200).json(resultado);
  }catch (error) {
    res.status(500).json({ message: 'Error al obtener categorias', error });
  }
});

// EJERCICIO 4:  PATCH /categorias/:id
app.patch('/categorias/:id', async (req, res) => {

    try {   
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) {
            return res.status(404).json({ mensaje: 'Categoria no encontrada' });
        }
        const id = req.params.id;
        const { nombre, descripcion } = req.body;
        
        const resultado = await Categoria.update({nombre, descripcion}, {where: {id}});
        res.status(200).json({ mensaje:'Categoria actualizada correctamente' });
    } catch(error) {
        res.status(500).json({ mensaje: 'Error al actualizar categoria'});
    }
});
            
// EJERCICIO 5:  DELETE /categorias/:id
app.delete('/categorias/:id', async (req, res) => {

  try {
    const id = req.params.id;
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({
        mensaje: 'Categoria no encontrada'
      });
    }
    const eliminacionProductos = await Producto.destroy({where: { categoriaId: id }});
    const resultado = await Categoria.destroy({where: { id }});

    res.status(200).json({ mensaje: 'Categoria y productos eliminados correctamente'});
  } catch(error) {
    res.status(500).json({ mensaje: 'Error al eliminar categoria' });
  }
});



// Iniciar servidor
const PUERTO = 4000;

app.listen(PUERTO, () => {
    console.log(`Servidor en http://localhost:${PUERTO}`);
});