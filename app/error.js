"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Surface the error for monitoring / debugging.
    console.error(error);
  }, [error]);

  return (
    <section className="status-page">
      <div className="container status-page-inner">
        <span className="eyebrow eyebrow--dark">
          <span className="eyebrow-dot" />
          Something went wrong
        </span>
        <h1 className="status-page-title">We hit an unexpected problem</h1>
        <p className="status-page-text">
          Please try again. If the issue keeps happening, get in touch with the
          studio and we will help you right away.
        </p>
        <div className="status-page-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => reset()}>
            Try again
          </button>
        </div>
      </div>
    </section>
  );
}
