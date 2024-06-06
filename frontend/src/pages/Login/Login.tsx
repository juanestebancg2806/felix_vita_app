import { Controller } from "react-hook-form";
import Card from "../../components/Card/Card";
import Typography from "../../components/Typography/Typography";
import {
  StyledErrorLabel,
  StyledForm,
  StyledInputContainer,
  StyledLogin,
  StyledLoginButtonWrapper,
  StyledLogo,
} from "./Login.styles";
import useLoginUtils from "./loginUtils";
import Button from "../../components/Button/Button";
import logo from "../../assets/logo.png";

const Login: React.FC = () => {
  const { loginForm } = useLoginUtils();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = loginForm;
  const { email, password } = errors;

  return (
    <StyledLogin>
      <Card title="Login">
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <StyledLogo src={logo} />
          <StyledInputContainer>
            <Typography variant="label" text="Email" />
            <input {...register("email")} type="email" />
            {email?.message && (
              <StyledErrorLabel>{email.message}</StyledErrorLabel>
            )}
          </StyledInputContainer>
          <StyledInputContainer>
            <Typography variant="label" text="Password" />

            <input {...register("password")} type="password" />
            {password?.message && (
              <StyledErrorLabel>{password.message}</StyledErrorLabel>
            )}
          </StyledInputContainer>
          <StyledLoginButtonWrapper>
            <Button
              text="Login"
              onClick={handleSubmit((data) => console.log(data))}
            />
          </StyledLoginButtonWrapper>
        </StyledForm>
      </Card>
    </StyledLogin>
  );
};

export default Login;
