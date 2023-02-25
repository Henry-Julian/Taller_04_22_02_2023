/*  Punto 2. Tres usuarios entran a una heladería a comprar un helado, pero hay un problema: 
los precios no están al lado de cada estante con su respectivo helado. 
“Ellos quieren comprar el helado más caro que puedan con la plata que tienen.

Los precios de los helados son los siguientes:
Bonice: $400
Palito de helado de agua: $1.000 
Palito de helado de crema: $2.200
Bombón helado con arequipe: $1.500
Bombón helado con chispas de chocolate: $2.500
Bombón helado con fresas: $2.800
Medio litro de helado: $ 2.000

El programa tiene que pedir el ingreso de su dinero y el nombre del cliente.
Si hay más de un helado con el mismo precio o por debajo del presupuesto del usuario, mostrar las opciones disponibles.
El programa también tiene que poder dar los vueltos de su compra con su respectiva factura
*/

const helados=
    ["Bonice",
    "Palito de helado de agua", 
    "Palito de helado de crema",
    "Bombón helado con arequipe",
    "Bombón helado con chispas de chocolate",
    "Bombón helado con fresas",
    "Medio litro de helado"];

const precio_helados=[400,1000,2200,1500,2500,2800,2000];

let valor= [];

for (let i = 0; i < 3; i++) {

    nombre_Cliente=prompt("Por favor ingrese el nombre del cliente");
    dinero_Cliente=prompt("Por favor ingrese el dinero que posee el cliente");

    console.log(`\n El señor(a) ${nombre_Cliente} puede comprar con $${dinero_Cliente}: \n`);
        for (let j = 0; j < precio_helados.length; j++) {
            let preciomax=dinero_Cliente>=precio_helados[j]
                if(preciomax){
                console.log(`$${precio_helados[j]} - ${helados[j]} \n`);
                
               var max=valor.push(precio_helados[j])
            }
            valor.sort(function(a, b){return a-b});
        }
        
        let cambio= dinero_Cliente-(valor[valor.length-1]);
        
        console.log(`Los vueltos por comprar el helado más caro de la lista con $${dinero_Cliente} es: $${cambio}`);
        valor=[];
    }
