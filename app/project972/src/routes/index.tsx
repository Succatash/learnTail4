import { createFileRoute } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx"
import { AppSidebar } from "@/components/app-sidebar.tsx"
 

export const Route = createFileRoute("/")({
  component: Index
});

function Index({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider >
        <SidebarTrigger className='bg-red-700 ml-40' />
      <AppSidebar />
      <main>
        {children}
      </main>
    </SidebarProvider>
  )
}