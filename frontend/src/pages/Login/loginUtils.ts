import { FieldValues, UseFormReturn, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../services/authService/AuthContext";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs extends FieldValues {
  username: string;
  password: string;
}
interface UseLoginUtilsReturn {
  loginForm: UseFormReturn<LoginFormInputs>;
  onSubmit: (data: LoginFormInputs) => Promise<void>;
}

const MESSAGE_REQUIRED_FIELD = "Required field";

// Define validation schema using yup
const formSchema = yup
  .object({
    username: yup.string().required(MESSAGE_REQUIRED_FIELD),
    password: yup.string().required(MESSAGE_REQUIRED_FIELD),
  })
  .required(); // Ensure the entire schema is required

/**
 * Custom hook that provides login utility functions and form validation for the login page.
 *
 * @returns An object containing the login form and the onSubmit function.
 */
const useLoginUtils = (): UseLoginUtilsReturn => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const loginForm = useForm<LoginFormInputs>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const loginSuccess: boolean | undefined = await login(
        data.username,
        data.password
      );
      if (loginSuccess) {
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return {
    loginForm,
    onSubmit,
  };
};

export default useLoginUtils;
