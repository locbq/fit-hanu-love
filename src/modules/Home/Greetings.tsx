import { Link } from "react-router-dom";

import { Button } from "@components";
import paths from "@router/router.paths";

export default function Greetings() {
  return (
    <div>
      <h2 className="text-center font-montserrat text-white uppercase mb-5 text-2xl">
        Where the love begins
      </h2>
      <h1 className="text-center font-montserrat text-white uppercase mb-5 text-4xl">
        Welcome
      </h1>
      <Link to={paths.PATH_SIGN_UP}>
        <Button className="w-full mb-4">Sign up for a new account</Button>
      </Link>
      <Link to={paths.PATH_LOGIN}>
        <Button className="w-full">Login to an existing account</Button>
      </Link>
    </div>
  );
}
