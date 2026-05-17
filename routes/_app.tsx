import { define } from "@/utils.ts";
import { Partial } from "fresh/runtime";

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#221F1C" />
      </head>
        <body f-client-nav>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Partial name="body">
          <Component />
        </Partial>
      </body>
    </html>
  );
});
