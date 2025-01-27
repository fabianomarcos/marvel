import FormLogin from "./components/FormLogin";
import LoginPage from "./components/LoginPage";

export default function Login() {
  console.log("DATABASE_URL:", process.env.DATABASE_URL);
  return <LoginPage component={FormLogin} />;
}
