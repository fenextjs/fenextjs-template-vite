import { useRouter } from "fenextjs";
import { useQueryClient } from "../query";

export interface useSingleClientProps {}
export const useSingleClient = ({}: useSingleClientProps) => {
    const { query, isReady } = useRouter();
    const { data, isLoading, ...HOOK } = useQueryClient({
        input: {
            id: `${query?.id}`,
        },
    });
    return {
        ...HOOK,
        isLoading: isLoading || !isReady,
        data: data?.data?.items?.[0],
    };
};
