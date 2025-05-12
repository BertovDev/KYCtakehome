import { usePathname } from "next/navigation";
import steps from "@/lib/signUpSteps";

const useStep = () => {
  const path = usePathname();
  const isComplete = path.includes("wallet-init");

  const currentStep = steps.findIndex((step) => {
    return path.includes(step.id.toString());
  });

  return { currentStep, isComplete };
};

export default useStep;
