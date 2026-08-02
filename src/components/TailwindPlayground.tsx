import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";
import tailwindCss from "./sandpack/tailwind.generated.css?raw";

type TailwindPlaygroundProps = {
  html: string;
  css?: string | undefined;
  js?: string | undefined;
  height?: number | undefined;
};

const defaultCss = `/* Add custom CSS here */`;
const defaultJs = `// Add optional JavaScript here`;

export default function TailwindPlayground({
  html,
  css = defaultCss,
  js,
  height = 380,
}: TailwindPlaygroundProps) {
  const files = {
    "/index.html": {
      code: html,
      active: true,
    },
    "/styles.css": {
      code: `@import './tailwind.css';\n\n${css}`,
    },
    "/tailwind.css": {
      code: tailwindCss,
      hidden: true,
    },
    ...(js === undefined
      ? {}
      : {
          "/script.js": {
            code: js || defaultJs,
          },
        }),
  };
  const visibleFiles =
    js === undefined
      ? ["/index.html", "/styles.css"]
      : ["/index.html", "/styles.css", "/script.js"];

  return (
    <SandpackProvider
      template="static"
      theme={githubLight}
      files={files}
      options={{
        activeFile: "/index.html",
        visibleFiles,
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor
          style={{ height }}
          showTabs
          showLineNumbers
          wrapContent
        />
        <SandpackPreview style={{ height }} showOpenInCodeSandbox={false} />
      </SandpackLayout>
    </SandpackProvider>
  );
}
