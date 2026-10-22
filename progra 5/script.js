// Número oficial de Óptica Dos Mil 2020 Veinte (614 381 4828)
const TELEFONO_WHATSAPP = "526143814828";

function seleccionarServicio(nombreServicio) {
    const selectServicio = document.getElementById("servicio");
    selectServicio.value = nombreServicio;
    
    document.getElementById("contacto").scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const servicio = document.getElementById("servicio").value;
    const consulta = document.getElementById("mensaje").value;

    const mensaje = `Hola Óptica Dos Mil 2020 Veinte.%0A%0AMi nombre es *${nombre}*.%0AMe interesa el servicio de: *${servicio}*.%0A%0A*Detalles o consulta:* ${consulta}%0A%0AQuedo en espera de confirmar mi cita. Gracias.`;

    const url = `https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`;
    window.open(url, "_blank");
});