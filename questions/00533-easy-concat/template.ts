type Tuple = readonly unknown[] // const tuple = [1] as const -> readonly!!

type Concat<T extends Tuple, U extends Tuple> = [...T, ...U]
