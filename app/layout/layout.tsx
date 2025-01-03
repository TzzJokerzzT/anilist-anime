import { NavbarComponent } from "@/components/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
}
