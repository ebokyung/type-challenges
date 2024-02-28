// 1.
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K
}

/* 2. ts 내장 타입인 PropertyKey 그대로 이용
* type PropertyKey = string | number | symbol
*/
// type TupleToObject<T extends readonly PropertyKey[]> = {
//   [K in T[number]]: K
// }
