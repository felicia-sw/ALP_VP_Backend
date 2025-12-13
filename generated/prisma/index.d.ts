
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model HelpRequest
 * 
 */
export type HelpRequest = $Result.DefaultSelection<Prisma.$HelpRequestPayload>
/**
 * Model ExchangeInformation
 * 
 */
export type ExchangeInformation = $Result.DefaultSelection<Prisma.$ExchangeInformationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.helpRequest`: Exposes CRUD operations for the **HelpRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HelpRequests
    * const helpRequests = await prisma.helpRequest.findMany()
    * ```
    */
  get helpRequest(): Prisma.HelpRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exchangeInformation`: Exposes CRUD operations for the **ExchangeInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExchangeInformations
    * const exchangeInformations = await prisma.exchangeInformation.findMany()
    * ```
    */
  get exchangeInformation(): Prisma.ExchangeInformationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Category: 'Category',
    HelpRequest: 'HelpRequest',
    ExchangeInformation: 'ExchangeInformation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "helpRequest" | "exchangeInformation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      HelpRequest: {
        payload: Prisma.$HelpRequestPayload<ExtArgs>
        fields: Prisma.HelpRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HelpRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HelpRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload>
          }
          findFirst: {
            args: Prisma.HelpRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HelpRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload>
          }
          findMany: {
            args: Prisma.HelpRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload>[]
          }
          create: {
            args: Prisma.HelpRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload>
          }
          createMany: {
            args: Prisma.HelpRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HelpRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload>[]
          }
          delete: {
            args: Prisma.HelpRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload>
          }
          update: {
            args: Prisma.HelpRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload>
          }
          deleteMany: {
            args: Prisma.HelpRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HelpRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HelpRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload>[]
          }
          upsert: {
            args: Prisma.HelpRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpRequestPayload>
          }
          aggregate: {
            args: Prisma.HelpRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHelpRequest>
          }
          groupBy: {
            args: Prisma.HelpRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<HelpRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.HelpRequestCountArgs<ExtArgs>
            result: $Utils.Optional<HelpRequestCountAggregateOutputType> | number
          }
        }
      }
      ExchangeInformation: {
        payload: Prisma.$ExchangeInformationPayload<ExtArgs>
        fields: Prisma.ExchangeInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExchangeInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExchangeInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload>
          }
          findFirst: {
            args: Prisma.ExchangeInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExchangeInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload>
          }
          findMany: {
            args: Prisma.ExchangeInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload>[]
          }
          create: {
            args: Prisma.ExchangeInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload>
          }
          createMany: {
            args: Prisma.ExchangeInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExchangeInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload>[]
          }
          delete: {
            args: Prisma.ExchangeInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload>
          }
          update: {
            args: Prisma.ExchangeInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload>
          }
          deleteMany: {
            args: Prisma.ExchangeInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExchangeInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExchangeInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload>[]
          }
          upsert: {
            args: Prisma.ExchangeInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExchangeInformationPayload>
          }
          aggregate: {
            args: Prisma.ExchangeInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExchangeInformation>
          }
          groupBy: {
            args: Prisma.ExchangeInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExchangeInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExchangeInformationCountArgs<ExtArgs>
            result: $Utils.Optional<ExchangeInformationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    category?: CategoryOmit
    helpRequest?: HelpRequestOmit
    exchangeInformation?: ExchangeInformationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    helpRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    helpRequests?: boolean | UserCountOutputTypeCountHelpRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHelpRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HelpRequestWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    helpRequests: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    helpRequests?: boolean | CategoryCountOutputTypeCountHelpRequestsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountHelpRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HelpRequestWhereInput
  }


  /**
   * Count Type HelpRequestCountOutputType
   */

  export type HelpRequestCountOutputType = {
    exchangeInfos: number
  }

  export type HelpRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exchangeInfos?: boolean | HelpRequestCountOutputTypeCountExchangeInfosArgs
  }

  // Custom InputTypes
  /**
   * HelpRequestCountOutputType without action
   */
  export type HelpRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequestCountOutputType
     */
    select?: HelpRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HelpRequestCountOutputType without action
   */
  export type HelpRequestCountOutputTypeCountExchangeInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeInformationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    helpRequests?: boolean | User$helpRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    helpRequests?: boolean | User$helpRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      helpRequests: Prisma.$HelpRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    helpRequests<T extends User$helpRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$helpRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.helpRequests
   */
  export type User$helpRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    where?: HelpRequestWhereInput
    orderBy?: HelpRequestOrderByWithRelationInput | HelpRequestOrderByWithRelationInput[]
    cursor?: HelpRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HelpRequestScalarFieldEnum | HelpRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    categoriesName: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    categoriesName: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    categoriesName: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    categoriesName?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    categoriesName?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    categoriesName?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    categoriesName: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoriesName?: boolean
    helpRequests?: boolean | Category$helpRequestsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoriesName?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoriesName?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    categoriesName?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoriesName", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    helpRequests?: boolean | Category$helpRequestsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      helpRequests: Prisma.$HelpRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoriesName: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    helpRequests<T extends Category$helpRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Category$helpRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly categoriesName: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.helpRequests
   */
  export type Category$helpRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    where?: HelpRequestWhereInput
    orderBy?: HelpRequestOrderByWithRelationInput | HelpRequestOrderByWithRelationInput[]
    cursor?: HelpRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HelpRequestScalarFieldEnum | HelpRequestScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model HelpRequest
   */

  export type AggregateHelpRequest = {
    _count: HelpRequestCountAggregateOutputType | null
    _avg: HelpRequestAvgAggregateOutputType | null
    _sum: HelpRequestSumAggregateOutputType | null
    _min: HelpRequestMinAggregateOutputType | null
    _max: HelpRequestMaxAggregateOutputType | null
  }

  export type HelpRequestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type HelpRequestSumAggregateOutputType = {
    id: number | null
    userId: number | null
    categoryId: number | null
  }

  export type HelpRequestMinAggregateOutputType = {
    id: number | null
    nameOfProduct: string | null
    description: string | null
    exchangeProductName: string | null
    location: string | null
    imageUrl: string | null
    isCheckout: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    categoryId: number | null
  }

  export type HelpRequestMaxAggregateOutputType = {
    id: number | null
    nameOfProduct: string | null
    description: string | null
    exchangeProductName: string | null
    location: string | null
    imageUrl: string | null
    isCheckout: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    categoryId: number | null
  }

  export type HelpRequestCountAggregateOutputType = {
    id: number
    nameOfProduct: number
    description: number
    exchangeProductName: number
    location: number
    imageUrl: number
    isCheckout: number
    createdAt: number
    updatedAt: number
    userId: number
    categoryId: number
    _all: number
  }


  export type HelpRequestAvgAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type HelpRequestSumAggregateInputType = {
    id?: true
    userId?: true
    categoryId?: true
  }

  export type HelpRequestMinAggregateInputType = {
    id?: true
    nameOfProduct?: true
    description?: true
    exchangeProductName?: true
    location?: true
    imageUrl?: true
    isCheckout?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type HelpRequestMaxAggregateInputType = {
    id?: true
    nameOfProduct?: true
    description?: true
    exchangeProductName?: true
    location?: true
    imageUrl?: true
    isCheckout?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
  }

  export type HelpRequestCountAggregateInputType = {
    id?: true
    nameOfProduct?: true
    description?: true
    exchangeProductName?: true
    location?: true
    imageUrl?: true
    isCheckout?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type HelpRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HelpRequest to aggregate.
     */
    where?: HelpRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HelpRequests to fetch.
     */
    orderBy?: HelpRequestOrderByWithRelationInput | HelpRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HelpRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HelpRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HelpRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HelpRequests
    **/
    _count?: true | HelpRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HelpRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HelpRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HelpRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HelpRequestMaxAggregateInputType
  }

  export type GetHelpRequestAggregateType<T extends HelpRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateHelpRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHelpRequest[P]>
      : GetScalarType<T[P], AggregateHelpRequest[P]>
  }




  export type HelpRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HelpRequestWhereInput
    orderBy?: HelpRequestOrderByWithAggregationInput | HelpRequestOrderByWithAggregationInput[]
    by: HelpRequestScalarFieldEnum[] | HelpRequestScalarFieldEnum
    having?: HelpRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HelpRequestCountAggregateInputType | true
    _avg?: HelpRequestAvgAggregateInputType
    _sum?: HelpRequestSumAggregateInputType
    _min?: HelpRequestMinAggregateInputType
    _max?: HelpRequestMaxAggregateInputType
  }

  export type HelpRequestGroupByOutputType = {
    id: number
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl: string
    isCheckout: boolean
    createdAt: Date
    updatedAt: Date
    userId: number
    categoryId: number
    _count: HelpRequestCountAggregateOutputType | null
    _avg: HelpRequestAvgAggregateOutputType | null
    _sum: HelpRequestSumAggregateOutputType | null
    _min: HelpRequestMinAggregateOutputType | null
    _max: HelpRequestMaxAggregateOutputType | null
  }

  type GetHelpRequestGroupByPayload<T extends HelpRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HelpRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HelpRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HelpRequestGroupByOutputType[P]>
            : GetScalarType<T[P], HelpRequestGroupByOutputType[P]>
        }
      >
    >


  export type HelpRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameOfProduct?: boolean
    description?: boolean
    exchangeProductName?: boolean
    location?: boolean
    imageUrl?: boolean
    isCheckout?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    exchangeInfos?: boolean | HelpRequest$exchangeInfosArgs<ExtArgs>
    _count?: boolean | HelpRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["helpRequest"]>

  export type HelpRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameOfProduct?: boolean
    description?: boolean
    exchangeProductName?: boolean
    location?: boolean
    imageUrl?: boolean
    isCheckout?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["helpRequest"]>

  export type HelpRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameOfProduct?: boolean
    description?: boolean
    exchangeProductName?: boolean
    location?: boolean
    imageUrl?: boolean
    isCheckout?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["helpRequest"]>

  export type HelpRequestSelectScalar = {
    id?: boolean
    nameOfProduct?: boolean
    description?: boolean
    exchangeProductName?: boolean
    location?: boolean
    imageUrl?: boolean
    isCheckout?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type HelpRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nameOfProduct" | "description" | "exchangeProductName" | "location" | "imageUrl" | "isCheckout" | "createdAt" | "updatedAt" | "userId" | "categoryId", ExtArgs["result"]["helpRequest"]>
  export type HelpRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    exchangeInfos?: boolean | HelpRequest$exchangeInfosArgs<ExtArgs>
    _count?: boolean | HelpRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HelpRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type HelpRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $HelpRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HelpRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      exchangeInfos: Prisma.$ExchangeInformationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nameOfProduct: string
      description: string
      exchangeProductName: string
      location: string
      imageUrl: string
      isCheckout: boolean
      createdAt: Date
      updatedAt: Date
      userId: number
      categoryId: number
    }, ExtArgs["result"]["helpRequest"]>
    composites: {}
  }

  type HelpRequestGetPayload<S extends boolean | null | undefined | HelpRequestDefaultArgs> = $Result.GetResult<Prisma.$HelpRequestPayload, S>

  type HelpRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HelpRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HelpRequestCountAggregateInputType | true
    }

  export interface HelpRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HelpRequest'], meta: { name: 'HelpRequest' } }
    /**
     * Find zero or one HelpRequest that matches the filter.
     * @param {HelpRequestFindUniqueArgs} args - Arguments to find a HelpRequest
     * @example
     * // Get one HelpRequest
     * const helpRequest = await prisma.helpRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HelpRequestFindUniqueArgs>(args: SelectSubset<T, HelpRequestFindUniqueArgs<ExtArgs>>): Prisma__HelpRequestClient<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HelpRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HelpRequestFindUniqueOrThrowArgs} args - Arguments to find a HelpRequest
     * @example
     * // Get one HelpRequest
     * const helpRequest = await prisma.helpRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HelpRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, HelpRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HelpRequestClient<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HelpRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpRequestFindFirstArgs} args - Arguments to find a HelpRequest
     * @example
     * // Get one HelpRequest
     * const helpRequest = await prisma.helpRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HelpRequestFindFirstArgs>(args?: SelectSubset<T, HelpRequestFindFirstArgs<ExtArgs>>): Prisma__HelpRequestClient<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HelpRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpRequestFindFirstOrThrowArgs} args - Arguments to find a HelpRequest
     * @example
     * // Get one HelpRequest
     * const helpRequest = await prisma.helpRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HelpRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, HelpRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__HelpRequestClient<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HelpRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HelpRequests
     * const helpRequests = await prisma.helpRequest.findMany()
     * 
     * // Get first 10 HelpRequests
     * const helpRequests = await prisma.helpRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const helpRequestWithIdOnly = await prisma.helpRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HelpRequestFindManyArgs>(args?: SelectSubset<T, HelpRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HelpRequest.
     * @param {HelpRequestCreateArgs} args - Arguments to create a HelpRequest.
     * @example
     * // Create one HelpRequest
     * const HelpRequest = await prisma.helpRequest.create({
     *   data: {
     *     // ... data to create a HelpRequest
     *   }
     * })
     * 
     */
    create<T extends HelpRequestCreateArgs>(args: SelectSubset<T, HelpRequestCreateArgs<ExtArgs>>): Prisma__HelpRequestClient<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HelpRequests.
     * @param {HelpRequestCreateManyArgs} args - Arguments to create many HelpRequests.
     * @example
     * // Create many HelpRequests
     * const helpRequest = await prisma.helpRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HelpRequestCreateManyArgs>(args?: SelectSubset<T, HelpRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HelpRequests and returns the data saved in the database.
     * @param {HelpRequestCreateManyAndReturnArgs} args - Arguments to create many HelpRequests.
     * @example
     * // Create many HelpRequests
     * const helpRequest = await prisma.helpRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HelpRequests and only return the `id`
     * const helpRequestWithIdOnly = await prisma.helpRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HelpRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, HelpRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HelpRequest.
     * @param {HelpRequestDeleteArgs} args - Arguments to delete one HelpRequest.
     * @example
     * // Delete one HelpRequest
     * const HelpRequest = await prisma.helpRequest.delete({
     *   where: {
     *     // ... filter to delete one HelpRequest
     *   }
     * })
     * 
     */
    delete<T extends HelpRequestDeleteArgs>(args: SelectSubset<T, HelpRequestDeleteArgs<ExtArgs>>): Prisma__HelpRequestClient<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HelpRequest.
     * @param {HelpRequestUpdateArgs} args - Arguments to update one HelpRequest.
     * @example
     * // Update one HelpRequest
     * const helpRequest = await prisma.helpRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HelpRequestUpdateArgs>(args: SelectSubset<T, HelpRequestUpdateArgs<ExtArgs>>): Prisma__HelpRequestClient<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HelpRequests.
     * @param {HelpRequestDeleteManyArgs} args - Arguments to filter HelpRequests to delete.
     * @example
     * // Delete a few HelpRequests
     * const { count } = await prisma.helpRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HelpRequestDeleteManyArgs>(args?: SelectSubset<T, HelpRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HelpRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HelpRequests
     * const helpRequest = await prisma.helpRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HelpRequestUpdateManyArgs>(args: SelectSubset<T, HelpRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HelpRequests and returns the data updated in the database.
     * @param {HelpRequestUpdateManyAndReturnArgs} args - Arguments to update many HelpRequests.
     * @example
     * // Update many HelpRequests
     * const helpRequest = await prisma.helpRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HelpRequests and only return the `id`
     * const helpRequestWithIdOnly = await prisma.helpRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HelpRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, HelpRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HelpRequest.
     * @param {HelpRequestUpsertArgs} args - Arguments to update or create a HelpRequest.
     * @example
     * // Update or create a HelpRequest
     * const helpRequest = await prisma.helpRequest.upsert({
     *   create: {
     *     // ... data to create a HelpRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HelpRequest we want to update
     *   }
     * })
     */
    upsert<T extends HelpRequestUpsertArgs>(args: SelectSubset<T, HelpRequestUpsertArgs<ExtArgs>>): Prisma__HelpRequestClient<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HelpRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpRequestCountArgs} args - Arguments to filter HelpRequests to count.
     * @example
     * // Count the number of HelpRequests
     * const count = await prisma.helpRequest.count({
     *   where: {
     *     // ... the filter for the HelpRequests we want to count
     *   }
     * })
    **/
    count<T extends HelpRequestCountArgs>(
      args?: Subset<T, HelpRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HelpRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HelpRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HelpRequestAggregateArgs>(args: Subset<T, HelpRequestAggregateArgs>): Prisma.PrismaPromise<GetHelpRequestAggregateType<T>>

    /**
     * Group by HelpRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HelpRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HelpRequestGroupByArgs['orderBy'] }
        : { orderBy?: HelpRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HelpRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHelpRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HelpRequest model
   */
  readonly fields: HelpRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HelpRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HelpRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exchangeInfos<T extends HelpRequest$exchangeInfosArgs<ExtArgs> = {}>(args?: Subset<T, HelpRequest$exchangeInfosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HelpRequest model
   */
  interface HelpRequestFieldRefs {
    readonly id: FieldRef<"HelpRequest", 'Int'>
    readonly nameOfProduct: FieldRef<"HelpRequest", 'String'>
    readonly description: FieldRef<"HelpRequest", 'String'>
    readonly exchangeProductName: FieldRef<"HelpRequest", 'String'>
    readonly location: FieldRef<"HelpRequest", 'String'>
    readonly imageUrl: FieldRef<"HelpRequest", 'String'>
    readonly isCheckout: FieldRef<"HelpRequest", 'Boolean'>
    readonly createdAt: FieldRef<"HelpRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"HelpRequest", 'DateTime'>
    readonly userId: FieldRef<"HelpRequest", 'Int'>
    readonly categoryId: FieldRef<"HelpRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HelpRequest findUnique
   */
  export type HelpRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    /**
     * Filter, which HelpRequest to fetch.
     */
    where: HelpRequestWhereUniqueInput
  }

  /**
   * HelpRequest findUniqueOrThrow
   */
  export type HelpRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    /**
     * Filter, which HelpRequest to fetch.
     */
    where: HelpRequestWhereUniqueInput
  }

  /**
   * HelpRequest findFirst
   */
  export type HelpRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    /**
     * Filter, which HelpRequest to fetch.
     */
    where?: HelpRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HelpRequests to fetch.
     */
    orderBy?: HelpRequestOrderByWithRelationInput | HelpRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HelpRequests.
     */
    cursor?: HelpRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HelpRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HelpRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HelpRequests.
     */
    distinct?: HelpRequestScalarFieldEnum | HelpRequestScalarFieldEnum[]
  }

  /**
   * HelpRequest findFirstOrThrow
   */
  export type HelpRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    /**
     * Filter, which HelpRequest to fetch.
     */
    where?: HelpRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HelpRequests to fetch.
     */
    orderBy?: HelpRequestOrderByWithRelationInput | HelpRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HelpRequests.
     */
    cursor?: HelpRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HelpRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HelpRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HelpRequests.
     */
    distinct?: HelpRequestScalarFieldEnum | HelpRequestScalarFieldEnum[]
  }

  /**
   * HelpRequest findMany
   */
  export type HelpRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    /**
     * Filter, which HelpRequests to fetch.
     */
    where?: HelpRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HelpRequests to fetch.
     */
    orderBy?: HelpRequestOrderByWithRelationInput | HelpRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HelpRequests.
     */
    cursor?: HelpRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HelpRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HelpRequests.
     */
    skip?: number
    distinct?: HelpRequestScalarFieldEnum | HelpRequestScalarFieldEnum[]
  }

  /**
   * HelpRequest create
   */
  export type HelpRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a HelpRequest.
     */
    data: XOR<HelpRequestCreateInput, HelpRequestUncheckedCreateInput>
  }

  /**
   * HelpRequest createMany
   */
  export type HelpRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HelpRequests.
     */
    data: HelpRequestCreateManyInput | HelpRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HelpRequest createManyAndReturn
   */
  export type HelpRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * The data used to create many HelpRequests.
     */
    data: HelpRequestCreateManyInput | HelpRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HelpRequest update
   */
  export type HelpRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a HelpRequest.
     */
    data: XOR<HelpRequestUpdateInput, HelpRequestUncheckedUpdateInput>
    /**
     * Choose, which HelpRequest to update.
     */
    where: HelpRequestWhereUniqueInput
  }

  /**
   * HelpRequest updateMany
   */
  export type HelpRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HelpRequests.
     */
    data: XOR<HelpRequestUpdateManyMutationInput, HelpRequestUncheckedUpdateManyInput>
    /**
     * Filter which HelpRequests to update
     */
    where?: HelpRequestWhereInput
    /**
     * Limit how many HelpRequests to update.
     */
    limit?: number
  }

  /**
   * HelpRequest updateManyAndReturn
   */
  export type HelpRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * The data used to update HelpRequests.
     */
    data: XOR<HelpRequestUpdateManyMutationInput, HelpRequestUncheckedUpdateManyInput>
    /**
     * Filter which HelpRequests to update
     */
    where?: HelpRequestWhereInput
    /**
     * Limit how many HelpRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HelpRequest upsert
   */
  export type HelpRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the HelpRequest to update in case it exists.
     */
    where: HelpRequestWhereUniqueInput
    /**
     * In case the HelpRequest found by the `where` argument doesn't exist, create a new HelpRequest with this data.
     */
    create: XOR<HelpRequestCreateInput, HelpRequestUncheckedCreateInput>
    /**
     * In case the HelpRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HelpRequestUpdateInput, HelpRequestUncheckedUpdateInput>
  }

  /**
   * HelpRequest delete
   */
  export type HelpRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
    /**
     * Filter which HelpRequest to delete.
     */
    where: HelpRequestWhereUniqueInput
  }

  /**
   * HelpRequest deleteMany
   */
  export type HelpRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HelpRequests to delete
     */
    where?: HelpRequestWhereInput
    /**
     * Limit how many HelpRequests to delete.
     */
    limit?: number
  }

  /**
   * HelpRequest.exchangeInfos
   */
  export type HelpRequest$exchangeInfosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
    where?: ExchangeInformationWhereInput
    orderBy?: ExchangeInformationOrderByWithRelationInput | ExchangeInformationOrderByWithRelationInput[]
    cursor?: ExchangeInformationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExchangeInformationScalarFieldEnum | ExchangeInformationScalarFieldEnum[]
  }

  /**
   * HelpRequest without action
   */
  export type HelpRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpRequest
     */
    select?: HelpRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpRequest
     */
    omit?: HelpRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpRequestInclude<ExtArgs> | null
  }


  /**
   * Model ExchangeInformation
   */

  export type AggregateExchangeInformation = {
    _count: ExchangeInformationCountAggregateOutputType | null
    _avg: ExchangeInformationAvgAggregateOutputType | null
    _sum: ExchangeInformationSumAggregateOutputType | null
    _min: ExchangeInformationMinAggregateOutputType | null
    _max: ExchangeInformationMaxAggregateOutputType | null
  }

  export type ExchangeInformationAvgAggregateOutputType = {
    id: number | null
    helpRequestId: number | null
  }

  export type ExchangeInformationSumAggregateOutputType = {
    id: number | null
    helpRequestId: number | null
  }

  export type ExchangeInformationMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    description: string | null
    helpRequestId: number | null
  }

  export type ExchangeInformationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    email: string | null
    description: string | null
    helpRequestId: number | null
  }

  export type ExchangeInformationCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    description: number
    helpRequestId: number
    _all: number
  }


  export type ExchangeInformationAvgAggregateInputType = {
    id?: true
    helpRequestId?: true
  }

  export type ExchangeInformationSumAggregateInputType = {
    id?: true
    helpRequestId?: true
  }

  export type ExchangeInformationMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    description?: true
    helpRequestId?: true
  }

  export type ExchangeInformationMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    description?: true
    helpRequestId?: true
  }

  export type ExchangeInformationCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    description?: true
    helpRequestId?: true
    _all?: true
  }

  export type ExchangeInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeInformation to aggregate.
     */
    where?: ExchangeInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeInformations to fetch.
     */
    orderBy?: ExchangeInformationOrderByWithRelationInput | ExchangeInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExchangeInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExchangeInformations
    **/
    _count?: true | ExchangeInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExchangeInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExchangeInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExchangeInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExchangeInformationMaxAggregateInputType
  }

  export type GetExchangeInformationAggregateType<T extends ExchangeInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateExchangeInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExchangeInformation[P]>
      : GetScalarType<T[P], AggregateExchangeInformation[P]>
  }




  export type ExchangeInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExchangeInformationWhereInput
    orderBy?: ExchangeInformationOrderByWithAggregationInput | ExchangeInformationOrderByWithAggregationInput[]
    by: ExchangeInformationScalarFieldEnum[] | ExchangeInformationScalarFieldEnum
    having?: ExchangeInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExchangeInformationCountAggregateInputType | true
    _avg?: ExchangeInformationAvgAggregateInputType
    _sum?: ExchangeInformationSumAggregateInputType
    _min?: ExchangeInformationMinAggregateInputType
    _max?: ExchangeInformationMaxAggregateInputType
  }

  export type ExchangeInformationGroupByOutputType = {
    id: number
    name: string
    phone: string
    email: string | null
    description: string | null
    helpRequestId: number
    _count: ExchangeInformationCountAggregateOutputType | null
    _avg: ExchangeInformationAvgAggregateOutputType | null
    _sum: ExchangeInformationSumAggregateOutputType | null
    _min: ExchangeInformationMinAggregateOutputType | null
    _max: ExchangeInformationMaxAggregateOutputType | null
  }

  type GetExchangeInformationGroupByPayload<T extends ExchangeInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExchangeInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExchangeInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExchangeInformationGroupByOutputType[P]>
            : GetScalarType<T[P], ExchangeInformationGroupByOutputType[P]>
        }
      >
    >


  export type ExchangeInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    description?: boolean
    helpRequestId?: boolean
    helpRequest?: boolean | HelpRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeInformation"]>

  export type ExchangeInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    description?: boolean
    helpRequestId?: boolean
    helpRequest?: boolean | HelpRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeInformation"]>

  export type ExchangeInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    description?: boolean
    helpRequestId?: boolean
    helpRequest?: boolean | HelpRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exchangeInformation"]>

  export type ExchangeInformationSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    description?: boolean
    helpRequestId?: boolean
  }

  export type ExchangeInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "email" | "description" | "helpRequestId", ExtArgs["result"]["exchangeInformation"]>
  export type ExchangeInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    helpRequest?: boolean | HelpRequestDefaultArgs<ExtArgs>
  }
  export type ExchangeInformationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    helpRequest?: boolean | HelpRequestDefaultArgs<ExtArgs>
  }
  export type ExchangeInformationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    helpRequest?: boolean | HelpRequestDefaultArgs<ExtArgs>
  }

  export type $ExchangeInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExchangeInformation"
    objects: {
      helpRequest: Prisma.$HelpRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      email: string | null
      description: string | null
      helpRequestId: number
    }, ExtArgs["result"]["exchangeInformation"]>
    composites: {}
  }

  type ExchangeInformationGetPayload<S extends boolean | null | undefined | ExchangeInformationDefaultArgs> = $Result.GetResult<Prisma.$ExchangeInformationPayload, S>

  type ExchangeInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExchangeInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExchangeInformationCountAggregateInputType | true
    }

  export interface ExchangeInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExchangeInformation'], meta: { name: 'ExchangeInformation' } }
    /**
     * Find zero or one ExchangeInformation that matches the filter.
     * @param {ExchangeInformationFindUniqueArgs} args - Arguments to find a ExchangeInformation
     * @example
     * // Get one ExchangeInformation
     * const exchangeInformation = await prisma.exchangeInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExchangeInformationFindUniqueArgs>(args: SelectSubset<T, ExchangeInformationFindUniqueArgs<ExtArgs>>): Prisma__ExchangeInformationClient<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExchangeInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExchangeInformationFindUniqueOrThrowArgs} args - Arguments to find a ExchangeInformation
     * @example
     * // Get one ExchangeInformation
     * const exchangeInformation = await prisma.exchangeInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExchangeInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, ExchangeInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExchangeInformationClient<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeInformationFindFirstArgs} args - Arguments to find a ExchangeInformation
     * @example
     * // Get one ExchangeInformation
     * const exchangeInformation = await prisma.exchangeInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExchangeInformationFindFirstArgs>(args?: SelectSubset<T, ExchangeInformationFindFirstArgs<ExtArgs>>): Prisma__ExchangeInformationClient<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExchangeInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeInformationFindFirstOrThrowArgs} args - Arguments to find a ExchangeInformation
     * @example
     * // Get one ExchangeInformation
     * const exchangeInformation = await prisma.exchangeInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExchangeInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, ExchangeInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExchangeInformationClient<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExchangeInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExchangeInformations
     * const exchangeInformations = await prisma.exchangeInformation.findMany()
     * 
     * // Get first 10 ExchangeInformations
     * const exchangeInformations = await prisma.exchangeInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exchangeInformationWithIdOnly = await prisma.exchangeInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExchangeInformationFindManyArgs>(args?: SelectSubset<T, ExchangeInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExchangeInformation.
     * @param {ExchangeInformationCreateArgs} args - Arguments to create a ExchangeInformation.
     * @example
     * // Create one ExchangeInformation
     * const ExchangeInformation = await prisma.exchangeInformation.create({
     *   data: {
     *     // ... data to create a ExchangeInformation
     *   }
     * })
     * 
     */
    create<T extends ExchangeInformationCreateArgs>(args: SelectSubset<T, ExchangeInformationCreateArgs<ExtArgs>>): Prisma__ExchangeInformationClient<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExchangeInformations.
     * @param {ExchangeInformationCreateManyArgs} args - Arguments to create many ExchangeInformations.
     * @example
     * // Create many ExchangeInformations
     * const exchangeInformation = await prisma.exchangeInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExchangeInformationCreateManyArgs>(args?: SelectSubset<T, ExchangeInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExchangeInformations and returns the data saved in the database.
     * @param {ExchangeInformationCreateManyAndReturnArgs} args - Arguments to create many ExchangeInformations.
     * @example
     * // Create many ExchangeInformations
     * const exchangeInformation = await prisma.exchangeInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExchangeInformations and only return the `id`
     * const exchangeInformationWithIdOnly = await prisma.exchangeInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExchangeInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, ExchangeInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExchangeInformation.
     * @param {ExchangeInformationDeleteArgs} args - Arguments to delete one ExchangeInformation.
     * @example
     * // Delete one ExchangeInformation
     * const ExchangeInformation = await prisma.exchangeInformation.delete({
     *   where: {
     *     // ... filter to delete one ExchangeInformation
     *   }
     * })
     * 
     */
    delete<T extends ExchangeInformationDeleteArgs>(args: SelectSubset<T, ExchangeInformationDeleteArgs<ExtArgs>>): Prisma__ExchangeInformationClient<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExchangeInformation.
     * @param {ExchangeInformationUpdateArgs} args - Arguments to update one ExchangeInformation.
     * @example
     * // Update one ExchangeInformation
     * const exchangeInformation = await prisma.exchangeInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExchangeInformationUpdateArgs>(args: SelectSubset<T, ExchangeInformationUpdateArgs<ExtArgs>>): Prisma__ExchangeInformationClient<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExchangeInformations.
     * @param {ExchangeInformationDeleteManyArgs} args - Arguments to filter ExchangeInformations to delete.
     * @example
     * // Delete a few ExchangeInformations
     * const { count } = await prisma.exchangeInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExchangeInformationDeleteManyArgs>(args?: SelectSubset<T, ExchangeInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExchangeInformations
     * const exchangeInformation = await prisma.exchangeInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExchangeInformationUpdateManyArgs>(args: SelectSubset<T, ExchangeInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExchangeInformations and returns the data updated in the database.
     * @param {ExchangeInformationUpdateManyAndReturnArgs} args - Arguments to update many ExchangeInformations.
     * @example
     * // Update many ExchangeInformations
     * const exchangeInformation = await prisma.exchangeInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExchangeInformations and only return the `id`
     * const exchangeInformationWithIdOnly = await prisma.exchangeInformation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExchangeInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, ExchangeInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExchangeInformation.
     * @param {ExchangeInformationUpsertArgs} args - Arguments to update or create a ExchangeInformation.
     * @example
     * // Update or create a ExchangeInformation
     * const exchangeInformation = await prisma.exchangeInformation.upsert({
     *   create: {
     *     // ... data to create a ExchangeInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExchangeInformation we want to update
     *   }
     * })
     */
    upsert<T extends ExchangeInformationUpsertArgs>(args: SelectSubset<T, ExchangeInformationUpsertArgs<ExtArgs>>): Prisma__ExchangeInformationClient<$Result.GetResult<Prisma.$ExchangeInformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExchangeInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeInformationCountArgs} args - Arguments to filter ExchangeInformations to count.
     * @example
     * // Count the number of ExchangeInformations
     * const count = await prisma.exchangeInformation.count({
     *   where: {
     *     // ... the filter for the ExchangeInformations we want to count
     *   }
     * })
    **/
    count<T extends ExchangeInformationCountArgs>(
      args?: Subset<T, ExchangeInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExchangeInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExchangeInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExchangeInformationAggregateArgs>(args: Subset<T, ExchangeInformationAggregateArgs>): Prisma.PrismaPromise<GetExchangeInformationAggregateType<T>>

    /**
     * Group by ExchangeInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExchangeInformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExchangeInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExchangeInformationGroupByArgs['orderBy'] }
        : { orderBy?: ExchangeInformationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExchangeInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExchangeInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExchangeInformation model
   */
  readonly fields: ExchangeInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExchangeInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExchangeInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    helpRequest<T extends HelpRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HelpRequestDefaultArgs<ExtArgs>>): Prisma__HelpRequestClient<$Result.GetResult<Prisma.$HelpRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExchangeInformation model
   */
  interface ExchangeInformationFieldRefs {
    readonly id: FieldRef<"ExchangeInformation", 'Int'>
    readonly name: FieldRef<"ExchangeInformation", 'String'>
    readonly phone: FieldRef<"ExchangeInformation", 'String'>
    readonly email: FieldRef<"ExchangeInformation", 'String'>
    readonly description: FieldRef<"ExchangeInformation", 'String'>
    readonly helpRequestId: FieldRef<"ExchangeInformation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExchangeInformation findUnique
   */
  export type ExchangeInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeInformation to fetch.
     */
    where: ExchangeInformationWhereUniqueInput
  }

  /**
   * ExchangeInformation findUniqueOrThrow
   */
  export type ExchangeInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeInformation to fetch.
     */
    where: ExchangeInformationWhereUniqueInput
  }

  /**
   * ExchangeInformation findFirst
   */
  export type ExchangeInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeInformation to fetch.
     */
    where?: ExchangeInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeInformations to fetch.
     */
    orderBy?: ExchangeInformationOrderByWithRelationInput | ExchangeInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeInformations.
     */
    cursor?: ExchangeInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeInformations.
     */
    distinct?: ExchangeInformationScalarFieldEnum | ExchangeInformationScalarFieldEnum[]
  }

  /**
   * ExchangeInformation findFirstOrThrow
   */
  export type ExchangeInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeInformation to fetch.
     */
    where?: ExchangeInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeInformations to fetch.
     */
    orderBy?: ExchangeInformationOrderByWithRelationInput | ExchangeInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExchangeInformations.
     */
    cursor?: ExchangeInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExchangeInformations.
     */
    distinct?: ExchangeInformationScalarFieldEnum | ExchangeInformationScalarFieldEnum[]
  }

  /**
   * ExchangeInformation findMany
   */
  export type ExchangeInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
    /**
     * Filter, which ExchangeInformations to fetch.
     */
    where?: ExchangeInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExchangeInformations to fetch.
     */
    orderBy?: ExchangeInformationOrderByWithRelationInput | ExchangeInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExchangeInformations.
     */
    cursor?: ExchangeInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExchangeInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExchangeInformations.
     */
    skip?: number
    distinct?: ExchangeInformationScalarFieldEnum | ExchangeInformationScalarFieldEnum[]
  }

  /**
   * ExchangeInformation create
   */
  export type ExchangeInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a ExchangeInformation.
     */
    data: XOR<ExchangeInformationCreateInput, ExchangeInformationUncheckedCreateInput>
  }

  /**
   * ExchangeInformation createMany
   */
  export type ExchangeInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExchangeInformations.
     */
    data: ExchangeInformationCreateManyInput | ExchangeInformationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExchangeInformation createManyAndReturn
   */
  export type ExchangeInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * The data used to create many ExchangeInformations.
     */
    data: ExchangeInformationCreateManyInput | ExchangeInformationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExchangeInformation update
   */
  export type ExchangeInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a ExchangeInformation.
     */
    data: XOR<ExchangeInformationUpdateInput, ExchangeInformationUncheckedUpdateInput>
    /**
     * Choose, which ExchangeInformation to update.
     */
    where: ExchangeInformationWhereUniqueInput
  }

  /**
   * ExchangeInformation updateMany
   */
  export type ExchangeInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExchangeInformations.
     */
    data: XOR<ExchangeInformationUpdateManyMutationInput, ExchangeInformationUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeInformations to update
     */
    where?: ExchangeInformationWhereInput
    /**
     * Limit how many ExchangeInformations to update.
     */
    limit?: number
  }

  /**
   * ExchangeInformation updateManyAndReturn
   */
  export type ExchangeInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * The data used to update ExchangeInformations.
     */
    data: XOR<ExchangeInformationUpdateManyMutationInput, ExchangeInformationUncheckedUpdateManyInput>
    /**
     * Filter which ExchangeInformations to update
     */
    where?: ExchangeInformationWhereInput
    /**
     * Limit how many ExchangeInformations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExchangeInformation upsert
   */
  export type ExchangeInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the ExchangeInformation to update in case it exists.
     */
    where: ExchangeInformationWhereUniqueInput
    /**
     * In case the ExchangeInformation found by the `where` argument doesn't exist, create a new ExchangeInformation with this data.
     */
    create: XOR<ExchangeInformationCreateInput, ExchangeInformationUncheckedCreateInput>
    /**
     * In case the ExchangeInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExchangeInformationUpdateInput, ExchangeInformationUncheckedUpdateInput>
  }

  /**
   * ExchangeInformation delete
   */
  export type ExchangeInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
    /**
     * Filter which ExchangeInformation to delete.
     */
    where: ExchangeInformationWhereUniqueInput
  }

  /**
   * ExchangeInformation deleteMany
   */
  export type ExchangeInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExchangeInformations to delete
     */
    where?: ExchangeInformationWhereInput
    /**
     * Limit how many ExchangeInformations to delete.
     */
    limit?: number
  }

  /**
   * ExchangeInformation without action
   */
  export type ExchangeInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExchangeInformation
     */
    select?: ExchangeInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExchangeInformation
     */
    omit?: ExchangeInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExchangeInformationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    categoriesName: 'categoriesName'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const HelpRequestScalarFieldEnum: {
    id: 'id',
    nameOfProduct: 'nameOfProduct',
    description: 'description',
    exchangeProductName: 'exchangeProductName',
    location: 'location',
    imageUrl: 'imageUrl',
    isCheckout: 'isCheckout',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type HelpRequestScalarFieldEnum = (typeof HelpRequestScalarFieldEnum)[keyof typeof HelpRequestScalarFieldEnum]


  export const ExchangeInformationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    description: 'description',
    helpRequestId: 'helpRequestId'
  };

  export type ExchangeInformationScalarFieldEnum = (typeof ExchangeInformationScalarFieldEnum)[keyof typeof ExchangeInformationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    helpRequests?: HelpRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    helpRequests?: HelpRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    helpRequests?: HelpRequestListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    categoriesName?: StringFilter<"Category"> | string
    helpRequests?: HelpRequestListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    categoriesName?: SortOrder
    helpRequests?: HelpRequestOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    categoriesName?: StringFilter<"Category"> | string
    helpRequests?: HelpRequestListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    categoriesName?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    categoriesName?: StringWithAggregatesFilter<"Category"> | string
  }

  export type HelpRequestWhereInput = {
    AND?: HelpRequestWhereInput | HelpRequestWhereInput[]
    OR?: HelpRequestWhereInput[]
    NOT?: HelpRequestWhereInput | HelpRequestWhereInput[]
    id?: IntFilter<"HelpRequest"> | number
    nameOfProduct?: StringFilter<"HelpRequest"> | string
    description?: StringFilter<"HelpRequest"> | string
    exchangeProductName?: StringFilter<"HelpRequest"> | string
    location?: StringFilter<"HelpRequest"> | string
    imageUrl?: StringFilter<"HelpRequest"> | string
    isCheckout?: BoolFilter<"HelpRequest"> | boolean
    createdAt?: DateTimeFilter<"HelpRequest"> | Date | string
    updatedAt?: DateTimeFilter<"HelpRequest"> | Date | string
    userId?: IntFilter<"HelpRequest"> | number
    categoryId?: IntFilter<"HelpRequest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    exchangeInfos?: ExchangeInformationListRelationFilter
  }

  export type HelpRequestOrderByWithRelationInput = {
    id?: SortOrder
    nameOfProduct?: SortOrder
    description?: SortOrder
    exchangeProductName?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    isCheckout?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    exchangeInfos?: ExchangeInformationOrderByRelationAggregateInput
  }

  export type HelpRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HelpRequestWhereInput | HelpRequestWhereInput[]
    OR?: HelpRequestWhereInput[]
    NOT?: HelpRequestWhereInput | HelpRequestWhereInput[]
    nameOfProduct?: StringFilter<"HelpRequest"> | string
    description?: StringFilter<"HelpRequest"> | string
    exchangeProductName?: StringFilter<"HelpRequest"> | string
    location?: StringFilter<"HelpRequest"> | string
    imageUrl?: StringFilter<"HelpRequest"> | string
    isCheckout?: BoolFilter<"HelpRequest"> | boolean
    createdAt?: DateTimeFilter<"HelpRequest"> | Date | string
    updatedAt?: DateTimeFilter<"HelpRequest"> | Date | string
    userId?: IntFilter<"HelpRequest"> | number
    categoryId?: IntFilter<"HelpRequest"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    exchangeInfos?: ExchangeInformationListRelationFilter
  }, "id">

  export type HelpRequestOrderByWithAggregationInput = {
    id?: SortOrder
    nameOfProduct?: SortOrder
    description?: SortOrder
    exchangeProductName?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    isCheckout?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    _count?: HelpRequestCountOrderByAggregateInput
    _avg?: HelpRequestAvgOrderByAggregateInput
    _max?: HelpRequestMaxOrderByAggregateInput
    _min?: HelpRequestMinOrderByAggregateInput
    _sum?: HelpRequestSumOrderByAggregateInput
  }

  export type HelpRequestScalarWhereWithAggregatesInput = {
    AND?: HelpRequestScalarWhereWithAggregatesInput | HelpRequestScalarWhereWithAggregatesInput[]
    OR?: HelpRequestScalarWhereWithAggregatesInput[]
    NOT?: HelpRequestScalarWhereWithAggregatesInput | HelpRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HelpRequest"> | number
    nameOfProduct?: StringWithAggregatesFilter<"HelpRequest"> | string
    description?: StringWithAggregatesFilter<"HelpRequest"> | string
    exchangeProductName?: StringWithAggregatesFilter<"HelpRequest"> | string
    location?: StringWithAggregatesFilter<"HelpRequest"> | string
    imageUrl?: StringWithAggregatesFilter<"HelpRequest"> | string
    isCheckout?: BoolWithAggregatesFilter<"HelpRequest"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HelpRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HelpRequest"> | Date | string
    userId?: IntWithAggregatesFilter<"HelpRequest"> | number
    categoryId?: IntWithAggregatesFilter<"HelpRequest"> | number
  }

  export type ExchangeInformationWhereInput = {
    AND?: ExchangeInformationWhereInput | ExchangeInformationWhereInput[]
    OR?: ExchangeInformationWhereInput[]
    NOT?: ExchangeInformationWhereInput | ExchangeInformationWhereInput[]
    id?: IntFilter<"ExchangeInformation"> | number
    name?: StringFilter<"ExchangeInformation"> | string
    phone?: StringFilter<"ExchangeInformation"> | string
    email?: StringNullableFilter<"ExchangeInformation"> | string | null
    description?: StringNullableFilter<"ExchangeInformation"> | string | null
    helpRequestId?: IntFilter<"ExchangeInformation"> | number
    helpRequest?: XOR<HelpRequestScalarRelationFilter, HelpRequestWhereInput>
  }

  export type ExchangeInformationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    helpRequestId?: SortOrder
    helpRequest?: HelpRequestOrderByWithRelationInput
  }

  export type ExchangeInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExchangeInformationWhereInput | ExchangeInformationWhereInput[]
    OR?: ExchangeInformationWhereInput[]
    NOT?: ExchangeInformationWhereInput | ExchangeInformationWhereInput[]
    name?: StringFilter<"ExchangeInformation"> | string
    phone?: StringFilter<"ExchangeInformation"> | string
    email?: StringNullableFilter<"ExchangeInformation"> | string | null
    description?: StringNullableFilter<"ExchangeInformation"> | string | null
    helpRequestId?: IntFilter<"ExchangeInformation"> | number
    helpRequest?: XOR<HelpRequestScalarRelationFilter, HelpRequestWhereInput>
  }, "id">

  export type ExchangeInformationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    helpRequestId?: SortOrder
    _count?: ExchangeInformationCountOrderByAggregateInput
    _avg?: ExchangeInformationAvgOrderByAggregateInput
    _max?: ExchangeInformationMaxOrderByAggregateInput
    _min?: ExchangeInformationMinOrderByAggregateInput
    _sum?: ExchangeInformationSumOrderByAggregateInput
  }

  export type ExchangeInformationScalarWhereWithAggregatesInput = {
    AND?: ExchangeInformationScalarWhereWithAggregatesInput | ExchangeInformationScalarWhereWithAggregatesInput[]
    OR?: ExchangeInformationScalarWhereWithAggregatesInput[]
    NOT?: ExchangeInformationScalarWhereWithAggregatesInput | ExchangeInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExchangeInformation"> | number
    name?: StringWithAggregatesFilter<"ExchangeInformation"> | string
    phone?: StringWithAggregatesFilter<"ExchangeInformation"> | string
    email?: StringNullableWithAggregatesFilter<"ExchangeInformation"> | string | null
    description?: StringNullableWithAggregatesFilter<"ExchangeInformation"> | string | null
    helpRequestId?: IntWithAggregatesFilter<"ExchangeInformation"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    helpRequests?: HelpRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    helpRequests?: HelpRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    helpRequests?: HelpRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    helpRequests?: HelpRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    categoriesName: string
    helpRequests?: HelpRequestCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    categoriesName: string
    helpRequests?: HelpRequestUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    categoriesName?: StringFieldUpdateOperationsInput | string
    helpRequests?: HelpRequestUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriesName?: StringFieldUpdateOperationsInput | string
    helpRequests?: HelpRequestUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    categoriesName: string
  }

  export type CategoryUpdateManyMutationInput = {
    categoriesName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriesName?: StringFieldUpdateOperationsInput | string
  }

  export type HelpRequestCreateInput = {
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHelpRequestsInput
    category: CategoryCreateNestedOneWithoutHelpRequestsInput
    exchangeInfos?: ExchangeInformationCreateNestedManyWithoutHelpRequestInput
  }

  export type HelpRequestUncheckedCreateInput = {
    id?: number
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoryId: number
    exchangeInfos?: ExchangeInformationUncheckedCreateNestedManyWithoutHelpRequestInput
  }

  export type HelpRequestUpdateInput = {
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHelpRequestsNestedInput
    category?: CategoryUpdateOneRequiredWithoutHelpRequestsNestedInput
    exchangeInfos?: ExchangeInformationUpdateManyWithoutHelpRequestNestedInput
  }

  export type HelpRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    exchangeInfos?: ExchangeInformationUncheckedUpdateManyWithoutHelpRequestNestedInput
  }

  export type HelpRequestCreateManyInput = {
    id?: number
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoryId: number
  }

  export type HelpRequestUpdateManyMutationInput = {
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HelpRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ExchangeInformationCreateInput = {
    name: string
    phone: string
    email?: string | null
    description?: string | null
    helpRequest: HelpRequestCreateNestedOneWithoutExchangeInfosInput
  }

  export type ExchangeInformationUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    description?: string | null
    helpRequestId: number
  }

  export type ExchangeInformationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    helpRequest?: HelpRequestUpdateOneRequiredWithoutExchangeInfosNestedInput
  }

  export type ExchangeInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    helpRequestId?: IntFieldUpdateOperationsInput | number
  }

  export type ExchangeInformationCreateManyInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    description?: string | null
    helpRequestId: number
  }

  export type ExchangeInformationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExchangeInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    helpRequestId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HelpRequestListRelationFilter = {
    every?: HelpRequestWhereInput
    some?: HelpRequestWhereInput
    none?: HelpRequestWhereInput
  }

  export type HelpRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    categoriesName?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    categoriesName?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    categoriesName?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ExchangeInformationListRelationFilter = {
    every?: ExchangeInformationWhereInput
    some?: ExchangeInformationWhereInput
    none?: ExchangeInformationWhereInput
  }

  export type ExchangeInformationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HelpRequestCountOrderByAggregateInput = {
    id?: SortOrder
    nameOfProduct?: SortOrder
    description?: SortOrder
    exchangeProductName?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    isCheckout?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type HelpRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type HelpRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    nameOfProduct?: SortOrder
    description?: SortOrder
    exchangeProductName?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    isCheckout?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type HelpRequestMinOrderByAggregateInput = {
    id?: SortOrder
    nameOfProduct?: SortOrder
    description?: SortOrder
    exchangeProductName?: SortOrder
    location?: SortOrder
    imageUrl?: SortOrder
    isCheckout?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type HelpRequestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type HelpRequestScalarRelationFilter = {
    is?: HelpRequestWhereInput
    isNot?: HelpRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExchangeInformationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    description?: SortOrder
    helpRequestId?: SortOrder
  }

  export type ExchangeInformationAvgOrderByAggregateInput = {
    id?: SortOrder
    helpRequestId?: SortOrder
  }

  export type ExchangeInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    description?: SortOrder
    helpRequestId?: SortOrder
  }

  export type ExchangeInformationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    description?: SortOrder
    helpRequestId?: SortOrder
  }

  export type ExchangeInformationSumOrderByAggregateInput = {
    id?: SortOrder
    helpRequestId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type HelpRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<HelpRequestCreateWithoutUserInput, HelpRequestUncheckedCreateWithoutUserInput> | HelpRequestCreateWithoutUserInput[] | HelpRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HelpRequestCreateOrConnectWithoutUserInput | HelpRequestCreateOrConnectWithoutUserInput[]
    createMany?: HelpRequestCreateManyUserInputEnvelope
    connect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
  }

  export type HelpRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HelpRequestCreateWithoutUserInput, HelpRequestUncheckedCreateWithoutUserInput> | HelpRequestCreateWithoutUserInput[] | HelpRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HelpRequestCreateOrConnectWithoutUserInput | HelpRequestCreateOrConnectWithoutUserInput[]
    createMany?: HelpRequestCreateManyUserInputEnvelope
    connect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HelpRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<HelpRequestCreateWithoutUserInput, HelpRequestUncheckedCreateWithoutUserInput> | HelpRequestCreateWithoutUserInput[] | HelpRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HelpRequestCreateOrConnectWithoutUserInput | HelpRequestCreateOrConnectWithoutUserInput[]
    upsert?: HelpRequestUpsertWithWhereUniqueWithoutUserInput | HelpRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HelpRequestCreateManyUserInputEnvelope
    set?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    disconnect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    delete?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    connect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    update?: HelpRequestUpdateWithWhereUniqueWithoutUserInput | HelpRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HelpRequestUpdateManyWithWhereWithoutUserInput | HelpRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HelpRequestScalarWhereInput | HelpRequestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HelpRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HelpRequestCreateWithoutUserInput, HelpRequestUncheckedCreateWithoutUserInput> | HelpRequestCreateWithoutUserInput[] | HelpRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HelpRequestCreateOrConnectWithoutUserInput | HelpRequestCreateOrConnectWithoutUserInput[]
    upsert?: HelpRequestUpsertWithWhereUniqueWithoutUserInput | HelpRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HelpRequestCreateManyUserInputEnvelope
    set?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    disconnect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    delete?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    connect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    update?: HelpRequestUpdateWithWhereUniqueWithoutUserInput | HelpRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HelpRequestUpdateManyWithWhereWithoutUserInput | HelpRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HelpRequestScalarWhereInput | HelpRequestScalarWhereInput[]
  }

  export type HelpRequestCreateNestedManyWithoutCategoryInput = {
    create?: XOR<HelpRequestCreateWithoutCategoryInput, HelpRequestUncheckedCreateWithoutCategoryInput> | HelpRequestCreateWithoutCategoryInput[] | HelpRequestUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HelpRequestCreateOrConnectWithoutCategoryInput | HelpRequestCreateOrConnectWithoutCategoryInput[]
    createMany?: HelpRequestCreateManyCategoryInputEnvelope
    connect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
  }

  export type HelpRequestUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<HelpRequestCreateWithoutCategoryInput, HelpRequestUncheckedCreateWithoutCategoryInput> | HelpRequestCreateWithoutCategoryInput[] | HelpRequestUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HelpRequestCreateOrConnectWithoutCategoryInput | HelpRequestCreateOrConnectWithoutCategoryInput[]
    createMany?: HelpRequestCreateManyCategoryInputEnvelope
    connect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
  }

  export type HelpRequestUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<HelpRequestCreateWithoutCategoryInput, HelpRequestUncheckedCreateWithoutCategoryInput> | HelpRequestCreateWithoutCategoryInput[] | HelpRequestUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HelpRequestCreateOrConnectWithoutCategoryInput | HelpRequestCreateOrConnectWithoutCategoryInput[]
    upsert?: HelpRequestUpsertWithWhereUniqueWithoutCategoryInput | HelpRequestUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: HelpRequestCreateManyCategoryInputEnvelope
    set?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    disconnect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    delete?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    connect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    update?: HelpRequestUpdateWithWhereUniqueWithoutCategoryInput | HelpRequestUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: HelpRequestUpdateManyWithWhereWithoutCategoryInput | HelpRequestUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: HelpRequestScalarWhereInput | HelpRequestScalarWhereInput[]
  }

  export type HelpRequestUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<HelpRequestCreateWithoutCategoryInput, HelpRequestUncheckedCreateWithoutCategoryInput> | HelpRequestCreateWithoutCategoryInput[] | HelpRequestUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: HelpRequestCreateOrConnectWithoutCategoryInput | HelpRequestCreateOrConnectWithoutCategoryInput[]
    upsert?: HelpRequestUpsertWithWhereUniqueWithoutCategoryInput | HelpRequestUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: HelpRequestCreateManyCategoryInputEnvelope
    set?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    disconnect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    delete?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    connect?: HelpRequestWhereUniqueInput | HelpRequestWhereUniqueInput[]
    update?: HelpRequestUpdateWithWhereUniqueWithoutCategoryInput | HelpRequestUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: HelpRequestUpdateManyWithWhereWithoutCategoryInput | HelpRequestUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: HelpRequestScalarWhereInput | HelpRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHelpRequestsInput = {
    create?: XOR<UserCreateWithoutHelpRequestsInput, UserUncheckedCreateWithoutHelpRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHelpRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutHelpRequestsInput = {
    create?: XOR<CategoryCreateWithoutHelpRequestsInput, CategoryUncheckedCreateWithoutHelpRequestsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutHelpRequestsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ExchangeInformationCreateNestedManyWithoutHelpRequestInput = {
    create?: XOR<ExchangeInformationCreateWithoutHelpRequestInput, ExchangeInformationUncheckedCreateWithoutHelpRequestInput> | ExchangeInformationCreateWithoutHelpRequestInput[] | ExchangeInformationUncheckedCreateWithoutHelpRequestInput[]
    connectOrCreate?: ExchangeInformationCreateOrConnectWithoutHelpRequestInput | ExchangeInformationCreateOrConnectWithoutHelpRequestInput[]
    createMany?: ExchangeInformationCreateManyHelpRequestInputEnvelope
    connect?: ExchangeInformationWhereUniqueInput | ExchangeInformationWhereUniqueInput[]
  }

  export type ExchangeInformationUncheckedCreateNestedManyWithoutHelpRequestInput = {
    create?: XOR<ExchangeInformationCreateWithoutHelpRequestInput, ExchangeInformationUncheckedCreateWithoutHelpRequestInput> | ExchangeInformationCreateWithoutHelpRequestInput[] | ExchangeInformationUncheckedCreateWithoutHelpRequestInput[]
    connectOrCreate?: ExchangeInformationCreateOrConnectWithoutHelpRequestInput | ExchangeInformationCreateOrConnectWithoutHelpRequestInput[]
    createMany?: ExchangeInformationCreateManyHelpRequestInputEnvelope
    connect?: ExchangeInformationWhereUniqueInput | ExchangeInformationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutHelpRequestsNestedInput = {
    create?: XOR<UserCreateWithoutHelpRequestsInput, UserUncheckedCreateWithoutHelpRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHelpRequestsInput
    upsert?: UserUpsertWithoutHelpRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHelpRequestsInput, UserUpdateWithoutHelpRequestsInput>, UserUncheckedUpdateWithoutHelpRequestsInput>
  }

  export type CategoryUpdateOneRequiredWithoutHelpRequestsNestedInput = {
    create?: XOR<CategoryCreateWithoutHelpRequestsInput, CategoryUncheckedCreateWithoutHelpRequestsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutHelpRequestsInput
    upsert?: CategoryUpsertWithoutHelpRequestsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutHelpRequestsInput, CategoryUpdateWithoutHelpRequestsInput>, CategoryUncheckedUpdateWithoutHelpRequestsInput>
  }

  export type ExchangeInformationUpdateManyWithoutHelpRequestNestedInput = {
    create?: XOR<ExchangeInformationCreateWithoutHelpRequestInput, ExchangeInformationUncheckedCreateWithoutHelpRequestInput> | ExchangeInformationCreateWithoutHelpRequestInput[] | ExchangeInformationUncheckedCreateWithoutHelpRequestInput[]
    connectOrCreate?: ExchangeInformationCreateOrConnectWithoutHelpRequestInput | ExchangeInformationCreateOrConnectWithoutHelpRequestInput[]
    upsert?: ExchangeInformationUpsertWithWhereUniqueWithoutHelpRequestInput | ExchangeInformationUpsertWithWhereUniqueWithoutHelpRequestInput[]
    createMany?: ExchangeInformationCreateManyHelpRequestInputEnvelope
    set?: ExchangeInformationWhereUniqueInput | ExchangeInformationWhereUniqueInput[]
    disconnect?: ExchangeInformationWhereUniqueInput | ExchangeInformationWhereUniqueInput[]
    delete?: ExchangeInformationWhereUniqueInput | ExchangeInformationWhereUniqueInput[]
    connect?: ExchangeInformationWhereUniqueInput | ExchangeInformationWhereUniqueInput[]
    update?: ExchangeInformationUpdateWithWhereUniqueWithoutHelpRequestInput | ExchangeInformationUpdateWithWhereUniqueWithoutHelpRequestInput[]
    updateMany?: ExchangeInformationUpdateManyWithWhereWithoutHelpRequestInput | ExchangeInformationUpdateManyWithWhereWithoutHelpRequestInput[]
    deleteMany?: ExchangeInformationScalarWhereInput | ExchangeInformationScalarWhereInput[]
  }

  export type ExchangeInformationUncheckedUpdateManyWithoutHelpRequestNestedInput = {
    create?: XOR<ExchangeInformationCreateWithoutHelpRequestInput, ExchangeInformationUncheckedCreateWithoutHelpRequestInput> | ExchangeInformationCreateWithoutHelpRequestInput[] | ExchangeInformationUncheckedCreateWithoutHelpRequestInput[]
    connectOrCreate?: ExchangeInformationCreateOrConnectWithoutHelpRequestInput | ExchangeInformationCreateOrConnectWithoutHelpRequestInput[]
    upsert?: ExchangeInformationUpsertWithWhereUniqueWithoutHelpRequestInput | ExchangeInformationUpsertWithWhereUniqueWithoutHelpRequestInput[]
    createMany?: ExchangeInformationCreateManyHelpRequestInputEnvelope
    set?: ExchangeInformationWhereUniqueInput | ExchangeInformationWhereUniqueInput[]
    disconnect?: ExchangeInformationWhereUniqueInput | ExchangeInformationWhereUniqueInput[]
    delete?: ExchangeInformationWhereUniqueInput | ExchangeInformationWhereUniqueInput[]
    connect?: ExchangeInformationWhereUniqueInput | ExchangeInformationWhereUniqueInput[]
    update?: ExchangeInformationUpdateWithWhereUniqueWithoutHelpRequestInput | ExchangeInformationUpdateWithWhereUniqueWithoutHelpRequestInput[]
    updateMany?: ExchangeInformationUpdateManyWithWhereWithoutHelpRequestInput | ExchangeInformationUpdateManyWithWhereWithoutHelpRequestInput[]
    deleteMany?: ExchangeInformationScalarWhereInput | ExchangeInformationScalarWhereInput[]
  }

  export type HelpRequestCreateNestedOneWithoutExchangeInfosInput = {
    create?: XOR<HelpRequestCreateWithoutExchangeInfosInput, HelpRequestUncheckedCreateWithoutExchangeInfosInput>
    connectOrCreate?: HelpRequestCreateOrConnectWithoutExchangeInfosInput
    connect?: HelpRequestWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type HelpRequestUpdateOneRequiredWithoutExchangeInfosNestedInput = {
    create?: XOR<HelpRequestCreateWithoutExchangeInfosInput, HelpRequestUncheckedCreateWithoutExchangeInfosInput>
    connectOrCreate?: HelpRequestCreateOrConnectWithoutExchangeInfosInput
    upsert?: HelpRequestUpsertWithoutExchangeInfosInput
    connect?: HelpRequestWhereUniqueInput
    update?: XOR<XOR<HelpRequestUpdateToOneWithWhereWithoutExchangeInfosInput, HelpRequestUpdateWithoutExchangeInfosInput>, HelpRequestUncheckedUpdateWithoutExchangeInfosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type HelpRequestCreateWithoutUserInput = {
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutHelpRequestsInput
    exchangeInfos?: ExchangeInformationCreateNestedManyWithoutHelpRequestInput
  }

  export type HelpRequestUncheckedCreateWithoutUserInput = {
    id?: number
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
    exchangeInfos?: ExchangeInformationUncheckedCreateNestedManyWithoutHelpRequestInput
  }

  export type HelpRequestCreateOrConnectWithoutUserInput = {
    where: HelpRequestWhereUniqueInput
    create: XOR<HelpRequestCreateWithoutUserInput, HelpRequestUncheckedCreateWithoutUserInput>
  }

  export type HelpRequestCreateManyUserInputEnvelope = {
    data: HelpRequestCreateManyUserInput | HelpRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HelpRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: HelpRequestWhereUniqueInput
    update: XOR<HelpRequestUpdateWithoutUserInput, HelpRequestUncheckedUpdateWithoutUserInput>
    create: XOR<HelpRequestCreateWithoutUserInput, HelpRequestUncheckedCreateWithoutUserInput>
  }

  export type HelpRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: HelpRequestWhereUniqueInput
    data: XOR<HelpRequestUpdateWithoutUserInput, HelpRequestUncheckedUpdateWithoutUserInput>
  }

  export type HelpRequestUpdateManyWithWhereWithoutUserInput = {
    where: HelpRequestScalarWhereInput
    data: XOR<HelpRequestUpdateManyMutationInput, HelpRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type HelpRequestScalarWhereInput = {
    AND?: HelpRequestScalarWhereInput | HelpRequestScalarWhereInput[]
    OR?: HelpRequestScalarWhereInput[]
    NOT?: HelpRequestScalarWhereInput | HelpRequestScalarWhereInput[]
    id?: IntFilter<"HelpRequest"> | number
    nameOfProduct?: StringFilter<"HelpRequest"> | string
    description?: StringFilter<"HelpRequest"> | string
    exchangeProductName?: StringFilter<"HelpRequest"> | string
    location?: StringFilter<"HelpRequest"> | string
    imageUrl?: StringFilter<"HelpRequest"> | string
    isCheckout?: BoolFilter<"HelpRequest"> | boolean
    createdAt?: DateTimeFilter<"HelpRequest"> | Date | string
    updatedAt?: DateTimeFilter<"HelpRequest"> | Date | string
    userId?: IntFilter<"HelpRequest"> | number
    categoryId?: IntFilter<"HelpRequest"> | number
  }

  export type HelpRequestCreateWithoutCategoryInput = {
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHelpRequestsInput
    exchangeInfos?: ExchangeInformationCreateNestedManyWithoutHelpRequestInput
  }

  export type HelpRequestUncheckedCreateWithoutCategoryInput = {
    id?: number
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    exchangeInfos?: ExchangeInformationUncheckedCreateNestedManyWithoutHelpRequestInput
  }

  export type HelpRequestCreateOrConnectWithoutCategoryInput = {
    where: HelpRequestWhereUniqueInput
    create: XOR<HelpRequestCreateWithoutCategoryInput, HelpRequestUncheckedCreateWithoutCategoryInput>
  }

  export type HelpRequestCreateManyCategoryInputEnvelope = {
    data: HelpRequestCreateManyCategoryInput | HelpRequestCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type HelpRequestUpsertWithWhereUniqueWithoutCategoryInput = {
    where: HelpRequestWhereUniqueInput
    update: XOR<HelpRequestUpdateWithoutCategoryInput, HelpRequestUncheckedUpdateWithoutCategoryInput>
    create: XOR<HelpRequestCreateWithoutCategoryInput, HelpRequestUncheckedCreateWithoutCategoryInput>
  }

  export type HelpRequestUpdateWithWhereUniqueWithoutCategoryInput = {
    where: HelpRequestWhereUniqueInput
    data: XOR<HelpRequestUpdateWithoutCategoryInput, HelpRequestUncheckedUpdateWithoutCategoryInput>
  }

  export type HelpRequestUpdateManyWithWhereWithoutCategoryInput = {
    where: HelpRequestScalarWhereInput
    data: XOR<HelpRequestUpdateManyMutationInput, HelpRequestUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutHelpRequestsInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutHelpRequestsInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutHelpRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHelpRequestsInput, UserUncheckedCreateWithoutHelpRequestsInput>
  }

  export type CategoryCreateWithoutHelpRequestsInput = {
    categoriesName: string
  }

  export type CategoryUncheckedCreateWithoutHelpRequestsInput = {
    id?: number
    categoriesName: string
  }

  export type CategoryCreateOrConnectWithoutHelpRequestsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutHelpRequestsInput, CategoryUncheckedCreateWithoutHelpRequestsInput>
  }

  export type ExchangeInformationCreateWithoutHelpRequestInput = {
    name: string
    phone: string
    email?: string | null
    description?: string | null
  }

  export type ExchangeInformationUncheckedCreateWithoutHelpRequestInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    description?: string | null
  }

  export type ExchangeInformationCreateOrConnectWithoutHelpRequestInput = {
    where: ExchangeInformationWhereUniqueInput
    create: XOR<ExchangeInformationCreateWithoutHelpRequestInput, ExchangeInformationUncheckedCreateWithoutHelpRequestInput>
  }

  export type ExchangeInformationCreateManyHelpRequestInputEnvelope = {
    data: ExchangeInformationCreateManyHelpRequestInput | ExchangeInformationCreateManyHelpRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHelpRequestsInput = {
    update: XOR<UserUpdateWithoutHelpRequestsInput, UserUncheckedUpdateWithoutHelpRequestsInput>
    create: XOR<UserCreateWithoutHelpRequestsInput, UserUncheckedCreateWithoutHelpRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHelpRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHelpRequestsInput, UserUncheckedUpdateWithoutHelpRequestsInput>
  }

  export type UserUpdateWithoutHelpRequestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutHelpRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutHelpRequestsInput = {
    update: XOR<CategoryUpdateWithoutHelpRequestsInput, CategoryUncheckedUpdateWithoutHelpRequestsInput>
    create: XOR<CategoryCreateWithoutHelpRequestsInput, CategoryUncheckedCreateWithoutHelpRequestsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutHelpRequestsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutHelpRequestsInput, CategoryUncheckedUpdateWithoutHelpRequestsInput>
  }

  export type CategoryUpdateWithoutHelpRequestsInput = {
    categoriesName?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutHelpRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoriesName?: StringFieldUpdateOperationsInput | string
  }

  export type ExchangeInformationUpsertWithWhereUniqueWithoutHelpRequestInput = {
    where: ExchangeInformationWhereUniqueInput
    update: XOR<ExchangeInformationUpdateWithoutHelpRequestInput, ExchangeInformationUncheckedUpdateWithoutHelpRequestInput>
    create: XOR<ExchangeInformationCreateWithoutHelpRequestInput, ExchangeInformationUncheckedCreateWithoutHelpRequestInput>
  }

  export type ExchangeInformationUpdateWithWhereUniqueWithoutHelpRequestInput = {
    where: ExchangeInformationWhereUniqueInput
    data: XOR<ExchangeInformationUpdateWithoutHelpRequestInput, ExchangeInformationUncheckedUpdateWithoutHelpRequestInput>
  }

  export type ExchangeInformationUpdateManyWithWhereWithoutHelpRequestInput = {
    where: ExchangeInformationScalarWhereInput
    data: XOR<ExchangeInformationUpdateManyMutationInput, ExchangeInformationUncheckedUpdateManyWithoutHelpRequestInput>
  }

  export type ExchangeInformationScalarWhereInput = {
    AND?: ExchangeInformationScalarWhereInput | ExchangeInformationScalarWhereInput[]
    OR?: ExchangeInformationScalarWhereInput[]
    NOT?: ExchangeInformationScalarWhereInput | ExchangeInformationScalarWhereInput[]
    id?: IntFilter<"ExchangeInformation"> | number
    name?: StringFilter<"ExchangeInformation"> | string
    phone?: StringFilter<"ExchangeInformation"> | string
    email?: StringNullableFilter<"ExchangeInformation"> | string | null
    description?: StringNullableFilter<"ExchangeInformation"> | string | null
    helpRequestId?: IntFilter<"ExchangeInformation"> | number
  }

  export type HelpRequestCreateWithoutExchangeInfosInput = {
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHelpRequestsInput
    category: CategoryCreateNestedOneWithoutHelpRequestsInput
  }

  export type HelpRequestUncheckedCreateWithoutExchangeInfosInput = {
    id?: number
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    categoryId: number
  }

  export type HelpRequestCreateOrConnectWithoutExchangeInfosInput = {
    where: HelpRequestWhereUniqueInput
    create: XOR<HelpRequestCreateWithoutExchangeInfosInput, HelpRequestUncheckedCreateWithoutExchangeInfosInput>
  }

  export type HelpRequestUpsertWithoutExchangeInfosInput = {
    update: XOR<HelpRequestUpdateWithoutExchangeInfosInput, HelpRequestUncheckedUpdateWithoutExchangeInfosInput>
    create: XOR<HelpRequestCreateWithoutExchangeInfosInput, HelpRequestUncheckedCreateWithoutExchangeInfosInput>
    where?: HelpRequestWhereInput
  }

  export type HelpRequestUpdateToOneWithWhereWithoutExchangeInfosInput = {
    where?: HelpRequestWhereInput
    data: XOR<HelpRequestUpdateWithoutExchangeInfosInput, HelpRequestUncheckedUpdateWithoutExchangeInfosInput>
  }

  export type HelpRequestUpdateWithoutExchangeInfosInput = {
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHelpRequestsNestedInput
    category?: CategoryUpdateOneRequiredWithoutHelpRequestsNestedInput
  }

  export type HelpRequestUncheckedUpdateWithoutExchangeInfosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type HelpRequestCreateManyUserInput = {
    id?: number
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type HelpRequestUpdateWithoutUserInput = {
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutHelpRequestsNestedInput
    exchangeInfos?: ExchangeInformationUpdateManyWithoutHelpRequestNestedInput
  }

  export type HelpRequestUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
    exchangeInfos?: ExchangeInformationUncheckedUpdateManyWithoutHelpRequestNestedInput
  }

  export type HelpRequestUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type HelpRequestCreateManyCategoryInput = {
    id?: number
    nameOfProduct: string
    description: string
    exchangeProductName: string
    location: string
    imageUrl?: string
    isCheckout?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type HelpRequestUpdateWithoutCategoryInput = {
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHelpRequestsNestedInput
    exchangeInfos?: ExchangeInformationUpdateManyWithoutHelpRequestNestedInput
  }

  export type HelpRequestUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    exchangeInfos?: ExchangeInformationUncheckedUpdateManyWithoutHelpRequestNestedInput
  }

  export type HelpRequestUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameOfProduct?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exchangeProductName?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isCheckout?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ExchangeInformationCreateManyHelpRequestInput = {
    id?: number
    name: string
    phone: string
    email?: string | null
    description?: string | null
  }

  export type ExchangeInformationUpdateWithoutHelpRequestInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExchangeInformationUncheckedUpdateWithoutHelpRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExchangeInformationUncheckedUpdateManyWithoutHelpRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}