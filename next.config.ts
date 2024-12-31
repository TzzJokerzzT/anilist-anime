import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protocolo utilizado por el dominio
        hostname: "s4.anilist.co", // Dominio permitido
        port: "", // Deja vacío si no hay un puerto específico
        pathname: "/**", // Permite todas las rutas bajo este dominio
      },
    ],
  },
};

export default nextConfig;
