import { __read } from "tslib";
import { useState, useCallback } from 'react';
function useUpdate() {
  var _a = __read(useState({}), 2),
    setState = _a[1];
  return useCallback(function () {
    return setState({});
  }, []);
}
export default useUpdate;