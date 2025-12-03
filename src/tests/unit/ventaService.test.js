// src/tests/unit/ventaService.test.js
const { calcularTotalVenta, verificarDisponibilidadStock } = require('../../services/ventaService');

describe('Pruebas Unitarias - Servicio de Ventas', () => {

    test('Debe calcular correctamente el total con impuestos', () => {
        // Precio 100, Cantidad 2, Impuesto 10% (0.10) -> (100*2) + 20 = 220
        const total = calcularTotalVenta(100, 2, 0.10);
        expect(total).toBe(220);
    });

    test('Debe retornar 0 si el precio o cantidad son negativos', () => {
        const total = calcularTotalVenta(-50, 2, 0.10);
        expect(total).toBe(0);
    });

    test('Debe retornar TRUE si hay stock suficiente', () => {
        // Stock 10, Pido 5 -> Sí alcanza
        const disponible = verificarDisponibilidadStock(10, 5);
        expect(disponible).toBe(true);
    });

    test('Debe retornar FALSE si el stock es insuficiente', () => {
        // Stock 5, Pido 10 -> No alcanza
        const disponible = verificarDisponibilidadStock(5, 10);
        expect(disponible).toBe(false);
    });
});