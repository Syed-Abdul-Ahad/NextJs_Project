import ServerNavBar from "./../../components/ServerNavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServerNavBar />
      {children}
    </>
  );
}
