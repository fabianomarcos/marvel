import { useCallback } from "react";
import { useRouter } from "next/router";
import { useAuth } from "./auth";
import { StorageEnum } from "@/utils/storageEnum";
import { useToast } from "./toast";

export function useLogout() {
  const { signOut } = useAuth();
  const { addToast } = useToast();
  const router = useRouter();
  console.log("typeof window: ", typeof window);

  const logger = useCallback(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem(StorageEnum.token);
      const user = localStorage.getItem(StorageEnum.user);
      const isLogged =
        token && user && user !== "undefined" && token !== "undefined";
      console.log("isLogged: ", isLogged);

      if (!isLogged) {
        signOut();
        router.push("/login");
        setTimeout(() => {
          addToast({
            title: "Erro",
            type: "error",
            description:
              "Você foi desconectado da aplicação, favor fazer login novamente!",
          });
        }, 1000)
      }
    }
  }, []);

  return { logger };
}
