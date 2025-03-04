document.addEventListener('DOMContentLoaded', () => {
    const etapas = document.querySelectorAll('.etapa');
    const botonReiniciar = document.getElementById('reiniciar');

    etapas.forEach(etapa => {
        etapa.addEventListener('click', () => {
            // Quitar la clase 'activo' de todas las etapas
            etapas.forEach(e => e.classList.remove('activo'));
            
            // Agregar la clase 'activo' a la etapa clickeada
            etapa.classList.add('activo');
        });
    });

    botonReiniciar.addEventListener('click', () => {
        etapas.forEach(etapa => etapa.classList.remove('activo'));
    });
});