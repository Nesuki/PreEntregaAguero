function getOptions(){
    options = prompt("1. Agregar Productos a una lista // 2. Separar producto basado si es nuevo o usado //3. Mostrar lista");

}

function mainmenu(){
    addItem = 1;
    separateItems = 2;
    printCurrentlist = 3;
    exit = 4;

    let arrayCurrentlist = [];
    let arrayUsedlist = [];
    let arrayNewlist = [];

    selection = getOptions();

    while (selection!=exit){
        if (selection == addItem);{
            arrayCurrentList = addTolist();
        }
        if (selection == separateItems);{
            arrayUsedlist,arrayNewlist=tipoProducto(arrayCurrentlist);
            console.log("Lista de productos separados en usados y nuevos :");
            console.log("Productos");
            console.log(arrayUsedlist);
            console.log("Productos Nuevos");
            console.log(arrayNewlist);
        }
        else (selection == printCurrentlist); {
            arrayCurrentlist = currentStatus(arrayCurrentlist);


        }
        selection = getOptions();
    }
}


function addTolist(){
    let lista = [];
    codigo = prompt("inserte el codigo del producto, para terminar el proceso inserte el numero 999");

    while (codigo != "999") {
        descripcion = prompt("Describa el producto a agregar");
        precioCosto = prompt("Agruege el costo del producto");
        precioVenta = prompt("Agrege el precio de venta del producto");
        tipoProducto = prompt("Especifique el tipo de producto, N si es nuevo o U si es usado");
        lista.push(codigo,descripcion,precioCosto,precioVenta,tipoProducto);
        codigo = prompt("Inserte el codigo del producto, para terminar el proceso inserte el numero 999");
    }
    return lista;
}

function tipoProducto(lista){
    let listaU = [];
    let listaN = [];
    for (x in lista){
        if (x[4] == "U") {
            listaU.push(x);
        }
    }   if (x[4] == "N") {
            listaN.push(x);
    }
    return listaU,listaN;
}

function currentStatus(lista);{
    console.log ("Tu presente lista de productos es la siguiente : ");
    console.log (lista);

}


mainmenu()




    


    