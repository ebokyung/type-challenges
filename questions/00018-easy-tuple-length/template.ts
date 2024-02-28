type Length<T extends readonly any[]> = T extends { length: infer R } ? R : never
// type Length<T extends readonly any[]> = T['length']

// X
// type Length<T extends { length: number }> = T['length']
