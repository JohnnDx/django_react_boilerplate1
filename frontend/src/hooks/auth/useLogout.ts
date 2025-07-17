import { useRouter } from "next/navigation";
import { clearAllCookie } from "../../utils/auth";
import { useUserContext } from "../../contexts/userContext";
import { toast } from "sonner"; // ✅ Import Sonner toast

export default function useLogout() {
  const router = useRouter();
  const { user, setUser } = useUserContext();

  return () => {
    try {
      setUser({ newUser: null, newSubscription: null });
      clearAllCookie();

      toast("Logged out", {
        description: "You’ve been successfully signed out.",
      }); // ✅ Show toast

      router.push("/login");
    } catch (err) {
      toast.error("Logout failed");
      console.error("Logout error:", err);
    }
  };
}
