import neogulImage from "@/_assets/images/neogul.png";
import { GoogleSignInButton } from "./_components/GoogleSignInButton";

function LoginPage() {
    return (
        <>
            <div
                className="fixed top-0 -z-10 w-full h-full bg-center bg-cover bg-no-repeat opacity-20"
                style={{
                    backgroundImage: `url(${neogulImage})`
                }}></div>

            <div className="h-full flex flex-col justify-center">
                <div>
                    <h1 className="text-[3rem] text-yellow-700 text-center">NeoGul</h1>

                    <div className="mt-1 mx-5 rounded-b-2xl bg-transparent bg-white bg-opacity-5 backdrop-blur-xl">
                        <p>Welcome to Neogul Game!</p>

                        <form onSubmit={() => console.log("Submit")}>
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                className="block"
                                type="text"
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                className="block"
                                type="text"
                            />

                            <button>Sign in</button>

                            <div className="flex my-3 gap-3 items-center">
                                <div className="bg-gray-400 flex-1 h-[1px]" />
                                or
                                <div className="bg-gray-400 flex-1 h-[1px]" />
                            </div>
                        </form>

                        <GoogleSignInButton />
                        <button className="block bg-white p-2 border-black border-[1px]">
                            Play without login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
