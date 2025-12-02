import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section className="panel" id={id}>
      <h1 className="title">{title}</h1>
      {subtitle && <h2 className="subtitle">{subtitle}</h2>}
      <div className="content">{children}</div>
    </section>
  );
}
