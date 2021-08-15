import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <button
        onClick={signIn}
        className="text-white bg-blue-500 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
      >
        Login with Facebook
      </button>
    </div>
  );
}

export default Login;
