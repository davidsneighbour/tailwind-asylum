import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import type { Stats } from 'node:fs';
import { basename, dirname, extname, isAbsolute, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

const projectRoot = dirname(fileURLToPath(import.meta.url));
const rootUppercaseFilePattern = /^[A-Z][A-Z0-9_-]*$/;

const toProjectRelativePath = (filePath: string) => {
  const relativePath = isAbsolute(filePath) ? relative(projectRoot, filePath) : filePath;

  return relativePath.replace(/^\.\//, '').split(sep).join('/');
};

const isRootUppercaseFile = (filePath: string, stats?: Stats) => {
  if (!stats?.isFile()) {
    return false;
  }

  const relativePath = toProjectRelativePath(filePath);

  if (relativePath.includes('/')) {
    return false;
  }

  const fileName = basename(relativePath);
  const stem = fileName.slice(0, fileName.length - extname(fileName).length);

  return rootUppercaseFilePattern.test(stem || fileName);
};

const isIgnoredDevServerPath = (filePath: string, stats?: Stats) => {
  const relativePath = toProjectRelativePath(filePath);

  return relativePath === 'scratch' || relativePath.startsWith('scratch/') || isRootUppercaseFile(filePath, stats);
};

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), react(), sitemap(), icon()],
  server: {
    host: true,
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: isIgnoredDevServerPath,
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },
});
