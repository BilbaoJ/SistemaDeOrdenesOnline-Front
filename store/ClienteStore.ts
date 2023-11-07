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
});

export default clienteStore;