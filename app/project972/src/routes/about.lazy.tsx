import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="bg-sidebar-ring w-3 m-3 p-3">Hello "/about"!</div>;
}
