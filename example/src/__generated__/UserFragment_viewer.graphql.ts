/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserFragment_viewer = {
    readonly randomNumber: number;
    readonly " $refType": "UserFragment_viewer";
};
export type UserFragment_viewer$data = UserFragment_viewer;
export type UserFragment_viewer$key = {
    readonly " $data"?: UserFragment_viewer$data;
    readonly " $fragmentRefs": FragmentRefs<"UserFragment_viewer">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserFragment_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "randomNumber",
      "storageKey": null
    }
  ],
  "type": "User"
};
(node as any).hash = '5c0cffdda7f475f1cc69917ac044888a';
export default node;
