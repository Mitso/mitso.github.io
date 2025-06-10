import {
  isRouteErrorResponse,
} from "react-router";
import type { Route } from "./+types/root";
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="main pt-16 p-4 container mx-auto">
      <h1 className="heading heading-primary">{message}</h1>
      <p className="paragraph">{details}</p>
      {stack && (
        <pre className="code w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
