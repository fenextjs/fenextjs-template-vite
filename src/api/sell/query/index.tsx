import { useApiQuery } from 'fenextjs';
import { IApiResultTable } from '@/interface/api';
import { ISell } from '@/interface/sell';
import { API_URL } from '@/env';

export interface useQuerySellInputProps {}

export interface useQuerySellProps {
    input?: useQuerySellInputProps;
}
export const useQuerySell = ({ input }: useQuerySellProps) => {
    return useApiQuery<useQuerySellInputProps, IApiResultTable<ISell>>({
        url: `${API_URL}/api/sell/get`,
        input,
        key: 'sell',
    });
};
