/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MovieFragment_film$ref: FragmentReference;
declare export opaque type MovieFragment_film$fragmentType: MovieFragment_film$ref;
export type MovieFragment_film = {|
  +title: ?string,
  +releaseDate: ?string,
  +$refType: MovieFragment_film$ref,
|};
export type MovieFragment_film$data = MovieFragment_film;
export type MovieFragment_film$key = {
  +$data?: MovieFragment_film$data,
  +$fragmentRefs: MovieFragment_film$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieFragment_film",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "releaseDate",
      "storageKey": null
    }
  ],
  "type": "Film"
};
// prettier-ignore
(node/*: any*/).hash = 'a7d55299dad40c357b4d848088fbe9f9';

module.exports = node;
