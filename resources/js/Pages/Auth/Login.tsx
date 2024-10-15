import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Login() {
    return (
        <GuestLayout>
            <Head title="Log in" />
            <a href={route("login.google")}>
                <img
                    src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
                    className="mx-auto"
                />
            </a>
        </GuestLayout>
    );
}
