import { useApiQuery } from "fenextjs";
import { IApiResultTable } from "@/interface/api";
import { IProduct } from "@/interface/product";
import { API_URL } from "@/env";

export interface useQueryProductInputProps {}

export interface useQueryProductProps {
    input?: useQueryProductInputProps;
}
export const useQueryProduct = ({ input }: useQueryProductProps) => {
    return useApiQuery<useQueryProductInputProps, IApiResultTable<IProduct>>({
        url: `${API_URL}/api/product/get`,
        input,
        key: "product",
    });
};
