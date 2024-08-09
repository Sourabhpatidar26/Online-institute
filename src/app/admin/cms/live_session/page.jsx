"use client";

import React, { Fragment, useState } from "react";
import Filter from "../../../../components/Filter";
import Card from "../../../../components/Card";


function LiveSession() {
  const [view, setView] = useState("grid");

  return (
    <Fragment>
      <Filter title="Live Session" view={view} setView={setView} />
      <div
        className={`mt-5 grid ${
          view === "grid"
            ? "grid-view grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4"
            : "list-view grid-cols-1 gap-2"
        }`}
      >
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
        <Card view={view} />
      </div>
    </Fragment>
  );
}

export default LiveSession;
