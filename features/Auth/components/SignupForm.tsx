import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import signupSchema from "../utils/signupFormSchema";
import { useRegister } from "@/requests/auth";
import { useSetRecoilState } from "recoil";
import { authState } from "@/states/auth";

const SignupForm: React.FC = () => {
  const setAuth = useSetRecoilState(authState);
  const router = useRouter();

  const { mutate, isLoading } = useRegister(
    ({ sessionTicket }) => {
      setAuth({ sessionTicket });
      router.push("/");
    },
    (err) => {
      console.log(err);
      alert(err.message);
    }
  );

  const { register, handleSubmit } = useForm<RegisterPayload>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = handleSubmit(async (formData: RegisterPayload) => {
    mutate(formData);
  });

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <h1 className="mb-6">Sign up</h1>
      <div className="flex flex-col gap-1">
        <TextInput
          label="email"
          autoComplete="email"
          type="email"
          id="email"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <TextInput
          label="password"
          autoComplete="current-password"
          type="password"
          id="password"
          {...register("password")}
        />
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Button
          as="a"
          variant="secondary"
          type="button"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
