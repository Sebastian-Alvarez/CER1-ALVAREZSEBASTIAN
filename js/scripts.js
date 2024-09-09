document.getElementById("tipoResiduo").addEventListener("change", addOption);

function addOption() {
    var lista = document.getElementById("subcategoria")
    var resuido = document.getElementById("tipoResiduo").value
    
    lista.innerHTML = '<option value="">Seleccione una subcategoría</option>'

    var opciones = {
        plastico: ['Botellas', 'Envases', 'Bolsas'],
        papel: ['Periódicos', 'Cartón', 'Papel de oficina'],
        vidrio: ['Botellas', 'Frascos', 'Cristalería'],
        metales: ['Latas', 'Cables', 'Electrodomésticos pequeños'],
        electronicos: ['Teléfonos móviles', 'Baterías', 'Componentes de computadoras']
    }

    if (opciones[resuido]) {
        opciones[resuido].forEach(function(subcategoria) {
            var option = document.createElement("option")
            option.text = subcategoria
            option.value = subcategoria.toLowerCase().replace(/ /g, '-')
            lista.add(option);
        })
    }
}
