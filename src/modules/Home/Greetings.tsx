import { Button } from "@components";

export default function Greetings() {
  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-center font-montserrat text-white uppercase mb-5 text-2xl">
        Where the love begins
      </h2>
      <h1 className="text-center font-montserrat text-white uppercase mb-5 text-4xl">
        Welcome
      </h1>
      <Button className="w-full mb-4">Sign up for a new account</Button>
      <Button className="w-full">Login to an existing account</Button>
    </div>
  );
}
