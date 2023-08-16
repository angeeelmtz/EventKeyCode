const insert = document.getElementById("insert");

window.addEventListener('keydown', (event) => {
    /*Se agrega un "escuchador de eventos" al objeto window para el evento "keydown", que se activa cuando una tecla es presionada */


    /*El contenido HTML del elemento "insert" se actualiza utilizando el template dentro de las comillas inversas. 
      Esto reemplazará el contenido existente en el elemento con nuevos elementos div que contienen información sobre la tecla presionada. 
    */
    insert.innerHTML = `
        <div class="key">
            ${event.key === ' ' ? 'Space' : event.key} 
            <small>event.key</small>
        </div>
  
        <div class="key">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>
    
        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>
    `;
    
    /*
        este código crea un efecto en tiempo real que muestra información sobre las teclas que el usuario presiona. Al presionar una tecla, 
        se actualiza el contenido del elemento con el id "insert" con detalles sobre la tecla presionada, su código y su código único. 
    */
})