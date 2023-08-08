import { useRouter } from "next/router";
import Image from "next/image";

import logo from "@/assets/pontua_side_bar.svg";
import { Icons } from "@/lib/icons";
import IconRouter from "./components";

import { Container, ContainerImg, ContainerLinks } from "./styles";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { useToast } from "@/hooks/toast";
import { StorageEnum } from "@/utils/storageEnum";
import { useEffect, useState } from "react";

export default function SideBar() {
  const [favoriteId, setFavoriteId] = useState("");
  const router = useRouter();
  const { addToast } = useToast();
  const isActive = router.pathname === "/perfil/[id]";
  const { signOut } = useAuth();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem(StorageEnum.favorite);
      if (id && id !== "undefined") setFavoriteId(id);
    }
  },[])

  const logout = () => {
    signOut();
    addToast({
      title: "Sucesso",
      type: "success",
      description: "Você foi desconectado da aplicação corretamente, até logo!",
    });
    router.push("/login");
  };

  return (
    <Container>
      <ContainerImg>
        <Image
          src={logo}
          width={104}
          height={26}
          quality={100}
          priority
          alt="Simbolo da Pontua"
        />
      </ContainerImg>
      <ContainerLinks>
        <Link href="/">
          <IconRouter
            linkName="Home"
            icon={Icons.QrCode}
            isActive={!isActive}
          />
        </Link>
        <Link href={`/perfil/${favoriteId}`}>
          <IconRouter linkName="Perfil" icon={Icons.User} isActive={isActive} />
        </Link>
      </ContainerLinks>
      <ContainerLinks>
        <button onClick={logout}>
          <IconRouter linkName="Sair" icon={Icons.Logout} isActive={false} />
        </button>
      </ContainerLinks>
    </Container>
  );
}
