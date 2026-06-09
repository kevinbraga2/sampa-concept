// middleware.ts
import { auth } from "@/auth"; // Ajuste para o caminho do seu Auth.js v5
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role; // Captura a role mapeada no JWT
  const pathname = req.nextUrl.pathname;

  // 1. REGRA GLOBAL: Se tentar acessar QUALQUER rota de dashboard e não estiver logado
  if (!isLoggedIn) {
    // Permite que ele veja a página de login para não gerar loop
    //if (pathname === "/login") return NextResponse.next(); 
    // Se for outra rota privada, joga para o login
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  // 2. REGRA DE ADMIN: Se a URL começar com /dashboard/admin, exige a role ADMIN
  if (pathname.startsWith("/dashboard/admin") && userRole !== "ADMIN") {
    // Se não for admin, redireciona ele de volta para o painel de profissional dele
    return NextResponse.redirect(new URL("/dashboard/professional", req.nextUrl));
  }
  // 3. REGRA DE PROFISSIONAL: Se a URL começar com /dashboard/professional, exige PROFESSIONAL ou ADMIN
  if (pathname.startsWith("/dashboard/professional") && userRole !== "PROFESSIONAL" && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
  // Se passou por todas as regras, permite o acesso à página normalmente
  return NextResponse.next();
});

// O Matcher garante que esse código acima SÓ vai rodar nas rotas privadas
export const config = {
  matcher: [
    "/dashboard/:path*", // Protege absolutamente tudo que começa com /dashboard
  ],
};
