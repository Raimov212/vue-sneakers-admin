/// <reference types="vite/client" />
/// <reference types="vuetify/types/components" />
/// <reference types="vuetify/types/directives" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
