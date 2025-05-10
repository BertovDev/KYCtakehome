import { usePathname } from "next/navigation";
import steps from "@/lib/signUpSteps";

const useStep = () => {
  const path = usePathname();

  const currentStep = steps.findIndex((step) =>
    path.includes(step.id.toString())
  );

  return { currentStep };
};

export default useStep;
