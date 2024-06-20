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

        <link media="all" type="text/css" rel="stylesheet" href="https://portal.uniasselvi.com.br/public/fonts/fonts-neosans.css?v=20190705" />

        <style
          dangerouslySetInnerHTML={{
            __html: 
                `@font-face {
                  font-family: 'Neo Sans Std';
                  font-style: normal;
                  font-display: swap;
                  src: url(${asset("/neosansstd-regular.woff")}) format('woff');
                }
                :root {
                  --font-family: 'Neo Sans Std';
                }  
                `
          }}
        />

      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
