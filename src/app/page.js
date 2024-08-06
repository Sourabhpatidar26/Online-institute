import { Fragment } from "react";

export default function Home() {
  const accessDenied = false
  if (accessDenied) {
  //  return redirect('/auth/login');
  }
 
  return (
    <Fragment>
      <h2 className="text-primary">Home</h2>
    </Fragment>
  );
}
