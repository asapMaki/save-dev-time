/**
 * Generated by orval
 * Do not edit manually.
 */
import {rest} from 'msw';
import {faker} from '@faker-js/faker';

export const getCharacterGetMock = () => ({
  info: faker.random.arrayElement([
    {
      count: faker.random.arrayElement([faker.datatype.number(), undefined]),
      pages: faker.random.arrayElement([faker.datatype.number(), undefined]),
    },
    undefined,
  ]),
  results: faker.random.arrayElement([
    [...Array(faker.datatype.number({min: 1, max: 10}))].map(() => ({
      id: faker.random.arrayElement([faker.datatype.number(), undefined]),
      name: faker.random.arrayElement([faker.random.word(), undefined]),
      status: faker.random.arrayElement([faker.random.word(), undefined]),
      species: faker.random.arrayElement([faker.random.word(), undefined]),
      image: faker.random.arrayElement([faker.random.word(), undefined]),
    })),
    undefined,
  ]),
});

export const getCharacterMSW = () => [
  rest.get('*/character', (_req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getCharacterGetMock()),
    );
  }),
];