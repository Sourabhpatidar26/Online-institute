"use client";

import { usePathname } from "next/navigation";
import Layout from "../components/Layout"

export default function Provider({ children }) {
  const pathname = usePathname();

  const isPublicPath = ["/login", "/register", "/forget-password"].includes(
    pathname
  );

  return <>{isPublicPath ? children : <Layout data={children} />}</>;
}
