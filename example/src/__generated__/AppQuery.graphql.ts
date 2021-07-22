/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly randomNumber: number;
        readonly " $fragmentRefs": FragmentRefs<"UserFragment_viewer">;
    };
    readonly books: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"BookFragment_book">;
    }>;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  viewer {
    id
    firstName
    lastName
    randomNumber
    ...UserFragment_viewer
  }
  books {
    ...BookFragment_book
  }
}

fragment BookFragment_book on Book {
  title
  author
}

fragment UserFragment_viewer on User {
  randomNumber
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "randomNumber",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserFragment_viewer"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "books",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BookFragment_book"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Book",
        "kind": "LinkedField",
        "name": "books",
        "plural": true,
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "70eedc196f5a33bd27db50f53f076f08",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  viewer {\n    id\n    firstName\n    lastName\n    randomNumber\n    ...UserFragment_viewer\n  }\n  books {\n    ...BookFragment_book\n  }\n}\n\nfragment BookFragment_book on Book {\n  title\n  author\n}\n\nfragment UserFragment_viewer on User {\n  randomNumber\n}\n"
  }
};
})();
(node as any).hash = '4336e1856947561a21dac165af5bfd9d';
export default node;
