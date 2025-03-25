import { auth } from "@/auth";
import NavBarClient from "./NavBarClient";

export default async function ServerNavBar() {
  try {
    const session = await auth(); // Ensure this runs only on the server
    return <NavBarClient session={session} />;
  } catch (error) {
    console.error("Error fetching auth session:", error);
    return <NavBarClient session={null} />;
  }
}
