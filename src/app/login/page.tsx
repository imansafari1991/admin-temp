import LoginForm from "./components/LoginForm";


const Login = () => {

    return (
        <div className="flex justify-center  h-full items-center">
            <div className="bg-white rounded-lg border border-gray-200 shadow-md h-[400px] w-[400px] " >
                <div className="flex justify-center my-10 ">
                    <p className="text-black"> ورود کاربر</p>
                </div>
                <div className="px-5  h-full " >
                    <LoginForm />
                </div>

            </div>
        </div>

    );
}

export default Login;