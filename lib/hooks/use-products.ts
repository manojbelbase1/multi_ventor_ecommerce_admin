import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../api/api-client";

export const useGetProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await apiClient.get("/api/products");
            const payload = response.data || {};
            const data = payload.data ?? payload;
            return Array.isArray(data) ? data : [];
        }
    });
};

export const useGetProductById = (id: string) => {
    return useQuery({
        queryKey: ["products", id],
        queryFn: async () => {
            const response = await apiClient.get(`/api/products/${id}`);
            const payload = response.data || {};
            return payload.data ?? payload;
        },
        enabled: !!id
    });
};

export const useCreateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data: any) => apiClient.post("/api/products", data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        }
    });
};

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, data }: { id: string, data: any }) =>
            apiClient.patch(`/api/products/${id}`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        }
    });
};

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string) => apiClient.delete(`/api/products/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        }
    });
};
