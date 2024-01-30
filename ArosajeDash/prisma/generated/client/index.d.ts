
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model RoleUtilisateur
 * 
 */
export type RoleUtilisateur = $Result.DefaultSelection<Prisma.$RoleUtilisateurPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Annonce
 * 
 */
export type Annonce = $Result.DefaultSelection<Prisma.$AnnoncePayload>
/**
 * Model Visite
 * 
 */
export type Visite = $Result.DefaultSelection<Prisma.$VisitePayload>
/**
 * Model VisiteAcceptee
 * 
 */
export type VisiteAcceptee = $Result.DefaultSelection<Prisma.$VisiteAccepteePayload>
/**
 * Model VisiteRefusee
 * 
 */
export type VisiteRefusee = $Result.DefaultSelection<Prisma.$VisiteRefuseePayload>
/**
 * Model Plante
 * 
 */
export type Plante = $Result.DefaultSelection<Prisma.$PlantePayload>
/**
 * Model Categorie
 * 
 */
export type Categorie = $Result.DefaultSelection<Prisma.$CategoriePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.roleUtilisateur`: Exposes CRUD operations for the **RoleUtilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleUtilisateurs
    * const roleUtilisateurs = await prisma.roleUtilisateur.findMany()
    * ```
    */
  get roleUtilisateur(): Prisma.RoleUtilisateurDelegate<ExtArgs>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs>;

  /**
   * `prisma.annonce`: Exposes CRUD operations for the **Annonce** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Annonces
    * const annonces = await prisma.annonce.findMany()
    * ```
    */
  get annonce(): Prisma.AnnonceDelegate<ExtArgs>;

  /**
   * `prisma.visite`: Exposes CRUD operations for the **Visite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visites
    * const visites = await prisma.visite.findMany()
    * ```
    */
  get visite(): Prisma.VisiteDelegate<ExtArgs>;

  /**
   * `prisma.visiteAcceptee`: Exposes CRUD operations for the **VisiteAcceptee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisiteAcceptees
    * const visiteAcceptees = await prisma.visiteAcceptee.findMany()
    * ```
    */
  get visiteAcceptee(): Prisma.VisiteAccepteeDelegate<ExtArgs>;

  /**
   * `prisma.visiteRefusee`: Exposes CRUD operations for the **VisiteRefusee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VisiteRefusees
    * const visiteRefusees = await prisma.visiteRefusee.findMany()
    * ```
    */
  get visiteRefusee(): Prisma.VisiteRefuseeDelegate<ExtArgs>;

  /**
   * `prisma.plante`: Exposes CRUD operations for the **Plante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plantes
    * const plantes = await prisma.plante.findMany()
    * ```
    */
  get plante(): Prisma.PlanteDelegate<ExtArgs>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.CategorieDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Utilisateur: 'Utilisateur',
    Role: 'Role',
    RoleUtilisateur: 'RoleUtilisateur',
    Photo: 'Photo',
    Annonce: 'Annonce',
    Visite: 'Visite',
    VisiteAcceptee: 'VisiteAcceptee',
    VisiteRefusee: 'VisiteRefusee',
    Plante: 'Plante',
    Categorie: 'Categorie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'account' | 'session' | 'verificationToken' | 'utilisateur' | 'role' | 'roleUtilisateur' | 'photo' | 'annonce' | 'visite' | 'visiteAcceptee' | 'visiteRefusee' | 'plante' | 'categorie'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>,
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      RoleUtilisateur: {
        payload: Prisma.$RoleUtilisateurPayload<ExtArgs>
        fields: Prisma.RoleUtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleUtilisateurFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleUtilisateurFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUtilisateurPayload>
          }
          findFirst: {
            args: Prisma.RoleUtilisateurFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleUtilisateurFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUtilisateurPayload>
          }
          findMany: {
            args: Prisma.RoleUtilisateurFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUtilisateurPayload>[]
          }
          create: {
            args: Prisma.RoleUtilisateurCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUtilisateurPayload>
          }
          delete: {
            args: Prisma.RoleUtilisateurDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUtilisateurPayload>
          }
          update: {
            args: Prisma.RoleUtilisateurUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.RoleUtilisateurDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUtilisateurUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUtilisateurUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleUtilisateurPayload>
          }
          aggregate: {
            args: Prisma.RoleUtilisateurAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoleUtilisateur>
          }
          groupBy: {
            args: Prisma.RoleUtilisateurGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleUtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleUtilisateurCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleUtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>,
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Annonce: {
        payload: Prisma.$AnnoncePayload<ExtArgs>
        fields: Prisma.AnnonceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnonceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnonceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          findFirst: {
            args: Prisma.AnnonceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnonceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          findMany: {
            args: Prisma.AnnonceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>[]
          }
          create: {
            args: Prisma.AnnonceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          delete: {
            args: Prisma.AnnonceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          update: {
            args: Prisma.AnnonceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          deleteMany: {
            args: Prisma.AnnonceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnnonceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnnonceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnnoncePayload>
          }
          aggregate: {
            args: Prisma.AnnonceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnnonce>
          }
          groupBy: {
            args: Prisma.AnnonceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnnonceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnonceCountArgs<ExtArgs>,
            result: $Utils.Optional<AnnonceCountAggregateOutputType> | number
          }
        }
      }
      Visite: {
        payload: Prisma.$VisitePayload<ExtArgs>
        fields: Prisma.VisiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisiteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisiteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitePayload>
          }
          findFirst: {
            args: Prisma.VisiteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisiteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitePayload>
          }
          findMany: {
            args: Prisma.VisiteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitePayload>[]
          }
          create: {
            args: Prisma.VisiteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitePayload>
          }
          delete: {
            args: Prisma.VisiteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitePayload>
          }
          update: {
            args: Prisma.VisiteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitePayload>
          }
          deleteMany: {
            args: Prisma.VisiteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VisiteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VisiteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisitePayload>
          }
          aggregate: {
            args: Prisma.VisiteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVisite>
          }
          groupBy: {
            args: Prisma.VisiteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VisiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisiteCountArgs<ExtArgs>,
            result: $Utils.Optional<VisiteCountAggregateOutputType> | number
          }
        }
      }
      VisiteAcceptee: {
        payload: Prisma.$VisiteAccepteePayload<ExtArgs>
        fields: Prisma.VisiteAccepteeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisiteAccepteeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteAccepteePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisiteAccepteeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteAccepteePayload>
          }
          findFirst: {
            args: Prisma.VisiteAccepteeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteAccepteePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisiteAccepteeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteAccepteePayload>
          }
          findMany: {
            args: Prisma.VisiteAccepteeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteAccepteePayload>[]
          }
          create: {
            args: Prisma.VisiteAccepteeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteAccepteePayload>
          }
          delete: {
            args: Prisma.VisiteAccepteeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteAccepteePayload>
          }
          update: {
            args: Prisma.VisiteAccepteeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteAccepteePayload>
          }
          deleteMany: {
            args: Prisma.VisiteAccepteeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VisiteAccepteeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VisiteAccepteeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteAccepteePayload>
          }
          aggregate: {
            args: Prisma.VisiteAccepteeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVisiteAcceptee>
          }
          groupBy: {
            args: Prisma.VisiteAccepteeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VisiteAccepteeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisiteAccepteeCountArgs<ExtArgs>,
            result: $Utils.Optional<VisiteAccepteeCountAggregateOutputType> | number
          }
        }
      }
      VisiteRefusee: {
        payload: Prisma.$VisiteRefuseePayload<ExtArgs>
        fields: Prisma.VisiteRefuseeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisiteRefuseeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteRefuseePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisiteRefuseeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteRefuseePayload>
          }
          findFirst: {
            args: Prisma.VisiteRefuseeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteRefuseePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisiteRefuseeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteRefuseePayload>
          }
          findMany: {
            args: Prisma.VisiteRefuseeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteRefuseePayload>[]
          }
          create: {
            args: Prisma.VisiteRefuseeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteRefuseePayload>
          }
          delete: {
            args: Prisma.VisiteRefuseeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteRefuseePayload>
          }
          update: {
            args: Prisma.VisiteRefuseeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteRefuseePayload>
          }
          deleteMany: {
            args: Prisma.VisiteRefuseeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VisiteRefuseeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VisiteRefuseeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VisiteRefuseePayload>
          }
          aggregate: {
            args: Prisma.VisiteRefuseeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVisiteRefusee>
          }
          groupBy: {
            args: Prisma.VisiteRefuseeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VisiteRefuseeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisiteRefuseeCountArgs<ExtArgs>,
            result: $Utils.Optional<VisiteRefuseeCountAggregateOutputType> | number
          }
        }
      }
      Plante: {
        payload: Prisma.$PlantePayload<ExtArgs>
        fields: Prisma.PlanteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantePayload>
          }
          findFirst: {
            args: Prisma.PlanteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantePayload>
          }
          findMany: {
            args: Prisma.PlanteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantePayload>[]
          }
          create: {
            args: Prisma.PlanteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantePayload>
          }
          delete: {
            args: Prisma.PlanteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantePayload>
          }
          update: {
            args: Prisma.PlanteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantePayload>
          }
          deleteMany: {
            args: Prisma.PlanteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlanteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlanteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlantePayload>
          }
          aggregate: {
            args: Prisma.PlanteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlante>
          }
          groupBy: {
            args: Prisma.PlanteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlanteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanteCountArgs<ExtArgs>,
            result: $Utils.Optional<PlanteCountAggregateOutputType> | number
          }
        }
      }
      Categorie: {
        payload: Prisma.$CategoriePayload<ExtArgs>
        fields: Prisma.CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findFirst: {
            args: Prisma.CategorieFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findMany: {
            args: Prisma.CategorieFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          create: {
            args: Prisma.CategorieCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          delete: {
            args: Prisma.CategorieDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          update: {
            args: Prisma.CategorieUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          deleteMany: {
            args: Prisma.CategorieDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategorieUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.CategorieGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieCountArgs<ExtArgs>,
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    rolesUtilisateurs: number
    lesAnnonces: number
    lesVisites: number
    accounts: number
    sessions: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolesUtilisateurs?: boolean | UtilisateurCountOutputTypeCountRolesUtilisateursArgs
    lesAnnonces?: boolean | UtilisateurCountOutputTypeCountLesAnnoncesArgs
    lesVisites?: boolean | UtilisateurCountOutputTypeCountLesVisitesArgs
    accounts?: boolean | UtilisateurCountOutputTypeCountAccountsArgs
    sessions?: boolean | UtilisateurCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountRolesUtilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleUtilisateurWhereInput
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountLesAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountLesVisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisiteWhereInput
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }



  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    rolesUtilisateurs: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolesUtilisateurs?: boolean | RoleCountOutputTypeCountRolesUtilisateursArgs
  }

  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolesUtilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleUtilisateurWhereInput
  }



  /**
   * Count Type AnnonceCountOutputType
   */

  export type AnnonceCountOutputType = {
    lesPhotos: number
    lesVisites: number
  }

  export type AnnonceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesPhotos?: boolean | AnnonceCountOutputTypeCountLesPhotosArgs
    lesVisites?: boolean | AnnonceCountOutputTypeCountLesVisitesArgs
  }

  // Custom InputTypes

  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnonceCountOutputType
     */
    select?: AnnonceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeCountLesPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }


  /**
   * AnnonceCountOutputType without action
   */
  export type AnnonceCountOutputTypeCountLesVisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisiteWhereInput
  }



  /**
   * Count Type PlanteCountOutputType
   */

  export type PlanteCountOutputType = {
    annonces: number
  }

  export type PlanteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonces?: boolean | PlanteCountOutputTypeCountAnnoncesArgs
  }

  // Custom InputTypes

  /**
   * PlanteCountOutputType without action
   */
  export type PlanteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanteCountOutputType
     */
    select?: PlanteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlanteCountOutputType without action
   */
  export type PlanteCountOutputTypeCountAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
  }



  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    lesPlantes: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesPlantes?: boolean | CategorieCountOutputTypeCountLesPlantesArgs
  }

  // Custom InputTypes

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountLesPlantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanteWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }



  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: string | null
    email: string | null
    motDePasse: string | null
    prenom: string | null
    nom: string | null
    ville: string | null
    cp: string | null
    rue: string | null
    description: string | null
    cheminPhoto: string | null
    dateInscription: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: string | null
    email: string | null
    motDePasse: string | null
    prenom: string | null
    nom: string | null
    ville: string | null
    cp: string | null
    rue: string | null
    description: string | null
    cheminPhoto: string | null
    dateInscription: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    email: number
    motDePasse: number
    prenom: number
    nom: number
    ville: number
    cp: number
    rue: number
    description: number
    cheminPhoto: number
    dateInscription: number
    _all: number
  }


  export type UtilisateurMinAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
    prenom?: true
    nom?: true
    ville?: true
    cp?: true
    rue?: true
    description?: true
    cheminPhoto?: true
    dateInscription?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
    prenom?: true
    nom?: true
    ville?: true
    cp?: true
    rue?: true
    description?: true
    cheminPhoto?: true
    dateInscription?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    email?: true
    motDePasse?: true
    prenom?: true
    nom?: true
    ville?: true
    cp?: true
    rue?: true
    description?: true
    cheminPhoto?: true
    dateInscription?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville: string | null
    cp: string | null
    rue: string | null
    description: string | null
    cheminPhoto: string | null
    dateInscription: Date
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    motDePasse?: boolean
    prenom?: boolean
    nom?: boolean
    ville?: boolean
    cp?: boolean
    rue?: boolean
    description?: boolean
    cheminPhoto?: boolean
    dateInscription?: boolean
    rolesUtilisateurs?: boolean | Utilisateur$rolesUtilisateursArgs<ExtArgs>
    lesAnnonces?: boolean | Utilisateur$lesAnnoncesArgs<ExtArgs>
    lesVisites?: boolean | Utilisateur$lesVisitesArgs<ExtArgs>
    accounts?: boolean | Utilisateur$accountsArgs<ExtArgs>
    sessions?: boolean | Utilisateur$sessionsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    email?: boolean
    motDePasse?: boolean
    prenom?: boolean
    nom?: boolean
    ville?: boolean
    cp?: boolean
    rue?: boolean
    description?: boolean
    cheminPhoto?: boolean
    dateInscription?: boolean
  }

  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolesUtilisateurs?: boolean | Utilisateur$rolesUtilisateursArgs<ExtArgs>
    lesAnnonces?: boolean | Utilisateur$lesAnnoncesArgs<ExtArgs>
    lesVisites?: boolean | Utilisateur$lesVisitesArgs<ExtArgs>
    accounts?: boolean | Utilisateur$accountsArgs<ExtArgs>
    sessions?: boolean | Utilisateur$sessionsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      rolesUtilisateurs: Prisma.$RoleUtilisateurPayload<ExtArgs>[]
      lesAnnonces: Prisma.$AnnoncePayload<ExtArgs>[]
      lesVisites: Prisma.$VisitePayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      motDePasse: string
      prenom: string
      nom: string
      ville: string | null
      cp: string | null
      rue: string | null
      description: string | null
      cheminPhoto: string | null
      dateInscription: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }


  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UtilisateurFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Utilisateur that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UtilisateurFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UtilisateurFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
    **/
    create<T extends UtilisateurCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
    **/
    delete<T extends UtilisateurDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UtilisateurUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UtilisateurDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UtilisateurUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
    **/
    upsert<T extends UtilisateurUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
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
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rolesUtilisateurs<T extends Utilisateur$rolesUtilisateursArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$rolesUtilisateursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'findMany'> | Null>;

    lesAnnonces<T extends Utilisateur$lesAnnoncesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$lesAnnoncesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'findMany'> | Null>;

    lesVisites<T extends Utilisateur$lesVisitesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$lesVisitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'findMany'> | Null>;

    accounts<T extends Utilisateur$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends Utilisateur$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Utilisateur model
   */ 
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly motDePasse: FieldRef<"Utilisateur", 'String'>
    readonly prenom: FieldRef<"Utilisateur", 'String'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly ville: FieldRef<"Utilisateur", 'String'>
    readonly cp: FieldRef<"Utilisateur", 'String'>
    readonly rue: FieldRef<"Utilisateur", 'String'>
    readonly description: FieldRef<"Utilisateur", 'String'>
    readonly cheminPhoto: FieldRef<"Utilisateur", 'String'>
    readonly dateInscription: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }


  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }


  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }


  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }


  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
  }


  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }


  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
  }


  /**
   * Utilisateur.rolesUtilisateurs
   */
  export type Utilisateur$rolesUtilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    where?: RoleUtilisateurWhereInput
    orderBy?: RoleUtilisateurOrderByWithRelationInput | RoleUtilisateurOrderByWithRelationInput[]
    cursor?: RoleUtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleUtilisateurScalarFieldEnum | RoleUtilisateurScalarFieldEnum[]
  }


  /**
   * Utilisateur.lesAnnonces
   */
  export type Utilisateur$lesAnnoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    cursor?: AnnonceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }


  /**
   * Utilisateur.lesVisites
   */
  export type Utilisateur$lesVisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    where?: VisiteWhereInput
    orderBy?: VisiteOrderByWithRelationInput | VisiteOrderByWithRelationInput[]
    cursor?: VisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisiteScalarFieldEnum | VisiteScalarFieldEnum[]
  }


  /**
   * Utilisateur.accounts
   */
  export type Utilisateur$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Utilisateur.sessions
   */
  export type Utilisateur$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }



  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    nom: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    nom: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    nom: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    nom?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    nom?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    nom?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    nom: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    rolesUtilisateurs?: boolean | Role$rolesUtilisateursArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    nom?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolesUtilisateurs?: boolean | Role$rolesUtilisateursArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      rolesUtilisateurs: Prisma.$RoleUtilisateurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }


  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rolesUtilisateurs<T extends Role$rolesUtilisateursArgs<ExtArgs> = {}>(args?: Subset<T, Role$rolesUtilisateursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly nom: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data?: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }


  /**
   * Role.rolesUtilisateurs
   */
  export type Role$rolesUtilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    where?: RoleUtilisateurWhereInput
    orderBy?: RoleUtilisateurOrderByWithRelationInput | RoleUtilisateurOrderByWithRelationInput[]
    cursor?: RoleUtilisateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleUtilisateurScalarFieldEnum | RoleUtilisateurScalarFieldEnum[]
  }


  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
  }



  /**
   * Model RoleUtilisateur
   */

  export type AggregateRoleUtilisateur = {
    _count: RoleUtilisateurCountAggregateOutputType | null
    _avg: RoleUtilisateurAvgAggregateOutputType | null
    _sum: RoleUtilisateurSumAggregateOutputType | null
    _min: RoleUtilisateurMinAggregateOutputType | null
    _max: RoleUtilisateurMaxAggregateOutputType | null
  }

  export type RoleUtilisateurAvgAggregateOutputType = {
    roleId: number | null
  }

  export type RoleUtilisateurSumAggregateOutputType = {
    roleId: number | null
  }

  export type RoleUtilisateurMinAggregateOutputType = {
    utilisateurId: string | null
    roleId: number | null
  }

  export type RoleUtilisateurMaxAggregateOutputType = {
    utilisateurId: string | null
    roleId: number | null
  }

  export type RoleUtilisateurCountAggregateOutputType = {
    utilisateurId: number
    roleId: number
    _all: number
  }


  export type RoleUtilisateurAvgAggregateInputType = {
    roleId?: true
  }

  export type RoleUtilisateurSumAggregateInputType = {
    roleId?: true
  }

  export type RoleUtilisateurMinAggregateInputType = {
    utilisateurId?: true
    roleId?: true
  }

  export type RoleUtilisateurMaxAggregateInputType = {
    utilisateurId?: true
    roleId?: true
  }

  export type RoleUtilisateurCountAggregateInputType = {
    utilisateurId?: true
    roleId?: true
    _all?: true
  }

  export type RoleUtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleUtilisateur to aggregate.
     */
    where?: RoleUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleUtilisateurs to fetch.
     */
    orderBy?: RoleUtilisateurOrderByWithRelationInput | RoleUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleUtilisateurs
    **/
    _count?: true | RoleUtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleUtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleUtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleUtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleUtilisateurMaxAggregateInputType
  }

  export type GetRoleUtilisateurAggregateType<T extends RoleUtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleUtilisateur[P]>
      : GetScalarType<T[P], AggregateRoleUtilisateur[P]>
  }




  export type RoleUtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleUtilisateurWhereInput
    orderBy?: RoleUtilisateurOrderByWithAggregationInput | RoleUtilisateurOrderByWithAggregationInput[]
    by: RoleUtilisateurScalarFieldEnum[] | RoleUtilisateurScalarFieldEnum
    having?: RoleUtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleUtilisateurCountAggregateInputType | true
    _avg?: RoleUtilisateurAvgAggregateInputType
    _sum?: RoleUtilisateurSumAggregateInputType
    _min?: RoleUtilisateurMinAggregateInputType
    _max?: RoleUtilisateurMaxAggregateInputType
  }

  export type RoleUtilisateurGroupByOutputType = {
    utilisateurId: string
    roleId: number
    _count: RoleUtilisateurCountAggregateOutputType | null
    _avg: RoleUtilisateurAvgAggregateOutputType | null
    _sum: RoleUtilisateurSumAggregateOutputType | null
    _min: RoleUtilisateurMinAggregateOutputType | null
    _max: RoleUtilisateurMaxAggregateOutputType | null
  }

  type GetRoleUtilisateurGroupByPayload<T extends RoleUtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleUtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleUtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleUtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], RoleUtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type RoleUtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateurId?: boolean
    roleId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleUtilisateur"]>

  export type RoleUtilisateurSelectScalar = {
    utilisateurId?: boolean
    roleId?: boolean
  }

  export type RoleUtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }


  export type $RoleUtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoleUtilisateur"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      utilisateurId: string
      roleId: number
    }, ExtArgs["result"]["roleUtilisateur"]>
    composites: {}
  }


  type RoleUtilisateurGetPayload<S extends boolean | null | undefined | RoleUtilisateurDefaultArgs> = $Result.GetResult<Prisma.$RoleUtilisateurPayload, S>

  type RoleUtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleUtilisateurFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RoleUtilisateurCountAggregateInputType | true
    }

  export interface RoleUtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleUtilisateur'], meta: { name: 'RoleUtilisateur' } }
    /**
     * Find zero or one RoleUtilisateur that matches the filter.
     * @param {RoleUtilisateurFindUniqueArgs} args - Arguments to find a RoleUtilisateur
     * @example
     * // Get one RoleUtilisateur
     * const roleUtilisateur = await prisma.roleUtilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleUtilisateurFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUtilisateurFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleUtilisateurClient<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RoleUtilisateur that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoleUtilisateurFindUniqueOrThrowArgs} args - Arguments to find a RoleUtilisateur
     * @example
     * // Get one RoleUtilisateur
     * const roleUtilisateur = await prisma.roleUtilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleUtilisateurFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUtilisateurFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleUtilisateurClient<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RoleUtilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUtilisateurFindFirstArgs} args - Arguments to find a RoleUtilisateur
     * @example
     * // Get one RoleUtilisateur
     * const roleUtilisateur = await prisma.roleUtilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleUtilisateurFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUtilisateurFindFirstArgs<ExtArgs>>
    ): Prisma__RoleUtilisateurClient<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RoleUtilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUtilisateurFindFirstOrThrowArgs} args - Arguments to find a RoleUtilisateur
     * @example
     * // Get one RoleUtilisateur
     * const roleUtilisateur = await prisma.roleUtilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleUtilisateurFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUtilisateurFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleUtilisateurClient<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RoleUtilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUtilisateurFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleUtilisateurs
     * const roleUtilisateurs = await prisma.roleUtilisateur.findMany()
     * 
     * // Get first 10 RoleUtilisateurs
     * const roleUtilisateurs = await prisma.roleUtilisateur.findMany({ take: 10 })
     * 
     * // Only select the `utilisateurId`
     * const roleUtilisateurWithUtilisateurIdOnly = await prisma.roleUtilisateur.findMany({ select: { utilisateurId: true } })
     * 
    **/
    findMany<T extends RoleUtilisateurFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUtilisateurFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RoleUtilisateur.
     * @param {RoleUtilisateurCreateArgs} args - Arguments to create a RoleUtilisateur.
     * @example
     * // Create one RoleUtilisateur
     * const RoleUtilisateur = await prisma.roleUtilisateur.create({
     *   data: {
     *     // ... data to create a RoleUtilisateur
     *   }
     * })
     * 
    **/
    create<T extends RoleUtilisateurCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUtilisateurCreateArgs<ExtArgs>>
    ): Prisma__RoleUtilisateurClient<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a RoleUtilisateur.
     * @param {RoleUtilisateurDeleteArgs} args - Arguments to delete one RoleUtilisateur.
     * @example
     * // Delete one RoleUtilisateur
     * const RoleUtilisateur = await prisma.roleUtilisateur.delete({
     *   where: {
     *     // ... filter to delete one RoleUtilisateur
     *   }
     * })
     * 
    **/
    delete<T extends RoleUtilisateurDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUtilisateurDeleteArgs<ExtArgs>>
    ): Prisma__RoleUtilisateurClient<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RoleUtilisateur.
     * @param {RoleUtilisateurUpdateArgs} args - Arguments to update one RoleUtilisateur.
     * @example
     * // Update one RoleUtilisateur
     * const roleUtilisateur = await prisma.roleUtilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUtilisateurUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUtilisateurUpdateArgs<ExtArgs>>
    ): Prisma__RoleUtilisateurClient<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RoleUtilisateurs.
     * @param {RoleUtilisateurDeleteManyArgs} args - Arguments to filter RoleUtilisateurs to delete.
     * @example
     * // Delete a few RoleUtilisateurs
     * const { count } = await prisma.roleUtilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleUtilisateurDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleUtilisateurDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleUtilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleUtilisateurs
     * const roleUtilisateur = await prisma.roleUtilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUtilisateurUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUtilisateurUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleUtilisateur.
     * @param {RoleUtilisateurUpsertArgs} args - Arguments to update or create a RoleUtilisateur.
     * @example
     * // Update or create a RoleUtilisateur
     * const roleUtilisateur = await prisma.roleUtilisateur.upsert({
     *   create: {
     *     // ... data to create a RoleUtilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleUtilisateur we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUtilisateurUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUtilisateurUpsertArgs<ExtArgs>>
    ): Prisma__RoleUtilisateurClient<$Result.GetResult<Prisma.$RoleUtilisateurPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RoleUtilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUtilisateurCountArgs} args - Arguments to filter RoleUtilisateurs to count.
     * @example
     * // Count the number of RoleUtilisateurs
     * const count = await prisma.roleUtilisateur.count({
     *   where: {
     *     // ... the filter for the RoleUtilisateurs we want to count
     *   }
     * })
    **/
    count<T extends RoleUtilisateurCountArgs>(
      args?: Subset<T, RoleUtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleUtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleUtilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleUtilisateurAggregateArgs>(args: Subset<T, RoleUtilisateurAggregateArgs>): Prisma.PrismaPromise<GetRoleUtilisateurAggregateType<T>>

    /**
     * Group by RoleUtilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUtilisateurGroupByArgs} args - Group by arguments.
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
      T extends RoleUtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleUtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: RoleUtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleUtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoleUtilisateur model
   */
  readonly fields: RoleUtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleUtilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleUtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RoleUtilisateur model
   */ 
  interface RoleUtilisateurFieldRefs {
    readonly utilisateurId: FieldRef<"RoleUtilisateur", 'String'>
    readonly roleId: FieldRef<"RoleUtilisateur", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * RoleUtilisateur findUnique
   */
  export type RoleUtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which RoleUtilisateur to fetch.
     */
    where: RoleUtilisateurWhereUniqueInput
  }


  /**
   * RoleUtilisateur findUniqueOrThrow
   */
  export type RoleUtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which RoleUtilisateur to fetch.
     */
    where: RoleUtilisateurWhereUniqueInput
  }


  /**
   * RoleUtilisateur findFirst
   */
  export type RoleUtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which RoleUtilisateur to fetch.
     */
    where?: RoleUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleUtilisateurs to fetch.
     */
    orderBy?: RoleUtilisateurOrderByWithRelationInput | RoleUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleUtilisateurs.
     */
    cursor?: RoleUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleUtilisateurs.
     */
    distinct?: RoleUtilisateurScalarFieldEnum | RoleUtilisateurScalarFieldEnum[]
  }


  /**
   * RoleUtilisateur findFirstOrThrow
   */
  export type RoleUtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which RoleUtilisateur to fetch.
     */
    where?: RoleUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleUtilisateurs to fetch.
     */
    orderBy?: RoleUtilisateurOrderByWithRelationInput | RoleUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleUtilisateurs.
     */
    cursor?: RoleUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleUtilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleUtilisateurs.
     */
    distinct?: RoleUtilisateurScalarFieldEnum | RoleUtilisateurScalarFieldEnum[]
  }


  /**
   * RoleUtilisateur findMany
   */
  export type RoleUtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which RoleUtilisateurs to fetch.
     */
    where?: RoleUtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleUtilisateurs to fetch.
     */
    orderBy?: RoleUtilisateurOrderByWithRelationInput | RoleUtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleUtilisateurs.
     */
    cursor?: RoleUtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleUtilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleUtilisateurs.
     */
    skip?: number
    distinct?: RoleUtilisateurScalarFieldEnum | RoleUtilisateurScalarFieldEnum[]
  }


  /**
   * RoleUtilisateur create
   */
  export type RoleUtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleUtilisateur.
     */
    data: XOR<RoleUtilisateurCreateInput, RoleUtilisateurUncheckedCreateInput>
  }


  /**
   * RoleUtilisateur update
   */
  export type RoleUtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleUtilisateur.
     */
    data: XOR<RoleUtilisateurUpdateInput, RoleUtilisateurUncheckedUpdateInput>
    /**
     * Choose, which RoleUtilisateur to update.
     */
    where: RoleUtilisateurWhereUniqueInput
  }


  /**
   * RoleUtilisateur updateMany
   */
  export type RoleUtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleUtilisateurs.
     */
    data: XOR<RoleUtilisateurUpdateManyMutationInput, RoleUtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which RoleUtilisateurs to update
     */
    where?: RoleUtilisateurWhereInput
  }


  /**
   * RoleUtilisateur upsert
   */
  export type RoleUtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleUtilisateur to update in case it exists.
     */
    where: RoleUtilisateurWhereUniqueInput
    /**
     * In case the RoleUtilisateur found by the `where` argument doesn't exist, create a new RoleUtilisateur with this data.
     */
    create: XOR<RoleUtilisateurCreateInput, RoleUtilisateurUncheckedCreateInput>
    /**
     * In case the RoleUtilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUtilisateurUpdateInput, RoleUtilisateurUncheckedUpdateInput>
  }


  /**
   * RoleUtilisateur delete
   */
  export type RoleUtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
    /**
     * Filter which RoleUtilisateur to delete.
     */
    where: RoleUtilisateurWhereUniqueInput
  }


  /**
   * RoleUtilisateur deleteMany
   */
  export type RoleUtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleUtilisateurs to delete
     */
    where?: RoleUtilisateurWhereInput
  }


  /**
   * RoleUtilisateur without action
   */
  export type RoleUtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleUtilisateur
     */
    select?: RoleUtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleUtilisateurInclude<ExtArgs> | null
  }



  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
    annonceId: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    annonceId: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    cheminPhoto: string | null
    annonceId: number | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    cheminPhoto: string | null
    annonceId: number | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    cheminPhoto: number
    annonceId: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    annonceId?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    annonceId?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    cheminPhoto?: true
    annonceId?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    cheminPhoto?: true
    annonceId?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    cheminPhoto?: true
    annonceId?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: number
    cheminPhoto: string
    annonceId: number
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cheminPhoto?: boolean
    annonceId?: boolean
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    cheminPhoto?: boolean
    annonceId?: boolean
  }

  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
  }


  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      annonce: Prisma.$AnnoncePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cheminPhoto: string
      annonceId: number
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }


  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhotoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Photo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhotoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhotoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
    **/
    create<T extends PhotoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
    **/
    delete<T extends PhotoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhotoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhotoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhotoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
    **/
    upsert<T extends PhotoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>
    ): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
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
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    annonce<T extends AnnonceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnonceDefaultArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Photo model
   */ 
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'Int'>
    readonly cheminPhoto: FieldRef<"Photo", 'String'>
    readonly annonceId: FieldRef<"Photo", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }


  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
  }


  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }


  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }


  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
  }


  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
  }



  /**
   * Model Annonce
   */

  export type AggregateAnnonce = {
    _count: AnnonceCountAggregateOutputType | null
    _avg: AnnonceAvgAggregateOutputType | null
    _sum: AnnonceSumAggregateOutputType | null
    _min: AnnonceMinAggregateOutputType | null
    _max: AnnonceMaxAggregateOutputType | null
  }

  export type AnnonceAvgAggregateOutputType = {
    id: number | null
    planteId: number | null
  }

  export type AnnonceSumAggregateOutputType = {
    id: number | null
    planteId: number | null
  }

  export type AnnonceMinAggregateOutputType = {
    id: number | null
    description: string | null
    datePublication: Date | null
    auteurId: string | null
    planteId: number | null
  }

  export type AnnonceMaxAggregateOutputType = {
    id: number | null
    description: string | null
    datePublication: Date | null
    auteurId: string | null
    planteId: number | null
  }

  export type AnnonceCountAggregateOutputType = {
    id: number
    description: number
    datePublication: number
    auteurId: number
    planteId: number
    _all: number
  }


  export type AnnonceAvgAggregateInputType = {
    id?: true
    planteId?: true
  }

  export type AnnonceSumAggregateInputType = {
    id?: true
    planteId?: true
  }

  export type AnnonceMinAggregateInputType = {
    id?: true
    description?: true
    datePublication?: true
    auteurId?: true
    planteId?: true
  }

  export type AnnonceMaxAggregateInputType = {
    id?: true
    description?: true
    datePublication?: true
    auteurId?: true
    planteId?: true
  }

  export type AnnonceCountAggregateInputType = {
    id?: true
    description?: true
    datePublication?: true
    auteurId?: true
    planteId?: true
    _all?: true
  }

  export type AnnonceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonce to aggregate.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Annonces
    **/
    _count?: true | AnnonceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnonceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnonceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnonceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnonceMaxAggregateInputType
  }

  export type GetAnnonceAggregateType<T extends AnnonceAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnonce]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnonce[P]>
      : GetScalarType<T[P], AggregateAnnonce[P]>
  }




  export type AnnonceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithAggregationInput | AnnonceOrderByWithAggregationInput[]
    by: AnnonceScalarFieldEnum[] | AnnonceScalarFieldEnum
    having?: AnnonceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnonceCountAggregateInputType | true
    _avg?: AnnonceAvgAggregateInputType
    _sum?: AnnonceSumAggregateInputType
    _min?: AnnonceMinAggregateInputType
    _max?: AnnonceMaxAggregateInputType
  }

  export type AnnonceGroupByOutputType = {
    id: number
    description: string
    datePublication: Date
    auteurId: string
    planteId: number
    _count: AnnonceCountAggregateOutputType | null
    _avg: AnnonceAvgAggregateOutputType | null
    _sum: AnnonceSumAggregateOutputType | null
    _min: AnnonceMinAggregateOutputType | null
    _max: AnnonceMaxAggregateOutputType | null
  }

  type GetAnnonceGroupByPayload<T extends AnnonceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnonceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnonceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
            : GetScalarType<T[P], AnnonceGroupByOutputType[P]>
        }
      >
    >


  export type AnnonceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    datePublication?: boolean
    auteurId?: boolean
    planteId?: boolean
    auteur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    plante?: boolean | PlanteDefaultArgs<ExtArgs>
    lesPhotos?: boolean | Annonce$lesPhotosArgs<ExtArgs>
    lesVisites?: boolean | Annonce$lesVisitesArgs<ExtArgs>
    _count?: boolean | AnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["annonce"]>

  export type AnnonceSelectScalar = {
    id?: boolean
    description?: boolean
    datePublication?: boolean
    auteurId?: boolean
    planteId?: boolean
  }

  export type AnnonceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auteur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    plante?: boolean | PlanteDefaultArgs<ExtArgs>
    lesPhotos?: boolean | Annonce$lesPhotosArgs<ExtArgs>
    lesVisites?: boolean | Annonce$lesVisitesArgs<ExtArgs>
    _count?: boolean | AnnonceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AnnoncePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Annonce"
    objects: {
      auteur: Prisma.$UtilisateurPayload<ExtArgs>
      plante: Prisma.$PlantePayload<ExtArgs>
      lesPhotos: Prisma.$PhotoPayload<ExtArgs>[]
      lesVisites: Prisma.$VisitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      datePublication: Date
      auteurId: string
      planteId: number
    }, ExtArgs["result"]["annonce"]>
    composites: {}
  }


  type AnnonceGetPayload<S extends boolean | null | undefined | AnnonceDefaultArgs> = $Result.GetResult<Prisma.$AnnoncePayload, S>

  type AnnonceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnnonceFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AnnonceCountAggregateInputType | true
    }

  export interface AnnonceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Annonce'], meta: { name: 'Annonce' } }
    /**
     * Find zero or one Annonce that matches the filter.
     * @param {AnnonceFindUniqueArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnnonceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnnonceFindUniqueArgs<ExtArgs>>
    ): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Annonce that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnnonceFindUniqueOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnnonceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnnonceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Annonce that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnnonceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnnonceFindFirstArgs<ExtArgs>>
    ): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Annonce that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindFirstOrThrowArgs} args - Arguments to find a Annonce
     * @example
     * // Get one Annonce
     * const annonce = await prisma.annonce.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnnonceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnnonceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Annonces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Annonces
     * const annonces = await prisma.annonce.findMany()
     * 
     * // Get first 10 Annonces
     * const annonces = await prisma.annonce.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const annonceWithIdOnly = await prisma.annonce.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnnonceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnnonceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Annonce.
     * @param {AnnonceCreateArgs} args - Arguments to create a Annonce.
     * @example
     * // Create one Annonce
     * const Annonce = await prisma.annonce.create({
     *   data: {
     *     // ... data to create a Annonce
     *   }
     * })
     * 
    **/
    create<T extends AnnonceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnnonceCreateArgs<ExtArgs>>
    ): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Annonce.
     * @param {AnnonceDeleteArgs} args - Arguments to delete one Annonce.
     * @example
     * // Delete one Annonce
     * const Annonce = await prisma.annonce.delete({
     *   where: {
     *     // ... filter to delete one Annonce
     *   }
     * })
     * 
    **/
    delete<T extends AnnonceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnnonceDeleteArgs<ExtArgs>>
    ): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Annonce.
     * @param {AnnonceUpdateArgs} args - Arguments to update one Annonce.
     * @example
     * // Update one Annonce
     * const annonce = await prisma.annonce.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnnonceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnnonceUpdateArgs<ExtArgs>>
    ): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Annonces.
     * @param {AnnonceDeleteManyArgs} args - Arguments to filter Annonces to delete.
     * @example
     * // Delete a few Annonces
     * const { count } = await prisma.annonce.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnnonceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnnonceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Annonces
     * const annonce = await prisma.annonce.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnnonceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnnonceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Annonce.
     * @param {AnnonceUpsertArgs} args - Arguments to update or create a Annonce.
     * @example
     * // Update or create a Annonce
     * const annonce = await prisma.annonce.upsert({
     *   create: {
     *     // ... data to create a Annonce
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Annonce we want to update
     *   }
     * })
    **/
    upsert<T extends AnnonceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnnonceUpsertArgs<ExtArgs>>
    ): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Annonces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceCountArgs} args - Arguments to filter Annonces to count.
     * @example
     * // Count the number of Annonces
     * const count = await prisma.annonce.count({
     *   where: {
     *     // ... the filter for the Annonces we want to count
     *   }
     * })
    **/
    count<T extends AnnonceCountArgs>(
      args?: Subset<T, AnnonceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnonceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnnonceAggregateArgs>(args: Subset<T, AnnonceAggregateArgs>): Prisma.PrismaPromise<GetAnnonceAggregateType<T>>

    /**
     * Group by Annonce.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnonceGroupByArgs} args - Group by arguments.
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
      T extends AnnonceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnonceGroupByArgs['orderBy'] }
        : { orderBy?: AnnonceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnnonceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnonceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Annonce model
   */
  readonly fields: AnnonceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Annonce.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnonceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    auteur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    plante<T extends PlanteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanteDefaultArgs<ExtArgs>>): Prisma__PlanteClient<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    lesPhotos<T extends Annonce$lesPhotosArgs<ExtArgs> = {}>(args?: Subset<T, Annonce$lesPhotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, 'findMany'> | Null>;

    lesVisites<T extends Annonce$lesVisitesArgs<ExtArgs> = {}>(args?: Subset<T, Annonce$lesVisitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Annonce model
   */ 
  interface AnnonceFieldRefs {
    readonly id: FieldRef<"Annonce", 'Int'>
    readonly description: FieldRef<"Annonce", 'String'>
    readonly datePublication: FieldRef<"Annonce", 'DateTime'>
    readonly auteurId: FieldRef<"Annonce", 'String'>
    readonly planteId: FieldRef<"Annonce", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Annonce findUnique
   */
  export type AnnonceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput
  }


  /**
   * Annonce findUniqueOrThrow
   */
  export type AnnonceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where: AnnonceWhereUniqueInput
  }


  /**
   * Annonce findFirst
   */
  export type AnnonceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }


  /**
   * Annonce findFirstOrThrow
   */
  export type AnnonceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonce to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Annonces.
     */
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }


  /**
   * Annonce findMany
   */
  export type AnnonceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter, which Annonces to fetch.
     */
    where?: AnnonceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Annonces to fetch.
     */
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Annonces.
     */
    cursor?: AnnonceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Annonces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Annonces.
     */
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }


  /**
   * Annonce create
   */
  export type AnnonceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The data needed to create a Annonce.
     */
    data: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>
  }


  /**
   * Annonce update
   */
  export type AnnonceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The data needed to update a Annonce.
     */
    data: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>
    /**
     * Choose, which Annonce to update.
     */
    where: AnnonceWhereUniqueInput
  }


  /**
   * Annonce updateMany
   */
  export type AnnonceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Annonces.
     */
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyInput>
    /**
     * Filter which Annonces to update
     */
    where?: AnnonceWhereInput
  }


  /**
   * Annonce upsert
   */
  export type AnnonceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * The filter to search for the Annonce to update in case it exists.
     */
    where: AnnonceWhereUniqueInput
    /**
     * In case the Annonce found by the `where` argument doesn't exist, create a new Annonce with this data.
     */
    create: XOR<AnnonceCreateInput, AnnonceUncheckedCreateInput>
    /**
     * In case the Annonce was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnonceUpdateInput, AnnonceUncheckedUpdateInput>
  }


  /**
   * Annonce delete
   */
  export type AnnonceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    /**
     * Filter which Annonce to delete.
     */
    where: AnnonceWhereUniqueInput
  }


  /**
   * Annonce deleteMany
   */
  export type AnnonceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Annonces to delete
     */
    where?: AnnonceWhereInput
  }


  /**
   * Annonce.lesPhotos
   */
  export type Annonce$lesPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }


  /**
   * Annonce.lesVisites
   */
  export type Annonce$lesVisitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    where?: VisiteWhereInput
    orderBy?: VisiteOrderByWithRelationInput | VisiteOrderByWithRelationInput[]
    cursor?: VisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisiteScalarFieldEnum | VisiteScalarFieldEnum[]
  }


  /**
   * Annonce without action
   */
  export type AnnonceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
  }



  /**
   * Model Visite
   */

  export type AggregateVisite = {
    _count: VisiteCountAggregateOutputType | null
    _avg: VisiteAvgAggregateOutputType | null
    _sum: VisiteSumAggregateOutputType | null
    _min: VisiteMinAggregateOutputType | null
    _max: VisiteMaxAggregateOutputType | null
  }

  export type VisiteAvgAggregateOutputType = {
    id: number | null
    annonceId: number | null
  }

  export type VisiteSumAggregateOutputType = {
    id: number | null
    annonceId: number | null
  }

  export type VisiteMinAggregateOutputType = {
    id: number | null
    dateVisite: Date | null
    dateInvitation: Date | null
    visiteurId: string | null
    annonceId: number | null
  }

  export type VisiteMaxAggregateOutputType = {
    id: number | null
    dateVisite: Date | null
    dateInvitation: Date | null
    visiteurId: string | null
    annonceId: number | null
  }

  export type VisiteCountAggregateOutputType = {
    id: number
    dateVisite: number
    dateInvitation: number
    visiteurId: number
    annonceId: number
    _all: number
  }


  export type VisiteAvgAggregateInputType = {
    id?: true
    annonceId?: true
  }

  export type VisiteSumAggregateInputType = {
    id?: true
    annonceId?: true
  }

  export type VisiteMinAggregateInputType = {
    id?: true
    dateVisite?: true
    dateInvitation?: true
    visiteurId?: true
    annonceId?: true
  }

  export type VisiteMaxAggregateInputType = {
    id?: true
    dateVisite?: true
    dateInvitation?: true
    visiteurId?: true
    annonceId?: true
  }

  export type VisiteCountAggregateInputType = {
    id?: true
    dateVisite?: true
    dateInvitation?: true
    visiteurId?: true
    annonceId?: true
    _all?: true
  }

  export type VisiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visite to aggregate.
     */
    where?: VisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visites to fetch.
     */
    orderBy?: VisiteOrderByWithRelationInput | VisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visites
    **/
    _count?: true | VisiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisiteMaxAggregateInputType
  }

  export type GetVisiteAggregateType<T extends VisiteAggregateArgs> = {
        [P in keyof T & keyof AggregateVisite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisite[P]>
      : GetScalarType<T[P], AggregateVisite[P]>
  }




  export type VisiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisiteWhereInput
    orderBy?: VisiteOrderByWithAggregationInput | VisiteOrderByWithAggregationInput[]
    by: VisiteScalarFieldEnum[] | VisiteScalarFieldEnum
    having?: VisiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisiteCountAggregateInputType | true
    _avg?: VisiteAvgAggregateInputType
    _sum?: VisiteSumAggregateInputType
    _min?: VisiteMinAggregateInputType
    _max?: VisiteMaxAggregateInputType
  }

  export type VisiteGroupByOutputType = {
    id: number
    dateVisite: Date
    dateInvitation: Date
    visiteurId: string
    annonceId: number
    _count: VisiteCountAggregateOutputType | null
    _avg: VisiteAvgAggregateOutputType | null
    _sum: VisiteSumAggregateOutputType | null
    _min: VisiteMinAggregateOutputType | null
    _max: VisiteMaxAggregateOutputType | null
  }

  type GetVisiteGroupByPayload<T extends VisiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisiteGroupByOutputType[P]>
            : GetScalarType<T[P], VisiteGroupByOutputType[P]>
        }
      >
    >


  export type VisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateVisite?: boolean
    dateInvitation?: boolean
    visiteurId?: boolean
    annonceId?: boolean
    visiteur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    visiteAcceptee?: boolean | Visite$visiteAccepteeArgs<ExtArgs>
    visiteRefusee?: boolean | Visite$visiteRefuseeArgs<ExtArgs>
  }, ExtArgs["result"]["visite"]>

  export type VisiteSelectScalar = {
    id?: boolean
    dateVisite?: boolean
    dateInvitation?: boolean
    visiteurId?: boolean
    annonceId?: boolean
  }

  export type VisiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visiteur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    annonce?: boolean | AnnonceDefaultArgs<ExtArgs>
    visiteAcceptee?: boolean | Visite$visiteAccepteeArgs<ExtArgs>
    visiteRefusee?: boolean | Visite$visiteRefuseeArgs<ExtArgs>
  }


  export type $VisitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visite"
    objects: {
      visiteur: Prisma.$UtilisateurPayload<ExtArgs>
      annonce: Prisma.$AnnoncePayload<ExtArgs>
      visiteAcceptee: Prisma.$VisiteAccepteePayload<ExtArgs> | null
      visiteRefusee: Prisma.$VisiteRefuseePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateVisite: Date
      dateInvitation: Date
      visiteurId: string
      annonceId: number
    }, ExtArgs["result"]["visite"]>
    composites: {}
  }


  type VisiteGetPayload<S extends boolean | null | undefined | VisiteDefaultArgs> = $Result.GetResult<Prisma.$VisitePayload, S>

  type VisiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VisiteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VisiteCountAggregateInputType | true
    }

  export interface VisiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visite'], meta: { name: 'Visite' } }
    /**
     * Find zero or one Visite that matches the filter.
     * @param {VisiteFindUniqueArgs} args - Arguments to find a Visite
     * @example
     * // Get one Visite
     * const visite = await prisma.visite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VisiteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteFindUniqueArgs<ExtArgs>>
    ): Prisma__VisiteClient<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Visite that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VisiteFindUniqueOrThrowArgs} args - Arguments to find a Visite
     * @example
     * // Get one Visite
     * const visite = await prisma.visite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VisiteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VisiteClient<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Visite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteFindFirstArgs} args - Arguments to find a Visite
     * @example
     * // Get one Visite
     * const visite = await prisma.visite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VisiteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteFindFirstArgs<ExtArgs>>
    ): Prisma__VisiteClient<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Visite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteFindFirstOrThrowArgs} args - Arguments to find a Visite
     * @example
     * // Get one Visite
     * const visite = await prisma.visite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VisiteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VisiteClient<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Visites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visites
     * const visites = await prisma.visite.findMany()
     * 
     * // Get first 10 Visites
     * const visites = await prisma.visite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visiteWithIdOnly = await prisma.visite.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VisiteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Visite.
     * @param {VisiteCreateArgs} args - Arguments to create a Visite.
     * @example
     * // Create one Visite
     * const Visite = await prisma.visite.create({
     *   data: {
     *     // ... data to create a Visite
     *   }
     * })
     * 
    **/
    create<T extends VisiteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteCreateArgs<ExtArgs>>
    ): Prisma__VisiteClient<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Visite.
     * @param {VisiteDeleteArgs} args - Arguments to delete one Visite.
     * @example
     * // Delete one Visite
     * const Visite = await prisma.visite.delete({
     *   where: {
     *     // ... filter to delete one Visite
     *   }
     * })
     * 
    **/
    delete<T extends VisiteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteDeleteArgs<ExtArgs>>
    ): Prisma__VisiteClient<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Visite.
     * @param {VisiteUpdateArgs} args - Arguments to update one Visite.
     * @example
     * // Update one Visite
     * const visite = await prisma.visite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VisiteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteUpdateArgs<ExtArgs>>
    ): Prisma__VisiteClient<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Visites.
     * @param {VisiteDeleteManyArgs} args - Arguments to filter Visites to delete.
     * @example
     * // Delete a few Visites
     * const { count } = await prisma.visite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VisiteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visites
     * const visite = await prisma.visite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VisiteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Visite.
     * @param {VisiteUpsertArgs} args - Arguments to update or create a Visite.
     * @example
     * // Update or create a Visite
     * const visite = await prisma.visite.upsert({
     *   create: {
     *     // ... data to create a Visite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visite we want to update
     *   }
     * })
    **/
    upsert<T extends VisiteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteUpsertArgs<ExtArgs>>
    ): Prisma__VisiteClient<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Visites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteCountArgs} args - Arguments to filter Visites to count.
     * @example
     * // Count the number of Visites
     * const count = await prisma.visite.count({
     *   where: {
     *     // ... the filter for the Visites we want to count
     *   }
     * })
    **/
    count<T extends VisiteCountArgs>(
      args?: Subset<T, VisiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisiteAggregateArgs>(args: Subset<T, VisiteAggregateArgs>): Prisma.PrismaPromise<GetVisiteAggregateType<T>>

    /**
     * Group by Visite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteGroupByArgs} args - Group by arguments.
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
      T extends VisiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisiteGroupByArgs['orderBy'] }
        : { orderBy?: VisiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visite model
   */
  readonly fields: VisiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    visiteur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    annonce<T extends AnnonceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnonceDefaultArgs<ExtArgs>>): Prisma__AnnonceClient<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    visiteAcceptee<T extends Visite$visiteAccepteeArgs<ExtArgs> = {}>(args?: Subset<T, Visite$visiteAccepteeArgs<ExtArgs>>): Prisma__VisiteAccepteeClient<$Result.GetResult<Prisma.$VisiteAccepteePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    visiteRefusee<T extends Visite$visiteRefuseeArgs<ExtArgs> = {}>(args?: Subset<T, Visite$visiteRefuseeArgs<ExtArgs>>): Prisma__VisiteRefuseeClient<$Result.GetResult<Prisma.$VisiteRefuseePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Visite model
   */ 
  interface VisiteFieldRefs {
    readonly id: FieldRef<"Visite", 'Int'>
    readonly dateVisite: FieldRef<"Visite", 'DateTime'>
    readonly dateInvitation: FieldRef<"Visite", 'DateTime'>
    readonly visiteurId: FieldRef<"Visite", 'String'>
    readonly annonceId: FieldRef<"Visite", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Visite findUnique
   */
  export type VisiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    /**
     * Filter, which Visite to fetch.
     */
    where: VisiteWhereUniqueInput
  }


  /**
   * Visite findUniqueOrThrow
   */
  export type VisiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    /**
     * Filter, which Visite to fetch.
     */
    where: VisiteWhereUniqueInput
  }


  /**
   * Visite findFirst
   */
  export type VisiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    /**
     * Filter, which Visite to fetch.
     */
    where?: VisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visites to fetch.
     */
    orderBy?: VisiteOrderByWithRelationInput | VisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visites.
     */
    cursor?: VisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visites.
     */
    distinct?: VisiteScalarFieldEnum | VisiteScalarFieldEnum[]
  }


  /**
   * Visite findFirstOrThrow
   */
  export type VisiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    /**
     * Filter, which Visite to fetch.
     */
    where?: VisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visites to fetch.
     */
    orderBy?: VisiteOrderByWithRelationInput | VisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visites.
     */
    cursor?: VisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visites.
     */
    distinct?: VisiteScalarFieldEnum | VisiteScalarFieldEnum[]
  }


  /**
   * Visite findMany
   */
  export type VisiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    /**
     * Filter, which Visites to fetch.
     */
    where?: VisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visites to fetch.
     */
    orderBy?: VisiteOrderByWithRelationInput | VisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visites.
     */
    cursor?: VisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visites.
     */
    skip?: number
    distinct?: VisiteScalarFieldEnum | VisiteScalarFieldEnum[]
  }


  /**
   * Visite create
   */
  export type VisiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Visite.
     */
    data: XOR<VisiteCreateInput, VisiteUncheckedCreateInput>
  }


  /**
   * Visite update
   */
  export type VisiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Visite.
     */
    data: XOR<VisiteUpdateInput, VisiteUncheckedUpdateInput>
    /**
     * Choose, which Visite to update.
     */
    where: VisiteWhereUniqueInput
  }


  /**
   * Visite updateMany
   */
  export type VisiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visites.
     */
    data: XOR<VisiteUpdateManyMutationInput, VisiteUncheckedUpdateManyInput>
    /**
     * Filter which Visites to update
     */
    where?: VisiteWhereInput
  }


  /**
   * Visite upsert
   */
  export type VisiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Visite to update in case it exists.
     */
    where: VisiteWhereUniqueInput
    /**
     * In case the Visite found by the `where` argument doesn't exist, create a new Visite with this data.
     */
    create: XOR<VisiteCreateInput, VisiteUncheckedCreateInput>
    /**
     * In case the Visite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisiteUpdateInput, VisiteUncheckedUpdateInput>
  }


  /**
   * Visite delete
   */
  export type VisiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
    /**
     * Filter which Visite to delete.
     */
    where: VisiteWhereUniqueInput
  }


  /**
   * Visite deleteMany
   */
  export type VisiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visites to delete
     */
    where?: VisiteWhereInput
  }


  /**
   * Visite.visiteAcceptee
   */
  export type Visite$visiteAccepteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
    where?: VisiteAccepteeWhereInput
  }


  /**
   * Visite.visiteRefusee
   */
  export type Visite$visiteRefuseeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
    where?: VisiteRefuseeWhereInput
  }


  /**
   * Visite without action
   */
  export type VisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visite
     */
    select?: VisiteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteInclude<ExtArgs> | null
  }



  /**
   * Model VisiteAcceptee
   */

  export type AggregateVisiteAcceptee = {
    _count: VisiteAccepteeCountAggregateOutputType | null
    _avg: VisiteAccepteeAvgAggregateOutputType | null
    _sum: VisiteAccepteeSumAggregateOutputType | null
    _min: VisiteAccepteeMinAggregateOutputType | null
    _max: VisiteAccepteeMaxAggregateOutputType | null
  }

  export type VisiteAccepteeAvgAggregateOutputType = {
    visiteId: number | null
  }

  export type VisiteAccepteeSumAggregateOutputType = {
    visiteId: number | null
  }

  export type VisiteAccepteeMinAggregateOutputType = {
    visiteId: number | null
    dateAcceptation: Date | null
    cheminPhoto: string | null
  }

  export type VisiteAccepteeMaxAggregateOutputType = {
    visiteId: number | null
    dateAcceptation: Date | null
    cheminPhoto: string | null
  }

  export type VisiteAccepteeCountAggregateOutputType = {
    visiteId: number
    dateAcceptation: number
    cheminPhoto: number
    _all: number
  }


  export type VisiteAccepteeAvgAggregateInputType = {
    visiteId?: true
  }

  export type VisiteAccepteeSumAggregateInputType = {
    visiteId?: true
  }

  export type VisiteAccepteeMinAggregateInputType = {
    visiteId?: true
    dateAcceptation?: true
    cheminPhoto?: true
  }

  export type VisiteAccepteeMaxAggregateInputType = {
    visiteId?: true
    dateAcceptation?: true
    cheminPhoto?: true
  }

  export type VisiteAccepteeCountAggregateInputType = {
    visiteId?: true
    dateAcceptation?: true
    cheminPhoto?: true
    _all?: true
  }

  export type VisiteAccepteeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisiteAcceptee to aggregate.
     */
    where?: VisiteAccepteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiteAcceptees to fetch.
     */
    orderBy?: VisiteAccepteeOrderByWithRelationInput | VisiteAccepteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisiteAccepteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiteAcceptees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiteAcceptees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisiteAcceptees
    **/
    _count?: true | VisiteAccepteeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisiteAccepteeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisiteAccepteeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisiteAccepteeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisiteAccepteeMaxAggregateInputType
  }

  export type GetVisiteAccepteeAggregateType<T extends VisiteAccepteeAggregateArgs> = {
        [P in keyof T & keyof AggregateVisiteAcceptee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisiteAcceptee[P]>
      : GetScalarType<T[P], AggregateVisiteAcceptee[P]>
  }




  export type VisiteAccepteeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisiteAccepteeWhereInput
    orderBy?: VisiteAccepteeOrderByWithAggregationInput | VisiteAccepteeOrderByWithAggregationInput[]
    by: VisiteAccepteeScalarFieldEnum[] | VisiteAccepteeScalarFieldEnum
    having?: VisiteAccepteeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisiteAccepteeCountAggregateInputType | true
    _avg?: VisiteAccepteeAvgAggregateInputType
    _sum?: VisiteAccepteeSumAggregateInputType
    _min?: VisiteAccepteeMinAggregateInputType
    _max?: VisiteAccepteeMaxAggregateInputType
  }

  export type VisiteAccepteeGroupByOutputType = {
    visiteId: number
    dateAcceptation: Date
    cheminPhoto: string | null
    _count: VisiteAccepteeCountAggregateOutputType | null
    _avg: VisiteAccepteeAvgAggregateOutputType | null
    _sum: VisiteAccepteeSumAggregateOutputType | null
    _min: VisiteAccepteeMinAggregateOutputType | null
    _max: VisiteAccepteeMaxAggregateOutputType | null
  }

  type GetVisiteAccepteeGroupByPayload<T extends VisiteAccepteeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisiteAccepteeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisiteAccepteeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisiteAccepteeGroupByOutputType[P]>
            : GetScalarType<T[P], VisiteAccepteeGroupByOutputType[P]>
        }
      >
    >


  export type VisiteAccepteeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    visiteId?: boolean
    dateAcceptation?: boolean
    cheminPhoto?: boolean
    visite?: boolean | VisiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visiteAcceptee"]>

  export type VisiteAccepteeSelectScalar = {
    visiteId?: boolean
    dateAcceptation?: boolean
    cheminPhoto?: boolean
  }

  export type VisiteAccepteeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visite?: boolean | VisiteDefaultArgs<ExtArgs>
  }


  export type $VisiteAccepteePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisiteAcceptee"
    objects: {
      visite: Prisma.$VisitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      visiteId: number
      dateAcceptation: Date
      cheminPhoto: string | null
    }, ExtArgs["result"]["visiteAcceptee"]>
    composites: {}
  }


  type VisiteAccepteeGetPayload<S extends boolean | null | undefined | VisiteAccepteeDefaultArgs> = $Result.GetResult<Prisma.$VisiteAccepteePayload, S>

  type VisiteAccepteeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VisiteAccepteeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VisiteAccepteeCountAggregateInputType | true
    }

  export interface VisiteAccepteeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisiteAcceptee'], meta: { name: 'VisiteAcceptee' } }
    /**
     * Find zero or one VisiteAcceptee that matches the filter.
     * @param {VisiteAccepteeFindUniqueArgs} args - Arguments to find a VisiteAcceptee
     * @example
     * // Get one VisiteAcceptee
     * const visiteAcceptee = await prisma.visiteAcceptee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VisiteAccepteeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteAccepteeFindUniqueArgs<ExtArgs>>
    ): Prisma__VisiteAccepteeClient<$Result.GetResult<Prisma.$VisiteAccepteePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VisiteAcceptee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VisiteAccepteeFindUniqueOrThrowArgs} args - Arguments to find a VisiteAcceptee
     * @example
     * // Get one VisiteAcceptee
     * const visiteAcceptee = await prisma.visiteAcceptee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VisiteAccepteeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteAccepteeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VisiteAccepteeClient<$Result.GetResult<Prisma.$VisiteAccepteePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VisiteAcceptee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteAccepteeFindFirstArgs} args - Arguments to find a VisiteAcceptee
     * @example
     * // Get one VisiteAcceptee
     * const visiteAcceptee = await prisma.visiteAcceptee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VisiteAccepteeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteAccepteeFindFirstArgs<ExtArgs>>
    ): Prisma__VisiteAccepteeClient<$Result.GetResult<Prisma.$VisiteAccepteePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VisiteAcceptee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteAccepteeFindFirstOrThrowArgs} args - Arguments to find a VisiteAcceptee
     * @example
     * // Get one VisiteAcceptee
     * const visiteAcceptee = await prisma.visiteAcceptee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VisiteAccepteeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteAccepteeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VisiteAccepteeClient<$Result.GetResult<Prisma.$VisiteAccepteePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VisiteAcceptees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteAccepteeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisiteAcceptees
     * const visiteAcceptees = await prisma.visiteAcceptee.findMany()
     * 
     * // Get first 10 VisiteAcceptees
     * const visiteAcceptees = await prisma.visiteAcceptee.findMany({ take: 10 })
     * 
     * // Only select the `visiteId`
     * const visiteAccepteeWithVisiteIdOnly = await prisma.visiteAcceptee.findMany({ select: { visiteId: true } })
     * 
    **/
    findMany<T extends VisiteAccepteeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteAccepteeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisiteAccepteePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VisiteAcceptee.
     * @param {VisiteAccepteeCreateArgs} args - Arguments to create a VisiteAcceptee.
     * @example
     * // Create one VisiteAcceptee
     * const VisiteAcceptee = await prisma.visiteAcceptee.create({
     *   data: {
     *     // ... data to create a VisiteAcceptee
     *   }
     * })
     * 
    **/
    create<T extends VisiteAccepteeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteAccepteeCreateArgs<ExtArgs>>
    ): Prisma__VisiteAccepteeClient<$Result.GetResult<Prisma.$VisiteAccepteePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a VisiteAcceptee.
     * @param {VisiteAccepteeDeleteArgs} args - Arguments to delete one VisiteAcceptee.
     * @example
     * // Delete one VisiteAcceptee
     * const VisiteAcceptee = await prisma.visiteAcceptee.delete({
     *   where: {
     *     // ... filter to delete one VisiteAcceptee
     *   }
     * })
     * 
    **/
    delete<T extends VisiteAccepteeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteAccepteeDeleteArgs<ExtArgs>>
    ): Prisma__VisiteAccepteeClient<$Result.GetResult<Prisma.$VisiteAccepteePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VisiteAcceptee.
     * @param {VisiteAccepteeUpdateArgs} args - Arguments to update one VisiteAcceptee.
     * @example
     * // Update one VisiteAcceptee
     * const visiteAcceptee = await prisma.visiteAcceptee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VisiteAccepteeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteAccepteeUpdateArgs<ExtArgs>>
    ): Prisma__VisiteAccepteeClient<$Result.GetResult<Prisma.$VisiteAccepteePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VisiteAcceptees.
     * @param {VisiteAccepteeDeleteManyArgs} args - Arguments to filter VisiteAcceptees to delete.
     * @example
     * // Delete a few VisiteAcceptees
     * const { count } = await prisma.visiteAcceptee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VisiteAccepteeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteAccepteeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisiteAcceptees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteAccepteeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisiteAcceptees
     * const visiteAcceptee = await prisma.visiteAcceptee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VisiteAccepteeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteAccepteeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VisiteAcceptee.
     * @param {VisiteAccepteeUpsertArgs} args - Arguments to update or create a VisiteAcceptee.
     * @example
     * // Update or create a VisiteAcceptee
     * const visiteAcceptee = await prisma.visiteAcceptee.upsert({
     *   create: {
     *     // ... data to create a VisiteAcceptee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisiteAcceptee we want to update
     *   }
     * })
    **/
    upsert<T extends VisiteAccepteeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteAccepteeUpsertArgs<ExtArgs>>
    ): Prisma__VisiteAccepteeClient<$Result.GetResult<Prisma.$VisiteAccepteePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VisiteAcceptees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteAccepteeCountArgs} args - Arguments to filter VisiteAcceptees to count.
     * @example
     * // Count the number of VisiteAcceptees
     * const count = await prisma.visiteAcceptee.count({
     *   where: {
     *     // ... the filter for the VisiteAcceptees we want to count
     *   }
     * })
    **/
    count<T extends VisiteAccepteeCountArgs>(
      args?: Subset<T, VisiteAccepteeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisiteAccepteeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisiteAcceptee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteAccepteeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisiteAccepteeAggregateArgs>(args: Subset<T, VisiteAccepteeAggregateArgs>): Prisma.PrismaPromise<GetVisiteAccepteeAggregateType<T>>

    /**
     * Group by VisiteAcceptee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteAccepteeGroupByArgs} args - Group by arguments.
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
      T extends VisiteAccepteeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisiteAccepteeGroupByArgs['orderBy'] }
        : { orderBy?: VisiteAccepteeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisiteAccepteeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisiteAccepteeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisiteAcceptee model
   */
  readonly fields: VisiteAccepteeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisiteAcceptee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisiteAccepteeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    visite<T extends VisiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisiteDefaultArgs<ExtArgs>>): Prisma__VisiteClient<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VisiteAcceptee model
   */ 
  interface VisiteAccepteeFieldRefs {
    readonly visiteId: FieldRef<"VisiteAcceptee", 'Int'>
    readonly dateAcceptation: FieldRef<"VisiteAcceptee", 'DateTime'>
    readonly cheminPhoto: FieldRef<"VisiteAcceptee", 'String'>
  }
    

  // Custom InputTypes

  /**
   * VisiteAcceptee findUnique
   */
  export type VisiteAccepteeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
    /**
     * Filter, which VisiteAcceptee to fetch.
     */
    where: VisiteAccepteeWhereUniqueInput
  }


  /**
   * VisiteAcceptee findUniqueOrThrow
   */
  export type VisiteAccepteeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
    /**
     * Filter, which VisiteAcceptee to fetch.
     */
    where: VisiteAccepteeWhereUniqueInput
  }


  /**
   * VisiteAcceptee findFirst
   */
  export type VisiteAccepteeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
    /**
     * Filter, which VisiteAcceptee to fetch.
     */
    where?: VisiteAccepteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiteAcceptees to fetch.
     */
    orderBy?: VisiteAccepteeOrderByWithRelationInput | VisiteAccepteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisiteAcceptees.
     */
    cursor?: VisiteAccepteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiteAcceptees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiteAcceptees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisiteAcceptees.
     */
    distinct?: VisiteAccepteeScalarFieldEnum | VisiteAccepteeScalarFieldEnum[]
  }


  /**
   * VisiteAcceptee findFirstOrThrow
   */
  export type VisiteAccepteeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
    /**
     * Filter, which VisiteAcceptee to fetch.
     */
    where?: VisiteAccepteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiteAcceptees to fetch.
     */
    orderBy?: VisiteAccepteeOrderByWithRelationInput | VisiteAccepteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisiteAcceptees.
     */
    cursor?: VisiteAccepteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiteAcceptees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiteAcceptees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisiteAcceptees.
     */
    distinct?: VisiteAccepteeScalarFieldEnum | VisiteAccepteeScalarFieldEnum[]
  }


  /**
   * VisiteAcceptee findMany
   */
  export type VisiteAccepteeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
    /**
     * Filter, which VisiteAcceptees to fetch.
     */
    where?: VisiteAccepteeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiteAcceptees to fetch.
     */
    orderBy?: VisiteAccepteeOrderByWithRelationInput | VisiteAccepteeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisiteAcceptees.
     */
    cursor?: VisiteAccepteeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiteAcceptees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiteAcceptees.
     */
    skip?: number
    distinct?: VisiteAccepteeScalarFieldEnum | VisiteAccepteeScalarFieldEnum[]
  }


  /**
   * VisiteAcceptee create
   */
  export type VisiteAccepteeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
    /**
     * The data needed to create a VisiteAcceptee.
     */
    data: XOR<VisiteAccepteeCreateInput, VisiteAccepteeUncheckedCreateInput>
  }


  /**
   * VisiteAcceptee update
   */
  export type VisiteAccepteeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
    /**
     * The data needed to update a VisiteAcceptee.
     */
    data: XOR<VisiteAccepteeUpdateInput, VisiteAccepteeUncheckedUpdateInput>
    /**
     * Choose, which VisiteAcceptee to update.
     */
    where: VisiteAccepteeWhereUniqueInput
  }


  /**
   * VisiteAcceptee updateMany
   */
  export type VisiteAccepteeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisiteAcceptees.
     */
    data: XOR<VisiteAccepteeUpdateManyMutationInput, VisiteAccepteeUncheckedUpdateManyInput>
    /**
     * Filter which VisiteAcceptees to update
     */
    where?: VisiteAccepteeWhereInput
  }


  /**
   * VisiteAcceptee upsert
   */
  export type VisiteAccepteeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
    /**
     * The filter to search for the VisiteAcceptee to update in case it exists.
     */
    where: VisiteAccepteeWhereUniqueInput
    /**
     * In case the VisiteAcceptee found by the `where` argument doesn't exist, create a new VisiteAcceptee with this data.
     */
    create: XOR<VisiteAccepteeCreateInput, VisiteAccepteeUncheckedCreateInput>
    /**
     * In case the VisiteAcceptee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisiteAccepteeUpdateInput, VisiteAccepteeUncheckedUpdateInput>
  }


  /**
   * VisiteAcceptee delete
   */
  export type VisiteAccepteeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
    /**
     * Filter which VisiteAcceptee to delete.
     */
    where: VisiteAccepteeWhereUniqueInput
  }


  /**
   * VisiteAcceptee deleteMany
   */
  export type VisiteAccepteeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisiteAcceptees to delete
     */
    where?: VisiteAccepteeWhereInput
  }


  /**
   * VisiteAcceptee without action
   */
  export type VisiteAccepteeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteAcceptee
     */
    select?: VisiteAccepteeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteAccepteeInclude<ExtArgs> | null
  }



  /**
   * Model VisiteRefusee
   */

  export type AggregateVisiteRefusee = {
    _count: VisiteRefuseeCountAggregateOutputType | null
    _avg: VisiteRefuseeAvgAggregateOutputType | null
    _sum: VisiteRefuseeSumAggregateOutputType | null
    _min: VisiteRefuseeMinAggregateOutputType | null
    _max: VisiteRefuseeMaxAggregateOutputType | null
  }

  export type VisiteRefuseeAvgAggregateOutputType = {
    visiteId: number | null
  }

  export type VisiteRefuseeSumAggregateOutputType = {
    visiteId: number | null
  }

  export type VisiteRefuseeMinAggregateOutputType = {
    visiteId: number | null
    dateRefus: Date | null
  }

  export type VisiteRefuseeMaxAggregateOutputType = {
    visiteId: number | null
    dateRefus: Date | null
  }

  export type VisiteRefuseeCountAggregateOutputType = {
    visiteId: number
    dateRefus: number
    _all: number
  }


  export type VisiteRefuseeAvgAggregateInputType = {
    visiteId?: true
  }

  export type VisiteRefuseeSumAggregateInputType = {
    visiteId?: true
  }

  export type VisiteRefuseeMinAggregateInputType = {
    visiteId?: true
    dateRefus?: true
  }

  export type VisiteRefuseeMaxAggregateInputType = {
    visiteId?: true
    dateRefus?: true
  }

  export type VisiteRefuseeCountAggregateInputType = {
    visiteId?: true
    dateRefus?: true
    _all?: true
  }

  export type VisiteRefuseeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisiteRefusee to aggregate.
     */
    where?: VisiteRefuseeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiteRefusees to fetch.
     */
    orderBy?: VisiteRefuseeOrderByWithRelationInput | VisiteRefuseeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisiteRefuseeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiteRefusees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiteRefusees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VisiteRefusees
    **/
    _count?: true | VisiteRefuseeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisiteRefuseeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisiteRefuseeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisiteRefuseeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisiteRefuseeMaxAggregateInputType
  }

  export type GetVisiteRefuseeAggregateType<T extends VisiteRefuseeAggregateArgs> = {
        [P in keyof T & keyof AggregateVisiteRefusee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisiteRefusee[P]>
      : GetScalarType<T[P], AggregateVisiteRefusee[P]>
  }




  export type VisiteRefuseeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisiteRefuseeWhereInput
    orderBy?: VisiteRefuseeOrderByWithAggregationInput | VisiteRefuseeOrderByWithAggregationInput[]
    by: VisiteRefuseeScalarFieldEnum[] | VisiteRefuseeScalarFieldEnum
    having?: VisiteRefuseeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisiteRefuseeCountAggregateInputType | true
    _avg?: VisiteRefuseeAvgAggregateInputType
    _sum?: VisiteRefuseeSumAggregateInputType
    _min?: VisiteRefuseeMinAggregateInputType
    _max?: VisiteRefuseeMaxAggregateInputType
  }

  export type VisiteRefuseeGroupByOutputType = {
    visiteId: number
    dateRefus: Date | null
    _count: VisiteRefuseeCountAggregateOutputType | null
    _avg: VisiteRefuseeAvgAggregateOutputType | null
    _sum: VisiteRefuseeSumAggregateOutputType | null
    _min: VisiteRefuseeMinAggregateOutputType | null
    _max: VisiteRefuseeMaxAggregateOutputType | null
  }

  type GetVisiteRefuseeGroupByPayload<T extends VisiteRefuseeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisiteRefuseeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisiteRefuseeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisiteRefuseeGroupByOutputType[P]>
            : GetScalarType<T[P], VisiteRefuseeGroupByOutputType[P]>
        }
      >
    >


  export type VisiteRefuseeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    visiteId?: boolean
    dateRefus?: boolean
    visite?: boolean | VisiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visiteRefusee"]>

  export type VisiteRefuseeSelectScalar = {
    visiteId?: boolean
    dateRefus?: boolean
  }

  export type VisiteRefuseeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    visite?: boolean | VisiteDefaultArgs<ExtArgs>
  }


  export type $VisiteRefuseePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VisiteRefusee"
    objects: {
      visite: Prisma.$VisitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      visiteId: number
      dateRefus: Date | null
    }, ExtArgs["result"]["visiteRefusee"]>
    composites: {}
  }


  type VisiteRefuseeGetPayload<S extends boolean | null | undefined | VisiteRefuseeDefaultArgs> = $Result.GetResult<Prisma.$VisiteRefuseePayload, S>

  type VisiteRefuseeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VisiteRefuseeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VisiteRefuseeCountAggregateInputType | true
    }

  export interface VisiteRefuseeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VisiteRefusee'], meta: { name: 'VisiteRefusee' } }
    /**
     * Find zero or one VisiteRefusee that matches the filter.
     * @param {VisiteRefuseeFindUniqueArgs} args - Arguments to find a VisiteRefusee
     * @example
     * // Get one VisiteRefusee
     * const visiteRefusee = await prisma.visiteRefusee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VisiteRefuseeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteRefuseeFindUniqueArgs<ExtArgs>>
    ): Prisma__VisiteRefuseeClient<$Result.GetResult<Prisma.$VisiteRefuseePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VisiteRefusee that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VisiteRefuseeFindUniqueOrThrowArgs} args - Arguments to find a VisiteRefusee
     * @example
     * // Get one VisiteRefusee
     * const visiteRefusee = await prisma.visiteRefusee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VisiteRefuseeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteRefuseeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VisiteRefuseeClient<$Result.GetResult<Prisma.$VisiteRefuseePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VisiteRefusee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteRefuseeFindFirstArgs} args - Arguments to find a VisiteRefusee
     * @example
     * // Get one VisiteRefusee
     * const visiteRefusee = await prisma.visiteRefusee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VisiteRefuseeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteRefuseeFindFirstArgs<ExtArgs>>
    ): Prisma__VisiteRefuseeClient<$Result.GetResult<Prisma.$VisiteRefuseePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VisiteRefusee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteRefuseeFindFirstOrThrowArgs} args - Arguments to find a VisiteRefusee
     * @example
     * // Get one VisiteRefusee
     * const visiteRefusee = await prisma.visiteRefusee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VisiteRefuseeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteRefuseeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VisiteRefuseeClient<$Result.GetResult<Prisma.$VisiteRefuseePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VisiteRefusees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteRefuseeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VisiteRefusees
     * const visiteRefusees = await prisma.visiteRefusee.findMany()
     * 
     * // Get first 10 VisiteRefusees
     * const visiteRefusees = await prisma.visiteRefusee.findMany({ take: 10 })
     * 
     * // Only select the `visiteId`
     * const visiteRefuseeWithVisiteIdOnly = await prisma.visiteRefusee.findMany({ select: { visiteId: true } })
     * 
    **/
    findMany<T extends VisiteRefuseeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteRefuseeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisiteRefuseePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VisiteRefusee.
     * @param {VisiteRefuseeCreateArgs} args - Arguments to create a VisiteRefusee.
     * @example
     * // Create one VisiteRefusee
     * const VisiteRefusee = await prisma.visiteRefusee.create({
     *   data: {
     *     // ... data to create a VisiteRefusee
     *   }
     * })
     * 
    **/
    create<T extends VisiteRefuseeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteRefuseeCreateArgs<ExtArgs>>
    ): Prisma__VisiteRefuseeClient<$Result.GetResult<Prisma.$VisiteRefuseePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a VisiteRefusee.
     * @param {VisiteRefuseeDeleteArgs} args - Arguments to delete one VisiteRefusee.
     * @example
     * // Delete one VisiteRefusee
     * const VisiteRefusee = await prisma.visiteRefusee.delete({
     *   where: {
     *     // ... filter to delete one VisiteRefusee
     *   }
     * })
     * 
    **/
    delete<T extends VisiteRefuseeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteRefuseeDeleteArgs<ExtArgs>>
    ): Prisma__VisiteRefuseeClient<$Result.GetResult<Prisma.$VisiteRefuseePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VisiteRefusee.
     * @param {VisiteRefuseeUpdateArgs} args - Arguments to update one VisiteRefusee.
     * @example
     * // Update one VisiteRefusee
     * const visiteRefusee = await prisma.visiteRefusee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VisiteRefuseeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteRefuseeUpdateArgs<ExtArgs>>
    ): Prisma__VisiteRefuseeClient<$Result.GetResult<Prisma.$VisiteRefuseePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VisiteRefusees.
     * @param {VisiteRefuseeDeleteManyArgs} args - Arguments to filter VisiteRefusees to delete.
     * @example
     * // Delete a few VisiteRefusees
     * const { count } = await prisma.visiteRefusee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VisiteRefuseeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VisiteRefuseeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VisiteRefusees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteRefuseeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VisiteRefusees
     * const visiteRefusee = await prisma.visiteRefusee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VisiteRefuseeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteRefuseeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VisiteRefusee.
     * @param {VisiteRefuseeUpsertArgs} args - Arguments to update or create a VisiteRefusee.
     * @example
     * // Update or create a VisiteRefusee
     * const visiteRefusee = await prisma.visiteRefusee.upsert({
     *   create: {
     *     // ... data to create a VisiteRefusee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VisiteRefusee we want to update
     *   }
     * })
    **/
    upsert<T extends VisiteRefuseeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VisiteRefuseeUpsertArgs<ExtArgs>>
    ): Prisma__VisiteRefuseeClient<$Result.GetResult<Prisma.$VisiteRefuseePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VisiteRefusees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteRefuseeCountArgs} args - Arguments to filter VisiteRefusees to count.
     * @example
     * // Count the number of VisiteRefusees
     * const count = await prisma.visiteRefusee.count({
     *   where: {
     *     // ... the filter for the VisiteRefusees we want to count
     *   }
     * })
    **/
    count<T extends VisiteRefuseeCountArgs>(
      args?: Subset<T, VisiteRefuseeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisiteRefuseeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VisiteRefusee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteRefuseeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisiteRefuseeAggregateArgs>(args: Subset<T, VisiteRefuseeAggregateArgs>): Prisma.PrismaPromise<GetVisiteRefuseeAggregateType<T>>

    /**
     * Group by VisiteRefusee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisiteRefuseeGroupByArgs} args - Group by arguments.
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
      T extends VisiteRefuseeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisiteRefuseeGroupByArgs['orderBy'] }
        : { orderBy?: VisiteRefuseeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisiteRefuseeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisiteRefuseeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VisiteRefusee model
   */
  readonly fields: VisiteRefuseeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VisiteRefusee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisiteRefuseeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    visite<T extends VisiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VisiteDefaultArgs<ExtArgs>>): Prisma__VisiteClient<$Result.GetResult<Prisma.$VisitePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VisiteRefusee model
   */ 
  interface VisiteRefuseeFieldRefs {
    readonly visiteId: FieldRef<"VisiteRefusee", 'Int'>
    readonly dateRefus: FieldRef<"VisiteRefusee", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VisiteRefusee findUnique
   */
  export type VisiteRefuseeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
    /**
     * Filter, which VisiteRefusee to fetch.
     */
    where: VisiteRefuseeWhereUniqueInput
  }


  /**
   * VisiteRefusee findUniqueOrThrow
   */
  export type VisiteRefuseeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
    /**
     * Filter, which VisiteRefusee to fetch.
     */
    where: VisiteRefuseeWhereUniqueInput
  }


  /**
   * VisiteRefusee findFirst
   */
  export type VisiteRefuseeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
    /**
     * Filter, which VisiteRefusee to fetch.
     */
    where?: VisiteRefuseeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiteRefusees to fetch.
     */
    orderBy?: VisiteRefuseeOrderByWithRelationInput | VisiteRefuseeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisiteRefusees.
     */
    cursor?: VisiteRefuseeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiteRefusees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiteRefusees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisiteRefusees.
     */
    distinct?: VisiteRefuseeScalarFieldEnum | VisiteRefuseeScalarFieldEnum[]
  }


  /**
   * VisiteRefusee findFirstOrThrow
   */
  export type VisiteRefuseeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
    /**
     * Filter, which VisiteRefusee to fetch.
     */
    where?: VisiteRefuseeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiteRefusees to fetch.
     */
    orderBy?: VisiteRefuseeOrderByWithRelationInput | VisiteRefuseeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VisiteRefusees.
     */
    cursor?: VisiteRefuseeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiteRefusees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiteRefusees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VisiteRefusees.
     */
    distinct?: VisiteRefuseeScalarFieldEnum | VisiteRefuseeScalarFieldEnum[]
  }


  /**
   * VisiteRefusee findMany
   */
  export type VisiteRefuseeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
    /**
     * Filter, which VisiteRefusees to fetch.
     */
    where?: VisiteRefuseeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VisiteRefusees to fetch.
     */
    orderBy?: VisiteRefuseeOrderByWithRelationInput | VisiteRefuseeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VisiteRefusees.
     */
    cursor?: VisiteRefuseeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VisiteRefusees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VisiteRefusees.
     */
    skip?: number
    distinct?: VisiteRefuseeScalarFieldEnum | VisiteRefuseeScalarFieldEnum[]
  }


  /**
   * VisiteRefusee create
   */
  export type VisiteRefuseeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
    /**
     * The data needed to create a VisiteRefusee.
     */
    data: XOR<VisiteRefuseeCreateInput, VisiteRefuseeUncheckedCreateInput>
  }


  /**
   * VisiteRefusee update
   */
  export type VisiteRefuseeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
    /**
     * The data needed to update a VisiteRefusee.
     */
    data: XOR<VisiteRefuseeUpdateInput, VisiteRefuseeUncheckedUpdateInput>
    /**
     * Choose, which VisiteRefusee to update.
     */
    where: VisiteRefuseeWhereUniqueInput
  }


  /**
   * VisiteRefusee updateMany
   */
  export type VisiteRefuseeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VisiteRefusees.
     */
    data: XOR<VisiteRefuseeUpdateManyMutationInput, VisiteRefuseeUncheckedUpdateManyInput>
    /**
     * Filter which VisiteRefusees to update
     */
    where?: VisiteRefuseeWhereInput
  }


  /**
   * VisiteRefusee upsert
   */
  export type VisiteRefuseeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
    /**
     * The filter to search for the VisiteRefusee to update in case it exists.
     */
    where: VisiteRefuseeWhereUniqueInput
    /**
     * In case the VisiteRefusee found by the `where` argument doesn't exist, create a new VisiteRefusee with this data.
     */
    create: XOR<VisiteRefuseeCreateInput, VisiteRefuseeUncheckedCreateInput>
    /**
     * In case the VisiteRefusee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisiteRefuseeUpdateInput, VisiteRefuseeUncheckedUpdateInput>
  }


  /**
   * VisiteRefusee delete
   */
  export type VisiteRefuseeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
    /**
     * Filter which VisiteRefusee to delete.
     */
    where: VisiteRefuseeWhereUniqueInput
  }


  /**
   * VisiteRefusee deleteMany
   */
  export type VisiteRefuseeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VisiteRefusees to delete
     */
    where?: VisiteRefuseeWhereInput
  }


  /**
   * VisiteRefusee without action
   */
  export type VisiteRefuseeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VisiteRefusee
     */
    select?: VisiteRefuseeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VisiteRefuseeInclude<ExtArgs> | null
  }



  /**
   * Model Plante
   */

  export type AggregatePlante = {
    _count: PlanteCountAggregateOutputType | null
    _avg: PlanteAvgAggregateOutputType | null
    _sum: PlanteSumAggregateOutputType | null
    _min: PlanteMinAggregateOutputType | null
    _max: PlanteMaxAggregateOutputType | null
  }

  export type PlanteAvgAggregateOutputType = {
    id: number | null
    categorieId: number | null
  }

  export type PlanteSumAggregateOutputType = {
    id: number | null
    categorieId: number | null
  }

  export type PlanteMinAggregateOutputType = {
    id: number | null
    libelle: string | null
    description: string | null
    categorieId: number | null
  }

  export type PlanteMaxAggregateOutputType = {
    id: number | null
    libelle: string | null
    description: string | null
    categorieId: number | null
  }

  export type PlanteCountAggregateOutputType = {
    id: number
    libelle: number
    description: number
    categorieId: number
    _all: number
  }


  export type PlanteAvgAggregateInputType = {
    id?: true
    categorieId?: true
  }

  export type PlanteSumAggregateInputType = {
    id?: true
    categorieId?: true
  }

  export type PlanteMinAggregateInputType = {
    id?: true
    libelle?: true
    description?: true
    categorieId?: true
  }

  export type PlanteMaxAggregateInputType = {
    id?: true
    libelle?: true
    description?: true
    categorieId?: true
  }

  export type PlanteCountAggregateInputType = {
    id?: true
    libelle?: true
    description?: true
    categorieId?: true
    _all?: true
  }

  export type PlanteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plante to aggregate.
     */
    where?: PlanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantes to fetch.
     */
    orderBy?: PlanteOrderByWithRelationInput | PlanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plantes
    **/
    _count?: true | PlanteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanteMaxAggregateInputType
  }

  export type GetPlanteAggregateType<T extends PlanteAggregateArgs> = {
        [P in keyof T & keyof AggregatePlante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlante[P]>
      : GetScalarType<T[P], AggregatePlante[P]>
  }




  export type PlanteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanteWhereInput
    orderBy?: PlanteOrderByWithAggregationInput | PlanteOrderByWithAggregationInput[]
    by: PlanteScalarFieldEnum[] | PlanteScalarFieldEnum
    having?: PlanteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanteCountAggregateInputType | true
    _avg?: PlanteAvgAggregateInputType
    _sum?: PlanteSumAggregateInputType
    _min?: PlanteMinAggregateInputType
    _max?: PlanteMaxAggregateInputType
  }

  export type PlanteGroupByOutputType = {
    id: number
    libelle: string
    description: string
    categorieId: number
    _count: PlanteCountAggregateOutputType | null
    _avg: PlanteAvgAggregateOutputType | null
    _sum: PlanteSumAggregateOutputType | null
    _min: PlanteMinAggregateOutputType | null
    _max: PlanteMaxAggregateOutputType | null
  }

  type GetPlanteGroupByPayload<T extends PlanteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanteGroupByOutputType[P]>
            : GetScalarType<T[P], PlanteGroupByOutputType[P]>
        }
      >
    >


  export type PlanteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    description?: boolean
    categorieId?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    annonces?: boolean | Plante$annoncesArgs<ExtArgs>
    _count?: boolean | PlanteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plante"]>

  export type PlanteSelectScalar = {
    id?: boolean
    libelle?: boolean
    description?: boolean
    categorieId?: boolean
  }

  export type PlanteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    annonces?: boolean | Plante$annoncesArgs<ExtArgs>
    _count?: boolean | PlanteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plante"
    objects: {
      categorie: Prisma.$CategoriePayload<ExtArgs>
      annonces: Prisma.$AnnoncePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle: string
      description: string
      categorieId: number
    }, ExtArgs["result"]["plante"]>
    composites: {}
  }


  type PlanteGetPayload<S extends boolean | null | undefined | PlanteDefaultArgs> = $Result.GetResult<Prisma.$PlantePayload, S>

  type PlanteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PlanteCountAggregateInputType | true
    }

  export interface PlanteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plante'], meta: { name: 'Plante' } }
    /**
     * Find zero or one Plante that matches the filter.
     * @param {PlanteFindUniqueArgs} args - Arguments to find a Plante
     * @example
     * // Get one Plante
     * const plante = await prisma.plante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlanteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlanteFindUniqueArgs<ExtArgs>>
    ): Prisma__PlanteClient<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Plante that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlanteFindUniqueOrThrowArgs} args - Arguments to find a Plante
     * @example
     * // Get one Plante
     * const plante = await prisma.plante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlanteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlanteClient<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Plante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanteFindFirstArgs} args - Arguments to find a Plante
     * @example
     * // Get one Plante
     * const plante = await prisma.plante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlanteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanteFindFirstArgs<ExtArgs>>
    ): Prisma__PlanteClient<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Plante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanteFindFirstOrThrowArgs} args - Arguments to find a Plante
     * @example
     * // Get one Plante
     * const plante = await prisma.plante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlanteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlanteClient<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Plantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plantes
     * const plantes = await prisma.plante.findMany()
     * 
     * // Get first 10 Plantes
     * const plantes = await prisma.plante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planteWithIdOnly = await prisma.plante.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlanteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Plante.
     * @param {PlanteCreateArgs} args - Arguments to create a Plante.
     * @example
     * // Create one Plante
     * const Plante = await prisma.plante.create({
     *   data: {
     *     // ... data to create a Plante
     *   }
     * })
     * 
    **/
    create<T extends PlanteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanteCreateArgs<ExtArgs>>
    ): Prisma__PlanteClient<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Plante.
     * @param {PlanteDeleteArgs} args - Arguments to delete one Plante.
     * @example
     * // Delete one Plante
     * const Plante = await prisma.plante.delete({
     *   where: {
     *     // ... filter to delete one Plante
     *   }
     * })
     * 
    **/
    delete<T extends PlanteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlanteDeleteArgs<ExtArgs>>
    ): Prisma__PlanteClient<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Plante.
     * @param {PlanteUpdateArgs} args - Arguments to update one Plante.
     * @example
     * // Update one Plante
     * const plante = await prisma.plante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlanteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanteUpdateArgs<ExtArgs>>
    ): Prisma__PlanteClient<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Plantes.
     * @param {PlanteDeleteManyArgs} args - Arguments to filter Plantes to delete.
     * @example
     * // Delete a few Plantes
     * const { count } = await prisma.plante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlanteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plantes
     * const plante = await prisma.plante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlanteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlanteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plante.
     * @param {PlanteUpsertArgs} args - Arguments to update or create a Plante.
     * @example
     * // Update or create a Plante
     * const plante = await prisma.plante.upsert({
     *   create: {
     *     // ... data to create a Plante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plante we want to update
     *   }
     * })
    **/
    upsert<T extends PlanteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlanteUpsertArgs<ExtArgs>>
    ): Prisma__PlanteClient<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Plantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanteCountArgs} args - Arguments to filter Plantes to count.
     * @example
     * // Count the number of Plantes
     * const count = await prisma.plante.count({
     *   where: {
     *     // ... the filter for the Plantes we want to count
     *   }
     * })
    **/
    count<T extends PlanteCountArgs>(
      args?: Subset<T, PlanteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanteAggregateArgs>(args: Subset<T, PlanteAggregateArgs>): Prisma.PrismaPromise<GetPlanteAggregateType<T>>

    /**
     * Group by Plante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanteGroupByArgs} args - Group by arguments.
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
      T extends PlanteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanteGroupByArgs['orderBy'] }
        : { orderBy?: PlanteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plante model
   */
  readonly fields: PlanteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    categorie<T extends CategorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorieDefaultArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    annonces<T extends Plante$annoncesArgs<ExtArgs> = {}>(args?: Subset<T, Plante$annoncesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnoncePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Plante model
   */ 
  interface PlanteFieldRefs {
    readonly id: FieldRef<"Plante", 'Int'>
    readonly libelle: FieldRef<"Plante", 'String'>
    readonly description: FieldRef<"Plante", 'String'>
    readonly categorieId: FieldRef<"Plante", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Plante findUnique
   */
  export type PlanteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
    /**
     * Filter, which Plante to fetch.
     */
    where: PlanteWhereUniqueInput
  }


  /**
   * Plante findUniqueOrThrow
   */
  export type PlanteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
    /**
     * Filter, which Plante to fetch.
     */
    where: PlanteWhereUniqueInput
  }


  /**
   * Plante findFirst
   */
  export type PlanteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
    /**
     * Filter, which Plante to fetch.
     */
    where?: PlanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantes to fetch.
     */
    orderBy?: PlanteOrderByWithRelationInput | PlanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantes.
     */
    cursor?: PlanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantes.
     */
    distinct?: PlanteScalarFieldEnum | PlanteScalarFieldEnum[]
  }


  /**
   * Plante findFirstOrThrow
   */
  export type PlanteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
    /**
     * Filter, which Plante to fetch.
     */
    where?: PlanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantes to fetch.
     */
    orderBy?: PlanteOrderByWithRelationInput | PlanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plantes.
     */
    cursor?: PlanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plantes.
     */
    distinct?: PlanteScalarFieldEnum | PlanteScalarFieldEnum[]
  }


  /**
   * Plante findMany
   */
  export type PlanteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
    /**
     * Filter, which Plantes to fetch.
     */
    where?: PlanteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plantes to fetch.
     */
    orderBy?: PlanteOrderByWithRelationInput | PlanteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plantes.
     */
    cursor?: PlanteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plantes.
     */
    skip?: number
    distinct?: PlanteScalarFieldEnum | PlanteScalarFieldEnum[]
  }


  /**
   * Plante create
   */
  export type PlanteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
    /**
     * The data needed to create a Plante.
     */
    data: XOR<PlanteCreateInput, PlanteUncheckedCreateInput>
  }


  /**
   * Plante update
   */
  export type PlanteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
    /**
     * The data needed to update a Plante.
     */
    data: XOR<PlanteUpdateInput, PlanteUncheckedUpdateInput>
    /**
     * Choose, which Plante to update.
     */
    where: PlanteWhereUniqueInput
  }


  /**
   * Plante updateMany
   */
  export type PlanteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plantes.
     */
    data: XOR<PlanteUpdateManyMutationInput, PlanteUncheckedUpdateManyInput>
    /**
     * Filter which Plantes to update
     */
    where?: PlanteWhereInput
  }


  /**
   * Plante upsert
   */
  export type PlanteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
    /**
     * The filter to search for the Plante to update in case it exists.
     */
    where: PlanteWhereUniqueInput
    /**
     * In case the Plante found by the `where` argument doesn't exist, create a new Plante with this data.
     */
    create: XOR<PlanteCreateInput, PlanteUncheckedCreateInput>
    /**
     * In case the Plante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanteUpdateInput, PlanteUncheckedUpdateInput>
  }


  /**
   * Plante delete
   */
  export type PlanteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
    /**
     * Filter which Plante to delete.
     */
    where: PlanteWhereUniqueInput
  }


  /**
   * Plante deleteMany
   */
  export type PlanteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plantes to delete
     */
    where?: PlanteWhereInput
  }


  /**
   * Plante.annonces
   */
  export type Plante$annoncesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Annonce
     */
    select?: AnnonceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnnonceInclude<ExtArgs> | null
    where?: AnnonceWhereInput
    orderBy?: AnnonceOrderByWithRelationInput | AnnonceOrderByWithRelationInput[]
    cursor?: AnnonceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnonceScalarFieldEnum | AnnonceScalarFieldEnum[]
  }


  /**
   * Plante without action
   */
  export type PlanteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
  }



  /**
   * Model Categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorieSumAggregateOutputType = {
    id: number | null
  }

  export type CategorieMinAggregateOutputType = {
    id: number | null
    libelle: string | null
  }

  export type CategorieMaxAggregateOutputType = {
    id: number | null
    libelle: string | null
  }

  export type CategorieCountAggregateOutputType = {
    id: number
    libelle: number
    _all: number
  }


  export type CategorieAvgAggregateInputType = {
    id?: true
  }

  export type CategorieSumAggregateInputType = {
    id?: true
  }

  export type CategorieMinAggregateInputType = {
    id?: true
    libelle?: true
  }

  export type CategorieMaxAggregateInputType = {
    id?: true
    libelle?: true
  }

  export type CategorieCountAggregateInputType = {
    id?: true
    libelle?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorie to aggregate.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieWhereUniqueInput
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
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieWhereInput
    orderBy?: CategorieOrderByWithAggregationInput | CategorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _avg?: CategorieAvgAggregateInputType
    _sum?: CategorieSumAggregateInputType
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id: number
    libelle: string
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    lesPlantes?: boolean | Categorie$lesPlantesArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectScalar = {
    id?: boolean
    libelle?: boolean
  }

  export type CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesPlantes?: boolean | Categorie$lesPlantesArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorie"
    objects: {
      lesPlantes: Prisma.$PlantePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle: string
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }


  type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = $Result.GetResult<Prisma.$CategoriePayload, S>

  type CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorie'], meta: { name: 'Categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {CategorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategorieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>
    ): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Categorie that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategorieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>
    ): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieWithIdOnly = await prisma.categorie.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategorieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategorieFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Categorie.
     * @param {CategorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
    **/
    create<T extends CategorieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategorieCreateArgs<ExtArgs>>
    ): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Categorie.
     * @param {CategorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
    **/
    delete<T extends CategorieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategorieDeleteArgs<ExtArgs>>
    ): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Categorie.
     * @param {CategorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategorieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategorieUpdateArgs<ExtArgs>>
    ): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategorieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategorieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorie.
     * @param {CategorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
    **/
    upsert<T extends CategorieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategorieUpsertArgs<ExtArgs>>
    ): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategorieCountArgs>(
      args?: Subset<T, CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
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
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorie model
   */
  readonly fields: CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    lesPlantes<T extends Categorie$lesPlantesArgs<ExtArgs> = {}>(args?: Subset<T, Categorie$lesPlantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Categorie model
   */ 
  interface CategorieFieldRefs {
    readonly id: FieldRef<"Categorie", 'Int'>
    readonly libelle: FieldRef<"Categorie", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Categorie findUnique
   */
  export type CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }


  /**
   * Categorie findUniqueOrThrow
   */
  export type CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }


  /**
   * Categorie findFirst
   */
  export type CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
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
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }


  /**
   * Categorie findFirstOrThrow
   */
  export type CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
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
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }


  /**
   * Categorie findMany
   */
  export type CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategorieWhereUniqueInput
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
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }


  /**
   * Categorie create
   */
  export type CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorie.
     */
    data: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
  }


  /**
   * Categorie update
   */
  export type CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorie.
     */
    data: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
    /**
     * Choose, which Categorie to update.
     */
    where: CategorieWhereUniqueInput
  }


  /**
   * Categorie updateMany
   */
  export type CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
  }


  /**
   * Categorie upsert
   */
  export type CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorie to update in case it exists.
     */
    where: CategorieWhereUniqueInput
    /**
     * In case the Categorie found by the `where` argument doesn't exist, create a new Categorie with this data.
     */
    create: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
    /**
     * In case the Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
  }


  /**
   * Categorie delete
   */
  export type CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter which Categorie to delete.
     */
    where: CategorieWhereUniqueInput
  }


  /**
   * Categorie deleteMany
   */
  export type CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategorieWhereInput
  }


  /**
   * Categorie.lesPlantes
   */
  export type Categorie$lesPlantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plante
     */
    select?: PlanteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanteInclude<ExtArgs> | null
    where?: PlanteWhereInput
    orderBy?: PlanteOrderByWithRelationInput | PlanteOrderByWithRelationInput[]
    cursor?: PlanteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanteScalarFieldEnum | PlanteScalarFieldEnum[]
  }


  /**
   * Categorie without action
   */
  export type CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategorieInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    email: 'email',
    motDePasse: 'motDePasse',
    prenom: 'prenom',
    nom: 'nom',
    ville: 'ville',
    cp: 'cp',
    rue: 'rue',
    description: 'description',
    cheminPhoto: 'cheminPhoto',
    dateInscription: 'dateInscription'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    nom: 'nom'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const RoleUtilisateurScalarFieldEnum: {
    utilisateurId: 'utilisateurId',
    roleId: 'roleId'
  };

  export type RoleUtilisateurScalarFieldEnum = (typeof RoleUtilisateurScalarFieldEnum)[keyof typeof RoleUtilisateurScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    cheminPhoto: 'cheminPhoto',
    annonceId: 'annonceId'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const AnnonceScalarFieldEnum: {
    id: 'id',
    description: 'description',
    datePublication: 'datePublication',
    auteurId: 'auteurId',
    planteId: 'planteId'
  };

  export type AnnonceScalarFieldEnum = (typeof AnnonceScalarFieldEnum)[keyof typeof AnnonceScalarFieldEnum]


  export const VisiteScalarFieldEnum: {
    id: 'id',
    dateVisite: 'dateVisite',
    dateInvitation: 'dateInvitation',
    visiteurId: 'visiteurId',
    annonceId: 'annonceId'
  };

  export type VisiteScalarFieldEnum = (typeof VisiteScalarFieldEnum)[keyof typeof VisiteScalarFieldEnum]


  export const VisiteAccepteeScalarFieldEnum: {
    visiteId: 'visiteId',
    dateAcceptation: 'dateAcceptation',
    cheminPhoto: 'cheminPhoto'
  };

  export type VisiteAccepteeScalarFieldEnum = (typeof VisiteAccepteeScalarFieldEnum)[keyof typeof VisiteAccepteeScalarFieldEnum]


  export const VisiteRefuseeScalarFieldEnum: {
    visiteId: 'visiteId',
    dateRefus: 'dateRefus'
  };

  export type VisiteRefuseeScalarFieldEnum = (typeof VisiteRefuseeScalarFieldEnum)[keyof typeof VisiteRefuseeScalarFieldEnum]


  export const PlanteScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle',
    description: 'description',
    categorieId: 'categorieId'
  };

  export type PlanteScalarFieldEnum = (typeof PlanteScalarFieldEnum)[keyof typeof PlanteScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UtilisateurOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UtilisateurOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    motDePasse?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    ville?: StringNullableFilter<"Utilisateur"> | string | null
    cp?: StringNullableFilter<"Utilisateur"> | string | null
    rue?: StringNullableFilter<"Utilisateur"> | string | null
    description?: StringNullableFilter<"Utilisateur"> | string | null
    cheminPhoto?: StringNullableFilter<"Utilisateur"> | string | null
    dateInscription?: DateTimeFilter<"Utilisateur"> | Date | string
    rolesUtilisateurs?: RoleUtilisateurListRelationFilter
    lesAnnonces?: AnnonceListRelationFilter
    lesVisites?: VisiteListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    ville?: SortOrderInput | SortOrder
    cp?: SortOrderInput | SortOrder
    rue?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    cheminPhoto?: SortOrderInput | SortOrder
    dateInscription?: SortOrder
    rolesUtilisateurs?: RoleUtilisateurOrderByRelationAggregateInput
    lesAnnonces?: AnnonceOrderByRelationAggregateInput
    lesVisites?: VisiteOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    motDePasse?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    ville?: StringNullableFilter<"Utilisateur"> | string | null
    cp?: StringNullableFilter<"Utilisateur"> | string | null
    rue?: StringNullableFilter<"Utilisateur"> | string | null
    description?: StringNullableFilter<"Utilisateur"> | string | null
    cheminPhoto?: StringNullableFilter<"Utilisateur"> | string | null
    dateInscription?: DateTimeFilter<"Utilisateur"> | Date | string
    rolesUtilisateurs?: RoleUtilisateurListRelationFilter
    lesAnnonces?: AnnonceListRelationFilter
    lesVisites?: VisiteListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    ville?: SortOrderInput | SortOrder
    cp?: SortOrderInput | SortOrder
    rue?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    cheminPhoto?: SortOrderInput | SortOrder
    dateInscription?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    motDePasse?: StringWithAggregatesFilter<"Utilisateur"> | string
    prenom?: StringWithAggregatesFilter<"Utilisateur"> | string
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    ville?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    cp?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    rue?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    description?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    cheminPhoto?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    dateInscription?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    nom?: StringNullableFilter<"Role"> | string | null
    rolesUtilisateurs?: RoleUtilisateurListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrderInput | SortOrder
    rolesUtilisateurs?: RoleUtilisateurOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    nom?: StringNullableFilter<"Role"> | string | null
    rolesUtilisateurs?: RoleUtilisateurListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    nom?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type RoleUtilisateurWhereInput = {
    AND?: RoleUtilisateurWhereInput | RoleUtilisateurWhereInput[]
    OR?: RoleUtilisateurWhereInput[]
    NOT?: RoleUtilisateurWhereInput | RoleUtilisateurWhereInput[]
    utilisateurId?: StringFilter<"RoleUtilisateur"> | string
    roleId?: IntFilter<"RoleUtilisateur"> | number
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type RoleUtilisateurOrderByWithRelationInput = {
    utilisateurId?: SortOrder
    roleId?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type RoleUtilisateurWhereUniqueInput = Prisma.AtLeast<{
    utilisateurId_roleId?: RoleUtilisateurUtilisateurIdRoleIdCompoundUniqueInput
    AND?: RoleUtilisateurWhereInput | RoleUtilisateurWhereInput[]
    OR?: RoleUtilisateurWhereInput[]
    NOT?: RoleUtilisateurWhereInput | RoleUtilisateurWhereInput[]
    utilisateurId?: StringFilter<"RoleUtilisateur"> | string
    roleId?: IntFilter<"RoleUtilisateur"> | number
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "utilisateurId_roleId">

  export type RoleUtilisateurOrderByWithAggregationInput = {
    utilisateurId?: SortOrder
    roleId?: SortOrder
    _count?: RoleUtilisateurCountOrderByAggregateInput
    _avg?: RoleUtilisateurAvgOrderByAggregateInput
    _max?: RoleUtilisateurMaxOrderByAggregateInput
    _min?: RoleUtilisateurMinOrderByAggregateInput
    _sum?: RoleUtilisateurSumOrderByAggregateInput
  }

  export type RoleUtilisateurScalarWhereWithAggregatesInput = {
    AND?: RoleUtilisateurScalarWhereWithAggregatesInput | RoleUtilisateurScalarWhereWithAggregatesInput[]
    OR?: RoleUtilisateurScalarWhereWithAggregatesInput[]
    NOT?: RoleUtilisateurScalarWhereWithAggregatesInput | RoleUtilisateurScalarWhereWithAggregatesInput[]
    utilisateurId?: StringWithAggregatesFilter<"RoleUtilisateur"> | string
    roleId?: IntWithAggregatesFilter<"RoleUtilisateur"> | number
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: IntFilter<"Photo"> | number
    cheminPhoto?: StringFilter<"Photo"> | string
    annonceId?: IntFilter<"Photo"> | number
    annonce?: XOR<AnnonceRelationFilter, AnnonceWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    cheminPhoto?: SortOrder
    annonceId?: SortOrder
    annonce?: AnnonceOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    cheminPhoto?: StringFilter<"Photo"> | string
    annonceId?: IntFilter<"Photo"> | number
    annonce?: XOR<AnnonceRelationFilter, AnnonceWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    cheminPhoto?: SortOrder
    annonceId?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photo"> | number
    cheminPhoto?: StringWithAggregatesFilter<"Photo"> | string
    annonceId?: IntWithAggregatesFilter<"Photo"> | number
  }

  export type AnnonceWhereInput = {
    AND?: AnnonceWhereInput | AnnonceWhereInput[]
    OR?: AnnonceWhereInput[]
    NOT?: AnnonceWhereInput | AnnonceWhereInput[]
    id?: IntFilter<"Annonce"> | number
    description?: StringFilter<"Annonce"> | string
    datePublication?: DateTimeFilter<"Annonce"> | Date | string
    auteurId?: StringFilter<"Annonce"> | string
    planteId?: IntFilter<"Annonce"> | number
    auteur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    plante?: XOR<PlanteRelationFilter, PlanteWhereInput>
    lesPhotos?: PhotoListRelationFilter
    lesVisites?: VisiteListRelationFilter
  }

  export type AnnonceOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    datePublication?: SortOrder
    auteurId?: SortOrder
    planteId?: SortOrder
    auteur?: UtilisateurOrderByWithRelationInput
    plante?: PlanteOrderByWithRelationInput
    lesPhotos?: PhotoOrderByRelationAggregateInput
    lesVisites?: VisiteOrderByRelationAggregateInput
  }

  export type AnnonceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnonceWhereInput | AnnonceWhereInput[]
    OR?: AnnonceWhereInput[]
    NOT?: AnnonceWhereInput | AnnonceWhereInput[]
    description?: StringFilter<"Annonce"> | string
    datePublication?: DateTimeFilter<"Annonce"> | Date | string
    auteurId?: StringFilter<"Annonce"> | string
    planteId?: IntFilter<"Annonce"> | number
    auteur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    plante?: XOR<PlanteRelationFilter, PlanteWhereInput>
    lesPhotos?: PhotoListRelationFilter
    lesVisites?: VisiteListRelationFilter
  }, "id">

  export type AnnonceOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    datePublication?: SortOrder
    auteurId?: SortOrder
    planteId?: SortOrder
    _count?: AnnonceCountOrderByAggregateInput
    _avg?: AnnonceAvgOrderByAggregateInput
    _max?: AnnonceMaxOrderByAggregateInput
    _min?: AnnonceMinOrderByAggregateInput
    _sum?: AnnonceSumOrderByAggregateInput
  }

  export type AnnonceScalarWhereWithAggregatesInput = {
    AND?: AnnonceScalarWhereWithAggregatesInput | AnnonceScalarWhereWithAggregatesInput[]
    OR?: AnnonceScalarWhereWithAggregatesInput[]
    NOT?: AnnonceScalarWhereWithAggregatesInput | AnnonceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Annonce"> | number
    description?: StringWithAggregatesFilter<"Annonce"> | string
    datePublication?: DateTimeWithAggregatesFilter<"Annonce"> | Date | string
    auteurId?: StringWithAggregatesFilter<"Annonce"> | string
    planteId?: IntWithAggregatesFilter<"Annonce"> | number
  }

  export type VisiteWhereInput = {
    AND?: VisiteWhereInput | VisiteWhereInput[]
    OR?: VisiteWhereInput[]
    NOT?: VisiteWhereInput | VisiteWhereInput[]
    id?: IntFilter<"Visite"> | number
    dateVisite?: DateTimeFilter<"Visite"> | Date | string
    dateInvitation?: DateTimeFilter<"Visite"> | Date | string
    visiteurId?: StringFilter<"Visite"> | string
    annonceId?: IntFilter<"Visite"> | number
    visiteur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    annonce?: XOR<AnnonceRelationFilter, AnnonceWhereInput>
    visiteAcceptee?: XOR<VisiteAccepteeNullableRelationFilter, VisiteAccepteeWhereInput> | null
    visiteRefusee?: XOR<VisiteRefuseeNullableRelationFilter, VisiteRefuseeWhereInput> | null
  }

  export type VisiteOrderByWithRelationInput = {
    id?: SortOrder
    dateVisite?: SortOrder
    dateInvitation?: SortOrder
    visiteurId?: SortOrder
    annonceId?: SortOrder
    visiteur?: UtilisateurOrderByWithRelationInput
    annonce?: AnnonceOrderByWithRelationInput
    visiteAcceptee?: VisiteAccepteeOrderByWithRelationInput
    visiteRefusee?: VisiteRefuseeOrderByWithRelationInput
  }

  export type VisiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisiteWhereInput | VisiteWhereInput[]
    OR?: VisiteWhereInput[]
    NOT?: VisiteWhereInput | VisiteWhereInput[]
    dateVisite?: DateTimeFilter<"Visite"> | Date | string
    dateInvitation?: DateTimeFilter<"Visite"> | Date | string
    visiteurId?: StringFilter<"Visite"> | string
    annonceId?: IntFilter<"Visite"> | number
    visiteur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    annonce?: XOR<AnnonceRelationFilter, AnnonceWhereInput>
    visiteAcceptee?: XOR<VisiteAccepteeNullableRelationFilter, VisiteAccepteeWhereInput> | null
    visiteRefusee?: XOR<VisiteRefuseeNullableRelationFilter, VisiteRefuseeWhereInput> | null
  }, "id">

  export type VisiteOrderByWithAggregationInput = {
    id?: SortOrder
    dateVisite?: SortOrder
    dateInvitation?: SortOrder
    visiteurId?: SortOrder
    annonceId?: SortOrder
    _count?: VisiteCountOrderByAggregateInput
    _avg?: VisiteAvgOrderByAggregateInput
    _max?: VisiteMaxOrderByAggregateInput
    _min?: VisiteMinOrderByAggregateInput
    _sum?: VisiteSumOrderByAggregateInput
  }

  export type VisiteScalarWhereWithAggregatesInput = {
    AND?: VisiteScalarWhereWithAggregatesInput | VisiteScalarWhereWithAggregatesInput[]
    OR?: VisiteScalarWhereWithAggregatesInput[]
    NOT?: VisiteScalarWhereWithAggregatesInput | VisiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visite"> | number
    dateVisite?: DateTimeWithAggregatesFilter<"Visite"> | Date | string
    dateInvitation?: DateTimeWithAggregatesFilter<"Visite"> | Date | string
    visiteurId?: StringWithAggregatesFilter<"Visite"> | string
    annonceId?: IntWithAggregatesFilter<"Visite"> | number
  }

  export type VisiteAccepteeWhereInput = {
    AND?: VisiteAccepteeWhereInput | VisiteAccepteeWhereInput[]
    OR?: VisiteAccepteeWhereInput[]
    NOT?: VisiteAccepteeWhereInput | VisiteAccepteeWhereInput[]
    visiteId?: IntFilter<"VisiteAcceptee"> | number
    dateAcceptation?: DateTimeFilter<"VisiteAcceptee"> | Date | string
    cheminPhoto?: StringNullableFilter<"VisiteAcceptee"> | string | null
    visite?: XOR<VisiteRelationFilter, VisiteWhereInput>
  }

  export type VisiteAccepteeOrderByWithRelationInput = {
    visiteId?: SortOrder
    dateAcceptation?: SortOrder
    cheminPhoto?: SortOrderInput | SortOrder
    visite?: VisiteOrderByWithRelationInput
  }

  export type VisiteAccepteeWhereUniqueInput = Prisma.AtLeast<{
    visiteId?: number
    AND?: VisiteAccepteeWhereInput | VisiteAccepteeWhereInput[]
    OR?: VisiteAccepteeWhereInput[]
    NOT?: VisiteAccepteeWhereInput | VisiteAccepteeWhereInput[]
    dateAcceptation?: DateTimeFilter<"VisiteAcceptee"> | Date | string
    cheminPhoto?: StringNullableFilter<"VisiteAcceptee"> | string | null
    visite?: XOR<VisiteRelationFilter, VisiteWhereInput>
  }, "visiteId">

  export type VisiteAccepteeOrderByWithAggregationInput = {
    visiteId?: SortOrder
    dateAcceptation?: SortOrder
    cheminPhoto?: SortOrderInput | SortOrder
    _count?: VisiteAccepteeCountOrderByAggregateInput
    _avg?: VisiteAccepteeAvgOrderByAggregateInput
    _max?: VisiteAccepteeMaxOrderByAggregateInput
    _min?: VisiteAccepteeMinOrderByAggregateInput
    _sum?: VisiteAccepteeSumOrderByAggregateInput
  }

  export type VisiteAccepteeScalarWhereWithAggregatesInput = {
    AND?: VisiteAccepteeScalarWhereWithAggregatesInput | VisiteAccepteeScalarWhereWithAggregatesInput[]
    OR?: VisiteAccepteeScalarWhereWithAggregatesInput[]
    NOT?: VisiteAccepteeScalarWhereWithAggregatesInput | VisiteAccepteeScalarWhereWithAggregatesInput[]
    visiteId?: IntWithAggregatesFilter<"VisiteAcceptee"> | number
    dateAcceptation?: DateTimeWithAggregatesFilter<"VisiteAcceptee"> | Date | string
    cheminPhoto?: StringNullableWithAggregatesFilter<"VisiteAcceptee"> | string | null
  }

  export type VisiteRefuseeWhereInput = {
    AND?: VisiteRefuseeWhereInput | VisiteRefuseeWhereInput[]
    OR?: VisiteRefuseeWhereInput[]
    NOT?: VisiteRefuseeWhereInput | VisiteRefuseeWhereInput[]
    visiteId?: IntFilter<"VisiteRefusee"> | number
    dateRefus?: DateTimeNullableFilter<"VisiteRefusee"> | Date | string | null
    visite?: XOR<VisiteRelationFilter, VisiteWhereInput>
  }

  export type VisiteRefuseeOrderByWithRelationInput = {
    visiteId?: SortOrder
    dateRefus?: SortOrderInput | SortOrder
    visite?: VisiteOrderByWithRelationInput
  }

  export type VisiteRefuseeWhereUniqueInput = Prisma.AtLeast<{
    visiteId?: number
    AND?: VisiteRefuseeWhereInput | VisiteRefuseeWhereInput[]
    OR?: VisiteRefuseeWhereInput[]
    NOT?: VisiteRefuseeWhereInput | VisiteRefuseeWhereInput[]
    dateRefus?: DateTimeNullableFilter<"VisiteRefusee"> | Date | string | null
    visite?: XOR<VisiteRelationFilter, VisiteWhereInput>
  }, "visiteId">

  export type VisiteRefuseeOrderByWithAggregationInput = {
    visiteId?: SortOrder
    dateRefus?: SortOrderInput | SortOrder
    _count?: VisiteRefuseeCountOrderByAggregateInput
    _avg?: VisiteRefuseeAvgOrderByAggregateInput
    _max?: VisiteRefuseeMaxOrderByAggregateInput
    _min?: VisiteRefuseeMinOrderByAggregateInput
    _sum?: VisiteRefuseeSumOrderByAggregateInput
  }

  export type VisiteRefuseeScalarWhereWithAggregatesInput = {
    AND?: VisiteRefuseeScalarWhereWithAggregatesInput | VisiteRefuseeScalarWhereWithAggregatesInput[]
    OR?: VisiteRefuseeScalarWhereWithAggregatesInput[]
    NOT?: VisiteRefuseeScalarWhereWithAggregatesInput | VisiteRefuseeScalarWhereWithAggregatesInput[]
    visiteId?: IntWithAggregatesFilter<"VisiteRefusee"> | number
    dateRefus?: DateTimeNullableWithAggregatesFilter<"VisiteRefusee"> | Date | string | null
  }

  export type PlanteWhereInput = {
    AND?: PlanteWhereInput | PlanteWhereInput[]
    OR?: PlanteWhereInput[]
    NOT?: PlanteWhereInput | PlanteWhereInput[]
    id?: IntFilter<"Plante"> | number
    libelle?: StringFilter<"Plante"> | string
    description?: StringFilter<"Plante"> | string
    categorieId?: IntFilter<"Plante"> | number
    categorie?: XOR<CategorieRelationFilter, CategorieWhereInput>
    annonces?: AnnonceListRelationFilter
  }

  export type PlanteOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrder
    description?: SortOrder
    categorieId?: SortOrder
    categorie?: CategorieOrderByWithRelationInput
    annonces?: AnnonceOrderByRelationAggregateInput
  }

  export type PlanteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    libelle?: string
    AND?: PlanteWhereInput | PlanteWhereInput[]
    OR?: PlanteWhereInput[]
    NOT?: PlanteWhereInput | PlanteWhereInput[]
    description?: StringFilter<"Plante"> | string
    categorieId?: IntFilter<"Plante"> | number
    categorie?: XOR<CategorieRelationFilter, CategorieWhereInput>
    annonces?: AnnonceListRelationFilter
  }, "id" | "libelle">

  export type PlanteOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrder
    description?: SortOrder
    categorieId?: SortOrder
    _count?: PlanteCountOrderByAggregateInput
    _avg?: PlanteAvgOrderByAggregateInput
    _max?: PlanteMaxOrderByAggregateInput
    _min?: PlanteMinOrderByAggregateInput
    _sum?: PlanteSumOrderByAggregateInput
  }

  export type PlanteScalarWhereWithAggregatesInput = {
    AND?: PlanteScalarWhereWithAggregatesInput | PlanteScalarWhereWithAggregatesInput[]
    OR?: PlanteScalarWhereWithAggregatesInput[]
    NOT?: PlanteScalarWhereWithAggregatesInput | PlanteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plante"> | number
    libelle?: StringWithAggregatesFilter<"Plante"> | string
    description?: StringWithAggregatesFilter<"Plante"> | string
    categorieId?: IntWithAggregatesFilter<"Plante"> | number
  }

  export type CategorieWhereInput = {
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    id?: IntFilter<"Categorie"> | number
    libelle?: StringFilter<"Categorie"> | string
    lesPlantes?: PlanteListRelationFilter
  }

  export type CategorieOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrder
    lesPlantes?: PlanteOrderByRelationAggregateInput
  }

  export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    libelle?: string
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    lesPlantes?: PlanteListRelationFilter
  }, "id" | "libelle">

  export type CategorieOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrder
    _count?: CategorieCountOrderByAggregateInput
    _avg?: CategorieAvgOrderByAggregateInput
    _max?: CategorieMaxOrderByAggregateInput
    _min?: CategorieMinOrderByAggregateInput
    _sum?: CategorieSumOrderByAggregateInput
  }

  export type CategorieScalarWhereWithAggregatesInput = {
    AND?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    OR?: CategorieScalarWhereWithAggregatesInput[]
    NOT?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categorie"> | number
    libelle?: StringWithAggregatesFilter<"Categorie"> | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UtilisateurCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UtilisateurUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UtilisateurCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UtilisateurUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurCreateInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    rolesUtilisateurs?: RoleUtilisateurCreateNestedManyWithoutUtilisateurInput
    lesAnnonces?: AnnonceCreateNestedManyWithoutAuteurInput
    lesVisites?: VisiteCreateNestedManyWithoutVisiteurInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    rolesUtilisateurs?: RoleUtilisateurUncheckedCreateNestedManyWithoutUtilisateurInput
    lesAnnonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    lesVisites?: VisiteUncheckedCreateNestedManyWithoutVisiteurInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    rolesUtilisateurs?: RoleUtilisateurUpdateManyWithoutUtilisateurNestedInput
    lesAnnonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    lesVisites?: VisiteUpdateManyWithoutVisiteurNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    rolesUtilisateurs?: RoleUtilisateurUncheckedUpdateManyWithoutUtilisateurNestedInput
    lesAnnonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    lesVisites?: VisiteUncheckedUpdateManyWithoutVisiteurNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    nom?: string | null
    rolesUtilisateurs?: RoleUtilisateurCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    nom?: string | null
    rolesUtilisateurs?: RoleUtilisateurUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rolesUtilisateurs?: RoleUtilisateurUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rolesUtilisateurs?: RoleUtilisateurUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUpdateManyMutationInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUtilisateurCreateInput = {
    utilisateur: UtilisateurCreateNestedOneWithoutRolesUtilisateursInput
    role: RoleCreateNestedOneWithoutRolesUtilisateursInput
  }

  export type RoleUtilisateurUncheckedCreateInput = {
    utilisateurId: string
    roleId: number
  }

  export type RoleUtilisateurUpdateInput = {
    utilisateur?: UtilisateurUpdateOneRequiredWithoutRolesUtilisateursNestedInput
    role?: RoleUpdateOneRequiredWithoutRolesUtilisateursNestedInput
  }

  export type RoleUtilisateurUncheckedUpdateInput = {
    utilisateurId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleUtilisateurUpdateManyMutationInput = {

  }

  export type RoleUtilisateurUncheckedUpdateManyInput = {
    utilisateurId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type PhotoCreateInput = {
    cheminPhoto: string
    annonce: AnnonceCreateNestedOneWithoutLesPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    cheminPhoto: string
    annonceId: number
  }

  export type PhotoUpdateInput = {
    cheminPhoto?: StringFieldUpdateOperationsInput | string
    annonce?: AnnonceUpdateOneRequiredWithoutLesPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cheminPhoto?: StringFieldUpdateOperationsInput | string
    annonceId?: IntFieldUpdateOperationsInput | number
  }

  export type PhotoUpdateManyMutationInput = {
    cheminPhoto?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cheminPhoto?: StringFieldUpdateOperationsInput | string
    annonceId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnonceCreateInput = {
    description: string
    datePublication: Date | string
    auteur: UtilisateurCreateNestedOneWithoutLesAnnoncesInput
    plante: PlanteCreateNestedOneWithoutAnnoncesInput
    lesPhotos?: PhotoCreateNestedManyWithoutAnnonceInput
    lesVisites?: VisiteCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateInput = {
    id?: number
    description: string
    datePublication: Date | string
    auteurId: string
    planteId: number
    lesPhotos?: PhotoUncheckedCreateNestedManyWithoutAnnonceInput
    lesVisites?: VisiteUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: UtilisateurUpdateOneRequiredWithoutLesAnnoncesNestedInput
    plante?: PlanteUpdateOneRequiredWithoutAnnoncesNestedInput
    lesPhotos?: PhotoUpdateManyWithoutAnnonceNestedInput
    lesVisites?: VisiteUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: StringFieldUpdateOperationsInput | string
    planteId?: IntFieldUpdateOperationsInput | number
    lesPhotos?: PhotoUncheckedUpdateManyWithoutAnnonceNestedInput
    lesVisites?: VisiteUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnonceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: StringFieldUpdateOperationsInput | string
    planteId?: IntFieldUpdateOperationsInput | number
  }

  export type VisiteCreateInput = {
    dateVisite: Date | string
    dateInvitation: Date | string
    visiteur: UtilisateurCreateNestedOneWithoutLesVisitesInput
    annonce: AnnonceCreateNestedOneWithoutLesVisitesInput
    visiteAcceptee?: VisiteAccepteeCreateNestedOneWithoutVisiteInput
    visiteRefusee?: VisiteRefuseeCreateNestedOneWithoutVisiteInput
  }

  export type VisiteUncheckedCreateInput = {
    id?: number
    dateVisite: Date | string
    dateInvitation: Date | string
    visiteurId: string
    annonceId: number
    visiteAcceptee?: VisiteAccepteeUncheckedCreateNestedOneWithoutVisiteInput
    visiteRefusee?: VisiteRefuseeUncheckedCreateNestedOneWithoutVisiteInput
  }

  export type VisiteUpdateInput = {
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    visiteur?: UtilisateurUpdateOneRequiredWithoutLesVisitesNestedInput
    annonce?: AnnonceUpdateOneRequiredWithoutLesVisitesNestedInput
    visiteAcceptee?: VisiteAccepteeUpdateOneWithoutVisiteNestedInput
    visiteRefusee?: VisiteRefuseeUpdateOneWithoutVisiteNestedInput
  }

  export type VisiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    visiteurId?: StringFieldUpdateOperationsInput | string
    annonceId?: IntFieldUpdateOperationsInput | number
    visiteAcceptee?: VisiteAccepteeUncheckedUpdateOneWithoutVisiteNestedInput
    visiteRefusee?: VisiteRefuseeUncheckedUpdateOneWithoutVisiteNestedInput
  }

  export type VisiteUpdateManyMutationInput = {
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    visiteurId?: StringFieldUpdateOperationsInput | string
    annonceId?: IntFieldUpdateOperationsInput | number
  }

  export type VisiteAccepteeCreateInput = {
    dateAcceptation: Date | string
    cheminPhoto?: string | null
    visite: VisiteCreateNestedOneWithoutVisiteAccepteeInput
  }

  export type VisiteAccepteeUncheckedCreateInput = {
    visiteId: number
    dateAcceptation: Date | string
    cheminPhoto?: string | null
  }

  export type VisiteAccepteeUpdateInput = {
    dateAcceptation?: DateTimeFieldUpdateOperationsInput | Date | string
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    visite?: VisiteUpdateOneRequiredWithoutVisiteAccepteeNestedInput
  }

  export type VisiteAccepteeUncheckedUpdateInput = {
    visiteId?: IntFieldUpdateOperationsInput | number
    dateAcceptation?: DateTimeFieldUpdateOperationsInput | Date | string
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisiteAccepteeUpdateManyMutationInput = {
    dateAcceptation?: DateTimeFieldUpdateOperationsInput | Date | string
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisiteAccepteeUncheckedUpdateManyInput = {
    visiteId?: IntFieldUpdateOperationsInput | number
    dateAcceptation?: DateTimeFieldUpdateOperationsInput | Date | string
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisiteRefuseeCreateInput = {
    dateRefus?: Date | string | null
    visite: VisiteCreateNestedOneWithoutVisiteRefuseeInput
  }

  export type VisiteRefuseeUncheckedCreateInput = {
    visiteId: number
    dateRefus?: Date | string | null
  }

  export type VisiteRefuseeUpdateInput = {
    dateRefus?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    visite?: VisiteUpdateOneRequiredWithoutVisiteRefuseeNestedInput
  }

  export type VisiteRefuseeUncheckedUpdateInput = {
    visiteId?: IntFieldUpdateOperationsInput | number
    dateRefus?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VisiteRefuseeUpdateManyMutationInput = {
    dateRefus?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VisiteRefuseeUncheckedUpdateManyInput = {
    visiteId?: IntFieldUpdateOperationsInput | number
    dateRefus?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PlanteCreateInput = {
    libelle: string
    description: string
    categorie: CategorieCreateNestedOneWithoutLesPlantesInput
    annonces?: AnnonceCreateNestedManyWithoutPlanteInput
  }

  export type PlanteUncheckedCreateInput = {
    id?: number
    libelle: string
    description: string
    categorieId: number
    annonces?: AnnonceUncheckedCreateNestedManyWithoutPlanteInput
  }

  export type PlanteUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: CategorieUpdateOneRequiredWithoutLesPlantesNestedInput
    annonces?: AnnonceUpdateManyWithoutPlanteNestedInput
  }

  export type PlanteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorieId?: IntFieldUpdateOperationsInput | number
    annonces?: AnnonceUncheckedUpdateManyWithoutPlanteNestedInput
  }

  export type PlanteUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PlanteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorieId?: IntFieldUpdateOperationsInput | number
  }

  export type CategorieCreateInput = {
    libelle: string
    lesPlantes?: PlanteCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUncheckedCreateInput = {
    id?: number
    libelle: string
    lesPlantes?: PlanteUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    lesPlantes?: PlanteUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    lesPlantes?: PlanteUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UtilisateurRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type RoleUtilisateurListRelationFilter = {
    every?: RoleUtilisateurWhereInput
    some?: RoleUtilisateurWhereInput
    none?: RoleUtilisateurWhereInput
  }

  export type AnnonceListRelationFilter = {
    every?: AnnonceWhereInput
    some?: AnnonceWhereInput
    none?: AnnonceWhereInput
  }

  export type VisiteListRelationFilter = {
    every?: VisiteWhereInput
    some?: VisiteWhereInput
    none?: VisiteWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type RoleUtilisateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnonceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    cp?: SortOrder
    rue?: SortOrder
    description?: SortOrder
    cheminPhoto?: SortOrder
    dateInscription?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    cp?: SortOrder
    rue?: SortOrder
    description?: SortOrder
    cheminPhoto?: SortOrder
    dateInscription?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    motDePasse?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    cp?: SortOrder
    rue?: SortOrder
    description?: SortOrder
    cheminPhoto?: SortOrder
    dateInscription?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type RoleUtilisateurUtilisateurIdRoleIdCompoundUniqueInput = {
    utilisateurId: string
    roleId: number
  }

  export type RoleUtilisateurCountOrderByAggregateInput = {
    utilisateurId?: SortOrder
    roleId?: SortOrder
  }

  export type RoleUtilisateurAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type RoleUtilisateurMaxOrderByAggregateInput = {
    utilisateurId?: SortOrder
    roleId?: SortOrder
  }

  export type RoleUtilisateurMinOrderByAggregateInput = {
    utilisateurId?: SortOrder
    roleId?: SortOrder
  }

  export type RoleUtilisateurSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type AnnonceRelationFilter = {
    is?: AnnonceWhereInput
    isNot?: AnnonceWhereInput
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    cheminPhoto?: SortOrder
    annonceId?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    cheminPhoto?: SortOrder
    annonceId?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    cheminPhoto?: SortOrder
    annonceId?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
  }

  export type PlanteRelationFilter = {
    is?: PlanteWhereInput
    isNot?: PlanteWhereInput
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnonceCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    datePublication?: SortOrder
    auteurId?: SortOrder
    planteId?: SortOrder
  }

  export type AnnonceAvgOrderByAggregateInput = {
    id?: SortOrder
    planteId?: SortOrder
  }

  export type AnnonceMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    datePublication?: SortOrder
    auteurId?: SortOrder
    planteId?: SortOrder
  }

  export type AnnonceMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    datePublication?: SortOrder
    auteurId?: SortOrder
    planteId?: SortOrder
  }

  export type AnnonceSumOrderByAggregateInput = {
    id?: SortOrder
    planteId?: SortOrder
  }

  export type VisiteAccepteeNullableRelationFilter = {
    is?: VisiteAccepteeWhereInput | null
    isNot?: VisiteAccepteeWhereInput | null
  }

  export type VisiteRefuseeNullableRelationFilter = {
    is?: VisiteRefuseeWhereInput | null
    isNot?: VisiteRefuseeWhereInput | null
  }

  export type VisiteCountOrderByAggregateInput = {
    id?: SortOrder
    dateVisite?: SortOrder
    dateInvitation?: SortOrder
    visiteurId?: SortOrder
    annonceId?: SortOrder
  }

  export type VisiteAvgOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
  }

  export type VisiteMaxOrderByAggregateInput = {
    id?: SortOrder
    dateVisite?: SortOrder
    dateInvitation?: SortOrder
    visiteurId?: SortOrder
    annonceId?: SortOrder
  }

  export type VisiteMinOrderByAggregateInput = {
    id?: SortOrder
    dateVisite?: SortOrder
    dateInvitation?: SortOrder
    visiteurId?: SortOrder
    annonceId?: SortOrder
  }

  export type VisiteSumOrderByAggregateInput = {
    id?: SortOrder
    annonceId?: SortOrder
  }

  export type VisiteRelationFilter = {
    is?: VisiteWhereInput
    isNot?: VisiteWhereInput
  }

  export type VisiteAccepteeCountOrderByAggregateInput = {
    visiteId?: SortOrder
    dateAcceptation?: SortOrder
    cheminPhoto?: SortOrder
  }

  export type VisiteAccepteeAvgOrderByAggregateInput = {
    visiteId?: SortOrder
  }

  export type VisiteAccepteeMaxOrderByAggregateInput = {
    visiteId?: SortOrder
    dateAcceptation?: SortOrder
    cheminPhoto?: SortOrder
  }

  export type VisiteAccepteeMinOrderByAggregateInput = {
    visiteId?: SortOrder
    dateAcceptation?: SortOrder
    cheminPhoto?: SortOrder
  }

  export type VisiteAccepteeSumOrderByAggregateInput = {
    visiteId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VisiteRefuseeCountOrderByAggregateInput = {
    visiteId?: SortOrder
    dateRefus?: SortOrder
  }

  export type VisiteRefuseeAvgOrderByAggregateInput = {
    visiteId?: SortOrder
  }

  export type VisiteRefuseeMaxOrderByAggregateInput = {
    visiteId?: SortOrder
    dateRefus?: SortOrder
  }

  export type VisiteRefuseeMinOrderByAggregateInput = {
    visiteId?: SortOrder
    dateRefus?: SortOrder
  }

  export type VisiteRefuseeSumOrderByAggregateInput = {
    visiteId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CategorieRelationFilter = {
    is?: CategorieWhereInput
    isNot?: CategorieWhereInput
  }

  export type PlanteCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    description?: SortOrder
    categorieId?: SortOrder
  }

  export type PlanteAvgOrderByAggregateInput = {
    id?: SortOrder
    categorieId?: SortOrder
  }

  export type PlanteMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    description?: SortOrder
    categorieId?: SortOrder
  }

  export type PlanteMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    description?: SortOrder
    categorieId?: SortOrder
  }

  export type PlanteSumOrderByAggregateInput = {
    id?: SortOrder
    categorieId?: SortOrder
  }

  export type PlanteListRelationFilter = {
    every?: PlanteWhereInput
    some?: PlanteWhereInput
    none?: PlanteWhereInput
  }

  export type PlanteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategorieCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
  }

  export type CategorieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategorieMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
  }

  export type CategorieMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
  }

  export type CategorieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilisateurCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UtilisateurCreateWithoutAccountsInput, UtilisateurUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutAccountsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UtilisateurUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutAccountsInput, UtilisateurUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutAccountsInput
    upsert?: UtilisateurUpsertWithoutAccountsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutAccountsInput, UtilisateurUpdateWithoutAccountsInput>, UtilisateurUncheckedUpdateWithoutAccountsInput>
  }

  export type UtilisateurCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UtilisateurCreateWithoutSessionsInput, UtilisateurUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutSessionsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UtilisateurUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutSessionsInput, UtilisateurUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutSessionsInput
    upsert?: UtilisateurUpsertWithoutSessionsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutSessionsInput, UtilisateurUpdateWithoutSessionsInput>, UtilisateurUncheckedUpdateWithoutSessionsInput>
  }

  export type RoleUtilisateurCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<RoleUtilisateurCreateWithoutUtilisateurInput, RoleUtilisateurUncheckedCreateWithoutUtilisateurInput> | RoleUtilisateurCreateWithoutUtilisateurInput[] | RoleUtilisateurUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: RoleUtilisateurCreateOrConnectWithoutUtilisateurInput | RoleUtilisateurCreateOrConnectWithoutUtilisateurInput[]
    connect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
  }

  export type AnnonceCreateNestedManyWithoutAuteurInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type VisiteCreateNestedManyWithoutVisiteurInput = {
    create?: XOR<VisiteCreateWithoutVisiteurInput, VisiteUncheckedCreateWithoutVisiteurInput> | VisiteCreateWithoutVisiteurInput[] | VisiteUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: VisiteCreateOrConnectWithoutVisiteurInput | VisiteCreateOrConnectWithoutVisiteurInput[]
    connect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type RoleUtilisateurUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<RoleUtilisateurCreateWithoutUtilisateurInput, RoleUtilisateurUncheckedCreateWithoutUtilisateurInput> | RoleUtilisateurCreateWithoutUtilisateurInput[] | RoleUtilisateurUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: RoleUtilisateurCreateOrConnectWithoutUtilisateurInput | RoleUtilisateurCreateOrConnectWithoutUtilisateurInput[]
    connect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
  }

  export type AnnonceUncheckedCreateNestedManyWithoutAuteurInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type VisiteUncheckedCreateNestedManyWithoutVisiteurInput = {
    create?: XOR<VisiteCreateWithoutVisiteurInput, VisiteUncheckedCreateWithoutVisiteurInput> | VisiteCreateWithoutVisiteurInput[] | VisiteUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: VisiteCreateOrConnectWithoutVisiteurInput | VisiteCreateOrConnectWithoutVisiteurInput[]
    connect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type RoleUtilisateurUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<RoleUtilisateurCreateWithoutUtilisateurInput, RoleUtilisateurUncheckedCreateWithoutUtilisateurInput> | RoleUtilisateurCreateWithoutUtilisateurInput[] | RoleUtilisateurUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: RoleUtilisateurCreateOrConnectWithoutUtilisateurInput | RoleUtilisateurCreateOrConnectWithoutUtilisateurInput[]
    upsert?: RoleUtilisateurUpsertWithWhereUniqueWithoutUtilisateurInput | RoleUtilisateurUpsertWithWhereUniqueWithoutUtilisateurInput[]
    set?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    disconnect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    delete?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    connect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    update?: RoleUtilisateurUpdateWithWhereUniqueWithoutUtilisateurInput | RoleUtilisateurUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: RoleUtilisateurUpdateManyWithWhereWithoutUtilisateurInput | RoleUtilisateurUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: RoleUtilisateurScalarWhereInput | RoleUtilisateurScalarWhereInput[]
  }

  export type AnnonceUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutAuteurInput | AnnonceUpsertWithWhereUniqueWithoutAuteurInput[]
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutAuteurInput | AnnonceUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutAuteurInput | AnnonceUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type VisiteUpdateManyWithoutVisiteurNestedInput = {
    create?: XOR<VisiteCreateWithoutVisiteurInput, VisiteUncheckedCreateWithoutVisiteurInput> | VisiteCreateWithoutVisiteurInput[] | VisiteUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: VisiteCreateOrConnectWithoutVisiteurInput | VisiteCreateOrConnectWithoutVisiteurInput[]
    upsert?: VisiteUpsertWithWhereUniqueWithoutVisiteurInput | VisiteUpsertWithWhereUniqueWithoutVisiteurInput[]
    set?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    disconnect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    delete?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    connect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    update?: VisiteUpdateWithWhereUniqueWithoutVisiteurInput | VisiteUpdateWithWhereUniqueWithoutVisiteurInput[]
    updateMany?: VisiteUpdateManyWithWhereWithoutVisiteurInput | VisiteUpdateManyWithWhereWithoutVisiteurInput[]
    deleteMany?: VisiteScalarWhereInput | VisiteScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type RoleUtilisateurUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<RoleUtilisateurCreateWithoutUtilisateurInput, RoleUtilisateurUncheckedCreateWithoutUtilisateurInput> | RoleUtilisateurCreateWithoutUtilisateurInput[] | RoleUtilisateurUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: RoleUtilisateurCreateOrConnectWithoutUtilisateurInput | RoleUtilisateurCreateOrConnectWithoutUtilisateurInput[]
    upsert?: RoleUtilisateurUpsertWithWhereUniqueWithoutUtilisateurInput | RoleUtilisateurUpsertWithWhereUniqueWithoutUtilisateurInput[]
    set?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    disconnect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    delete?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    connect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    update?: RoleUtilisateurUpdateWithWhereUniqueWithoutUtilisateurInput | RoleUtilisateurUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: RoleUtilisateurUpdateManyWithWhereWithoutUtilisateurInput | RoleUtilisateurUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: RoleUtilisateurScalarWhereInput | RoleUtilisateurScalarWhereInput[]
  }

  export type AnnonceUncheckedUpdateManyWithoutAuteurNestedInput = {
    create?: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput> | AnnonceCreateWithoutAuteurInput[] | AnnonceUncheckedCreateWithoutAuteurInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutAuteurInput | AnnonceCreateOrConnectWithoutAuteurInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutAuteurInput | AnnonceUpsertWithWhereUniqueWithoutAuteurInput[]
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutAuteurInput | AnnonceUpdateWithWhereUniqueWithoutAuteurInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutAuteurInput | AnnonceUpdateManyWithWhereWithoutAuteurInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type VisiteUncheckedUpdateManyWithoutVisiteurNestedInput = {
    create?: XOR<VisiteCreateWithoutVisiteurInput, VisiteUncheckedCreateWithoutVisiteurInput> | VisiteCreateWithoutVisiteurInput[] | VisiteUncheckedCreateWithoutVisiteurInput[]
    connectOrCreate?: VisiteCreateOrConnectWithoutVisiteurInput | VisiteCreateOrConnectWithoutVisiteurInput[]
    upsert?: VisiteUpsertWithWhereUniqueWithoutVisiteurInput | VisiteUpsertWithWhereUniqueWithoutVisiteurInput[]
    set?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    disconnect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    delete?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    connect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    update?: VisiteUpdateWithWhereUniqueWithoutVisiteurInput | VisiteUpdateWithWhereUniqueWithoutVisiteurInput[]
    updateMany?: VisiteUpdateManyWithWhereWithoutVisiteurInput | VisiteUpdateManyWithWhereWithoutVisiteurInput[]
    deleteMany?: VisiteScalarWhereInput | VisiteScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type RoleUtilisateurCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleUtilisateurCreateWithoutRoleInput, RoleUtilisateurUncheckedCreateWithoutRoleInput> | RoleUtilisateurCreateWithoutRoleInput[] | RoleUtilisateurUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleUtilisateurCreateOrConnectWithoutRoleInput | RoleUtilisateurCreateOrConnectWithoutRoleInput[]
    connect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
  }

  export type RoleUtilisateurUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleUtilisateurCreateWithoutRoleInput, RoleUtilisateurUncheckedCreateWithoutRoleInput> | RoleUtilisateurCreateWithoutRoleInput[] | RoleUtilisateurUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleUtilisateurCreateOrConnectWithoutRoleInput | RoleUtilisateurCreateOrConnectWithoutRoleInput[]
    connect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
  }

  export type RoleUtilisateurUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleUtilisateurCreateWithoutRoleInput, RoleUtilisateurUncheckedCreateWithoutRoleInput> | RoleUtilisateurCreateWithoutRoleInput[] | RoleUtilisateurUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleUtilisateurCreateOrConnectWithoutRoleInput | RoleUtilisateurCreateOrConnectWithoutRoleInput[]
    upsert?: RoleUtilisateurUpsertWithWhereUniqueWithoutRoleInput | RoleUtilisateurUpsertWithWhereUniqueWithoutRoleInput[]
    set?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    disconnect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    delete?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    connect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    update?: RoleUtilisateurUpdateWithWhereUniqueWithoutRoleInput | RoleUtilisateurUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleUtilisateurUpdateManyWithWhereWithoutRoleInput | RoleUtilisateurUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleUtilisateurScalarWhereInput | RoleUtilisateurScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoleUtilisateurUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleUtilisateurCreateWithoutRoleInput, RoleUtilisateurUncheckedCreateWithoutRoleInput> | RoleUtilisateurCreateWithoutRoleInput[] | RoleUtilisateurUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleUtilisateurCreateOrConnectWithoutRoleInput | RoleUtilisateurCreateOrConnectWithoutRoleInput[]
    upsert?: RoleUtilisateurUpsertWithWhereUniqueWithoutRoleInput | RoleUtilisateurUpsertWithWhereUniqueWithoutRoleInput[]
    set?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    disconnect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    delete?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    connect?: RoleUtilisateurWhereUniqueInput | RoleUtilisateurWhereUniqueInput[]
    update?: RoleUtilisateurUpdateWithWhereUniqueWithoutRoleInput | RoleUtilisateurUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleUtilisateurUpdateManyWithWhereWithoutRoleInput | RoleUtilisateurUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleUtilisateurScalarWhereInput | RoleUtilisateurScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutRolesUtilisateursInput = {
    create?: XOR<UtilisateurCreateWithoutRolesUtilisateursInput, UtilisateurUncheckedCreateWithoutRolesUtilisateursInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutRolesUtilisateursInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutRolesUtilisateursInput = {
    create?: XOR<RoleCreateWithoutRolesUtilisateursInput, RoleUncheckedCreateWithoutRolesUtilisateursInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolesUtilisateursInput
    connect?: RoleWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutRolesUtilisateursNestedInput = {
    create?: XOR<UtilisateurCreateWithoutRolesUtilisateursInput, UtilisateurUncheckedCreateWithoutRolesUtilisateursInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutRolesUtilisateursInput
    upsert?: UtilisateurUpsertWithoutRolesUtilisateursInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutRolesUtilisateursInput, UtilisateurUpdateWithoutRolesUtilisateursInput>, UtilisateurUncheckedUpdateWithoutRolesUtilisateursInput>
  }

  export type RoleUpdateOneRequiredWithoutRolesUtilisateursNestedInput = {
    create?: XOR<RoleCreateWithoutRolesUtilisateursInput, RoleUncheckedCreateWithoutRolesUtilisateursInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolesUtilisateursInput
    upsert?: RoleUpsertWithoutRolesUtilisateursInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolesUtilisateursInput, RoleUpdateWithoutRolesUtilisateursInput>, RoleUncheckedUpdateWithoutRolesUtilisateursInput>
  }

  export type AnnonceCreateNestedOneWithoutLesPhotosInput = {
    create?: XOR<AnnonceCreateWithoutLesPhotosInput, AnnonceUncheckedCreateWithoutLesPhotosInput>
    connectOrCreate?: AnnonceCreateOrConnectWithoutLesPhotosInput
    connect?: AnnonceWhereUniqueInput
  }

  export type AnnonceUpdateOneRequiredWithoutLesPhotosNestedInput = {
    create?: XOR<AnnonceCreateWithoutLesPhotosInput, AnnonceUncheckedCreateWithoutLesPhotosInput>
    connectOrCreate?: AnnonceCreateOrConnectWithoutLesPhotosInput
    upsert?: AnnonceUpsertWithoutLesPhotosInput
    connect?: AnnonceWhereUniqueInput
    update?: XOR<XOR<AnnonceUpdateToOneWithWhereWithoutLesPhotosInput, AnnonceUpdateWithoutLesPhotosInput>, AnnonceUncheckedUpdateWithoutLesPhotosInput>
  }

  export type UtilisateurCreateNestedOneWithoutLesAnnoncesInput = {
    create?: XOR<UtilisateurCreateWithoutLesAnnoncesInput, UtilisateurUncheckedCreateWithoutLesAnnoncesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutLesAnnoncesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type PlanteCreateNestedOneWithoutAnnoncesInput = {
    create?: XOR<PlanteCreateWithoutAnnoncesInput, PlanteUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: PlanteCreateOrConnectWithoutAnnoncesInput
    connect?: PlanteWhereUniqueInput
  }

  export type PhotoCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<PhotoCreateWithoutAnnonceInput, PhotoUncheckedCreateWithoutAnnonceInput> | PhotoCreateWithoutAnnonceInput[] | PhotoUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAnnonceInput | PhotoCreateOrConnectWithoutAnnonceInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type VisiteCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<VisiteCreateWithoutAnnonceInput, VisiteUncheckedCreateWithoutAnnonceInput> | VisiteCreateWithoutAnnonceInput[] | VisiteUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: VisiteCreateOrConnectWithoutAnnonceInput | VisiteCreateOrConnectWithoutAnnonceInput[]
    connect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<PhotoCreateWithoutAnnonceInput, PhotoUncheckedCreateWithoutAnnonceInput> | PhotoCreateWithoutAnnonceInput[] | PhotoUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAnnonceInput | PhotoCreateOrConnectWithoutAnnonceInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type VisiteUncheckedCreateNestedManyWithoutAnnonceInput = {
    create?: XOR<VisiteCreateWithoutAnnonceInput, VisiteUncheckedCreateWithoutAnnonceInput> | VisiteCreateWithoutAnnonceInput[] | VisiteUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: VisiteCreateOrConnectWithoutAnnonceInput | VisiteCreateOrConnectWithoutAnnonceInput[]
    connect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
  }

  export type UtilisateurUpdateOneRequiredWithoutLesAnnoncesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutLesAnnoncesInput, UtilisateurUncheckedCreateWithoutLesAnnoncesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutLesAnnoncesInput
    upsert?: UtilisateurUpsertWithoutLesAnnoncesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutLesAnnoncesInput, UtilisateurUpdateWithoutLesAnnoncesInput>, UtilisateurUncheckedUpdateWithoutLesAnnoncesInput>
  }

  export type PlanteUpdateOneRequiredWithoutAnnoncesNestedInput = {
    create?: XOR<PlanteCreateWithoutAnnoncesInput, PlanteUncheckedCreateWithoutAnnoncesInput>
    connectOrCreate?: PlanteCreateOrConnectWithoutAnnoncesInput
    upsert?: PlanteUpsertWithoutAnnoncesInput
    connect?: PlanteWhereUniqueInput
    update?: XOR<XOR<PlanteUpdateToOneWithWhereWithoutAnnoncesInput, PlanteUpdateWithoutAnnoncesInput>, PlanteUncheckedUpdateWithoutAnnoncesInput>
  }

  export type PhotoUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<PhotoCreateWithoutAnnonceInput, PhotoUncheckedCreateWithoutAnnonceInput> | PhotoCreateWithoutAnnonceInput[] | PhotoUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAnnonceInput | PhotoCreateOrConnectWithoutAnnonceInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutAnnonceInput | PhotoUpsertWithWhereUniqueWithoutAnnonceInput[]
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutAnnonceInput | PhotoUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutAnnonceInput | PhotoUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type VisiteUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<VisiteCreateWithoutAnnonceInput, VisiteUncheckedCreateWithoutAnnonceInput> | VisiteCreateWithoutAnnonceInput[] | VisiteUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: VisiteCreateOrConnectWithoutAnnonceInput | VisiteCreateOrConnectWithoutAnnonceInput[]
    upsert?: VisiteUpsertWithWhereUniqueWithoutAnnonceInput | VisiteUpsertWithWhereUniqueWithoutAnnonceInput[]
    set?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    disconnect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    delete?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    connect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    update?: VisiteUpdateWithWhereUniqueWithoutAnnonceInput | VisiteUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: VisiteUpdateManyWithWhereWithoutAnnonceInput | VisiteUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: VisiteScalarWhereInput | VisiteScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<PhotoCreateWithoutAnnonceInput, PhotoUncheckedCreateWithoutAnnonceInput> | PhotoCreateWithoutAnnonceInput[] | PhotoUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAnnonceInput | PhotoCreateOrConnectWithoutAnnonceInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutAnnonceInput | PhotoUpsertWithWhereUniqueWithoutAnnonceInput[]
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutAnnonceInput | PhotoUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutAnnonceInput | PhotoUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type VisiteUncheckedUpdateManyWithoutAnnonceNestedInput = {
    create?: XOR<VisiteCreateWithoutAnnonceInput, VisiteUncheckedCreateWithoutAnnonceInput> | VisiteCreateWithoutAnnonceInput[] | VisiteUncheckedCreateWithoutAnnonceInput[]
    connectOrCreate?: VisiteCreateOrConnectWithoutAnnonceInput | VisiteCreateOrConnectWithoutAnnonceInput[]
    upsert?: VisiteUpsertWithWhereUniqueWithoutAnnonceInput | VisiteUpsertWithWhereUniqueWithoutAnnonceInput[]
    set?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    disconnect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    delete?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    connect?: VisiteWhereUniqueInput | VisiteWhereUniqueInput[]
    update?: VisiteUpdateWithWhereUniqueWithoutAnnonceInput | VisiteUpdateWithWhereUniqueWithoutAnnonceInput[]
    updateMany?: VisiteUpdateManyWithWhereWithoutAnnonceInput | VisiteUpdateManyWithWhereWithoutAnnonceInput[]
    deleteMany?: VisiteScalarWhereInput | VisiteScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutLesVisitesInput = {
    create?: XOR<UtilisateurCreateWithoutLesVisitesInput, UtilisateurUncheckedCreateWithoutLesVisitesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutLesVisitesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type AnnonceCreateNestedOneWithoutLesVisitesInput = {
    create?: XOR<AnnonceCreateWithoutLesVisitesInput, AnnonceUncheckedCreateWithoutLesVisitesInput>
    connectOrCreate?: AnnonceCreateOrConnectWithoutLesVisitesInput
    connect?: AnnonceWhereUniqueInput
  }

  export type VisiteAccepteeCreateNestedOneWithoutVisiteInput = {
    create?: XOR<VisiteAccepteeCreateWithoutVisiteInput, VisiteAccepteeUncheckedCreateWithoutVisiteInput>
    connectOrCreate?: VisiteAccepteeCreateOrConnectWithoutVisiteInput
    connect?: VisiteAccepteeWhereUniqueInput
  }

  export type VisiteRefuseeCreateNestedOneWithoutVisiteInput = {
    create?: XOR<VisiteRefuseeCreateWithoutVisiteInput, VisiteRefuseeUncheckedCreateWithoutVisiteInput>
    connectOrCreate?: VisiteRefuseeCreateOrConnectWithoutVisiteInput
    connect?: VisiteRefuseeWhereUniqueInput
  }

  export type VisiteAccepteeUncheckedCreateNestedOneWithoutVisiteInput = {
    create?: XOR<VisiteAccepteeCreateWithoutVisiteInput, VisiteAccepteeUncheckedCreateWithoutVisiteInput>
    connectOrCreate?: VisiteAccepteeCreateOrConnectWithoutVisiteInput
    connect?: VisiteAccepteeWhereUniqueInput
  }

  export type VisiteRefuseeUncheckedCreateNestedOneWithoutVisiteInput = {
    create?: XOR<VisiteRefuseeCreateWithoutVisiteInput, VisiteRefuseeUncheckedCreateWithoutVisiteInput>
    connectOrCreate?: VisiteRefuseeCreateOrConnectWithoutVisiteInput
    connect?: VisiteRefuseeWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutLesVisitesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutLesVisitesInput, UtilisateurUncheckedCreateWithoutLesVisitesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutLesVisitesInput
    upsert?: UtilisateurUpsertWithoutLesVisitesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutLesVisitesInput, UtilisateurUpdateWithoutLesVisitesInput>, UtilisateurUncheckedUpdateWithoutLesVisitesInput>
  }

  export type AnnonceUpdateOneRequiredWithoutLesVisitesNestedInput = {
    create?: XOR<AnnonceCreateWithoutLesVisitesInput, AnnonceUncheckedCreateWithoutLesVisitesInput>
    connectOrCreate?: AnnonceCreateOrConnectWithoutLesVisitesInput
    upsert?: AnnonceUpsertWithoutLesVisitesInput
    connect?: AnnonceWhereUniqueInput
    update?: XOR<XOR<AnnonceUpdateToOneWithWhereWithoutLesVisitesInput, AnnonceUpdateWithoutLesVisitesInput>, AnnonceUncheckedUpdateWithoutLesVisitesInput>
  }

  export type VisiteAccepteeUpdateOneWithoutVisiteNestedInput = {
    create?: XOR<VisiteAccepteeCreateWithoutVisiteInput, VisiteAccepteeUncheckedCreateWithoutVisiteInput>
    connectOrCreate?: VisiteAccepteeCreateOrConnectWithoutVisiteInput
    upsert?: VisiteAccepteeUpsertWithoutVisiteInput
    disconnect?: VisiteAccepteeWhereInput | boolean
    delete?: VisiteAccepteeWhereInput | boolean
    connect?: VisiteAccepteeWhereUniqueInput
    update?: XOR<XOR<VisiteAccepteeUpdateToOneWithWhereWithoutVisiteInput, VisiteAccepteeUpdateWithoutVisiteInput>, VisiteAccepteeUncheckedUpdateWithoutVisiteInput>
  }

  export type VisiteRefuseeUpdateOneWithoutVisiteNestedInput = {
    create?: XOR<VisiteRefuseeCreateWithoutVisiteInput, VisiteRefuseeUncheckedCreateWithoutVisiteInput>
    connectOrCreate?: VisiteRefuseeCreateOrConnectWithoutVisiteInput
    upsert?: VisiteRefuseeUpsertWithoutVisiteInput
    disconnect?: VisiteRefuseeWhereInput | boolean
    delete?: VisiteRefuseeWhereInput | boolean
    connect?: VisiteRefuseeWhereUniqueInput
    update?: XOR<XOR<VisiteRefuseeUpdateToOneWithWhereWithoutVisiteInput, VisiteRefuseeUpdateWithoutVisiteInput>, VisiteRefuseeUncheckedUpdateWithoutVisiteInput>
  }

  export type VisiteAccepteeUncheckedUpdateOneWithoutVisiteNestedInput = {
    create?: XOR<VisiteAccepteeCreateWithoutVisiteInput, VisiteAccepteeUncheckedCreateWithoutVisiteInput>
    connectOrCreate?: VisiteAccepteeCreateOrConnectWithoutVisiteInput
    upsert?: VisiteAccepteeUpsertWithoutVisiteInput
    disconnect?: VisiteAccepteeWhereInput | boolean
    delete?: VisiteAccepteeWhereInput | boolean
    connect?: VisiteAccepteeWhereUniqueInput
    update?: XOR<XOR<VisiteAccepteeUpdateToOneWithWhereWithoutVisiteInput, VisiteAccepteeUpdateWithoutVisiteInput>, VisiteAccepteeUncheckedUpdateWithoutVisiteInput>
  }

  export type VisiteRefuseeUncheckedUpdateOneWithoutVisiteNestedInput = {
    create?: XOR<VisiteRefuseeCreateWithoutVisiteInput, VisiteRefuseeUncheckedCreateWithoutVisiteInput>
    connectOrCreate?: VisiteRefuseeCreateOrConnectWithoutVisiteInput
    upsert?: VisiteRefuseeUpsertWithoutVisiteInput
    disconnect?: VisiteRefuseeWhereInput | boolean
    delete?: VisiteRefuseeWhereInput | boolean
    connect?: VisiteRefuseeWhereUniqueInput
    update?: XOR<XOR<VisiteRefuseeUpdateToOneWithWhereWithoutVisiteInput, VisiteRefuseeUpdateWithoutVisiteInput>, VisiteRefuseeUncheckedUpdateWithoutVisiteInput>
  }

  export type VisiteCreateNestedOneWithoutVisiteAccepteeInput = {
    create?: XOR<VisiteCreateWithoutVisiteAccepteeInput, VisiteUncheckedCreateWithoutVisiteAccepteeInput>
    connectOrCreate?: VisiteCreateOrConnectWithoutVisiteAccepteeInput
    connect?: VisiteWhereUniqueInput
  }

  export type VisiteUpdateOneRequiredWithoutVisiteAccepteeNestedInput = {
    create?: XOR<VisiteCreateWithoutVisiteAccepteeInput, VisiteUncheckedCreateWithoutVisiteAccepteeInput>
    connectOrCreate?: VisiteCreateOrConnectWithoutVisiteAccepteeInput
    upsert?: VisiteUpsertWithoutVisiteAccepteeInput
    connect?: VisiteWhereUniqueInput
    update?: XOR<XOR<VisiteUpdateToOneWithWhereWithoutVisiteAccepteeInput, VisiteUpdateWithoutVisiteAccepteeInput>, VisiteUncheckedUpdateWithoutVisiteAccepteeInput>
  }

  export type VisiteCreateNestedOneWithoutVisiteRefuseeInput = {
    create?: XOR<VisiteCreateWithoutVisiteRefuseeInput, VisiteUncheckedCreateWithoutVisiteRefuseeInput>
    connectOrCreate?: VisiteCreateOrConnectWithoutVisiteRefuseeInput
    connect?: VisiteWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VisiteUpdateOneRequiredWithoutVisiteRefuseeNestedInput = {
    create?: XOR<VisiteCreateWithoutVisiteRefuseeInput, VisiteUncheckedCreateWithoutVisiteRefuseeInput>
    connectOrCreate?: VisiteCreateOrConnectWithoutVisiteRefuseeInput
    upsert?: VisiteUpsertWithoutVisiteRefuseeInput
    connect?: VisiteWhereUniqueInput
    update?: XOR<XOR<VisiteUpdateToOneWithWhereWithoutVisiteRefuseeInput, VisiteUpdateWithoutVisiteRefuseeInput>, VisiteUncheckedUpdateWithoutVisiteRefuseeInput>
  }

  export type CategorieCreateNestedOneWithoutLesPlantesInput = {
    create?: XOR<CategorieCreateWithoutLesPlantesInput, CategorieUncheckedCreateWithoutLesPlantesInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutLesPlantesInput
    connect?: CategorieWhereUniqueInput
  }

  export type AnnonceCreateNestedManyWithoutPlanteInput = {
    create?: XOR<AnnonceCreateWithoutPlanteInput, AnnonceUncheckedCreateWithoutPlanteInput> | AnnonceCreateWithoutPlanteInput[] | AnnonceUncheckedCreateWithoutPlanteInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutPlanteInput | AnnonceCreateOrConnectWithoutPlanteInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type AnnonceUncheckedCreateNestedManyWithoutPlanteInput = {
    create?: XOR<AnnonceCreateWithoutPlanteInput, AnnonceUncheckedCreateWithoutPlanteInput> | AnnonceCreateWithoutPlanteInput[] | AnnonceUncheckedCreateWithoutPlanteInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutPlanteInput | AnnonceCreateOrConnectWithoutPlanteInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
  }

  export type CategorieUpdateOneRequiredWithoutLesPlantesNestedInput = {
    create?: XOR<CategorieCreateWithoutLesPlantesInput, CategorieUncheckedCreateWithoutLesPlantesInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutLesPlantesInput
    upsert?: CategorieUpsertWithoutLesPlantesInput
    connect?: CategorieWhereUniqueInput
    update?: XOR<XOR<CategorieUpdateToOneWithWhereWithoutLesPlantesInput, CategorieUpdateWithoutLesPlantesInput>, CategorieUncheckedUpdateWithoutLesPlantesInput>
  }

  export type AnnonceUpdateManyWithoutPlanteNestedInput = {
    create?: XOR<AnnonceCreateWithoutPlanteInput, AnnonceUncheckedCreateWithoutPlanteInput> | AnnonceCreateWithoutPlanteInput[] | AnnonceUncheckedCreateWithoutPlanteInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutPlanteInput | AnnonceCreateOrConnectWithoutPlanteInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutPlanteInput | AnnonceUpsertWithWhereUniqueWithoutPlanteInput[]
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutPlanteInput | AnnonceUpdateWithWhereUniqueWithoutPlanteInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutPlanteInput | AnnonceUpdateManyWithWhereWithoutPlanteInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type AnnonceUncheckedUpdateManyWithoutPlanteNestedInput = {
    create?: XOR<AnnonceCreateWithoutPlanteInput, AnnonceUncheckedCreateWithoutPlanteInput> | AnnonceCreateWithoutPlanteInput[] | AnnonceUncheckedCreateWithoutPlanteInput[]
    connectOrCreate?: AnnonceCreateOrConnectWithoutPlanteInput | AnnonceCreateOrConnectWithoutPlanteInput[]
    upsert?: AnnonceUpsertWithWhereUniqueWithoutPlanteInput | AnnonceUpsertWithWhereUniqueWithoutPlanteInput[]
    set?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    disconnect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    delete?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    connect?: AnnonceWhereUniqueInput | AnnonceWhereUniqueInput[]
    update?: AnnonceUpdateWithWhereUniqueWithoutPlanteInput | AnnonceUpdateWithWhereUniqueWithoutPlanteInput[]
    updateMany?: AnnonceUpdateManyWithWhereWithoutPlanteInput | AnnonceUpdateManyWithWhereWithoutPlanteInput[]
    deleteMany?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
  }

  export type PlanteCreateNestedManyWithoutCategorieInput = {
    create?: XOR<PlanteCreateWithoutCategorieInput, PlanteUncheckedCreateWithoutCategorieInput> | PlanteCreateWithoutCategorieInput[] | PlanteUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: PlanteCreateOrConnectWithoutCategorieInput | PlanteCreateOrConnectWithoutCategorieInput[]
    connect?: PlanteWhereUniqueInput | PlanteWhereUniqueInput[]
  }

  export type PlanteUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<PlanteCreateWithoutCategorieInput, PlanteUncheckedCreateWithoutCategorieInput> | PlanteCreateWithoutCategorieInput[] | PlanteUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: PlanteCreateOrConnectWithoutCategorieInput | PlanteCreateOrConnectWithoutCategorieInput[]
    connect?: PlanteWhereUniqueInput | PlanteWhereUniqueInput[]
  }

  export type PlanteUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<PlanteCreateWithoutCategorieInput, PlanteUncheckedCreateWithoutCategorieInput> | PlanteCreateWithoutCategorieInput[] | PlanteUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: PlanteCreateOrConnectWithoutCategorieInput | PlanteCreateOrConnectWithoutCategorieInput[]
    upsert?: PlanteUpsertWithWhereUniqueWithoutCategorieInput | PlanteUpsertWithWhereUniqueWithoutCategorieInput[]
    set?: PlanteWhereUniqueInput | PlanteWhereUniqueInput[]
    disconnect?: PlanteWhereUniqueInput | PlanteWhereUniqueInput[]
    delete?: PlanteWhereUniqueInput | PlanteWhereUniqueInput[]
    connect?: PlanteWhereUniqueInput | PlanteWhereUniqueInput[]
    update?: PlanteUpdateWithWhereUniqueWithoutCategorieInput | PlanteUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: PlanteUpdateManyWithWhereWithoutCategorieInput | PlanteUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: PlanteScalarWhereInput | PlanteScalarWhereInput[]
  }

  export type PlanteUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<PlanteCreateWithoutCategorieInput, PlanteUncheckedCreateWithoutCategorieInput> | PlanteCreateWithoutCategorieInput[] | PlanteUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: PlanteCreateOrConnectWithoutCategorieInput | PlanteCreateOrConnectWithoutCategorieInput[]
    upsert?: PlanteUpsertWithWhereUniqueWithoutCategorieInput | PlanteUpsertWithWhereUniqueWithoutCategorieInput[]
    set?: PlanteWhereUniqueInput | PlanteWhereUniqueInput[]
    disconnect?: PlanteWhereUniqueInput | PlanteWhereUniqueInput[]
    delete?: PlanteWhereUniqueInput | PlanteWhereUniqueInput[]
    connect?: PlanteWhereUniqueInput | PlanteWhereUniqueInput[]
    update?: PlanteUpdateWithWhereUniqueWithoutCategorieInput | PlanteUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: PlanteUpdateManyWithWhereWithoutCategorieInput | PlanteUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: PlanteScalarWhereInput | PlanteScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UtilisateurCreateWithoutAccountsInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    rolesUtilisateurs?: RoleUtilisateurCreateNestedManyWithoutUtilisateurInput
    lesAnnonces?: AnnonceCreateNestedManyWithoutAuteurInput
    lesVisites?: VisiteCreateNestedManyWithoutVisiteurInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UtilisateurUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    rolesUtilisateurs?: RoleUtilisateurUncheckedCreateNestedManyWithoutUtilisateurInput
    lesAnnonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    lesVisites?: VisiteUncheckedCreateNestedManyWithoutVisiteurInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UtilisateurCreateOrConnectWithoutAccountsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutAccountsInput, UtilisateurUncheckedCreateWithoutAccountsInput>
  }

  export type UtilisateurUpsertWithoutAccountsInput = {
    update: XOR<UtilisateurUpdateWithoutAccountsInput, UtilisateurUncheckedUpdateWithoutAccountsInput>
    create: XOR<UtilisateurCreateWithoutAccountsInput, UtilisateurUncheckedCreateWithoutAccountsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutAccountsInput, UtilisateurUncheckedUpdateWithoutAccountsInput>
  }

  export type UtilisateurUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    rolesUtilisateurs?: RoleUtilisateurUpdateManyWithoutUtilisateurNestedInput
    lesAnnonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    lesVisites?: VisiteUpdateManyWithoutVisiteurNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    rolesUtilisateurs?: RoleUtilisateurUncheckedUpdateManyWithoutUtilisateurNestedInput
    lesAnnonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    lesVisites?: VisiteUncheckedUpdateManyWithoutVisiteurNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UtilisateurCreateWithoutSessionsInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    rolesUtilisateurs?: RoleUtilisateurCreateNestedManyWithoutUtilisateurInput
    lesAnnonces?: AnnonceCreateNestedManyWithoutAuteurInput
    lesVisites?: VisiteCreateNestedManyWithoutVisiteurInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UtilisateurUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    rolesUtilisateurs?: RoleUtilisateurUncheckedCreateNestedManyWithoutUtilisateurInput
    lesAnnonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    lesVisites?: VisiteUncheckedCreateNestedManyWithoutVisiteurInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UtilisateurCreateOrConnectWithoutSessionsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutSessionsInput, UtilisateurUncheckedCreateWithoutSessionsInput>
  }

  export type UtilisateurUpsertWithoutSessionsInput = {
    update: XOR<UtilisateurUpdateWithoutSessionsInput, UtilisateurUncheckedUpdateWithoutSessionsInput>
    create: XOR<UtilisateurCreateWithoutSessionsInput, UtilisateurUncheckedCreateWithoutSessionsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutSessionsInput, UtilisateurUncheckedUpdateWithoutSessionsInput>
  }

  export type UtilisateurUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    rolesUtilisateurs?: RoleUtilisateurUpdateManyWithoutUtilisateurNestedInput
    lesAnnonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    lesVisites?: VisiteUpdateManyWithoutVisiteurNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    rolesUtilisateurs?: RoleUtilisateurUncheckedUpdateManyWithoutUtilisateurNestedInput
    lesAnnonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    lesVisites?: VisiteUncheckedUpdateManyWithoutVisiteurNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUtilisateurCreateWithoutUtilisateurInput = {
    role: RoleCreateNestedOneWithoutRolesUtilisateursInput
  }

  export type RoleUtilisateurUncheckedCreateWithoutUtilisateurInput = {
    roleId: number
  }

  export type RoleUtilisateurCreateOrConnectWithoutUtilisateurInput = {
    where: RoleUtilisateurWhereUniqueInput
    create: XOR<RoleUtilisateurCreateWithoutUtilisateurInput, RoleUtilisateurUncheckedCreateWithoutUtilisateurInput>
  }

  export type AnnonceCreateWithoutAuteurInput = {
    description: string
    datePublication: Date | string
    plante: PlanteCreateNestedOneWithoutAnnoncesInput
    lesPhotos?: PhotoCreateNestedManyWithoutAnnonceInput
    lesVisites?: VisiteCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateWithoutAuteurInput = {
    id?: number
    description: string
    datePublication: Date | string
    planteId: number
    lesPhotos?: PhotoUncheckedCreateNestedManyWithoutAnnonceInput
    lesVisites?: VisiteUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceCreateOrConnectWithoutAuteurInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput>
  }

  export type VisiteCreateWithoutVisiteurInput = {
    dateVisite: Date | string
    dateInvitation: Date | string
    annonce: AnnonceCreateNestedOneWithoutLesVisitesInput
    visiteAcceptee?: VisiteAccepteeCreateNestedOneWithoutVisiteInput
    visiteRefusee?: VisiteRefuseeCreateNestedOneWithoutVisiteInput
  }

  export type VisiteUncheckedCreateWithoutVisiteurInput = {
    id?: number
    dateVisite: Date | string
    dateInvitation: Date | string
    annonceId: number
    visiteAcceptee?: VisiteAccepteeUncheckedCreateNestedOneWithoutVisiteInput
    visiteRefusee?: VisiteRefuseeUncheckedCreateNestedOneWithoutVisiteInput
  }

  export type VisiteCreateOrConnectWithoutVisiteurInput = {
    where: VisiteWhereUniqueInput
    create: XOR<VisiteCreateWithoutVisiteurInput, VisiteUncheckedCreateWithoutVisiteurInput>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type RoleUtilisateurUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: RoleUtilisateurWhereUniqueInput
    update: XOR<RoleUtilisateurUpdateWithoutUtilisateurInput, RoleUtilisateurUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<RoleUtilisateurCreateWithoutUtilisateurInput, RoleUtilisateurUncheckedCreateWithoutUtilisateurInput>
  }

  export type RoleUtilisateurUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: RoleUtilisateurWhereUniqueInput
    data: XOR<RoleUtilisateurUpdateWithoutUtilisateurInput, RoleUtilisateurUncheckedUpdateWithoutUtilisateurInput>
  }

  export type RoleUtilisateurUpdateManyWithWhereWithoutUtilisateurInput = {
    where: RoleUtilisateurScalarWhereInput
    data: XOR<RoleUtilisateurUpdateManyMutationInput, RoleUtilisateurUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type RoleUtilisateurScalarWhereInput = {
    AND?: RoleUtilisateurScalarWhereInput | RoleUtilisateurScalarWhereInput[]
    OR?: RoleUtilisateurScalarWhereInput[]
    NOT?: RoleUtilisateurScalarWhereInput | RoleUtilisateurScalarWhereInput[]
    utilisateurId?: StringFilter<"RoleUtilisateur"> | string
    roleId?: IntFilter<"RoleUtilisateur"> | number
  }

  export type AnnonceUpsertWithWhereUniqueWithoutAuteurInput = {
    where: AnnonceWhereUniqueInput
    update: XOR<AnnonceUpdateWithoutAuteurInput, AnnonceUncheckedUpdateWithoutAuteurInput>
    create: XOR<AnnonceCreateWithoutAuteurInput, AnnonceUncheckedCreateWithoutAuteurInput>
  }

  export type AnnonceUpdateWithWhereUniqueWithoutAuteurInput = {
    where: AnnonceWhereUniqueInput
    data: XOR<AnnonceUpdateWithoutAuteurInput, AnnonceUncheckedUpdateWithoutAuteurInput>
  }

  export type AnnonceUpdateManyWithWhereWithoutAuteurInput = {
    where: AnnonceScalarWhereInput
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyWithoutAuteurInput>
  }

  export type AnnonceScalarWhereInput = {
    AND?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
    OR?: AnnonceScalarWhereInput[]
    NOT?: AnnonceScalarWhereInput | AnnonceScalarWhereInput[]
    id?: IntFilter<"Annonce"> | number
    description?: StringFilter<"Annonce"> | string
    datePublication?: DateTimeFilter<"Annonce"> | Date | string
    auteurId?: StringFilter<"Annonce"> | string
    planteId?: IntFilter<"Annonce"> | number
  }

  export type VisiteUpsertWithWhereUniqueWithoutVisiteurInput = {
    where: VisiteWhereUniqueInput
    update: XOR<VisiteUpdateWithoutVisiteurInput, VisiteUncheckedUpdateWithoutVisiteurInput>
    create: XOR<VisiteCreateWithoutVisiteurInput, VisiteUncheckedCreateWithoutVisiteurInput>
  }

  export type VisiteUpdateWithWhereUniqueWithoutVisiteurInput = {
    where: VisiteWhereUniqueInput
    data: XOR<VisiteUpdateWithoutVisiteurInput, VisiteUncheckedUpdateWithoutVisiteurInput>
  }

  export type VisiteUpdateManyWithWhereWithoutVisiteurInput = {
    where: VisiteScalarWhereInput
    data: XOR<VisiteUpdateManyMutationInput, VisiteUncheckedUpdateManyWithoutVisiteurInput>
  }

  export type VisiteScalarWhereInput = {
    AND?: VisiteScalarWhereInput | VisiteScalarWhereInput[]
    OR?: VisiteScalarWhereInput[]
    NOT?: VisiteScalarWhereInput | VisiteScalarWhereInput[]
    id?: IntFilter<"Visite"> | number
    dateVisite?: DateTimeFilter<"Visite"> | Date | string
    dateInvitation?: DateTimeFilter<"Visite"> | Date | string
    visiteurId?: StringFilter<"Visite"> | string
    annonceId?: IntFilter<"Visite"> | number
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type RoleUtilisateurCreateWithoutRoleInput = {
    utilisateur: UtilisateurCreateNestedOneWithoutRolesUtilisateursInput
  }

  export type RoleUtilisateurUncheckedCreateWithoutRoleInput = {
    utilisateurId: string
  }

  export type RoleUtilisateurCreateOrConnectWithoutRoleInput = {
    where: RoleUtilisateurWhereUniqueInput
    create: XOR<RoleUtilisateurCreateWithoutRoleInput, RoleUtilisateurUncheckedCreateWithoutRoleInput>
  }

  export type RoleUtilisateurUpsertWithWhereUniqueWithoutRoleInput = {
    where: RoleUtilisateurWhereUniqueInput
    update: XOR<RoleUtilisateurUpdateWithoutRoleInput, RoleUtilisateurUncheckedUpdateWithoutRoleInput>
    create: XOR<RoleUtilisateurCreateWithoutRoleInput, RoleUtilisateurUncheckedCreateWithoutRoleInput>
  }

  export type RoleUtilisateurUpdateWithWhereUniqueWithoutRoleInput = {
    where: RoleUtilisateurWhereUniqueInput
    data: XOR<RoleUtilisateurUpdateWithoutRoleInput, RoleUtilisateurUncheckedUpdateWithoutRoleInput>
  }

  export type RoleUtilisateurUpdateManyWithWhereWithoutRoleInput = {
    where: RoleUtilisateurScalarWhereInput
    data: XOR<RoleUtilisateurUpdateManyMutationInput, RoleUtilisateurUncheckedUpdateManyWithoutRoleInput>
  }

  export type UtilisateurCreateWithoutRolesUtilisateursInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    lesAnnonces?: AnnonceCreateNestedManyWithoutAuteurInput
    lesVisites?: VisiteCreateNestedManyWithoutVisiteurInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UtilisateurUncheckedCreateWithoutRolesUtilisateursInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    lesAnnonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    lesVisites?: VisiteUncheckedCreateNestedManyWithoutVisiteurInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UtilisateurCreateOrConnectWithoutRolesUtilisateursInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutRolesUtilisateursInput, UtilisateurUncheckedCreateWithoutRolesUtilisateursInput>
  }

  export type RoleCreateWithoutRolesUtilisateursInput = {
    nom?: string | null
  }

  export type RoleUncheckedCreateWithoutRolesUtilisateursInput = {
    id?: number
    nom?: string | null
  }

  export type RoleCreateOrConnectWithoutRolesUtilisateursInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolesUtilisateursInput, RoleUncheckedCreateWithoutRolesUtilisateursInput>
  }

  export type UtilisateurUpsertWithoutRolesUtilisateursInput = {
    update: XOR<UtilisateurUpdateWithoutRolesUtilisateursInput, UtilisateurUncheckedUpdateWithoutRolesUtilisateursInput>
    create: XOR<UtilisateurCreateWithoutRolesUtilisateursInput, UtilisateurUncheckedCreateWithoutRolesUtilisateursInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutRolesUtilisateursInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutRolesUtilisateursInput, UtilisateurUncheckedUpdateWithoutRolesUtilisateursInput>
  }

  export type UtilisateurUpdateWithoutRolesUtilisateursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    lesAnnonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    lesVisites?: VisiteUpdateManyWithoutVisiteurNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutRolesUtilisateursInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    lesAnnonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    lesVisites?: VisiteUncheckedUpdateManyWithoutVisiteurNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutRolesUtilisateursInput = {
    update: XOR<RoleUpdateWithoutRolesUtilisateursInput, RoleUncheckedUpdateWithoutRolesUtilisateursInput>
    create: XOR<RoleCreateWithoutRolesUtilisateursInput, RoleUncheckedCreateWithoutRolesUtilisateursInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolesUtilisateursInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolesUtilisateursInput, RoleUncheckedUpdateWithoutRolesUtilisateursInput>
  }

  export type RoleUpdateWithoutRolesUtilisateursInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateWithoutRolesUtilisateursInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnonceCreateWithoutLesPhotosInput = {
    description: string
    datePublication: Date | string
    auteur: UtilisateurCreateNestedOneWithoutLesAnnoncesInput
    plante: PlanteCreateNestedOneWithoutAnnoncesInput
    lesVisites?: VisiteCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateWithoutLesPhotosInput = {
    id?: number
    description: string
    datePublication: Date | string
    auteurId: string
    planteId: number
    lesVisites?: VisiteUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceCreateOrConnectWithoutLesPhotosInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutLesPhotosInput, AnnonceUncheckedCreateWithoutLesPhotosInput>
  }

  export type AnnonceUpsertWithoutLesPhotosInput = {
    update: XOR<AnnonceUpdateWithoutLesPhotosInput, AnnonceUncheckedUpdateWithoutLesPhotosInput>
    create: XOR<AnnonceCreateWithoutLesPhotosInput, AnnonceUncheckedCreateWithoutLesPhotosInput>
    where?: AnnonceWhereInput
  }

  export type AnnonceUpdateToOneWithWhereWithoutLesPhotosInput = {
    where?: AnnonceWhereInput
    data: XOR<AnnonceUpdateWithoutLesPhotosInput, AnnonceUncheckedUpdateWithoutLesPhotosInput>
  }

  export type AnnonceUpdateWithoutLesPhotosInput = {
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: UtilisateurUpdateOneRequiredWithoutLesAnnoncesNestedInput
    plante?: PlanteUpdateOneRequiredWithoutAnnoncesNestedInput
    lesVisites?: VisiteUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutLesPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: StringFieldUpdateOperationsInput | string
    planteId?: IntFieldUpdateOperationsInput | number
    lesVisites?: VisiteUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type UtilisateurCreateWithoutLesAnnoncesInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    rolesUtilisateurs?: RoleUtilisateurCreateNestedManyWithoutUtilisateurInput
    lesVisites?: VisiteCreateNestedManyWithoutVisiteurInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UtilisateurUncheckedCreateWithoutLesAnnoncesInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    rolesUtilisateurs?: RoleUtilisateurUncheckedCreateNestedManyWithoutUtilisateurInput
    lesVisites?: VisiteUncheckedCreateNestedManyWithoutVisiteurInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UtilisateurCreateOrConnectWithoutLesAnnoncesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutLesAnnoncesInput, UtilisateurUncheckedCreateWithoutLesAnnoncesInput>
  }

  export type PlanteCreateWithoutAnnoncesInput = {
    libelle: string
    description: string
    categorie: CategorieCreateNestedOneWithoutLesPlantesInput
  }

  export type PlanteUncheckedCreateWithoutAnnoncesInput = {
    id?: number
    libelle: string
    description: string
    categorieId: number
  }

  export type PlanteCreateOrConnectWithoutAnnoncesInput = {
    where: PlanteWhereUniqueInput
    create: XOR<PlanteCreateWithoutAnnoncesInput, PlanteUncheckedCreateWithoutAnnoncesInput>
  }

  export type PhotoCreateWithoutAnnonceInput = {
    cheminPhoto: string
  }

  export type PhotoUncheckedCreateWithoutAnnonceInput = {
    id?: number
    cheminPhoto: string
  }

  export type PhotoCreateOrConnectWithoutAnnonceInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutAnnonceInput, PhotoUncheckedCreateWithoutAnnonceInput>
  }

  export type VisiteCreateWithoutAnnonceInput = {
    dateVisite: Date | string
    dateInvitation: Date | string
    visiteur: UtilisateurCreateNestedOneWithoutLesVisitesInput
    visiteAcceptee?: VisiteAccepteeCreateNestedOneWithoutVisiteInput
    visiteRefusee?: VisiteRefuseeCreateNestedOneWithoutVisiteInput
  }

  export type VisiteUncheckedCreateWithoutAnnonceInput = {
    id?: number
    dateVisite: Date | string
    dateInvitation: Date | string
    visiteurId: string
    visiteAcceptee?: VisiteAccepteeUncheckedCreateNestedOneWithoutVisiteInput
    visiteRefusee?: VisiteRefuseeUncheckedCreateNestedOneWithoutVisiteInput
  }

  export type VisiteCreateOrConnectWithoutAnnonceInput = {
    where: VisiteWhereUniqueInput
    create: XOR<VisiteCreateWithoutAnnonceInput, VisiteUncheckedCreateWithoutAnnonceInput>
  }

  export type UtilisateurUpsertWithoutLesAnnoncesInput = {
    update: XOR<UtilisateurUpdateWithoutLesAnnoncesInput, UtilisateurUncheckedUpdateWithoutLesAnnoncesInput>
    create: XOR<UtilisateurCreateWithoutLesAnnoncesInput, UtilisateurUncheckedCreateWithoutLesAnnoncesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutLesAnnoncesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutLesAnnoncesInput, UtilisateurUncheckedUpdateWithoutLesAnnoncesInput>
  }

  export type UtilisateurUpdateWithoutLesAnnoncesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    rolesUtilisateurs?: RoleUtilisateurUpdateManyWithoutUtilisateurNestedInput
    lesVisites?: VisiteUpdateManyWithoutVisiteurNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutLesAnnoncesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    rolesUtilisateurs?: RoleUtilisateurUncheckedUpdateManyWithoutUtilisateurNestedInput
    lesVisites?: VisiteUncheckedUpdateManyWithoutVisiteurNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlanteUpsertWithoutAnnoncesInput = {
    update: XOR<PlanteUpdateWithoutAnnoncesInput, PlanteUncheckedUpdateWithoutAnnoncesInput>
    create: XOR<PlanteCreateWithoutAnnoncesInput, PlanteUncheckedCreateWithoutAnnoncesInput>
    where?: PlanteWhereInput
  }

  export type PlanteUpdateToOneWithWhereWithoutAnnoncesInput = {
    where?: PlanteWhereInput
    data: XOR<PlanteUpdateWithoutAnnoncesInput, PlanteUncheckedUpdateWithoutAnnoncesInput>
  }

  export type PlanteUpdateWithoutAnnoncesInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorie?: CategorieUpdateOneRequiredWithoutLesPlantesNestedInput
  }

  export type PlanteUncheckedUpdateWithoutAnnoncesInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categorieId?: IntFieldUpdateOperationsInput | number
  }

  export type PhotoUpsertWithWhereUniqueWithoutAnnonceInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutAnnonceInput, PhotoUncheckedUpdateWithoutAnnonceInput>
    create: XOR<PhotoCreateWithoutAnnonceInput, PhotoUncheckedCreateWithoutAnnonceInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutAnnonceInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutAnnonceInput, PhotoUncheckedUpdateWithoutAnnonceInput>
  }

  export type PhotoUpdateManyWithWhereWithoutAnnonceInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutAnnonceInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: IntFilter<"Photo"> | number
    cheminPhoto?: StringFilter<"Photo"> | string
    annonceId?: IntFilter<"Photo"> | number
  }

  export type VisiteUpsertWithWhereUniqueWithoutAnnonceInput = {
    where: VisiteWhereUniqueInput
    update: XOR<VisiteUpdateWithoutAnnonceInput, VisiteUncheckedUpdateWithoutAnnonceInput>
    create: XOR<VisiteCreateWithoutAnnonceInput, VisiteUncheckedCreateWithoutAnnonceInput>
  }

  export type VisiteUpdateWithWhereUniqueWithoutAnnonceInput = {
    where: VisiteWhereUniqueInput
    data: XOR<VisiteUpdateWithoutAnnonceInput, VisiteUncheckedUpdateWithoutAnnonceInput>
  }

  export type VisiteUpdateManyWithWhereWithoutAnnonceInput = {
    where: VisiteScalarWhereInput
    data: XOR<VisiteUpdateManyMutationInput, VisiteUncheckedUpdateManyWithoutAnnonceInput>
  }

  export type UtilisateurCreateWithoutLesVisitesInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    rolesUtilisateurs?: RoleUtilisateurCreateNestedManyWithoutUtilisateurInput
    lesAnnonces?: AnnonceCreateNestedManyWithoutAuteurInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UtilisateurUncheckedCreateWithoutLesVisitesInput = {
    id?: string
    email: string
    motDePasse: string
    prenom: string
    nom: string
    ville?: string | null
    cp?: string | null
    rue?: string | null
    description?: string | null
    cheminPhoto?: string | null
    dateInscription: Date | string
    rolesUtilisateurs?: RoleUtilisateurUncheckedCreateNestedManyWithoutUtilisateurInput
    lesAnnonces?: AnnonceUncheckedCreateNestedManyWithoutAuteurInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UtilisateurCreateOrConnectWithoutLesVisitesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutLesVisitesInput, UtilisateurUncheckedCreateWithoutLesVisitesInput>
  }

  export type AnnonceCreateWithoutLesVisitesInput = {
    description: string
    datePublication: Date | string
    auteur: UtilisateurCreateNestedOneWithoutLesAnnoncesInput
    plante: PlanteCreateNestedOneWithoutAnnoncesInput
    lesPhotos?: PhotoCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateWithoutLesVisitesInput = {
    id?: number
    description: string
    datePublication: Date | string
    auteurId: string
    planteId: number
    lesPhotos?: PhotoUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceCreateOrConnectWithoutLesVisitesInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutLesVisitesInput, AnnonceUncheckedCreateWithoutLesVisitesInput>
  }

  export type VisiteAccepteeCreateWithoutVisiteInput = {
    dateAcceptation: Date | string
    cheminPhoto?: string | null
  }

  export type VisiteAccepteeUncheckedCreateWithoutVisiteInput = {
    dateAcceptation: Date | string
    cheminPhoto?: string | null
  }

  export type VisiteAccepteeCreateOrConnectWithoutVisiteInput = {
    where: VisiteAccepteeWhereUniqueInput
    create: XOR<VisiteAccepteeCreateWithoutVisiteInput, VisiteAccepteeUncheckedCreateWithoutVisiteInput>
  }

  export type VisiteRefuseeCreateWithoutVisiteInput = {
    dateRefus?: Date | string | null
  }

  export type VisiteRefuseeUncheckedCreateWithoutVisiteInput = {
    dateRefus?: Date | string | null
  }

  export type VisiteRefuseeCreateOrConnectWithoutVisiteInput = {
    where: VisiteRefuseeWhereUniqueInput
    create: XOR<VisiteRefuseeCreateWithoutVisiteInput, VisiteRefuseeUncheckedCreateWithoutVisiteInput>
  }

  export type UtilisateurUpsertWithoutLesVisitesInput = {
    update: XOR<UtilisateurUpdateWithoutLesVisitesInput, UtilisateurUncheckedUpdateWithoutLesVisitesInput>
    create: XOR<UtilisateurCreateWithoutLesVisitesInput, UtilisateurUncheckedCreateWithoutLesVisitesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutLesVisitesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutLesVisitesInput, UtilisateurUncheckedUpdateWithoutLesVisitesInput>
  }

  export type UtilisateurUpdateWithoutLesVisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    rolesUtilisateurs?: RoleUtilisateurUpdateManyWithoutUtilisateurNestedInput
    lesAnnonces?: AnnonceUpdateManyWithoutAuteurNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutLesVisitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    motDePasse?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    cp?: NullableStringFieldUpdateOperationsInput | string | null
    rue?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    dateInscription?: DateTimeFieldUpdateOperationsInput | Date | string
    rolesUtilisateurs?: RoleUtilisateurUncheckedUpdateManyWithoutUtilisateurNestedInput
    lesAnnonces?: AnnonceUncheckedUpdateManyWithoutAuteurNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnnonceUpsertWithoutLesVisitesInput = {
    update: XOR<AnnonceUpdateWithoutLesVisitesInput, AnnonceUncheckedUpdateWithoutLesVisitesInput>
    create: XOR<AnnonceCreateWithoutLesVisitesInput, AnnonceUncheckedCreateWithoutLesVisitesInput>
    where?: AnnonceWhereInput
  }

  export type AnnonceUpdateToOneWithWhereWithoutLesVisitesInput = {
    where?: AnnonceWhereInput
    data: XOR<AnnonceUpdateWithoutLesVisitesInput, AnnonceUncheckedUpdateWithoutLesVisitesInput>
  }

  export type AnnonceUpdateWithoutLesVisitesInput = {
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: UtilisateurUpdateOneRequiredWithoutLesAnnoncesNestedInput
    plante?: PlanteUpdateOneRequiredWithoutAnnoncesNestedInput
    lesPhotos?: PhotoUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutLesVisitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: StringFieldUpdateOperationsInput | string
    planteId?: IntFieldUpdateOperationsInput | number
    lesPhotos?: PhotoUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type VisiteAccepteeUpsertWithoutVisiteInput = {
    update: XOR<VisiteAccepteeUpdateWithoutVisiteInput, VisiteAccepteeUncheckedUpdateWithoutVisiteInput>
    create: XOR<VisiteAccepteeCreateWithoutVisiteInput, VisiteAccepteeUncheckedCreateWithoutVisiteInput>
    where?: VisiteAccepteeWhereInput
  }

  export type VisiteAccepteeUpdateToOneWithWhereWithoutVisiteInput = {
    where?: VisiteAccepteeWhereInput
    data: XOR<VisiteAccepteeUpdateWithoutVisiteInput, VisiteAccepteeUncheckedUpdateWithoutVisiteInput>
  }

  export type VisiteAccepteeUpdateWithoutVisiteInput = {
    dateAcceptation?: DateTimeFieldUpdateOperationsInput | Date | string
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisiteAccepteeUncheckedUpdateWithoutVisiteInput = {
    dateAcceptation?: DateTimeFieldUpdateOperationsInput | Date | string
    cheminPhoto?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VisiteRefuseeUpsertWithoutVisiteInput = {
    update: XOR<VisiteRefuseeUpdateWithoutVisiteInput, VisiteRefuseeUncheckedUpdateWithoutVisiteInput>
    create: XOR<VisiteRefuseeCreateWithoutVisiteInput, VisiteRefuseeUncheckedCreateWithoutVisiteInput>
    where?: VisiteRefuseeWhereInput
  }

  export type VisiteRefuseeUpdateToOneWithWhereWithoutVisiteInput = {
    where?: VisiteRefuseeWhereInput
    data: XOR<VisiteRefuseeUpdateWithoutVisiteInput, VisiteRefuseeUncheckedUpdateWithoutVisiteInput>
  }

  export type VisiteRefuseeUpdateWithoutVisiteInput = {
    dateRefus?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VisiteRefuseeUncheckedUpdateWithoutVisiteInput = {
    dateRefus?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VisiteCreateWithoutVisiteAccepteeInput = {
    dateVisite: Date | string
    dateInvitation: Date | string
    visiteur: UtilisateurCreateNestedOneWithoutLesVisitesInput
    annonce: AnnonceCreateNestedOneWithoutLesVisitesInput
    visiteRefusee?: VisiteRefuseeCreateNestedOneWithoutVisiteInput
  }

  export type VisiteUncheckedCreateWithoutVisiteAccepteeInput = {
    id?: number
    dateVisite: Date | string
    dateInvitation: Date | string
    visiteurId: string
    annonceId: number
    visiteRefusee?: VisiteRefuseeUncheckedCreateNestedOneWithoutVisiteInput
  }

  export type VisiteCreateOrConnectWithoutVisiteAccepteeInput = {
    where: VisiteWhereUniqueInput
    create: XOR<VisiteCreateWithoutVisiteAccepteeInput, VisiteUncheckedCreateWithoutVisiteAccepteeInput>
  }

  export type VisiteUpsertWithoutVisiteAccepteeInput = {
    update: XOR<VisiteUpdateWithoutVisiteAccepteeInput, VisiteUncheckedUpdateWithoutVisiteAccepteeInput>
    create: XOR<VisiteCreateWithoutVisiteAccepteeInput, VisiteUncheckedCreateWithoutVisiteAccepteeInput>
    where?: VisiteWhereInput
  }

  export type VisiteUpdateToOneWithWhereWithoutVisiteAccepteeInput = {
    where?: VisiteWhereInput
    data: XOR<VisiteUpdateWithoutVisiteAccepteeInput, VisiteUncheckedUpdateWithoutVisiteAccepteeInput>
  }

  export type VisiteUpdateWithoutVisiteAccepteeInput = {
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    visiteur?: UtilisateurUpdateOneRequiredWithoutLesVisitesNestedInput
    annonce?: AnnonceUpdateOneRequiredWithoutLesVisitesNestedInput
    visiteRefusee?: VisiteRefuseeUpdateOneWithoutVisiteNestedInput
  }

  export type VisiteUncheckedUpdateWithoutVisiteAccepteeInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    visiteurId?: StringFieldUpdateOperationsInput | string
    annonceId?: IntFieldUpdateOperationsInput | number
    visiteRefusee?: VisiteRefuseeUncheckedUpdateOneWithoutVisiteNestedInput
  }

  export type VisiteCreateWithoutVisiteRefuseeInput = {
    dateVisite: Date | string
    dateInvitation: Date | string
    visiteur: UtilisateurCreateNestedOneWithoutLesVisitesInput
    annonce: AnnonceCreateNestedOneWithoutLesVisitesInput
    visiteAcceptee?: VisiteAccepteeCreateNestedOneWithoutVisiteInput
  }

  export type VisiteUncheckedCreateWithoutVisiteRefuseeInput = {
    id?: number
    dateVisite: Date | string
    dateInvitation: Date | string
    visiteurId: string
    annonceId: number
    visiteAcceptee?: VisiteAccepteeUncheckedCreateNestedOneWithoutVisiteInput
  }

  export type VisiteCreateOrConnectWithoutVisiteRefuseeInput = {
    where: VisiteWhereUniqueInput
    create: XOR<VisiteCreateWithoutVisiteRefuseeInput, VisiteUncheckedCreateWithoutVisiteRefuseeInput>
  }

  export type VisiteUpsertWithoutVisiteRefuseeInput = {
    update: XOR<VisiteUpdateWithoutVisiteRefuseeInput, VisiteUncheckedUpdateWithoutVisiteRefuseeInput>
    create: XOR<VisiteCreateWithoutVisiteRefuseeInput, VisiteUncheckedCreateWithoutVisiteRefuseeInput>
    where?: VisiteWhereInput
  }

  export type VisiteUpdateToOneWithWhereWithoutVisiteRefuseeInput = {
    where?: VisiteWhereInput
    data: XOR<VisiteUpdateWithoutVisiteRefuseeInput, VisiteUncheckedUpdateWithoutVisiteRefuseeInput>
  }

  export type VisiteUpdateWithoutVisiteRefuseeInput = {
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    visiteur?: UtilisateurUpdateOneRequiredWithoutLesVisitesNestedInput
    annonce?: AnnonceUpdateOneRequiredWithoutLesVisitesNestedInput
    visiteAcceptee?: VisiteAccepteeUpdateOneWithoutVisiteNestedInput
  }

  export type VisiteUncheckedUpdateWithoutVisiteRefuseeInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    visiteurId?: StringFieldUpdateOperationsInput | string
    annonceId?: IntFieldUpdateOperationsInput | number
    visiteAcceptee?: VisiteAccepteeUncheckedUpdateOneWithoutVisiteNestedInput
  }

  export type CategorieCreateWithoutLesPlantesInput = {
    libelle: string
  }

  export type CategorieUncheckedCreateWithoutLesPlantesInput = {
    id?: number
    libelle: string
  }

  export type CategorieCreateOrConnectWithoutLesPlantesInput = {
    where: CategorieWhereUniqueInput
    create: XOR<CategorieCreateWithoutLesPlantesInput, CategorieUncheckedCreateWithoutLesPlantesInput>
  }

  export type AnnonceCreateWithoutPlanteInput = {
    description: string
    datePublication: Date | string
    auteur: UtilisateurCreateNestedOneWithoutLesAnnoncesInput
    lesPhotos?: PhotoCreateNestedManyWithoutAnnonceInput
    lesVisites?: VisiteCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceUncheckedCreateWithoutPlanteInput = {
    id?: number
    description: string
    datePublication: Date | string
    auteurId: string
    lesPhotos?: PhotoUncheckedCreateNestedManyWithoutAnnonceInput
    lesVisites?: VisiteUncheckedCreateNestedManyWithoutAnnonceInput
  }

  export type AnnonceCreateOrConnectWithoutPlanteInput = {
    where: AnnonceWhereUniqueInput
    create: XOR<AnnonceCreateWithoutPlanteInput, AnnonceUncheckedCreateWithoutPlanteInput>
  }

  export type CategorieUpsertWithoutLesPlantesInput = {
    update: XOR<CategorieUpdateWithoutLesPlantesInput, CategorieUncheckedUpdateWithoutLesPlantesInput>
    create: XOR<CategorieCreateWithoutLesPlantesInput, CategorieUncheckedCreateWithoutLesPlantesInput>
    where?: CategorieWhereInput
  }

  export type CategorieUpdateToOneWithWhereWithoutLesPlantesInput = {
    where?: CategorieWhereInput
    data: XOR<CategorieUpdateWithoutLesPlantesInput, CategorieUncheckedUpdateWithoutLesPlantesInput>
  }

  export type CategorieUpdateWithoutLesPlantesInput = {
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateWithoutLesPlantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type AnnonceUpsertWithWhereUniqueWithoutPlanteInput = {
    where: AnnonceWhereUniqueInput
    update: XOR<AnnonceUpdateWithoutPlanteInput, AnnonceUncheckedUpdateWithoutPlanteInput>
    create: XOR<AnnonceCreateWithoutPlanteInput, AnnonceUncheckedCreateWithoutPlanteInput>
  }

  export type AnnonceUpdateWithWhereUniqueWithoutPlanteInput = {
    where: AnnonceWhereUniqueInput
    data: XOR<AnnonceUpdateWithoutPlanteInput, AnnonceUncheckedUpdateWithoutPlanteInput>
  }

  export type AnnonceUpdateManyWithWhereWithoutPlanteInput = {
    where: AnnonceScalarWhereInput
    data: XOR<AnnonceUpdateManyMutationInput, AnnonceUncheckedUpdateManyWithoutPlanteInput>
  }

  export type PlanteCreateWithoutCategorieInput = {
    libelle: string
    description: string
    annonces?: AnnonceCreateNestedManyWithoutPlanteInput
  }

  export type PlanteUncheckedCreateWithoutCategorieInput = {
    id?: number
    libelle: string
    description: string
    annonces?: AnnonceUncheckedCreateNestedManyWithoutPlanteInput
  }

  export type PlanteCreateOrConnectWithoutCategorieInput = {
    where: PlanteWhereUniqueInput
    create: XOR<PlanteCreateWithoutCategorieInput, PlanteUncheckedCreateWithoutCategorieInput>
  }

  export type PlanteUpsertWithWhereUniqueWithoutCategorieInput = {
    where: PlanteWhereUniqueInput
    update: XOR<PlanteUpdateWithoutCategorieInput, PlanteUncheckedUpdateWithoutCategorieInput>
    create: XOR<PlanteCreateWithoutCategorieInput, PlanteUncheckedCreateWithoutCategorieInput>
  }

  export type PlanteUpdateWithWhereUniqueWithoutCategorieInput = {
    where: PlanteWhereUniqueInput
    data: XOR<PlanteUpdateWithoutCategorieInput, PlanteUncheckedUpdateWithoutCategorieInput>
  }

  export type PlanteUpdateManyWithWhereWithoutCategorieInput = {
    where: PlanteScalarWhereInput
    data: XOR<PlanteUpdateManyMutationInput, PlanteUncheckedUpdateManyWithoutCategorieInput>
  }

  export type PlanteScalarWhereInput = {
    AND?: PlanteScalarWhereInput | PlanteScalarWhereInput[]
    OR?: PlanteScalarWhereInput[]
    NOT?: PlanteScalarWhereInput | PlanteScalarWhereInput[]
    id?: IntFilter<"Plante"> | number
    libelle?: StringFilter<"Plante"> | string
    description?: StringFilter<"Plante"> | string
    categorieId?: IntFilter<"Plante"> | number
  }

  export type RoleUtilisateurUpdateWithoutUtilisateurInput = {
    role?: RoleUpdateOneRequiredWithoutRolesUtilisateursNestedInput
  }

  export type RoleUtilisateurUncheckedUpdateWithoutUtilisateurInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleUtilisateurUncheckedUpdateManyWithoutUtilisateurInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type AnnonceUpdateWithoutAuteurInput = {
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    plante?: PlanteUpdateOneRequiredWithoutAnnoncesNestedInput
    lesPhotos?: PhotoUpdateManyWithoutAnnonceNestedInput
    lesVisites?: VisiteUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutAuteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    planteId?: IntFieldUpdateOperationsInput | number
    lesPhotos?: PhotoUncheckedUpdateManyWithoutAnnonceNestedInput
    lesVisites?: VisiteUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateManyWithoutAuteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    planteId?: IntFieldUpdateOperationsInput | number
  }

  export type VisiteUpdateWithoutVisiteurInput = {
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    annonce?: AnnonceUpdateOneRequiredWithoutLesVisitesNestedInput
    visiteAcceptee?: VisiteAccepteeUpdateOneWithoutVisiteNestedInput
    visiteRefusee?: VisiteRefuseeUpdateOneWithoutVisiteNestedInput
  }

  export type VisiteUncheckedUpdateWithoutVisiteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    annonceId?: IntFieldUpdateOperationsInput | number
    visiteAcceptee?: VisiteAccepteeUncheckedUpdateOneWithoutVisiteNestedInput
    visiteRefusee?: VisiteRefuseeUncheckedUpdateOneWithoutVisiteNestedInput
  }

  export type VisiteUncheckedUpdateManyWithoutVisiteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    annonceId?: IntFieldUpdateOperationsInput | number
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUtilisateurUpdateWithoutRoleInput = {
    utilisateur?: UtilisateurUpdateOneRequiredWithoutRolesUtilisateursNestedInput
  }

  export type RoleUtilisateurUncheckedUpdateWithoutRoleInput = {
    utilisateurId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUtilisateurUncheckedUpdateManyWithoutRoleInput = {
    utilisateurId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUpdateWithoutAnnonceInput = {
    cheminPhoto?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateWithoutAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    cheminPhoto?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyWithoutAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    cheminPhoto?: StringFieldUpdateOperationsInput | string
  }

  export type VisiteUpdateWithoutAnnonceInput = {
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    visiteur?: UtilisateurUpdateOneRequiredWithoutLesVisitesNestedInput
    visiteAcceptee?: VisiteAccepteeUpdateOneWithoutVisiteNestedInput
    visiteRefusee?: VisiteRefuseeUpdateOneWithoutVisiteNestedInput
  }

  export type VisiteUncheckedUpdateWithoutAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    visiteurId?: StringFieldUpdateOperationsInput | string
    visiteAcceptee?: VisiteAccepteeUncheckedUpdateOneWithoutVisiteNestedInput
    visiteRefusee?: VisiteRefuseeUncheckedUpdateOneWithoutVisiteNestedInput
  }

  export type VisiteUncheckedUpdateManyWithoutAnnonceInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateVisite?: DateTimeFieldUpdateOperationsInput | Date | string
    dateInvitation?: DateTimeFieldUpdateOperationsInput | Date | string
    visiteurId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnonceUpdateWithoutPlanteInput = {
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteur?: UtilisateurUpdateOneRequiredWithoutLesAnnoncesNestedInput
    lesPhotos?: PhotoUpdateManyWithoutAnnonceNestedInput
    lesVisites?: VisiteUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateWithoutPlanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: StringFieldUpdateOperationsInput | string
    lesPhotos?: PhotoUncheckedUpdateManyWithoutAnnonceNestedInput
    lesVisites?: VisiteUncheckedUpdateManyWithoutAnnonceNestedInput
  }

  export type AnnonceUncheckedUpdateManyWithoutPlanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    datePublication?: DateTimeFieldUpdateOperationsInput | Date | string
    auteurId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanteUpdateWithoutCategorieInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    annonces?: AnnonceUpdateManyWithoutPlanteNestedInput
  }

  export type PlanteUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    annonces?: AnnonceUncheckedUpdateManyWithoutPlanteNestedInput
  }

  export type PlanteUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UtilisateurCountOutputTypeDefaultArgs instead
     */
    export type UtilisateurCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnnonceCountOutputTypeDefaultArgs instead
     */
    export type AnnonceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnnonceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanteCountOutputTypeDefaultArgs instead
     */
    export type PlanteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategorieCountOutputTypeDefaultArgs instead
     */
    export type CategorieCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategorieCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UtilisateurDefaultArgs instead
     */
    export type UtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UtilisateurDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleUtilisateurDefaultArgs instead
     */
    export type RoleUtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleUtilisateurDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhotoDefaultArgs instead
     */
    export type PhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhotoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnnonceDefaultArgs instead
     */
    export type AnnonceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnnonceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VisiteDefaultArgs instead
     */
    export type VisiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VisiteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VisiteAccepteeDefaultArgs instead
     */
    export type VisiteAccepteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VisiteAccepteeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VisiteRefuseeDefaultArgs instead
     */
    export type VisiteRefuseeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VisiteRefuseeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanteDefaultArgs instead
     */
    export type PlanteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategorieDefaultArgs instead
     */
    export type CategorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategorieDefaultArgs<ExtArgs>

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