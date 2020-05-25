/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ExperimentalQueryVariables = {};
export type ExperimentalQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly randomNumber: number;
    };
};
export type ExperimentalQuery = {
    readonly response: ExperimentalQueryResponse;
    readonly variables: ExperimentalQueryVariables;
};



/*
query ExperimentalQuery {
  viewer {
    id
    firstName
    lastName
    randomNumber
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "randomNumber",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ExperimentalQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ExperimentalQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ExperimentalQuery",
    "operationKind": "query",
    "text": "query ExperimentalQuery {\n  viewer {\n    id\n    firstName\n    lastName\n    randomNumber\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b4c1a3cc61b97220844a9b6b0993d0e7';
export default node;
