// src/services/ventaService.js

const calcularTotalVenta = (precioUnitario, cantidad, tasaImpuesto) => {
    if (precioUnitario < 0 || cantidad < 0) return 0;
    
    const subtotal = precioUnitario * cantidad;
    const impuesto = subtotal * tasaImpuesto;
    return subtotal + impuesto;
};

const verificarDisponibilidadStock = (stockActual, cantidadSolicitada) => {
    if (cantidadSolicitada <= 0) return false;
    return stockActual >= cantidadSolicitada;
};

module.exports = { calcularTotalVenta, verificarDisponibilidadStock };