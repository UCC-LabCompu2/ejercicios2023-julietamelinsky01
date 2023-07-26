/**
 * Permite convertir unidades entre metro, pies, pulgadas y yardas
 * @method conversorUnidades
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 */

let conversorUnidades = (id, valor) => {
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace(".");
    }

    if(isNaN(valor)){
        //comprobar si el valor ingresado es numerico
        met = " ";
        pie = " ";
        yar = " ";
        pul = " ";
        alert("El valor ingresado es incorrecto");
    }else if(id==="metro"){
        //conversion de metros
        met = valor;
        yar = 1.09361*valor;
        pul = 39.3701*valor;
        pie = 3.28084*valor;
    }else if(id==="pulgada"){
        //conversion de pulgadas
        pul = valor;
        yar= 0.0277778*valor;
        met = 0.0254*valor;
        pie = 0.0833333*valor;
    }else if(id==="pie"){
        //conversion de pies
        pie = valor
        yar = 0.333333*valor;
        pul = 12*valor;
        met = 0.304800164592*valor;
    }else if(id==="yarda"){
        //conversion de yardas
        yar = valor;
        met = 0.9144*valor;
        pul = 36*valor;
        pie = 3*valor;
    }
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yar*100)/100;
    document.lasUnidades.unid_pulgada.value = pul.toFixed(2);
    document.lasUnidades.unid_pie.value = pie.toFixed(2);
}

/**
 * Permite convertir unidades grados a riadianes y viceversa
 * @method convertirGR
 * @param {string} id - Id del input del formulario
 * @param {number} valor - Valor ingresado por el usuario
 */

let convertirGR = (id) =>{
    let gr, rad;
    if(id==="grados"){
        gr = document.getElementById("grados").value;
        rad = gr*Math.PI/180;
    }else{
        rad = document.getElementById("radianes").value;
        gr = rad*180/Math.PI;
    }

    document.getElementById("radianes").value = rad;
    document.getElementById("grados").value = gr;
}

/**
 * Permite visualizar u ocultar un elemento de la pagina
 * @method mostrar_ocultar
 * @param {string} valor - Valor asociado a un button en html
 */

let mostrar_ocultar = (valor) =>{
    console.log("El valor enviado a la funcion es: "+valor)
    if(valor==="val_mostrar"){
        document.getElementsByName("unDiv")[0].style.display = "block";
    }else{
        document.getElementsByName("unDiv")[0].style.display = "none";
    }
}


/**
 * Sumar valores ingresados por teclado
 * @method sumar
 */

