import { App, AppContext as AC } from "deco/mod.ts";
import website, { Props } from "apps/website/mod.ts";
import { createHttpClient } from "apps/utils/http.ts";
import manifest, { Manifest } from "../manifest.gen.ts";
import { API } from "site/apps/api.ts";

type WebsiteApp = ReturnType<typeof website>;

/**
 * @title Site
 * @description Start your site from a template or from scratch.
 * @category Tool
 * @logo https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1/0ac02239-61e6-4289-8a36-e78c0975bcc8
 */
export default function Site(
  state: Props,
) {
  const api = createHttpClient<API>({
    base: "https://www.uniasselvi.com.br",
  });

  return {
    state: {
      ...state, 
      api,
    },
    manifest,
    dependencies: [
      website(state),
    ],
  };
}

export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";
