import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Counter from "~/counter/counter";
import Server from "Server/Server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div><Counter></Counter><Server></Server></div>;
}
