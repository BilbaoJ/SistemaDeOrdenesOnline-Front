import { reactive } from 'vue';
import type Product from '~/model/Product';

const clienteStore = reactive({
    productos: [] as Product[],
    productos_carrito:[] as Product[],
    total_compra: 0,
    agregarProductoCarrito(payload: Product){
        this.productos_carrito.push(payload);
    },
    actualizarProductos(payload: Product[]){
        this.productos = payload;
    },
    calcularPrecioCarrito(){
        var precios: number[] = this.productos_carrito.map(item_agregado => item_agregado.price);
        this.total_compra = precios.reduce((suma, precio)=> suma + precio, 0);
    },
});

export default clienteStore;