/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BookFragment_book = {
    readonly title: string;
    readonly author: string;
    readonly " $refType": "BookFragment_book";
};
export type BookFragment_book$data = BookFragment_book;
export type BookFragment_book$key = {
    readonly " $data"?: BookFragment_book$data;
    readonly " $fragmentRefs": FragmentRefs<"BookFragment_book">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookFragment_book",
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
      "name": "author",
      "storageKey": null
    }
  ],
  "type": "Book",
  "abstractKey": null
};
(node as any).hash = '6944f9abe038dabd5c33731d0328d150';
export default node;
