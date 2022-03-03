const productos =[
    { nombre: 'PC de escritorio', precio: 499, categoria: 'Tecnologia'},
    { nombre: 'sartenes verdes', precio: 49, categoria: 'Hogar'},
    { nombre: 'reloj calculadora', precio: 19, categoria: 'Tecnologia'},
    { nombre: 'maquina de palomitas', precio: 82, categoria: 'Hogar'},
    { nombre: 'Mueble para TV', precio: 250, categoria: 'Hogar'},
    { nombre: 'tuppers' , precio: 25, categoria: 'Hogar'}
];

function Productos (nombre, precio, categoria){
    this.nombre = nombre
    this.precio = precio;
    this.categoria = categoria;
};


module.exports = productos
//module.exports = Productos

