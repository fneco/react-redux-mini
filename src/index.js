import Provider from "./components/Provider"
import { ReactReduxContext } from "./components/Context"

import { useDispatch, createDispatchHook } from "./hooks/useDispatch"
import { useSelector, createSelectorHook } from "./hooks/useSelector"
import { useStore, createStoreHook } from "./hooks/useStore"

import { setBatch } from "./utils/batch"
import { unstable_batchedUpdates as batch } from "./utils/reactBatchedUpdates"
import shallowEqual from "./utils/shallowEqual"

import { createStore } from "./store/createStore"

setBatch(batch)

export {
  Provider,
  ReactReduxContext,
  batch,
  useDispatch,
  createDispatchHook,
  useSelector,
  createSelectorHook,
  useStore,
  createStoreHook,
  shallowEqual,
  createStore,
}
