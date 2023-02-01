import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import signupSchema from "../utils/signupFormSchema";

const SignupForm: React.FC = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData);
  });

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <h1 className="mb-6">Sign up</h1>
      <div className="flex flex-col gap-1">
        <TextInput
          label="Email"
          autoComplete="email"
          type="email"
          id="email"
          {...register("Email")}
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <TextInput
          label="Password"
          autoComplete="current-password"
          type="password"
          id="password"
          {...register("Password")}
        />
      </div>
      <div className="flex flex-col gap-1 ">
        <TextInput
          label="Name"
          type="text"
          id="name"
          {...register("DisplayName")}
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
