import { createFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger,SidebarRail } from "@/components/ui/sidebar.tsx"
import { AppSidebar } from "@/components/app-sidebar.tsx"
 

export const Route = createFileRoute("/")({
  component: Index
});

function Index({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider >
      <AppSidebar />
      <main>
        <SidebarTrigger  className='' />
        {/* <SidebarRail /> */}
        {children}
      </main>
    </SidebarProvider>
  )
}