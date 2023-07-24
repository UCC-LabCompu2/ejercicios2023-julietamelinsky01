/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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