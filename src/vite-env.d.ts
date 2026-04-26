/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string
  readonly VITE_ABACATEPAY_SUBSCRIPTION_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
