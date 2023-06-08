var tablas = [];
tablas[0] = document.getElementById("tablapaises");
var cant_tablas= 1;
var cant_filas_inicial= 6;
var tabla_actual= 0;

/*
for (var i = 0, row; row = tabla_inicial.rows[i]; i++) {
  for (var j = 0, col; col = row.cells[j]; j++) {
    alert(col.innerText);
  }
}
*/

const agregarFila = () => {
    document.getElementById('tablapaises').insertRow(-1).innerHTML = '<td contentEditable="true"></td><td contentEditable="true"></td>';
}

function resetear() {
//    if (tabla_actual != 0) {
        let tablaactual = document.getElementById("tablapaises");
        for (var i = 0, row; row = tablaactual.rows[i]; i++) {
            document.getElementById("tablapaises").deleteRow(i);
        } 
//    }

}

function guardarTabla() {
    let tablaactual = document.getElementById("tablapaises");
    for (var i = 0, row; row = tablaactual.rows[i]; i++) {
        
      }
    if (i>cant_filas_inicial) {
        cant_tablas++;
        tablas[cant_tablas-1]= tablaactual;
        let campo_select = document.getElementById("tablasguardadas");
        let nueva_op = document.createElement("option");
        nueva_op.text = "Tabla_" + cant_tablas;
        campo_select.add(nueva_op);
        alert("Se ha guardado " + nueva_op.text);
    };
}

