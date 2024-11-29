import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Interfaces relacionadas con los productos y las ventas/pedidos
export interface Product {
  productId: string;
  name: string;
  price: number;
  stockQuantity: number;
}

export interface NewProduct {
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

export interface Sales {
  saleId: string;
  productId: string;
  timestamp: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
}

export interface Purchase {
  purchaseId: string;
  productId: string;
  timestamp: string;
  quantity: number;
  unitCost: number;
  totalCost: number;
}


export interface SalesSummary {
  productId: string;
  productName: string;
  totalAmount: number;
}


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }), 
  reducerPath: "api",
  tagTypes: ["Products", "Sales", "Purchases", "SalesSummary"],
  endpoints: (build) => ({
    getProducts: build.query<Product[], string | void>({
      query: (search) => ({
        url: "/products",
        params: search ? { search } : {},
      }),
      providesTags: ["Products"],
    }),
    createProduct: build.mutation<Product, NewProduct>({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    getSales: build.query<Sales[], void>({
      query: () => "/sales",
      providesTags: ["Sales"],
    }),
    getPurchases: build.query<Purchase[], void>({
      query: () => "/purchases",
      providesTags: ["Purchases"],
    }),
    // Nuevo endpoint para obtener el resumen de ventas por producto
    getSalesSummary: build.query<SalesSummary[], void>({
      query: () => "/sales-summary", 
      providesTags: ["SalesSummary"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useGetSalesQuery,
  useGetPurchasesQuery,
  useGetSalesSummaryQuery, 
} = api;
