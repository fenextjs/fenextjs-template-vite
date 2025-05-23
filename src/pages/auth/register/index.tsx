import { FormRegister } from "@/components/Form/Register";
import { LayoutLogin } from "@/layout/Login";
import { Head } from "@/components/Head";

export const PageRegister = () => {
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <LayoutLogin>
                <FormRegister />
            </LayoutLogin>
        </>
    );
};
