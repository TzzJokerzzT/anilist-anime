# AniList Anime Project

Este proyecto es una aplicación web que permite a los usuarios explorar información sobre animes utilizando la API de AniList. Proporciona funcionalidades como búsqueda de animes, visualización de detalles y gestión de favoritos.

## Características

- **Exploración de Animes Populares**: Navega por una lista de los animes más populares.
- **Búsqueda de Animes**: Busca animes por título o categoría.
- **Detalles del Anime**: Visualiza información detallada sobre un anime específico, incluyendo su sinopsis, estado, episodios y personajes.
- **Gestión de Favoritos**: Agrega o elimina animes de tu lista de favoritos, con persistencia en `localStorage`.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **Tailwind CSS**: Framework de CSS para diseño rápido y responsivo.
- **Zustand**: Biblioteca para gestión de estado en React.
- **AniList API**: API para obtener información sobre animes.

## Requisitos Previos

- Node.js (versión 14 o superior)
- pnpm (versión 6 o superior)

## Instalación

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/TzzJokerzzT/anilist-anime.git
   ```

2. Instalar dependecias:

```bash
pnpm install
```

3. Correr proyecto:

```bash
pnpm dev
```

## Estructura del proyecto

anilist-anime/
├── app/
│ ├── components/ # Componentes reutilizables
│ ├── context/ # Proveedores de contexto y stores
│ ├── pages/ # Páginas de la aplicación
│ ├── styles/ # Archivos de estilo
│ └── utils/ # Utilidades y funciones auxiliares
├── public/ # Archivos públicos (imágenes, fuentes, etc.)
├── .gitignore # Archivos y directorios ignorados por Git
├── package.json # Dependencias y scripts del proyecto
├── README.md # Documentación del proyecto
└── tsconfig.json # Configuración de TypeScript

## Librerias Usadas

[pnpm](https://pnpm.io/es/)
[Next.Js](https://nextjs.org/)
[Zustand](https://zustand-demo.pmnd.rs/)
[React Keep](https://react.keepdesign.io/)
[Anilist](https://docs.anilist.co/)
[Typescript](https://www.typescriptlang.org/)
[TailwindCSS](https://tailwindcss.com/)
[GraphQL](https://graphql.org/)
[Apollo](https://www.apollographql.com/docs/apollo-server)

## Derechos de autor

Este proyecto fue diseñedo para propositos educativos y la información fue obtenida atraves de este pagina de uso libre [Anilist](https://docs.anilist.co/). Diseñado por Alexis Buelvas
