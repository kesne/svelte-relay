/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly allFilms: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"MovieFragment_film">;
            } | null;
        } | null> | null;
    } | null;
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  allFilms {
    edges {
      node {
        id
        ...MovieFragment_film
      }
    }
  }
}

fragment MovieFragment_film on Film {
  title
  releaseDate
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
        "concreteType": "FilmsConnection",
        "kind": "LinkedField",
        "name": "allFilms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FilmsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Film",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "MovieFragment_film"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root"
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
        "concreteType": "FilmsConnection",
        "kind": "LinkedField",
        "name": "allFilms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FilmsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Film",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
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
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  allFilms {\n    edges {\n      node {\n        id\n        ...MovieFragment_film\n      }\n    }\n  }\n}\n\nfragment MovieFragment_film on Film {\n  title\n  releaseDate\n}\n"
  }
};
})();
(node as any).hash = '6910d593355ce75e41f1058681d8decb';
export default node;
