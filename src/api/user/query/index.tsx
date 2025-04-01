import { useApiQuery } from "fenextjs";
import { IApiResultTable } from "@/interface/api";
import { IUser } from "@/interface/user";
import { API_URL } from "@/env";

export interface useQueryUserInputProps {
    id?: string;
}

export interface useQueryUserProps {
    input?: useQueryUserInputProps;
}
export const useQueryUser = ({ input }: useQueryUserProps) => {
    return useApiQuery<useQueryUserInputProps, IApiResultTable<IUser>>({
        url: `${API_URL}/api/user/get`,
        input,
        key: "user",
    });
};
