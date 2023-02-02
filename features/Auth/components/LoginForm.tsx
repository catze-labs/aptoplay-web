import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "@/features/Auth/utils/loginFormSchema";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { useLogin } from "@/requests/auth";
import { useRecoilState } from "recoil";
import { authState } from "@/states/auth";

const LoginForm: React.FC = () => {
  const router = useRouter();

  const [auth, setAuth] = useRecoilState(authState);

  const { mutate, isLoading } = useLogin(
    ({ sessionTicket, playFabId }) => {
      setAuth({ sessionTicket, playFabId });

      const backStep = router.query.back;

      router.push(`/tutorial/${backStep || 1}`);
    },
    (err) => {
      console.log(err);
      alert(err.message);
    }
  );

  const { register, handleSubmit } = useForm<LoginPayload>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (formData) => {
    mutate(formData);
  });

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <h1 className="mb-6">Login</h1>
      <div className="flex flex-col gap-1">
        <TextInput
          label="Email"
          autoComplete="email"
          type="email"
          id="email"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <TextInput
          label="Password"
          autoComplete="current-password"
          type="password"
          id="password"
          {...register("password")}
        />
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button
          as="a"
          variant="secondary"
          type="button"
          disabled={isLoading}
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
