declare namespace Belt {
  type UseMutableArrays = 1
}

type Extend<
  A extends object,
  B extends object,
  C extends object = object,
  // extenders
  AB extends object = Omit<A, keyof B> & B,
  ABC extends object = Omit<AB, keyof C> & C
> = ABC

type ClassName = React.ComponentProps<"div">["className"]
type CX = React.ComponentProps<"div">["className"]

type Uuid = string
type IsoDate = string
type IsoDateTime = string

type Option<T> = T | null | undefined
type Maybe = Option
type MaybeNull<T> = T | null

type Voided = (...args: any[]) => void
type Endo<V> = (v: V) => V

type ById<I> = Record<string, I> // requires noUncheckedIndexedAccess
type Translatable = Record<string, any>
type ByLanguage<I extends Translatable> = Record<string, I>

type Falsy = false | 0 | "" | null | undefined

type DeepPartial<T> = unknown extends T
  ? T
  : T extends object
  ? {
      [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>
    }
  : T

type OneKey<K extends string, V = any> = {
  [P in K]: Record<P, V> & Partial<Record<Exclude<K, P>, never>> extends infer O ? { [Q in keyof O]: O[Q] } : never
}[K]
