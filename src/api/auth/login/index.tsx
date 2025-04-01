import { useApiMutation, useApiMutationCallbackProps } from 'fenextjs';
import { IFormLogin } from '@/components/Form/Login/interface';
import { useUserDataProps } from '@/hook/useUser';
import { API_URL } from '@/env';

export interface useApiLoginProps
    extends useApiMutationCallbackProps<useUserDataProps> {}

export const useApiLogin = ({ ...props }: useApiLoginProps) => {
    return useApiMutation<IFormLogin, useUserDataProps>({
        url: `${API_URL}/api/auth/login`,
        ...props,
        key: 'login',
    });
};
