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

/**
 * Represents the Login component.
 * This component is responsible for rendering the login form.
 */
const Login: React.FC = () => {
  const { loginForm, onSubmit } = useLoginUtils();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = loginForm;
  const { username, password } = errors;

  return (
    <StyledLogin>
      <Card title="Login">
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <StyledLogo src={logo} />
          <StyledInputContainer>
            <Typography variant="label" text="Username" />
            <input {...register("username")} />
            {username?.message && (
              <StyledErrorLabel>{username.message}</StyledErrorLabel>
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
            <Button text="Login" onClick={handleSubmit(onSubmit)} />
          </StyledLoginButtonWrapper>
        </StyledForm>
      </Card>
    </StyledLogin>
  );
};

export default Login;
