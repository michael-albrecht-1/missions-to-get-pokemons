// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { SOURCES } from 'config/sources';

enum mongoURL {
  mongoLocal = 'http://localhost:5500',
  mongoVercel = 'https://missions-to-get-pokemons-backend-wxop.vercel.app',
}

export const environment = {
  production: false,
  pokemonSource: SOURCES.restPokeApi,
  pokemonCaughtSource: SOURCES.mongo,
  pokemonTypesSource: SOURCES.mongo,
  missionSource: SOURCES.mongo,

  mongoURL: mongoURL.mongoVercel,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
