/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type MutateMutationVariables = {};
export type MutateMutationResponse = {
    readonly doSomethingToUser: {
        readonly id: string;
        readonly randomNumber: number;
    };
};
export type MutateMutation = {
    readonly response: MutateMutationResponse;
    readonly variables: MutateMutationVariables;
};



/*
mutation MutateMutation {
  doSomethingToUser {
    id
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
    "name": "doSomethingToUser",
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
    "name": "MutateMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MutateMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "MutateMutation",
    "operationKind": "mutation",
    "text": "mutation MutateMutation {\n  doSomethingToUser {\n    id\n    randomNumber\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f81c29e7e8a0d5e545a66051678ff18d';
export default node;
