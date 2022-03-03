
const productosParaVenta = require('./productos.js')
let productos = require ('./productos.js')

let muebleTV = productos.find(item => {
   //return item.nombre ===  'Mueble para TV'
return (/Mueble/g).test(item.nombre)

})
//metodo MAP

let aplicarIVA = productos.map ( item =>{
   let nuevoPrecio = item.precio + item.precio * 1.21
   return {...item, precio: nuevoPrecio}
});
// console.log(productos);
// console.log(aplicarIVA);

let productosHogar = productos.filter( item => item.categoria ==="Hogar")
//console.log(productosHogar)

let checkPrecio = productos.every( item => item.precio >=10)
/*comprueba tdos los elementos como conjunto*/
//console.log(checkPrecio)

let alguno = productos.some(item => item.precio >= 500)  /*comprueba si algun elementos cumple la condicion*/
//console.log(alguno);

let precioTotal = productos.reduce( (acumulador, item)=>{
    return acumulador + item.precio
}, 0);

console.log("el total de tosos los productos suman " + precioTotal)
console.log ("****************");
console.log("mira el detalle");
console.log ("****************");
console.log(productos);

let nombreProducto = productos.map(({nombre}) => nombre); /*desestructuras el item a mostrar y lo usas como parametro*/
console.log ("********************************");
console.log("Tenemos estos productos en Lista");
console.log ("********************************");
console.log(nombreProducto)

let esBarato = producto => producto.precio < 50
let productosBaratos = productos.filter(esBarato);
let itemsBaratos = productosBaratos.map(({nombre})=> nombre)
console.log ("********************************");
console.log("Los productos en Lista que valen menos de 100 son");
console.log ("********************************");
console.log(itemsBaratos)

preciosDeLista = productos.map (({precio}) => precio);
console.log(preciosDeLista)

let compactarPrecios = (acumulador, numero)=> acumulador + numero; 
/*otra opcion es generar una variable que contenga la funcion
flecha acumuladora, y despues llamara  aesa variable como paramettro del reduce.*/
PreciosCompactados = preciosDeLista.reduce(compactarPrecios,0);

console.log("el total de todos los precios compactados es de " + PreciosCompactados)

/* fuente https://www.youtube.com/watch?v=tP8JiVUiyDo */

let precioTotalDeProductosBaratos = productos.filter(esBarato).map(({precio}) => precio).reduce(compactarPrecios)
console.log(precioTotalDeProductosBaratos)