import { FormForgotPassword } from '@/components/Form/ForgotPassword';
import { Head } from '@/components/Head';
import { LayoutLogin } from '@/layout/Login';

export const PageForgotPassword = () => {
    return (
        <>
            <Head>
                <title>Recuperar Contraseña</title>
            </Head>
            <LayoutLogin>
                <FormForgotPassword />
            </LayoutLogin>
        </>
    );
};

