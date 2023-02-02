import { useRouter } from "next/router";
import Steps from "@/features/Tutorial/pages/Steps";

const StepPage = () => {
  const router = useRouter();

  const { step: stepString } = router.query;

  const step = parseInt(stepString as string, 10);

  return Steps[step - 1] || <div>Step {step} is not found</div>;
};

export default StepPage;
