import { GreetProps } from "./greet.types";

const Greet = ({ name }: GreetProps) => {
  return <div>{`Hello, ${name}`}</div>;
};

export default Greet;
