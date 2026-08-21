import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/give")({
  beforeLoad: () => {
    throw redirect({ to: "/contact" });
  },
});
