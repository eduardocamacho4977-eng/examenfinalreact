
import { create } from 'zustand';

export const useCarritoStore = create((set) => ({

  productos: [],

  agregarProducto: (producto) =>
    set((state) => {
      const existe = state.productos.find((p) => p.id === producto.id);

      if (existe) {
        return {
          productos: state.productos.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
          ),
        };
      }

      return {
        productos: [...state.productos, { ...producto, cantidad: 1 }],
      };
    }),

  sumarCantidad: (id) =>
    set((state) => ({
      productos: state.productos.map((p) =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      ),
    })),

  restarCantidad: (id) =>
    set((state) => ({
      productos: state.productos
        .map((p) => (p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p))
        .filter((p) => p.cantidad > 0),
    })),

  eliminarProducto: (id) =>
    set((state) => ({
      productos: state.productos.filter((p) => p.id !== id),
    })),

  vaciarCarrito: () => set({ productos: [] }),
}));
