import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from '@codesandbox/sandpack-react';
import { githubLight } from '@codesandbox/sandpack-themes';
import tailwindCss from './sandpack/tailwind.generated.css?raw';

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
  js = defaultJs,
  height = 380,
}: TailwindPlaygroundProps) {
  return (
    <SandpackProvider
      template="static"
      theme={githubLight}
      files={{
        '/index.html': {
          code: html,
          active: true,
        },
        '/styles.css': {
          code: `@import './tailwind.css';\n\n${css}`,
        },
        '/script.js': {
          code: js,
        },
        '/tailwind.css': {
          code: tailwindCss,
          hidden: true,
        },
      }}
      options={{
        activeFile: '/index.html',
        visibleFiles: ['/index.html', '/styles.css', '/script.js'],
      }}
    >
      <SandpackLayout>
        <SandpackCodeEditor style={{ height }} showTabs showLineNumbers wrapContent />
        <SandpackPreview style={{ height }} showOpenInCodeSandbox={false} />
      </SandpackLayout>
    </SandpackProvider>
  );
}
