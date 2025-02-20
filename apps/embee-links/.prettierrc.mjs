/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      excludeFiles: ['.husky', '*.md'],
      options: {
        parser: 'astro',
      },
    },
  ],
};