let sumar = () =>{
    let num1, num2;
    num1 = Number(document.getElementById("nums1").value);
    num2 = Number(document.getElementById("nums2").value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
}

/**
 * restar valores ingresados por teclado
 * @method restar
 */

let restar = () =>{
    let num1, num2;
    num1 = Number(document.getElementById("numr1").value);
    num2 = Number(document.getElementById("numr2").value);
    document.getElementsByName("res_total")[0].innerHTML = num1 - num2;
}

/**
 * multiplicar valores ingresados por teclado
 * @method multiplicar
 */

let multiplicar = () =>{
    let num1, num2;
    num1 = Number(document.getElementById("numm1").value);
    num2 = Number(document.getElementById("numm2").value);
    document.getElementsByName("mul_total")[0].innerHTML = num1 * num2;
}

/**
 * dividir valores ingresados por teclado
 * @method dividir
 */

let dividir = () =>{
    let num1, num2;
    num1 = Number(document.getElementById("numd1").value);
    num2 = Number(document.getElementById("numd2").value);
    document.getElementsByName("div_total")[0].innerHTML = num1 / num2;
}

/**
 * Genera un link dinamico  y te dirige a otra página web.
 * @method generarUrl
 */
let generarUrl = () => {
    let urlComp, cant, unidad;
    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

/**
 * Obtiene valores de la URL y los asigna a elementos del documento.
 * @method cargarValores
 */
let cargarValores = () =>{
    let urlComp, can, un;
    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];
    document.getElementById("dist").value = can + " " + un;
}

/**
 * Guarda datos en el almacenamiento local del navegador y redirige a otra página web.
 * @method guardarDatosLS
 */
let guardarDatosLS = () =>{
    let dist, unid;
    dist  = document.getElementById('distancia').value;
    unid = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadesLS", unid);
    window.open("2_web.html");
}

/**
 * Obtiene datos del almacenamiento local del navegador y los asigna a elementos del documento.
 * @method cargarDatosLS
 */
let cargarDatosLS = () =>{
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;
}

/**
 * Dibuja un círculo y un cuadrado en un canvas.
 * @method dibujarCirculoCuadrado
 */
let dibujarCirculoCuadrado = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    ctx.beginPath();
    ctx.fillStyle = "#748900";
    ctx.arc(anchoMax/2,alturaMax/2,100,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    const margen = 8;
    ctx.beginPath();
    ctx.fillStyle = "#689";
    ctx.fillRect(0+margen,alturaMax-100-margen,150,100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

/**
 * Limpia el contenido en un canvas.
 * @method limpiarCanvas
 */
let limpiarCanvas = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

/**
 * Dibuja puntos en un canvas mientras el usuario hace clic y mueve el mouse.
 * @method dibujar
 */
var bandera;
let dibujar = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;

    canvas.onmousedown = function (){bandera = true};
    canvas.onmouseup = function (){bandera = false};

    if(bandera){
        ctx.fillRect(posX-10,posY-10,5,5);
        ctx.fill();
    }

}

/**
 * Dibuja un patrón cuadriculado en un canvas con líneas verticales y horizontales, formando los ejes x e y.
 * @method dibujarCuadriculado
 */
let presionarboton = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const alturaMax = canvas.height;
    const anchoMax = canvas.width;
    const paso = 20;
    let ejeX = -24;
    let ejeY = -14;

    //lineas verticales
    for(let i=paso; i<anchoMax; i+=paso){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,alturaMax);
        ctx.strokeStyle = "##D8D8";
        ctx.stroke();
        ctx.font="10pt Verdana";
        ctx.fillStyle = "blue";
        ctx.fillText( ejeX, i, alturaMax/2);
        ctx.closePath();
        ejeX++;
    }
    //lineas horizontales
    for(let i=paso; i<alturaMax; i+=paso){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle = "##D8D8D8";
        ctx.stroke();
        ctx.font="10pt Verdana";
        ctx.fillStyle = "blue";
        ctx.fillText( ejeY, i, anchoMax/2);
        ctx.closePath();
        ejeY++;
    }

    // x
    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle = "#FA5858";
    ctx.stroke();
    ctx.closePath();

    // y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle = "#FA5858";
    ctx.stroke();
    ctx.closePath();
}

/**
 * Dibuja una imagen en un canvas en una posición específica.
 * @method dibujarImagen
 * @param {number} posX - posicion en x.
 * @param {number} posY -  posicion en y.
 */
let dibujarImagen = (posX, posY) =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
    if(posX<0 || posY<0 || posX>canvas.width || posY>canvas.height){
        abrirDialog();
    }else{
        let img;
        img = new Image();
        img.src = "images/auto.png";

        img.onload = function(){
            ctx.drawImage(img, posX, posY)
        }
    }
}

/**
 * Abre un cuadro de diálogo en HTML.
 * @method abrirDialog
 */
let abrirDialog = () =>{
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

/**
 * Cierra un cuadro de diálogo en HTML.
 * @method cerrarDialog
 */
let cerrarDialog = () =>{
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

/**
 * Anima un objeto de un automóvil en un lienzo HTML, desplazándolo horizontalmente de izquierda a derecha.
 * @method animarAuto
 */
var x = 0;
var dx = 20;
let animarAuto = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";

    img.onload = function(){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }
    x+=dx;

    if(x>=canvas.width){
        x=0;
    }

}

/**
 * Anima un objeto de un automóvil en un lienzo HTML, desplazándolo horizontalmente de izquierda a derecha.
 * Utiliza el método requestAnimationFrame para optimizar la animación.
 * @method animarAuto2
 */
var x=0;
var dx=2;
let animarAuto2 = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
        requestAnimationFrame(animarAuto2);
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}

/**
 * Inicia la animación de un objeto de un automóvil en un lienzo HTML.
 * Utiliza la función animarAuto2 para la animación.
 * @method animarNuevo
 */
let animarNuevo = () => {
    requestAnimationFrame(animarAuto2);
}