import dispatcher from "./dispatcher";

export function newTest(test) {
  dispatcher.dispatch({
    type: "NEW_TEST",
    test
  })
}
