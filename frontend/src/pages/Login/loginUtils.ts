import { FieldValues, UseFormReturn, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginFormInputs extends FieldValues {
  email: string;
  password: string;
}
interface UseLoginUtilsReturn {
  loginForm: UseFormReturn<LoginFormInputs>;
}

const MESSAGE_REQUIRED_FIELD = "Required field";

// Define validation schema using yup
const formSchema = yup
  .object({
    email: yup
      .string()
      .email("Email must be a valid email")
      .required(MESSAGE_REQUIRED_FIELD),
    password: yup.string().required(MESSAGE_REQUIRED_FIELD),
  })
  .required(); // Ensure the entire schema is required

const useLoginUtils = (): UseLoginUtilsReturn => {
  const loginForm = useForm<LoginFormInputs>({
    resolver: yupResolver(formSchema),
  });

  return {
    loginForm,
  };
};

export default useLoginUtils;
