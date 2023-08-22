
//---------------------------------Modal 2
function modal_exportar_excel() {
    // Get the modal
    var modal = document.getElementById("modal_exportar_excel");

    // Get the button that opens the modal
    var btn = document.getElementById("exportar");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closem2")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var btn_cerrar = btn = document.getElementById("cerrar_modal");
    btn_cerrar.onclick = function () {
        modal.style.display = "none";
    }

}
//---------------------------------Modal 2 Final

//---------------------------------Modal 3
function excel() {
    fileInput.addEventListener('change', function () {
        var selectedFile = fileInput.files[0];

        if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            // Mostrar la previsualización de Excel
            previewExcelData(selectedFile);
        } else {
            alert('Por favor, selecciona un archivo Excel válido.');
        }
    });

    fileInput.addEventListener('change', function () {
        var selectedFile = fileInput.files[0];

        if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            // Aquí puedes agregar lógica para manejar el archivo Excel seleccionado
            console.log('Archivo Excel seleccionado:', selectedFile.name);
        } else {
            alert('Por favor, selecciona un archivo Excel válido.');
        }
    });

}

function modalimportar() {
    var modal = document.getElementById('mymodalexcel');
    var btn = document.getElementById('openexcel');
    var span = document.getElementsByClassName('closem3')[0];

    btn.onclick = function () {
        modal.style.display = 'block';
    };

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}

function previewExcelData(file) {
    var excelPreview = document.getElementById('excelPreview');

    var reader = new FileReader();
    reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });

        var firstSheetName = workbook.SheetNames[0];
        var sheet = workbook.Sheets[firstSheetName];

        var htmlTable = XLSX.utils.sheet_to_html(sheet);

        excelPreview.innerHTML = htmlTable;
    };

    reader.readAsArrayBuffer(file);
}

document.addEventListener('DOMContentLoaded', function () {
    var fileInput = document.getElementById('fileInput');

    fileInput.addEventListener('change', function () {
        var selectedFile = fileInput.files[0];

        if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            previewExcelData(selectedFile);
        } else {
            alert('Por favor, selecciona un archivo Excel válido.');
        }
    });
});
//---------------------------------Modal 3 Final

//---------------------------------Modal 4
function modal_envio_constancias() {
    // Get the modal
    var modal = document.getElementById("modal_envio_constancias");

    // Get the button that opens the modal
    var btn = document.getElementById("envio_constancias");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closem4")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //When the user clicks on Cerrar / Cancelar
    var btn_cerrar = btn = document.getElementById("cerrar_modal_envio");
    btn_cerrar.onclick = function () {
        modal.style.display = "none";
    }

}
//---------------------------------Modal 4 Final

//---------------------------------Modal 5

function modalconfiguracion() {
    var modal = document.getElementById('mymodalconfiguracion');
    var btn = document.getElementById('openconfig');
    var span = document.getElementsByClassName('closem5')[0];
    btn.onclick = function () {
        modal.style.display = 'block';
    };

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

}
//---------------------------------Modal 5 Final

//---------------------------------Modal 6
function modalconstancias() {
    var modal = document.getElementById('mymodalconst');
    var btn = document.getElementById('modalconst');
    var span = document.getElementsByClassName('closem6')[0];
    btn.onclick = function () {
        modal.style.display = 'block';
    };

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

}
//---------------------------------Modal 6 Final

//---------------------------------Modal 7
function modal_visualizacion() {
    // Get the modal
    var modal = document.getElementById("modal_visualizacion");
    var button = document.getElementById("button_constancia");
    /*
    var button;
    const id = id;
    alert(id);
    switch (id) {
        case 1:
            button = document.getElementById("button_constancia");
            break;
        case 2:
            button = document.getElementById("button_constancia2");
            break;
        case 3:
            button = document.getElementById("button_constancia3");
            break;
        default:
            button = document.getElementById("button_constancia");
            break;
    }
    */

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closem7")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
//---------------------------------Modal 7 final

//---------------------------------Modal 8
function modalconstanciasconfig() {
    var modal = document.getElementById('mymodalconstconfig');
    var btn = document.getElementById('modalconstconfig');
    var span = document.getElementsByClassName('closem6')[0];
    
    modal.style.display = 'block';

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    //When the user clicks on Cerrar / Cancelar
    var btn_cerrar = btn = document.getElementById("cerrar_modal_config");
    btn_cerrar.onclick = function () {
        modal.style.display = "none";
    }

}
//---------------------------------Modal 8 Final


//---------------------------------Modal 9
function modalconfiguracioneditar() {
    var modal = document.getElementById('modalconfiguracioneditar');
    var btn = document.getElementById('configuracioneditar');
    var span = document.getElementsByClassName('closem8')[0];
    
    modal.style.display = 'block';

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}
//---------------------------------Modal 9 Final


//---------------------------------Modal 9
function modalEditarUsuario() {
    var modal = document.getElementById('modalEditarUsuario');
    var btn = document.getElementById('editarUsuario');
    var span = document.getElementsByClassName('closem9')[0];
    
    modal.style.display = 'block';

    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
    
    //When the user clicks on Cerrar / Cancelar
    var btn_cerrar = btn = document.getElementById("cerrar_modal_datos");
    btn_cerrar.onclick = function () {
        modal.style.display = "none";
    }
}
//---------------------------------Modal 9 Final
