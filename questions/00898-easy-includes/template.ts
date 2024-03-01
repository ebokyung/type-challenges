// import type { Equal } from '@type-challenges/utils' 참고
type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly unknown[], U> =
  T extends [infer First, ...infer Rest]
    ? IsEqual<First, U> extends true ? true : Includes<Rest, U>
    : false
