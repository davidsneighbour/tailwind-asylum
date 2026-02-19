/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    // Add your Vitest configuration options here
    environment: 'node', // Use 'node' environment for server-side testing
    include: ['src/**/*.{test,spec}.{js,ts,mjs,mts,jsx,tsx}'], // Specify where Vitest should look for test files
  },
});
