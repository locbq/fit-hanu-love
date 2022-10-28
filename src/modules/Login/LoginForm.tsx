import { Link } from "react-router-dom";

import { Input, Button } from "@components";
import paths from "@router/router.paths";

export default function LoginForm() {
  return (
    <form>
      <Input className="mb-4" label="Email" />
      <Input className="mb-6" label="Password" type="password" />
      <Button className="w-full">Login</Button>
      <p className="text-white text-center my-4 text-sm">
        Don't have an account?{" "}
        <Link className="text-primary" to={paths.PATH_SIGN_UP}>
          Click here to sign up
        </Link>
      </p>
    </form>
  );
}
