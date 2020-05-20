/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MovieFragment_film = {
    readonly title: string | null;
    readonly releaseDate: string | null;
    readonly " $refType": "MovieFragment_film";
};
export type MovieFragment_film$data = MovieFragment_film;
export type MovieFragment_film$key = {
    readonly " $data"?: MovieFragment_film$data;
    readonly " $fragmentRefs": FragmentRefs<"MovieFragment_film">;
};



const node: ReaderFragment = {
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
(node as any).hash = 'a7d55299dad40c357b4d848088fbe9f9';
export default node;
