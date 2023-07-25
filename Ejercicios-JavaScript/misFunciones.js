/**
 * conversion de unidades, de metros, yardas,pies y `pulgadas
 * @method cambiarunidades
 * @param id de los imputs
 * @param (string) Parámetro B
 * @return (number) Valor que retorna
 */
function cambiarUnidades(id,value){
    if(isNaN(valor)){
alert("se ingreso un valor invalido");
      document.lasunidades.unid_metro.value ="";
        document.lasunidades.unid_pulgada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda ="";
    }else if (id=="metro"){
        document.lasunidades.unid_pulgada.value = 39.3701*valor;
        document.lasunidades.unid_pie.value = 3.28084*valor;
        document.lasunidades.unid_yarda =1.09361*valor;

    }
    else if (id=="pulgada"){
        document.lasunidades.unid_pulgada.value = 0.0254*valor;
        document.lasunidades.unid_pie.value = 0.0833333*valor;
        document.lasunidades.unid_yarda =0.02777778*valor;
    }
    else if(id=="yarda"){
        document.lasunidades.unid_metro.value = valor * 0.9144;
        document.lasunidades.unid_pulgada.value = valor * 36;
        document.lasunidades.unid_pie.value = valor * 3;
    }
}
function convertirGR(id){
    var grad,rad;
    if(id=="grados"){
        grad=document.getElementById("grados").value;
        rad = (grad*math.PI)/180;
    }else if (id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad=(rad*180)/math.PI
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}
function mostrar_ocultar(valorMO) {
    if (valorMO == "val_mostrar") {
        document.getElementById("divmo").style.display = 'block';
    } else if (valorMO == "val_ocultar") {
        document.getElementById("divmo").style.display='none';

    }
}