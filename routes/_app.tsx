import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />

        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face {
                  font-family: 'Neo Sans Std';
                  font-style: normal;
                  font-weight: 300;
                  font-display: swap;
                  src: url(${asset("/neosansstd-light.woff")}) format('woff');
                }
                @font-face {
                  font-family: 'Neo Sans Std';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url(${asset("/neosansstd-regular.woff")}) format('woff');
                }
                @font-face {
                  font-family: 'Neo Sans Std';
                  font-style: normal;
                  font-weight: 700;
                  font-display: swap;
                  src: url(${asset("/neosansstd-bold.woff")}) format('woff');
                }
                :root {
                  --font-family: 'Neo Sans Std';
                }  
                `,
          }}
        />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
