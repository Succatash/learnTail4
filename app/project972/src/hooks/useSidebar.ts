import React from "react";

// deno-lint-ignore no-explicit-any
export default function useSidebar(ctx: any) {
  const context = React.useContext(ctx)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}