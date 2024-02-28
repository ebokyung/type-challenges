type First<T extends any[]> = T extends [] ? never : T[0]

// answer2
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// answer3
// type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never

/**
 * infer 키워드
 *
 * A가 추론 가능한 타입이면 참, 아니면 거짓
 * Promise 객체 안에 있는 값의 타입을 편하게 꺼내려 할 경우 infer키워드를 사용하면 “런타임에서 결정되는 타입”을 손쉽게 정의할 수 있다.
 */
