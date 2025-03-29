import { FormLogin } from '@/components/Form/Login';
import { Head } from '@/components/Head';
import { LayoutLogin } from '@/layout/Login';

export const PageLogin = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <LayoutLogin>
                <FormLogin />
            </LayoutLogin>
        </>
    );
};

