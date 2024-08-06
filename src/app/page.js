import { Fragment } from "react";
import { redirect } from "../../node_modules/next/navigation";

export default function Home() {
  const accessDenied = true
  if (accessDenied) {
  //  return redirect('/auth/login');
  }
 
  return (
    <Fragment>
      <h2 className="text-primary">Home</h2>
    </Fragment>
  );
}
