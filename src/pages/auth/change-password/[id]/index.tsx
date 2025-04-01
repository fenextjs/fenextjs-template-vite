import { FormChangePassword } from "@/components/Form/ChangePassword";
import { Head } from "@/components/Head";
import { LayoutLogin } from "@/layout/Login";
import { useRouter } from "fenextjs";

export const PageChangePassword = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Cambiar Contraseña</title>
            </Head>
            <LayoutLogin>
                {router.isReady && (
                    <FormChangePassword
                        defaultValue={{
                            token: `${router?.query?.id ?? ""}`,
                            password: "",
                            repeactPassword: "",
                        }}
                    />
                )}
            </LayoutLogin>
        </>
    );
};
