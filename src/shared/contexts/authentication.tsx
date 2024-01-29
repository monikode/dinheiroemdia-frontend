import { createContext } from "react";

interface AuthProps {
  // getAuthenticatedUser?: () => User | undefined;
  login?: () => Promise< undefined>;
  logout?: () => void;
  isAuthenticated?: () => boolean;
}

export const AuthContext = createContext<AuthProps>({});

export default function AuthProvider({ children }: { children: any }) {
  //   function getAuthenticatedUser(): User | undefined {
  //     // const user = getAuthenticatedUserService.execute();
  //     return user;
  //   }

  //   function isAuthenticated() {
  //     // const user = getAuthenticatedUserService.execute();
  //     return !!user;
  //   }

  function login(): Promise< undefined> {
    return new Promise(async (res, rej) => {
      if (localStorage.getItem("user-authenticated")) {
        res(undefined);
      } else {
        rej("Erro ao autenticar usuário");
      }
    });
  }

  //   function hasPermission(permission: PermissionEnum): boolean {
  //     const user = getAuthenticatedUser();
  //     if (!user) {
  //       return false;
  //     }
  //     const isAdmin = user.admin;
  //     if (isAdmin) return true;
  //     if (!user.nivelAcesso?.permissoes) return false;
  //     return user.nivelAcesso?.permissoes
  //       ?.map((p) => (p as Permission).nome)
  //       .includes(permission);
  //   }

  return (
    <AuthContext.Provider value={{ login }}>{children}</AuthContext.Provider>
  );
}
