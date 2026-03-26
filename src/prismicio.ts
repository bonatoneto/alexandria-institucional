import type { AllDocumentTypes } from "./prismic-types.generated";
import sm from "../slicemachine.config.json";

import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

// Importado após rodar npm run generate-types

export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

/**
 * Route Resolver — define como a URL de cada tipo de documento é resolvida.
 * Atualize conforme os custom types do seu projeto.
 */
const routes: prismic.ClientConfig["routes"] = [
  { type: "homepage", path: "/" },
  { type: "page", path: "/:uid" },
];

/**
 * Client Prismic tipado com AllDocumentTypes.
 * Isso garante autocomplete e type-safety em todas as queries.
 */
export function createClient(
  config?: prismicNext.CreateClientConfig,
): prismic.Client<AllDocumentTypes> {
  const client = prismic.createClient<AllDocumentTypes>(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client, config });

  return client;
}
