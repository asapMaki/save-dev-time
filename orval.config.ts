module.exports = {
  api: {
    input: './src/api/RickAndMorty.yml',
    output: {
      // target: './api/generated.ts',
      // schemas: './api/model',
      target: './src/api',
      mode: 'tags-split',
      mock: true,
      prettier: true,

      override: {
        header: (): String[] => [`Generated by orval`, `Do not edit manually.`],
        mutator: {
          path: './src/helpers/axiosService.ts',
          name: 'customAxiosInstance',
        },
      },
    },
  },
};
