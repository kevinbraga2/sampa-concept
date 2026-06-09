"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, Scissors } from "lucide-react";
import { signIn, getSession } from "next-auth/react";

type Credentials = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };


const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");

  try {
    const result = await signIn("credentials", { ...credentials, redirect: false });

    console.log(result)

    if (!result || result.error) {
      setError("Email ou senha incorretos.");
      setIsLoading(false); // Garante o fim do loading aqui
      return;
    }

    // 2. Busca a sessão atualizada para pegar os dados do usuário que acabou de logar
    const session = await getSession();

    if (!session?.user) {
      setError("Falha ao iniciar a sessão.");
      setIsLoading(false);
      return;
    }

    // 3. Força o Next.js a limpar caches antigos antes de navegar
    router.refresh();

    // 4. Redirecionamento dinâmico baseado na Role cadastrada no Prisma
    switch (session.user.role) {
      case "ADMIN":
      case "PROFESSIONAL":
        router.push("/dashboard");
        break;
      default:
        router.push("/"); // Caso seja um USER comum ou não tenha painel
    }

  } catch (err) {
    console.error(err);
    setError("Ocorreu um erro inesperado.");
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center shadow-lg">
            <Scissors className="h-5 w-5 sm:h-6 sm:w-6 rotate-270" color="#c5a059" strokeWidth={2}  />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold tracking-tight " >Sampa</span>
            <span className="text-xs uppercase tracking-widest text-zinc-500">Concept</span>
          </div>  
        </Link>

        <h2 className="text-center text-3xl font-bold text-gray-900">Acesse sua conta</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Entre com suas credenciais para acessar o sistema
        </p>
      </div>


      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Field label="Email" htmlFor="email">
              <InputIcon icon={<Mail className="h-5 w-5 text-gray-400" />}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="Digite seu email"
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
              </InputIcon>
            </Field>

            <Field label="Senha" htmlFor="password">
              <InputIcon icon={<Lock className="h-5 w-5 text-gray-400" />}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Digite sua senha"
                  className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword
                    ? <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    : <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />}
                </button>
              </InputIcon>
            </Field>

            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 p-3">
                <p className="text-sm text-red-600 text-center">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  Entrando...
                </span>
              ) : "Entrar"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-gray-600 hover:text-black transition-colors">
              ← Voltar para página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function InputIcon({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      {children}
    </div>
  );
}