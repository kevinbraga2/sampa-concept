
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model ScheduledService
 * 
 */
export type ScheduledService = $Result.DefaultSelection<Prisma.$ScheduledServicePayload>
/**
 * Model ProfessionalSchedule
 * 
 */
export type ProfessionalSchedule = $Result.DefaultSelection<Prisma.$ProfessionalSchedulePayload>
/**
 * Model Professional
 * 
 */
export type Professional = $Result.DefaultSelection<Prisma.$ProfessionalPayload>
/**
 * Model ProfessionalLeave
 * 
 */
export type ProfessionalLeave = $Result.DefaultSelection<Prisma.$ProfessionalLeavePayload>
/**
 * Model ProfessionalService
 * 
 */
export type ProfessionalService = $Result.DefaultSelection<Prisma.$ProfessionalServicePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model BusinessHours
 * 
 */
export type BusinessHours = $Result.DefaultSelection<Prisma.$BusinessHoursPayload>
/**
 * Model BusinessHoliday
 * 
 */
export type BusinessHoliday = $Result.DefaultSelection<Prisma.$BusinessHolidayPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  HAIR: 'HAIR',
  ESTHETICS: 'ESTHETICS'
};

export type Category = (typeof Category)[keyof typeof Category]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const PaymentStatus: {
  PENDENTE: 'PENDENTE',
  PAGO: 'PAGO',
  PARCIAL: 'PARCIAL'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  DINHEIRO: 'DINHEIRO',
  CARTAO: 'CARTAO',
  PIX: 'PIX'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  PROFESSIONAL: 'PROFESSIONAL'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Services
 * const services = await prisma.service.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Services
   * const services = await prisma.service.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduledService`: Exposes CRUD operations for the **ScheduledService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduledServices
    * const scheduledServices = await prisma.scheduledService.findMany()
    * ```
    */
  get scheduledService(): Prisma.ScheduledServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professionalSchedule`: Exposes CRUD operations for the **ProfessionalSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfessionalSchedules
    * const professionalSchedules = await prisma.professionalSchedule.findMany()
    * ```
    */
  get professionalSchedule(): Prisma.ProfessionalScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professional`: Exposes CRUD operations for the **Professional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Professionals
    * const professionals = await prisma.professional.findMany()
    * ```
    */
  get professional(): Prisma.ProfessionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professionalLeave`: Exposes CRUD operations for the **ProfessionalLeave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfessionalLeaves
    * const professionalLeaves = await prisma.professionalLeave.findMany()
    * ```
    */
  get professionalLeave(): Prisma.ProfessionalLeaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.professionalService`: Exposes CRUD operations for the **ProfessionalService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProfessionalServices
    * const professionalServices = await prisma.professionalService.findMany()
    * ```
    */
  get professionalService(): Prisma.ProfessionalServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessHours`: Exposes CRUD operations for the **BusinessHours** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessHours
    * const businessHours = await prisma.businessHours.findMany()
    * ```
    */
  get businessHours(): Prisma.BusinessHoursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessHoliday`: Exposes CRUD operations for the **BusinessHoliday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessHolidays
    * const businessHolidays = await prisma.businessHoliday.findMany()
    * ```
    */
  get businessHoliday(): Prisma.BusinessHolidayDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Service: 'Service',
    Client: 'Client',
    Appointment: 'Appointment',
    ScheduledService: 'ScheduledService',
    ProfessionalSchedule: 'ProfessionalSchedule',
    Professional: 'Professional',
    ProfessionalLeave: 'ProfessionalLeave',
    ProfessionalService: 'ProfessionalService',
    Payment: 'Payment',
    BusinessHours: 'BusinessHours',
    BusinessHoliday: 'BusinessHoliday',
    User: 'User',
    Session: 'Session',
    Account: 'Account'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "service" | "client" | "appointment" | "scheduledService" | "professionalSchedule" | "professional" | "professionalLeave" | "professionalService" | "payment" | "businessHours" | "businessHoliday" | "user" | "session" | "account"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      ScheduledService: {
        payload: Prisma.$ScheduledServicePayload<ExtArgs>
        fields: Prisma.ScheduledServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduledServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduledServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload>
          }
          findFirst: {
            args: Prisma.ScheduledServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduledServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload>
          }
          findMany: {
            args: Prisma.ScheduledServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload>[]
          }
          create: {
            args: Prisma.ScheduledServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload>
          }
          createMany: {
            args: Prisma.ScheduledServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduledServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload>[]
          }
          delete: {
            args: Prisma.ScheduledServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload>
          }
          update: {
            args: Prisma.ScheduledServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload>
          }
          deleteMany: {
            args: Prisma.ScheduledServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduledServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduledServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload>[]
          }
          upsert: {
            args: Prisma.ScheduledServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduledServicePayload>
          }
          aggregate: {
            args: Prisma.ScheduledServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduledService>
          }
          groupBy: {
            args: Prisma.ScheduledServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduledServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduledServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduledServiceCountAggregateOutputType> | number
          }
        }
      }
      ProfessionalSchedule: {
        payload: Prisma.$ProfessionalSchedulePayload<ExtArgs>
        fields: Prisma.ProfessionalScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload>
          }
          findFirst: {
            args: Prisma.ProfessionalScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload>
          }
          findMany: {
            args: Prisma.ProfessionalScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload>[]
          }
          create: {
            args: Prisma.ProfessionalScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload>
          }
          createMany: {
            args: Prisma.ProfessionalScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionalScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload>[]
          }
          delete: {
            args: Prisma.ProfessionalScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload>
          }
          update: {
            args: Prisma.ProfessionalScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionalScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload>[]
          }
          upsert: {
            args: Prisma.ProfessionalScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalSchedulePayload>
          }
          aggregate: {
            args: Prisma.ProfessionalScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessionalSchedule>
          }
          groupBy: {
            args: Prisma.ProfessionalScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalScheduleCountAggregateOutputType> | number
          }
        }
      }
      Professional: {
        payload: Prisma.$ProfessionalPayload<ExtArgs>
        fields: Prisma.ProfessionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findFirst: {
            args: Prisma.ProfessionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          findMany: {
            args: Prisma.ProfessionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          create: {
            args: Prisma.ProfessionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          createMany: {
            args: Prisma.ProfessionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          delete: {
            args: Prisma.ProfessionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          update: {
            args: Prisma.ProfessionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>[]
          }
          upsert: {
            args: Prisma.ProfessionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalPayload>
          }
          aggregate: {
            args: Prisma.ProfessionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessional>
          }
          groupBy: {
            args: Prisma.ProfessionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalCountAggregateOutputType> | number
          }
        }
      }
      ProfessionalLeave: {
        payload: Prisma.$ProfessionalLeavePayload<ExtArgs>
        fields: Prisma.ProfessionalLeaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalLeaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalLeaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload>
          }
          findFirst: {
            args: Prisma.ProfessionalLeaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalLeaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload>
          }
          findMany: {
            args: Prisma.ProfessionalLeaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload>[]
          }
          create: {
            args: Prisma.ProfessionalLeaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload>
          }
          createMany: {
            args: Prisma.ProfessionalLeaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionalLeaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload>[]
          }
          delete: {
            args: Prisma.ProfessionalLeaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload>
          }
          update: {
            args: Prisma.ProfessionalLeaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalLeaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalLeaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionalLeaveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload>[]
          }
          upsert: {
            args: Prisma.ProfessionalLeaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalLeavePayload>
          }
          aggregate: {
            args: Prisma.ProfessionalLeaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessionalLeave>
          }
          groupBy: {
            args: Prisma.ProfessionalLeaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalLeaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalLeaveCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalLeaveCountAggregateOutputType> | number
          }
        }
      }
      ProfessionalService: {
        payload: Prisma.$ProfessionalServicePayload<ExtArgs>
        fields: Prisma.ProfessionalServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfessionalServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfessionalServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload>
          }
          findFirst: {
            args: Prisma.ProfessionalServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfessionalServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload>
          }
          findMany: {
            args: Prisma.ProfessionalServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload>[]
          }
          create: {
            args: Prisma.ProfessionalServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload>
          }
          createMany: {
            args: Prisma.ProfessionalServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfessionalServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload>[]
          }
          delete: {
            args: Prisma.ProfessionalServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload>
          }
          update: {
            args: Prisma.ProfessionalServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload>
          }
          deleteMany: {
            args: Prisma.ProfessionalServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfessionalServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfessionalServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload>[]
          }
          upsert: {
            args: Prisma.ProfessionalServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfessionalServicePayload>
          }
          aggregate: {
            args: Prisma.ProfessionalServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfessionalService>
          }
          groupBy: {
            args: Prisma.ProfessionalServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfessionalServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ProfessionalServiceCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      BusinessHours: {
        payload: Prisma.$BusinessHoursPayload<ExtArgs>
        fields: Prisma.BusinessHoursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessHoursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessHoursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload>
          }
          findFirst: {
            args: Prisma.BusinessHoursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessHoursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload>
          }
          findMany: {
            args: Prisma.BusinessHoursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload>[]
          }
          create: {
            args: Prisma.BusinessHoursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload>
          }
          createMany: {
            args: Prisma.BusinessHoursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessHoursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload>[]
          }
          delete: {
            args: Prisma.BusinessHoursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload>
          }
          update: {
            args: Prisma.BusinessHoursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload>
          }
          deleteMany: {
            args: Prisma.BusinessHoursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessHoursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessHoursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload>[]
          }
          upsert: {
            args: Prisma.BusinessHoursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHoursPayload>
          }
          aggregate: {
            args: Prisma.BusinessHoursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessHours>
          }
          groupBy: {
            args: Prisma.BusinessHoursGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessHoursGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessHoursCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessHoursCountAggregateOutputType> | number
          }
        }
      }
      BusinessHoliday: {
        payload: Prisma.$BusinessHolidayPayload<ExtArgs>
        fields: Prisma.BusinessHolidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessHolidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessHolidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload>
          }
          findFirst: {
            args: Prisma.BusinessHolidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessHolidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload>
          }
          findMany: {
            args: Prisma.BusinessHolidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload>[]
          }
          create: {
            args: Prisma.BusinessHolidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload>
          }
          createMany: {
            args: Prisma.BusinessHolidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessHolidayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload>[]
          }
          delete: {
            args: Prisma.BusinessHolidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload>
          }
          update: {
            args: Prisma.BusinessHolidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload>
          }
          deleteMany: {
            args: Prisma.BusinessHolidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessHolidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessHolidayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload>[]
          }
          upsert: {
            args: Prisma.BusinessHolidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessHolidayPayload>
          }
          aggregate: {
            args: Prisma.BusinessHolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessHoliday>
          }
          groupBy: {
            args: Prisma.BusinessHolidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessHolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessHolidayCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessHolidayCountAggregateOutputType> | number
          }
        }
      }
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    service?: ServiceOmit
    client?: ClientOmit
    appointment?: AppointmentOmit
    scheduledService?: ScheduledServiceOmit
    professionalSchedule?: ProfessionalScheduleOmit
    professional?: ProfessionalOmit
    professionalLeave?: ProfessionalLeaveOmit
    professionalService?: ProfessionalServiceOmit
    payment?: PaymentOmit
    businessHours?: BusinessHoursOmit
    businessHoliday?: BusinessHolidayOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
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
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    appointments: number
    professionals: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ServiceCountOutputTypeCountAppointmentsArgs
    professionals?: boolean | ServiceCountOutputTypeCountProfessionalsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledServiceWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountProfessionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalServiceWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    appointments: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ClientCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    services: number
    payments: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | AppointmentCountOutputTypeCountServicesArgs
    payments?: boolean | AppointmentCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledServiceWhereInput
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type ProfessionalCountOutputType
   */

  export type ProfessionalCountOutputType = {
    appointments: number
    schedules: number
    leaves: number
    services: number
  }

  export type ProfessionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ProfessionalCountOutputTypeCountAppointmentsArgs
    schedules?: boolean | ProfessionalCountOutputTypeCountSchedulesArgs
    leaves?: boolean | ProfessionalCountOutputTypeCountLeavesArgs
    services?: boolean | ProfessionalCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalCountOutputType
     */
    select?: ProfessionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledServiceWhereInput
  }

  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalScheduleWhereInput
  }

  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalLeaveWhereInput
  }

  /**
   * ProfessionalCountOutputType without action
   */
  export type ProfessionalCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalServiceWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: number | null
    duration: number | null
  }

  export type ServiceSumAggregateOutputType = {
    price: number | null
    duration: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    duration: number | null
    category: $Enums.Category | null
    active: boolean | null
    overlap: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    duration: number | null
    category: $Enums.Category | null
    active: boolean | null
    overlap: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    duration: number
    category: number
    active: number
    overlap: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
    duration?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
    duration?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    duration?: true
    category?: true
    active?: true
    overlap?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    duration?: true
    category?: true
    active?: true
    overlap?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    duration?: true
    category?: true
    active?: true
    overlap?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: number
    duration: number
    category: $Enums.Category
    active: boolean
    overlap: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    category?: boolean
    active?: boolean
    overlap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | Service$appointmentsArgs<ExtArgs>
    professionals?: boolean | Service$professionalsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    category?: boolean
    active?: boolean
    overlap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    category?: boolean
    active?: boolean
    overlap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    category?: boolean
    active?: boolean
    overlap?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "duration" | "category" | "active" | "overlap" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Service$appointmentsArgs<ExtArgs>
    professionals?: boolean | Service$professionalsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      appointments: Prisma.$ScheduledServicePayload<ExtArgs>[]
      professionals: Prisma.$ProfessionalServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: number
      duration: number
      category: $Enums.Category
      active: boolean
      overlap: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Service$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Service$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professionals<T extends Service$professionalsArgs<ExtArgs> = {}>(args?: Subset<T, Service$professionalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Int'>
    readonly duration: FieldRef<"Service", 'Int'>
    readonly category: FieldRef<"Service", 'Category'>
    readonly active: FieldRef<"Service", 'Boolean'>
    readonly overlap: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.appointments
   */
  export type Service$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    where?: ScheduledServiceWhereInput
    orderBy?: ScheduledServiceOrderByWithRelationInput | ScheduledServiceOrderByWithRelationInput[]
    cursor?: ScheduledServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledServiceScalarFieldEnum | ScheduledServiceScalarFieldEnum[]
  }

  /**
   * Service.professionals
   */
  export type Service$professionalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    where?: ProfessionalServiceWhereInput
    orderBy?: ProfessionalServiceOrderByWithRelationInput | ProfessionalServiceOrderByWithRelationInput[]
    cursor?: ProfessionalServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalServiceScalarFieldEnum | ProfessionalServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    whatsapp: string | null
    profileImage: string | null
    technicalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    whatsapp: string | null
    profileImage: string | null
    technicalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    fullName: number
    whatsapp: number
    profileImage: number
    technicalNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    fullName?: true
    whatsapp?: true
    profileImage?: true
    technicalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    fullName?: true
    whatsapp?: true
    profileImage?: true
    technicalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    fullName?: true
    whatsapp?: true
    profileImage?: true
    technicalNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    fullName: string
    whatsapp: string | null
    profileImage: string | null
    technicalNotes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    profileImage?: boolean
    technicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | Client$appointmentsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    profileImage?: boolean
    technicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    profileImage?: boolean
    technicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    profileImage?: boolean
    technicalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "whatsapp" | "profileImage" | "technicalNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Client$appointmentsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      whatsapp: string | null
      profileImage: string | null
      technicalNotes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Client$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly fullName: FieldRef<"Client", 'String'>
    readonly whatsapp: FieldRef<"Client", 'String'>
    readonly profileImage: FieldRef<"Client", 'String'>
    readonly technicalNotes: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.appointments
   */
  export type Client$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    price: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    price: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    price: number | null
    date: Date | null
    status: $Enums.AppointmentStatus | null
    observations: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    price: number | null
    date: Date | null
    status: $Enums.AppointmentStatus | null
    observations: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    clientId: number
    price: number
    date: number
    status: number
    observations: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    price?: true
  }

  export type AppointmentSumAggregateInputType = {
    price?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    clientId?: true
    price?: true
    date?: true
    status?: true
    observations?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    clientId?: true
    price?: true
    date?: true
    status?: true
    observations?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    clientId?: true
    price?: true
    date?: true
    status?: true
    observations?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    clientId: string
    price: number
    date: Date
    status: $Enums.AppointmentStatus
    observations: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    price?: boolean
    date?: boolean
    status?: boolean
    observations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    services?: boolean | Appointment$servicesArgs<ExtArgs>
    payments?: boolean | Appointment$paymentsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    price?: boolean
    date?: boolean
    status?: boolean
    observations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    price?: boolean
    date?: boolean
    status?: boolean
    observations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    clientId?: boolean
    price?: boolean
    date?: boolean
    status?: boolean
    observations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "price" | "date" | "status" | "observations" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    services?: boolean | Appointment$servicesArgs<ExtArgs>
    payments?: boolean | Appointment$paymentsArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      services: Prisma.$ScheduledServicePayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      price: number
      date: Date
      status: $Enums.AppointmentStatus
      observations: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    services<T extends Appointment$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Appointment$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly clientId: FieldRef<"Appointment", 'String'>
    readonly price: FieldRef<"Appointment", 'Int'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly observations: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.services
   */
  export type Appointment$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    where?: ScheduledServiceWhereInput
    orderBy?: ScheduledServiceOrderByWithRelationInput | ScheduledServiceOrderByWithRelationInput[]
    cursor?: ScheduledServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledServiceScalarFieldEnum | ScheduledServiceScalarFieldEnum[]
  }

  /**
   * Appointment.payments
   */
  export type Appointment$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model ScheduledService
   */

  export type AggregateScheduledService = {
    _count: ScheduledServiceCountAggregateOutputType | null
    _avg: ScheduledServiceAvgAggregateOutputType | null
    _sum: ScheduledServiceSumAggregateOutputType | null
    _min: ScheduledServiceMinAggregateOutputType | null
    _max: ScheduledServiceMaxAggregateOutputType | null
  }

  export type ScheduledServiceAvgAggregateOutputType = {
    price: number | null
  }

  export type ScheduledServiceSumAggregateOutputType = {
    price: number | null
  }

  export type ScheduledServiceMinAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    price: number | null
    serviceId: string | null
    professionalId: string | null
    appointmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduledServiceMaxAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    price: number | null
    serviceId: string | null
    professionalId: string | null
    appointmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduledServiceCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    price: number
    serviceId: number
    professionalId: number
    appointmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduledServiceAvgAggregateInputType = {
    price?: true
  }

  export type ScheduledServiceSumAggregateInputType = {
    price?: true
  }

  export type ScheduledServiceMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    price?: true
    serviceId?: true
    professionalId?: true
    appointmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduledServiceMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    price?: true
    serviceId?: true
    professionalId?: true
    appointmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduledServiceCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    price?: true
    serviceId?: true
    professionalId?: true
    appointmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduledServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledService to aggregate.
     */
    where?: ScheduledServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledServices to fetch.
     */
    orderBy?: ScheduledServiceOrderByWithRelationInput | ScheduledServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduledServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduledServices
    **/
    _count?: true | ScheduledServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduledServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduledServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduledServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduledServiceMaxAggregateInputType
  }

  export type GetScheduledServiceAggregateType<T extends ScheduledServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduledService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduledService[P]>
      : GetScalarType<T[P], AggregateScheduledService[P]>
  }




  export type ScheduledServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduledServiceWhereInput
    orderBy?: ScheduledServiceOrderByWithAggregationInput | ScheduledServiceOrderByWithAggregationInput[]
    by: ScheduledServiceScalarFieldEnum[] | ScheduledServiceScalarFieldEnum
    having?: ScheduledServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduledServiceCountAggregateInputType | true
    _avg?: ScheduledServiceAvgAggregateInputType
    _sum?: ScheduledServiceSumAggregateInputType
    _min?: ScheduledServiceMinAggregateInputType
    _max?: ScheduledServiceMaxAggregateInputType
  }

  export type ScheduledServiceGroupByOutputType = {
    id: string
    startTime: Date
    endTime: Date
    price: number
    serviceId: string
    professionalId: string
    appointmentId: string
    createdAt: Date
    updatedAt: Date
    _count: ScheduledServiceCountAggregateOutputType | null
    _avg: ScheduledServiceAvgAggregateOutputType | null
    _sum: ScheduledServiceSumAggregateOutputType | null
    _min: ScheduledServiceMinAggregateOutputType | null
    _max: ScheduledServiceMaxAggregateOutputType | null
  }

  type GetScheduledServiceGroupByPayload<T extends ScheduledServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduledServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduledServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduledServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduledServiceGroupByOutputType[P]>
        }
      >
    >


  export type ScheduledServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    price?: boolean
    serviceId?: boolean
    professionalId?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledService"]>

  export type ScheduledServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    price?: boolean
    serviceId?: boolean
    professionalId?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledService"]>

  export type ScheduledServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    price?: boolean
    serviceId?: boolean
    professionalId?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduledService"]>

  export type ScheduledServiceSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    price?: boolean
    serviceId?: boolean
    professionalId?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduledServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startTime" | "endTime" | "price" | "serviceId" | "professionalId" | "appointmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["scheduledService"]>
  export type ScheduledServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type ScheduledServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type ScheduledServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $ScheduledServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduledService"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      professional: Prisma.$ProfessionalPayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTime: Date
      endTime: Date
      price: number
      serviceId: string
      professionalId: string
      appointmentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scheduledService"]>
    composites: {}
  }

  type ScheduledServiceGetPayload<S extends boolean | null | undefined | ScheduledServiceDefaultArgs> = $Result.GetResult<Prisma.$ScheduledServicePayload, S>

  type ScheduledServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduledServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduledServiceCountAggregateInputType | true
    }

  export interface ScheduledServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduledService'], meta: { name: 'ScheduledService' } }
    /**
     * Find zero or one ScheduledService that matches the filter.
     * @param {ScheduledServiceFindUniqueArgs} args - Arguments to find a ScheduledService
     * @example
     * // Get one ScheduledService
     * const scheduledService = await prisma.scheduledService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduledServiceFindUniqueArgs>(args: SelectSubset<T, ScheduledServiceFindUniqueArgs<ExtArgs>>): Prisma__ScheduledServiceClient<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduledService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduledServiceFindUniqueOrThrowArgs} args - Arguments to find a ScheduledService
     * @example
     * // Get one ScheduledService
     * const scheduledService = await prisma.scheduledService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduledServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduledServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduledServiceClient<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledServiceFindFirstArgs} args - Arguments to find a ScheduledService
     * @example
     * // Get one ScheduledService
     * const scheduledService = await prisma.scheduledService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduledServiceFindFirstArgs>(args?: SelectSubset<T, ScheduledServiceFindFirstArgs<ExtArgs>>): Prisma__ScheduledServiceClient<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduledService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledServiceFindFirstOrThrowArgs} args - Arguments to find a ScheduledService
     * @example
     * // Get one ScheduledService
     * const scheduledService = await prisma.scheduledService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduledServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduledServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduledServiceClient<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduledServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduledServices
     * const scheduledServices = await prisma.scheduledService.findMany()
     * 
     * // Get first 10 ScheduledServices
     * const scheduledServices = await prisma.scheduledService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduledServiceWithIdOnly = await prisma.scheduledService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduledServiceFindManyArgs>(args?: SelectSubset<T, ScheduledServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduledService.
     * @param {ScheduledServiceCreateArgs} args - Arguments to create a ScheduledService.
     * @example
     * // Create one ScheduledService
     * const ScheduledService = await prisma.scheduledService.create({
     *   data: {
     *     // ... data to create a ScheduledService
     *   }
     * })
     * 
     */
    create<T extends ScheduledServiceCreateArgs>(args: SelectSubset<T, ScheduledServiceCreateArgs<ExtArgs>>): Prisma__ScheduledServiceClient<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduledServices.
     * @param {ScheduledServiceCreateManyArgs} args - Arguments to create many ScheduledServices.
     * @example
     * // Create many ScheduledServices
     * const scheduledService = await prisma.scheduledService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduledServiceCreateManyArgs>(args?: SelectSubset<T, ScheduledServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduledServices and returns the data saved in the database.
     * @param {ScheduledServiceCreateManyAndReturnArgs} args - Arguments to create many ScheduledServices.
     * @example
     * // Create many ScheduledServices
     * const scheduledService = await prisma.scheduledService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduledServices and only return the `id`
     * const scheduledServiceWithIdOnly = await prisma.scheduledService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduledServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduledServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduledService.
     * @param {ScheduledServiceDeleteArgs} args - Arguments to delete one ScheduledService.
     * @example
     * // Delete one ScheduledService
     * const ScheduledService = await prisma.scheduledService.delete({
     *   where: {
     *     // ... filter to delete one ScheduledService
     *   }
     * })
     * 
     */
    delete<T extends ScheduledServiceDeleteArgs>(args: SelectSubset<T, ScheduledServiceDeleteArgs<ExtArgs>>): Prisma__ScheduledServiceClient<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduledService.
     * @param {ScheduledServiceUpdateArgs} args - Arguments to update one ScheduledService.
     * @example
     * // Update one ScheduledService
     * const scheduledService = await prisma.scheduledService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduledServiceUpdateArgs>(args: SelectSubset<T, ScheduledServiceUpdateArgs<ExtArgs>>): Prisma__ScheduledServiceClient<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduledServices.
     * @param {ScheduledServiceDeleteManyArgs} args - Arguments to filter ScheduledServices to delete.
     * @example
     * // Delete a few ScheduledServices
     * const { count } = await prisma.scheduledService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduledServiceDeleteManyArgs>(args?: SelectSubset<T, ScheduledServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduledServices
     * const scheduledService = await prisma.scheduledService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduledServiceUpdateManyArgs>(args: SelectSubset<T, ScheduledServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduledServices and returns the data updated in the database.
     * @param {ScheduledServiceUpdateManyAndReturnArgs} args - Arguments to update many ScheduledServices.
     * @example
     * // Update many ScheduledServices
     * const scheduledService = await prisma.scheduledService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduledServices and only return the `id`
     * const scheduledServiceWithIdOnly = await prisma.scheduledService.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduledServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduledServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduledService.
     * @param {ScheduledServiceUpsertArgs} args - Arguments to update or create a ScheduledService.
     * @example
     * // Update or create a ScheduledService
     * const scheduledService = await prisma.scheduledService.upsert({
     *   create: {
     *     // ... data to create a ScheduledService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduledService we want to update
     *   }
     * })
     */
    upsert<T extends ScheduledServiceUpsertArgs>(args: SelectSubset<T, ScheduledServiceUpsertArgs<ExtArgs>>): Prisma__ScheduledServiceClient<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduledServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledServiceCountArgs} args - Arguments to filter ScheduledServices to count.
     * @example
     * // Count the number of ScheduledServices
     * const count = await prisma.scheduledService.count({
     *   where: {
     *     // ... the filter for the ScheduledServices we want to count
     *   }
     * })
    **/
    count<T extends ScheduledServiceCountArgs>(
      args?: Subset<T, ScheduledServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduledServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduledService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduledServiceAggregateArgs>(args: Subset<T, ScheduledServiceAggregateArgs>): Prisma.PrismaPromise<GetScheduledServiceAggregateType<T>>

    /**
     * Group by ScheduledService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduledServiceGroupByArgs} args - Group by arguments.
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
      T extends ScheduledServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduledServiceGroupByArgs['orderBy'] }
        : { orderBy?: ScheduledServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduledServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduledServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduledService model
   */
  readonly fields: ScheduledServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduledService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduledServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    professional<T extends ProfessionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalDefaultArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScheduledService model
   */
  interface ScheduledServiceFieldRefs {
    readonly id: FieldRef<"ScheduledService", 'String'>
    readonly startTime: FieldRef<"ScheduledService", 'DateTime'>
    readonly endTime: FieldRef<"ScheduledService", 'DateTime'>
    readonly price: FieldRef<"ScheduledService", 'Int'>
    readonly serviceId: FieldRef<"ScheduledService", 'String'>
    readonly professionalId: FieldRef<"ScheduledService", 'String'>
    readonly appointmentId: FieldRef<"ScheduledService", 'String'>
    readonly createdAt: FieldRef<"ScheduledService", 'DateTime'>
    readonly updatedAt: FieldRef<"ScheduledService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScheduledService findUnique
   */
  export type ScheduledServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledService to fetch.
     */
    where: ScheduledServiceWhereUniqueInput
  }

  /**
   * ScheduledService findUniqueOrThrow
   */
  export type ScheduledServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledService to fetch.
     */
    where: ScheduledServiceWhereUniqueInput
  }

  /**
   * ScheduledService findFirst
   */
  export type ScheduledServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledService to fetch.
     */
    where?: ScheduledServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledServices to fetch.
     */
    orderBy?: ScheduledServiceOrderByWithRelationInput | ScheduledServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledServices.
     */
    cursor?: ScheduledServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledServices.
     */
    distinct?: ScheduledServiceScalarFieldEnum | ScheduledServiceScalarFieldEnum[]
  }

  /**
   * ScheduledService findFirstOrThrow
   */
  export type ScheduledServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledService to fetch.
     */
    where?: ScheduledServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledServices to fetch.
     */
    orderBy?: ScheduledServiceOrderByWithRelationInput | ScheduledServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduledServices.
     */
    cursor?: ScheduledServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledServices.
     */
    distinct?: ScheduledServiceScalarFieldEnum | ScheduledServiceScalarFieldEnum[]
  }

  /**
   * ScheduledService findMany
   */
  export type ScheduledServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    /**
     * Filter, which ScheduledServices to fetch.
     */
    where?: ScheduledServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduledServices to fetch.
     */
    orderBy?: ScheduledServiceOrderByWithRelationInput | ScheduledServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduledServices.
     */
    cursor?: ScheduledServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduledServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduledServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduledServices.
     */
    distinct?: ScheduledServiceScalarFieldEnum | ScheduledServiceScalarFieldEnum[]
  }

  /**
   * ScheduledService create
   */
  export type ScheduledServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ScheduledService.
     */
    data: XOR<ScheduledServiceCreateInput, ScheduledServiceUncheckedCreateInput>
  }

  /**
   * ScheduledService createMany
   */
  export type ScheduledServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduledServices.
     */
    data: ScheduledServiceCreateManyInput | ScheduledServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduledService createManyAndReturn
   */
  export type ScheduledServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduledServices.
     */
    data: ScheduledServiceCreateManyInput | ScheduledServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledService update
   */
  export type ScheduledServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ScheduledService.
     */
    data: XOR<ScheduledServiceUpdateInput, ScheduledServiceUncheckedUpdateInput>
    /**
     * Choose, which ScheduledService to update.
     */
    where: ScheduledServiceWhereUniqueInput
  }

  /**
   * ScheduledService updateMany
   */
  export type ScheduledServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduledServices.
     */
    data: XOR<ScheduledServiceUpdateManyMutationInput, ScheduledServiceUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledServices to update
     */
    where?: ScheduledServiceWhereInput
    /**
     * Limit how many ScheduledServices to update.
     */
    limit?: number
  }

  /**
   * ScheduledService updateManyAndReturn
   */
  export type ScheduledServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * The data used to update ScheduledServices.
     */
    data: XOR<ScheduledServiceUpdateManyMutationInput, ScheduledServiceUncheckedUpdateManyInput>
    /**
     * Filter which ScheduledServices to update
     */
    where?: ScheduledServiceWhereInput
    /**
     * Limit how many ScheduledServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScheduledService upsert
   */
  export type ScheduledServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ScheduledService to update in case it exists.
     */
    where: ScheduledServiceWhereUniqueInput
    /**
     * In case the ScheduledService found by the `where` argument doesn't exist, create a new ScheduledService with this data.
     */
    create: XOR<ScheduledServiceCreateInput, ScheduledServiceUncheckedCreateInput>
    /**
     * In case the ScheduledService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduledServiceUpdateInput, ScheduledServiceUncheckedUpdateInput>
  }

  /**
   * ScheduledService delete
   */
  export type ScheduledServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    /**
     * Filter which ScheduledService to delete.
     */
    where: ScheduledServiceWhereUniqueInput
  }

  /**
   * ScheduledService deleteMany
   */
  export type ScheduledServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduledServices to delete
     */
    where?: ScheduledServiceWhereInput
    /**
     * Limit how many ScheduledServices to delete.
     */
    limit?: number
  }

  /**
   * ScheduledService without action
   */
  export type ScheduledServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
  }


  /**
   * Model ProfessionalSchedule
   */

  export type AggregateProfessionalSchedule = {
    _count: ProfessionalScheduleCountAggregateOutputType | null
    _avg: ProfessionalScheduleAvgAggregateOutputType | null
    _sum: ProfessionalScheduleSumAggregateOutputType | null
    _min: ProfessionalScheduleMinAggregateOutputType | null
    _max: ProfessionalScheduleMaxAggregateOutputType | null
  }

  export type ProfessionalScheduleAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type ProfessionalScheduleSumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type ProfessionalScheduleMinAggregateOutputType = {
    id: string | null
    professionalId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionalScheduleMaxAggregateOutputType = {
    id: string | null
    professionalId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionalScheduleCountAggregateOutputType = {
    id: number
    professionalId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessionalScheduleAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type ProfessionalScheduleSumAggregateInputType = {
    dayOfWeek?: true
  }

  export type ProfessionalScheduleMinAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionalScheduleMaxAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionalScheduleCountAggregateInputType = {
    id?: true
    professionalId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessionalScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessionalSchedule to aggregate.
     */
    where?: ProfessionalScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalSchedules to fetch.
     */
    orderBy?: ProfessionalScheduleOrderByWithRelationInput | ProfessionalScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfessionalSchedules
    **/
    _count?: true | ProfessionalScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionalScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionalScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalScheduleMaxAggregateInputType
  }

  export type GetProfessionalScheduleAggregateType<T extends ProfessionalScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessionalSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessionalSchedule[P]>
      : GetScalarType<T[P], AggregateProfessionalSchedule[P]>
  }




  export type ProfessionalScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalScheduleWhereInput
    orderBy?: ProfessionalScheduleOrderByWithAggregationInput | ProfessionalScheduleOrderByWithAggregationInput[]
    by: ProfessionalScheduleScalarFieldEnum[] | ProfessionalScheduleScalarFieldEnum
    having?: ProfessionalScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalScheduleCountAggregateInputType | true
    _avg?: ProfessionalScheduleAvgAggregateInputType
    _sum?: ProfessionalScheduleSumAggregateInputType
    _min?: ProfessionalScheduleMinAggregateInputType
    _max?: ProfessionalScheduleMaxAggregateInputType
  }

  export type ProfessionalScheduleGroupByOutputType = {
    id: string
    professionalId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProfessionalScheduleCountAggregateOutputType | null
    _avg: ProfessionalScheduleAvgAggregateOutputType | null
    _sum: ProfessionalScheduleSumAggregateOutputType | null
    _min: ProfessionalScheduleMinAggregateOutputType | null
    _max: ProfessionalScheduleMaxAggregateOutputType | null
  }

  type GetProfessionalScheduleGroupByPayload<T extends ProfessionalScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalSchedule"]>

  export type ProfessionalScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalSchedule"]>

  export type ProfessionalScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalSchedule"]>

  export type ProfessionalScheduleSelectScalar = {
    id?: boolean
    professionalId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfessionalScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionalId" | "dayOfWeek" | "startTime" | "endTime" | "isAvailable" | "createdAt" | "updatedAt", ExtArgs["result"]["professionalSchedule"]>
  export type ProfessionalScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }
  export type ProfessionalScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }
  export type ProfessionalScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }

  export type $ProfessionalSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfessionalSchedule"
    objects: {
      professional: Prisma.$ProfessionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      professionalId: string
      dayOfWeek: number
      startTime: string
      endTime: string
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["professionalSchedule"]>
    composites: {}
  }

  type ProfessionalScheduleGetPayload<S extends boolean | null | undefined | ProfessionalScheduleDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalSchedulePayload, S>

  type ProfessionalScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalScheduleCountAggregateInputType | true
    }

  export interface ProfessionalScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfessionalSchedule'], meta: { name: 'ProfessionalSchedule' } }
    /**
     * Find zero or one ProfessionalSchedule that matches the filter.
     * @param {ProfessionalScheduleFindUniqueArgs} args - Arguments to find a ProfessionalSchedule
     * @example
     * // Get one ProfessionalSchedule
     * const professionalSchedule = await prisma.professionalSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalScheduleFindUniqueArgs>(args: SelectSubset<T, ProfessionalScheduleFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalScheduleClient<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfessionalSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalScheduleFindUniqueOrThrowArgs} args - Arguments to find a ProfessionalSchedule
     * @example
     * // Get one ProfessionalSchedule
     * const professionalSchedule = await prisma.professionalSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalScheduleClient<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionalSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalScheduleFindFirstArgs} args - Arguments to find a ProfessionalSchedule
     * @example
     * // Get one ProfessionalSchedule
     * const professionalSchedule = await prisma.professionalSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalScheduleFindFirstArgs>(args?: SelectSubset<T, ProfessionalScheduleFindFirstArgs<ExtArgs>>): Prisma__ProfessionalScheduleClient<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionalSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalScheduleFindFirstOrThrowArgs} args - Arguments to find a ProfessionalSchedule
     * @example
     * // Get one ProfessionalSchedule
     * const professionalSchedule = await prisma.professionalSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalScheduleClient<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfessionalSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfessionalSchedules
     * const professionalSchedules = await prisma.professionalSchedule.findMany()
     * 
     * // Get first 10 ProfessionalSchedules
     * const professionalSchedules = await prisma.professionalSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionalScheduleWithIdOnly = await prisma.professionalSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionalScheduleFindManyArgs>(args?: SelectSubset<T, ProfessionalScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfessionalSchedule.
     * @param {ProfessionalScheduleCreateArgs} args - Arguments to create a ProfessionalSchedule.
     * @example
     * // Create one ProfessionalSchedule
     * const ProfessionalSchedule = await prisma.professionalSchedule.create({
     *   data: {
     *     // ... data to create a ProfessionalSchedule
     *   }
     * })
     * 
     */
    create<T extends ProfessionalScheduleCreateArgs>(args: SelectSubset<T, ProfessionalScheduleCreateArgs<ExtArgs>>): Prisma__ProfessionalScheduleClient<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfessionalSchedules.
     * @param {ProfessionalScheduleCreateManyArgs} args - Arguments to create many ProfessionalSchedules.
     * @example
     * // Create many ProfessionalSchedules
     * const professionalSchedule = await prisma.professionalSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalScheduleCreateManyArgs>(args?: SelectSubset<T, ProfessionalScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfessionalSchedules and returns the data saved in the database.
     * @param {ProfessionalScheduleCreateManyAndReturnArgs} args - Arguments to create many ProfessionalSchedules.
     * @example
     * // Create many ProfessionalSchedules
     * const professionalSchedule = await prisma.professionalSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfessionalSchedules and only return the `id`
     * const professionalScheduleWithIdOnly = await prisma.professionalSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionalScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionalScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfessionalSchedule.
     * @param {ProfessionalScheduleDeleteArgs} args - Arguments to delete one ProfessionalSchedule.
     * @example
     * // Delete one ProfessionalSchedule
     * const ProfessionalSchedule = await prisma.professionalSchedule.delete({
     *   where: {
     *     // ... filter to delete one ProfessionalSchedule
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalScheduleDeleteArgs>(args: SelectSubset<T, ProfessionalScheduleDeleteArgs<ExtArgs>>): Prisma__ProfessionalScheduleClient<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfessionalSchedule.
     * @param {ProfessionalScheduleUpdateArgs} args - Arguments to update one ProfessionalSchedule.
     * @example
     * // Update one ProfessionalSchedule
     * const professionalSchedule = await prisma.professionalSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalScheduleUpdateArgs>(args: SelectSubset<T, ProfessionalScheduleUpdateArgs<ExtArgs>>): Prisma__ProfessionalScheduleClient<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfessionalSchedules.
     * @param {ProfessionalScheduleDeleteManyArgs} args - Arguments to filter ProfessionalSchedules to delete.
     * @example
     * // Delete a few ProfessionalSchedules
     * const { count } = await prisma.professionalSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalScheduleDeleteManyArgs>(args?: SelectSubset<T, ProfessionalScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionalSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfessionalSchedules
     * const professionalSchedule = await prisma.professionalSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalScheduleUpdateManyArgs>(args: SelectSubset<T, ProfessionalScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionalSchedules and returns the data updated in the database.
     * @param {ProfessionalScheduleUpdateManyAndReturnArgs} args - Arguments to update many ProfessionalSchedules.
     * @example
     * // Update many ProfessionalSchedules
     * const professionalSchedule = await prisma.professionalSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfessionalSchedules and only return the `id`
     * const professionalScheduleWithIdOnly = await prisma.professionalSchedule.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessionalScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionalScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfessionalSchedule.
     * @param {ProfessionalScheduleUpsertArgs} args - Arguments to update or create a ProfessionalSchedule.
     * @example
     * // Update or create a ProfessionalSchedule
     * const professionalSchedule = await prisma.professionalSchedule.upsert({
     *   create: {
     *     // ... data to create a ProfessionalSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfessionalSchedule we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalScheduleUpsertArgs>(args: SelectSubset<T, ProfessionalScheduleUpsertArgs<ExtArgs>>): Prisma__ProfessionalScheduleClient<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfessionalSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalScheduleCountArgs} args - Arguments to filter ProfessionalSchedules to count.
     * @example
     * // Count the number of ProfessionalSchedules
     * const count = await prisma.professionalSchedule.count({
     *   where: {
     *     // ... the filter for the ProfessionalSchedules we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalScheduleCountArgs>(
      args?: Subset<T, ProfessionalScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfessionalSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionalScheduleAggregateArgs>(args: Subset<T, ProfessionalScheduleAggregateArgs>): Prisma.PrismaPromise<GetProfessionalScheduleAggregateType<T>>

    /**
     * Group by ProfessionalSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalScheduleGroupByArgs} args - Group by arguments.
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
      T extends ProfessionalScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionalScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfessionalSchedule model
   */
  readonly fields: ProfessionalScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfessionalSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professional<T extends ProfessionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalDefaultArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProfessionalSchedule model
   */
  interface ProfessionalScheduleFieldRefs {
    readonly id: FieldRef<"ProfessionalSchedule", 'String'>
    readonly professionalId: FieldRef<"ProfessionalSchedule", 'String'>
    readonly dayOfWeek: FieldRef<"ProfessionalSchedule", 'Int'>
    readonly startTime: FieldRef<"ProfessionalSchedule", 'String'>
    readonly endTime: FieldRef<"ProfessionalSchedule", 'String'>
    readonly isAvailable: FieldRef<"ProfessionalSchedule", 'Boolean'>
    readonly createdAt: FieldRef<"ProfessionalSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfessionalSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfessionalSchedule findUnique
   */
  export type ProfessionalScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalSchedule to fetch.
     */
    where: ProfessionalScheduleWhereUniqueInput
  }

  /**
   * ProfessionalSchedule findUniqueOrThrow
   */
  export type ProfessionalScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalSchedule to fetch.
     */
    where: ProfessionalScheduleWhereUniqueInput
  }

  /**
   * ProfessionalSchedule findFirst
   */
  export type ProfessionalScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalSchedule to fetch.
     */
    where?: ProfessionalScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalSchedules to fetch.
     */
    orderBy?: ProfessionalScheduleOrderByWithRelationInput | ProfessionalScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessionalSchedules.
     */
    cursor?: ProfessionalScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalSchedules.
     */
    distinct?: ProfessionalScheduleScalarFieldEnum | ProfessionalScheduleScalarFieldEnum[]
  }

  /**
   * ProfessionalSchedule findFirstOrThrow
   */
  export type ProfessionalScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalSchedule to fetch.
     */
    where?: ProfessionalScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalSchedules to fetch.
     */
    orderBy?: ProfessionalScheduleOrderByWithRelationInput | ProfessionalScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessionalSchedules.
     */
    cursor?: ProfessionalScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalSchedules.
     */
    distinct?: ProfessionalScheduleScalarFieldEnum | ProfessionalScheduleScalarFieldEnum[]
  }

  /**
   * ProfessionalSchedule findMany
   */
  export type ProfessionalScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalSchedules to fetch.
     */
    where?: ProfessionalScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalSchedules to fetch.
     */
    orderBy?: ProfessionalScheduleOrderByWithRelationInput | ProfessionalScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfessionalSchedules.
     */
    cursor?: ProfessionalScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalSchedules.
     */
    distinct?: ProfessionalScheduleScalarFieldEnum | ProfessionalScheduleScalarFieldEnum[]
  }

  /**
   * ProfessionalSchedule create
   */
  export type ProfessionalScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfessionalSchedule.
     */
    data: XOR<ProfessionalScheduleCreateInput, ProfessionalScheduleUncheckedCreateInput>
  }

  /**
   * ProfessionalSchedule createMany
   */
  export type ProfessionalScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfessionalSchedules.
     */
    data: ProfessionalScheduleCreateManyInput | ProfessionalScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfessionalSchedule createManyAndReturn
   */
  export type ProfessionalScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many ProfessionalSchedules.
     */
    data: ProfessionalScheduleCreateManyInput | ProfessionalScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessionalSchedule update
   */
  export type ProfessionalScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfessionalSchedule.
     */
    data: XOR<ProfessionalScheduleUpdateInput, ProfessionalScheduleUncheckedUpdateInput>
    /**
     * Choose, which ProfessionalSchedule to update.
     */
    where: ProfessionalScheduleWhereUniqueInput
  }

  /**
   * ProfessionalSchedule updateMany
   */
  export type ProfessionalScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfessionalSchedules.
     */
    data: XOR<ProfessionalScheduleUpdateManyMutationInput, ProfessionalScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ProfessionalSchedules to update
     */
    where?: ProfessionalScheduleWhereInput
    /**
     * Limit how many ProfessionalSchedules to update.
     */
    limit?: number
  }

  /**
   * ProfessionalSchedule updateManyAndReturn
   */
  export type ProfessionalScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * The data used to update ProfessionalSchedules.
     */
    data: XOR<ProfessionalScheduleUpdateManyMutationInput, ProfessionalScheduleUncheckedUpdateManyInput>
    /**
     * Filter which ProfessionalSchedules to update
     */
    where?: ProfessionalScheduleWhereInput
    /**
     * Limit how many ProfessionalSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessionalSchedule upsert
   */
  export type ProfessionalScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfessionalSchedule to update in case it exists.
     */
    where: ProfessionalScheduleWhereUniqueInput
    /**
     * In case the ProfessionalSchedule found by the `where` argument doesn't exist, create a new ProfessionalSchedule with this data.
     */
    create: XOR<ProfessionalScheduleCreateInput, ProfessionalScheduleUncheckedCreateInput>
    /**
     * In case the ProfessionalSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalScheduleUpdateInput, ProfessionalScheduleUncheckedUpdateInput>
  }

  /**
   * ProfessionalSchedule delete
   */
  export type ProfessionalScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
    /**
     * Filter which ProfessionalSchedule to delete.
     */
    where: ProfessionalScheduleWhereUniqueInput
  }

  /**
   * ProfessionalSchedule deleteMany
   */
  export type ProfessionalScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessionalSchedules to delete
     */
    where?: ProfessionalScheduleWhereInput
    /**
     * Limit how many ProfessionalSchedules to delete.
     */
    limit?: number
  }

  /**
   * ProfessionalSchedule without action
   */
  export type ProfessionalScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Professional
   */

  export type AggregateProfessional = {
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  export type ProfessionalAvgAggregateOutputType = {
    rating: number | null
    commissionRate: number | null
  }

  export type ProfessionalSumAggregateOutputType = {
    rating: number | null
    commissionRate: number | null
  }

  export type ProfessionalMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    whatsapp: string | null
    bio: string | null
    profileImage: string | null
    category: $Enums.Category | null
    active: boolean | null
    rating: number | null
    commissionRate: number | null
    commissionType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ProfessionalMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    whatsapp: string | null
    bio: string | null
    profileImage: string | null
    category: $Enums.Category | null
    active: boolean | null
    rating: number | null
    commissionRate: number | null
    commissionType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ProfessionalCountAggregateOutputType = {
    id: number
    fullName: number
    whatsapp: number
    bio: number
    profileImage: number
    category: number
    active: number
    rating: number
    commissionRate: number
    commissionType: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ProfessionalAvgAggregateInputType = {
    rating?: true
    commissionRate?: true
  }

  export type ProfessionalSumAggregateInputType = {
    rating?: true
    commissionRate?: true
  }

  export type ProfessionalMinAggregateInputType = {
    id?: true
    fullName?: true
    whatsapp?: true
    bio?: true
    profileImage?: true
    category?: true
    active?: true
    rating?: true
    commissionRate?: true
    commissionType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProfessionalMaxAggregateInputType = {
    id?: true
    fullName?: true
    whatsapp?: true
    bio?: true
    profileImage?: true
    category?: true
    active?: true
    rating?: true
    commissionRate?: true
    commissionType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProfessionalCountAggregateInputType = {
    id?: true
    fullName?: true
    whatsapp?: true
    bio?: true
    profileImage?: true
    category?: true
    active?: true
    rating?: true
    commissionRate?: true
    commissionType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ProfessionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professional to aggregate.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Professionals
    **/
    _count?: true | ProfessionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfessionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfessionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalMaxAggregateInputType
  }

  export type GetProfessionalAggregateType<T extends ProfessionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessional[P]>
      : GetScalarType<T[P], AggregateProfessional[P]>
  }




  export type ProfessionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalWhereInput
    orderBy?: ProfessionalOrderByWithAggregationInput | ProfessionalOrderByWithAggregationInput[]
    by: ProfessionalScalarFieldEnum[] | ProfessionalScalarFieldEnum
    having?: ProfessionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalCountAggregateInputType | true
    _avg?: ProfessionalAvgAggregateInputType
    _sum?: ProfessionalSumAggregateInputType
    _min?: ProfessionalMinAggregateInputType
    _max?: ProfessionalMaxAggregateInputType
  }

  export type ProfessionalGroupByOutputType = {
    id: string
    fullName: string
    whatsapp: string
    bio: string | null
    profileImage: string | null
    category: $Enums.Category
    active: boolean
    rating: number | null
    commissionRate: number
    commissionType: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ProfessionalCountAggregateOutputType | null
    _avg: ProfessionalAvgAggregateOutputType | null
    _sum: ProfessionalSumAggregateOutputType | null
    _min: ProfessionalMinAggregateOutputType | null
    _max: ProfessionalMaxAggregateOutputType | null
  }

  type GetProfessionalGroupByPayload<T extends ProfessionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    bio?: boolean
    profileImage?: boolean
    category?: boolean
    active?: boolean
    rating?: boolean
    commissionRate?: boolean
    commissionType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    appointments?: boolean | Professional$appointmentsArgs<ExtArgs>
    schedules?: boolean | Professional$schedulesArgs<ExtArgs>
    leaves?: boolean | Professional$leavesArgs<ExtArgs>
    services?: boolean | Professional$servicesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProfessionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    bio?: boolean
    profileImage?: boolean
    category?: boolean
    active?: boolean
    rating?: boolean
    commissionRate?: boolean
    commissionType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    bio?: boolean
    profileImage?: boolean
    category?: boolean
    active?: boolean
    rating?: boolean
    commissionRate?: boolean
    commissionType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professional"]>

  export type ProfessionalSelectScalar = {
    id?: boolean
    fullName?: boolean
    whatsapp?: boolean
    bio?: boolean
    profileImage?: boolean
    category?: boolean
    active?: boolean
    rating?: boolean
    commissionRate?: boolean
    commissionType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ProfessionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "whatsapp" | "bio" | "profileImage" | "category" | "active" | "rating" | "commissionRate" | "commissionType" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["professional"]>
  export type ProfessionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Professional$appointmentsArgs<ExtArgs>
    schedules?: boolean | Professional$schedulesArgs<ExtArgs>
    leaves?: boolean | Professional$leavesArgs<ExtArgs>
    services?: boolean | Professional$servicesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ProfessionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfessionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfessionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfessionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Professional"
    objects: {
      appointments: Prisma.$ScheduledServicePayload<ExtArgs>[]
      schedules: Prisma.$ProfessionalSchedulePayload<ExtArgs>[]
      leaves: Prisma.$ProfessionalLeavePayload<ExtArgs>[]
      services: Prisma.$ProfessionalServicePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      whatsapp: string
      bio: string | null
      profileImage: string | null
      category: $Enums.Category
      active: boolean
      rating: number | null
      commissionRate: number
      commissionType: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["professional"]>
    composites: {}
  }

  type ProfessionalGetPayload<S extends boolean | null | undefined | ProfessionalDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalPayload, S>

  type ProfessionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalCountAggregateInputType | true
    }

  export interface ProfessionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Professional'], meta: { name: 'Professional' } }
    /**
     * Find zero or one Professional that matches the filter.
     * @param {ProfessionalFindUniqueArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalFindUniqueArgs>(args: SelectSubset<T, ProfessionalFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Professional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalFindUniqueOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalFindFirstArgs>(args?: SelectSubset<T, ProfessionalFindFirstArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Professional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindFirstOrThrowArgs} args - Arguments to find a Professional
     * @example
     * // Get one Professional
     * const professional = await prisma.professional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Professionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Professionals
     * const professionals = await prisma.professional.findMany()
     * 
     * // Get first 10 Professionals
     * const professionals = await prisma.professional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionalWithIdOnly = await prisma.professional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionalFindManyArgs>(args?: SelectSubset<T, ProfessionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Professional.
     * @param {ProfessionalCreateArgs} args - Arguments to create a Professional.
     * @example
     * // Create one Professional
     * const Professional = await prisma.professional.create({
     *   data: {
     *     // ... data to create a Professional
     *   }
     * })
     * 
     */
    create<T extends ProfessionalCreateArgs>(args: SelectSubset<T, ProfessionalCreateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Professionals.
     * @param {ProfessionalCreateManyArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalCreateManyArgs>(args?: SelectSubset<T, ProfessionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Professionals and returns the data saved in the database.
     * @param {ProfessionalCreateManyAndReturnArgs} args - Arguments to create many Professionals.
     * @example
     * // Create many Professionals
     * const professional = await prisma.professional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Professionals and only return the `id`
     * const professionalWithIdOnly = await prisma.professional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Professional.
     * @param {ProfessionalDeleteArgs} args - Arguments to delete one Professional.
     * @example
     * // Delete one Professional
     * const Professional = await prisma.professional.delete({
     *   where: {
     *     // ... filter to delete one Professional
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalDeleteArgs>(args: SelectSubset<T, ProfessionalDeleteArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Professional.
     * @param {ProfessionalUpdateArgs} args - Arguments to update one Professional.
     * @example
     * // Update one Professional
     * const professional = await prisma.professional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalUpdateArgs>(args: SelectSubset<T, ProfessionalUpdateArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Professionals.
     * @param {ProfessionalDeleteManyArgs} args - Arguments to filter Professionals to delete.
     * @example
     * // Delete a few Professionals
     * const { count } = await prisma.professional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalDeleteManyArgs>(args?: SelectSubset<T, ProfessionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalUpdateManyArgs>(args: SelectSubset<T, ProfessionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Professionals and returns the data updated in the database.
     * @param {ProfessionalUpdateManyAndReturnArgs} args - Arguments to update many Professionals.
     * @example
     * // Update many Professionals
     * const professional = await prisma.professional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Professionals and only return the `id`
     * const professionalWithIdOnly = await prisma.professional.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessionalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Professional.
     * @param {ProfessionalUpsertArgs} args - Arguments to update or create a Professional.
     * @example
     * // Update or create a Professional
     * const professional = await prisma.professional.upsert({
     *   create: {
     *     // ... data to create a Professional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Professional we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalUpsertArgs>(args: SelectSubset<T, ProfessionalUpsertArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Professionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalCountArgs} args - Arguments to filter Professionals to count.
     * @example
     * // Count the number of Professionals
     * const count = await prisma.professional.count({
     *   where: {
     *     // ... the filter for the Professionals we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalCountArgs>(
      args?: Subset<T, ProfessionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionalAggregateArgs>(args: Subset<T, ProfessionalAggregateArgs>): Prisma.PrismaPromise<GetProfessionalAggregateType<T>>

    /**
     * Group by Professional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalGroupByArgs} args - Group by arguments.
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
      T extends ProfessionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Professional model
   */
  readonly fields: ProfessionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Professional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Professional$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Professional$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduledServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Professional$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Professional$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaves<T extends Professional$leavesArgs<ExtArgs> = {}>(args?: Subset<T, Professional$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends Professional$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Professional$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Professional model
   */
  interface ProfessionalFieldRefs {
    readonly id: FieldRef<"Professional", 'String'>
    readonly fullName: FieldRef<"Professional", 'String'>
    readonly whatsapp: FieldRef<"Professional", 'String'>
    readonly bio: FieldRef<"Professional", 'String'>
    readonly profileImage: FieldRef<"Professional", 'String'>
    readonly category: FieldRef<"Professional", 'Category'>
    readonly active: FieldRef<"Professional", 'Boolean'>
    readonly rating: FieldRef<"Professional", 'Float'>
    readonly commissionRate: FieldRef<"Professional", 'Int'>
    readonly commissionType: FieldRef<"Professional", 'String'>
    readonly createdAt: FieldRef<"Professional", 'DateTime'>
    readonly updatedAt: FieldRef<"Professional", 'DateTime'>
    readonly userId: FieldRef<"Professional", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Professional findUnique
   */
  export type ProfessionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findUniqueOrThrow
   */
  export type ProfessionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional findFirst
   */
  export type ProfessionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findFirstOrThrow
   */
  export type ProfessionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professional to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional findMany
   */
  export type ProfessionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter, which Professionals to fetch.
     */
    where?: ProfessionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Professionals to fetch.
     */
    orderBy?: ProfessionalOrderByWithRelationInput | ProfessionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Professionals.
     */
    cursor?: ProfessionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Professionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Professionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Professionals.
     */
    distinct?: ProfessionalScalarFieldEnum | ProfessionalScalarFieldEnum[]
  }

  /**
   * Professional create
   */
  export type ProfessionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Professional.
     */
    data: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
  }

  /**
   * Professional createMany
   */
  export type ProfessionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Professional createManyAndReturn
   */
  export type ProfessionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * The data used to create many Professionals.
     */
    data: ProfessionalCreateManyInput | ProfessionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professional update
   */
  export type ProfessionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Professional.
     */
    data: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
    /**
     * Choose, which Professional to update.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional updateMany
   */
  export type ProfessionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
  }

  /**
   * Professional updateManyAndReturn
   */
  export type ProfessionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * The data used to update Professionals.
     */
    data: XOR<ProfessionalUpdateManyMutationInput, ProfessionalUncheckedUpdateManyInput>
    /**
     * Filter which Professionals to update
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Professional upsert
   */
  export type ProfessionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Professional to update in case it exists.
     */
    where: ProfessionalWhereUniqueInput
    /**
     * In case the Professional found by the `where` argument doesn't exist, create a new Professional with this data.
     */
    create: XOR<ProfessionalCreateInput, ProfessionalUncheckedCreateInput>
    /**
     * In case the Professional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalUpdateInput, ProfessionalUncheckedUpdateInput>
  }

  /**
   * Professional delete
   */
  export type ProfessionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    /**
     * Filter which Professional to delete.
     */
    where: ProfessionalWhereUniqueInput
  }

  /**
   * Professional deleteMany
   */
  export type ProfessionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Professionals to delete
     */
    where?: ProfessionalWhereInput
    /**
     * Limit how many Professionals to delete.
     */
    limit?: number
  }

  /**
   * Professional.appointments
   */
  export type Professional$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduledService
     */
    select?: ScheduledServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduledService
     */
    omit?: ScheduledServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduledServiceInclude<ExtArgs> | null
    where?: ScheduledServiceWhereInput
    orderBy?: ScheduledServiceOrderByWithRelationInput | ScheduledServiceOrderByWithRelationInput[]
    cursor?: ScheduledServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduledServiceScalarFieldEnum | ScheduledServiceScalarFieldEnum[]
  }

  /**
   * Professional.schedules
   */
  export type Professional$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalSchedule
     */
    select?: ProfessionalScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalSchedule
     */
    omit?: ProfessionalScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalScheduleInclude<ExtArgs> | null
    where?: ProfessionalScheduleWhereInput
    orderBy?: ProfessionalScheduleOrderByWithRelationInput | ProfessionalScheduleOrderByWithRelationInput[]
    cursor?: ProfessionalScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalScheduleScalarFieldEnum | ProfessionalScheduleScalarFieldEnum[]
  }

  /**
   * Professional.leaves
   */
  export type Professional$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
    where?: ProfessionalLeaveWhereInput
    orderBy?: ProfessionalLeaveOrderByWithRelationInput | ProfessionalLeaveOrderByWithRelationInput[]
    cursor?: ProfessionalLeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalLeaveScalarFieldEnum | ProfessionalLeaveScalarFieldEnum[]
  }

  /**
   * Professional.services
   */
  export type Professional$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    where?: ProfessionalServiceWhereInput
    orderBy?: ProfessionalServiceOrderByWithRelationInput | ProfessionalServiceOrderByWithRelationInput[]
    cursor?: ProfessionalServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfessionalServiceScalarFieldEnum | ProfessionalServiceScalarFieldEnum[]
  }

  /**
   * Professional without action
   */
  export type ProfessionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
  }


  /**
   * Model ProfessionalLeave
   */

  export type AggregateProfessionalLeave = {
    _count: ProfessionalLeaveCountAggregateOutputType | null
    _min: ProfessionalLeaveMinAggregateOutputType | null
    _max: ProfessionalLeaveMaxAggregateOutputType | null
  }

  export type ProfessionalLeaveMinAggregateOutputType = {
    id: string | null
    professionalId: string | null
    startDate: Date | null
    endDate: Date | null
    startTime: string | null
    endTime: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionalLeaveMaxAggregateOutputType = {
    id: string | null
    professionalId: string | null
    startDate: Date | null
    endDate: Date | null
    startTime: string | null
    endTime: string | null
    reason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionalLeaveCountAggregateOutputType = {
    id: number
    professionalId: number
    startDate: number
    endDate: number
    startTime: number
    endTime: number
    reason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessionalLeaveMinAggregateInputType = {
    id?: true
    professionalId?: true
    startDate?: true
    endDate?: true
    startTime?: true
    endTime?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionalLeaveMaxAggregateInputType = {
    id?: true
    professionalId?: true
    startDate?: true
    endDate?: true
    startTime?: true
    endTime?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionalLeaveCountAggregateInputType = {
    id?: true
    professionalId?: true
    startDate?: true
    endDate?: true
    startTime?: true
    endTime?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessionalLeaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessionalLeave to aggregate.
     */
    where?: ProfessionalLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalLeaves to fetch.
     */
    orderBy?: ProfessionalLeaveOrderByWithRelationInput | ProfessionalLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfessionalLeaves
    **/
    _count?: true | ProfessionalLeaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalLeaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalLeaveMaxAggregateInputType
  }

  export type GetProfessionalLeaveAggregateType<T extends ProfessionalLeaveAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessionalLeave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessionalLeave[P]>
      : GetScalarType<T[P], AggregateProfessionalLeave[P]>
  }




  export type ProfessionalLeaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalLeaveWhereInput
    orderBy?: ProfessionalLeaveOrderByWithAggregationInput | ProfessionalLeaveOrderByWithAggregationInput[]
    by: ProfessionalLeaveScalarFieldEnum[] | ProfessionalLeaveScalarFieldEnum
    having?: ProfessionalLeaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalLeaveCountAggregateInputType | true
    _min?: ProfessionalLeaveMinAggregateInputType
    _max?: ProfessionalLeaveMaxAggregateInputType
  }

  export type ProfessionalLeaveGroupByOutputType = {
    id: string
    professionalId: string
    startDate: Date
    endDate: Date
    startTime: string | null
    endTime: string | null
    reason: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfessionalLeaveCountAggregateOutputType | null
    _min: ProfessionalLeaveMinAggregateOutputType | null
    _max: ProfessionalLeaveMaxAggregateOutputType | null
  }

  type GetProfessionalLeaveGroupByPayload<T extends ProfessionalLeaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalLeaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalLeaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalLeaveGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalLeaveGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalLeaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    endTime?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalLeave"]>

  export type ProfessionalLeaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    endTime?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalLeave"]>

  export type ProfessionalLeaveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    endTime?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalLeave"]>

  export type ProfessionalLeaveSelectScalar = {
    id?: boolean
    professionalId?: boolean
    startDate?: boolean
    endDate?: boolean
    startTime?: boolean
    endTime?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfessionalLeaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionalId" | "startDate" | "endDate" | "startTime" | "endTime" | "reason" | "createdAt" | "updatedAt", ExtArgs["result"]["professionalLeave"]>
  export type ProfessionalLeaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }
  export type ProfessionalLeaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }
  export type ProfessionalLeaveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
  }

  export type $ProfessionalLeavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfessionalLeave"
    objects: {
      professional: Prisma.$ProfessionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      professionalId: string
      startDate: Date
      endDate: Date
      startTime: string | null
      endTime: string | null
      reason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["professionalLeave"]>
    composites: {}
  }

  type ProfessionalLeaveGetPayload<S extends boolean | null | undefined | ProfessionalLeaveDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalLeavePayload, S>

  type ProfessionalLeaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalLeaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalLeaveCountAggregateInputType | true
    }

  export interface ProfessionalLeaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfessionalLeave'], meta: { name: 'ProfessionalLeave' } }
    /**
     * Find zero or one ProfessionalLeave that matches the filter.
     * @param {ProfessionalLeaveFindUniqueArgs} args - Arguments to find a ProfessionalLeave
     * @example
     * // Get one ProfessionalLeave
     * const professionalLeave = await prisma.professionalLeave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalLeaveFindUniqueArgs>(args: SelectSubset<T, ProfessionalLeaveFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalLeaveClient<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfessionalLeave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalLeaveFindUniqueOrThrowArgs} args - Arguments to find a ProfessionalLeave
     * @example
     * // Get one ProfessionalLeave
     * const professionalLeave = await prisma.professionalLeave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalLeaveFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalLeaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalLeaveClient<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionalLeave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalLeaveFindFirstArgs} args - Arguments to find a ProfessionalLeave
     * @example
     * // Get one ProfessionalLeave
     * const professionalLeave = await prisma.professionalLeave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalLeaveFindFirstArgs>(args?: SelectSubset<T, ProfessionalLeaveFindFirstArgs<ExtArgs>>): Prisma__ProfessionalLeaveClient<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionalLeave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalLeaveFindFirstOrThrowArgs} args - Arguments to find a ProfessionalLeave
     * @example
     * // Get one ProfessionalLeave
     * const professionalLeave = await prisma.professionalLeave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalLeaveFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalLeaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalLeaveClient<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfessionalLeaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalLeaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfessionalLeaves
     * const professionalLeaves = await prisma.professionalLeave.findMany()
     * 
     * // Get first 10 ProfessionalLeaves
     * const professionalLeaves = await prisma.professionalLeave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionalLeaveWithIdOnly = await prisma.professionalLeave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionalLeaveFindManyArgs>(args?: SelectSubset<T, ProfessionalLeaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfessionalLeave.
     * @param {ProfessionalLeaveCreateArgs} args - Arguments to create a ProfessionalLeave.
     * @example
     * // Create one ProfessionalLeave
     * const ProfessionalLeave = await prisma.professionalLeave.create({
     *   data: {
     *     // ... data to create a ProfessionalLeave
     *   }
     * })
     * 
     */
    create<T extends ProfessionalLeaveCreateArgs>(args: SelectSubset<T, ProfessionalLeaveCreateArgs<ExtArgs>>): Prisma__ProfessionalLeaveClient<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfessionalLeaves.
     * @param {ProfessionalLeaveCreateManyArgs} args - Arguments to create many ProfessionalLeaves.
     * @example
     * // Create many ProfessionalLeaves
     * const professionalLeave = await prisma.professionalLeave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalLeaveCreateManyArgs>(args?: SelectSubset<T, ProfessionalLeaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfessionalLeaves and returns the data saved in the database.
     * @param {ProfessionalLeaveCreateManyAndReturnArgs} args - Arguments to create many ProfessionalLeaves.
     * @example
     * // Create many ProfessionalLeaves
     * const professionalLeave = await prisma.professionalLeave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfessionalLeaves and only return the `id`
     * const professionalLeaveWithIdOnly = await prisma.professionalLeave.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionalLeaveCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionalLeaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfessionalLeave.
     * @param {ProfessionalLeaveDeleteArgs} args - Arguments to delete one ProfessionalLeave.
     * @example
     * // Delete one ProfessionalLeave
     * const ProfessionalLeave = await prisma.professionalLeave.delete({
     *   where: {
     *     // ... filter to delete one ProfessionalLeave
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalLeaveDeleteArgs>(args: SelectSubset<T, ProfessionalLeaveDeleteArgs<ExtArgs>>): Prisma__ProfessionalLeaveClient<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfessionalLeave.
     * @param {ProfessionalLeaveUpdateArgs} args - Arguments to update one ProfessionalLeave.
     * @example
     * // Update one ProfessionalLeave
     * const professionalLeave = await prisma.professionalLeave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalLeaveUpdateArgs>(args: SelectSubset<T, ProfessionalLeaveUpdateArgs<ExtArgs>>): Prisma__ProfessionalLeaveClient<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfessionalLeaves.
     * @param {ProfessionalLeaveDeleteManyArgs} args - Arguments to filter ProfessionalLeaves to delete.
     * @example
     * // Delete a few ProfessionalLeaves
     * const { count } = await prisma.professionalLeave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalLeaveDeleteManyArgs>(args?: SelectSubset<T, ProfessionalLeaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionalLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalLeaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfessionalLeaves
     * const professionalLeave = await prisma.professionalLeave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalLeaveUpdateManyArgs>(args: SelectSubset<T, ProfessionalLeaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionalLeaves and returns the data updated in the database.
     * @param {ProfessionalLeaveUpdateManyAndReturnArgs} args - Arguments to update many ProfessionalLeaves.
     * @example
     * // Update many ProfessionalLeaves
     * const professionalLeave = await prisma.professionalLeave.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfessionalLeaves and only return the `id`
     * const professionalLeaveWithIdOnly = await prisma.professionalLeave.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessionalLeaveUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionalLeaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfessionalLeave.
     * @param {ProfessionalLeaveUpsertArgs} args - Arguments to update or create a ProfessionalLeave.
     * @example
     * // Update or create a ProfessionalLeave
     * const professionalLeave = await prisma.professionalLeave.upsert({
     *   create: {
     *     // ... data to create a ProfessionalLeave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfessionalLeave we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalLeaveUpsertArgs>(args: SelectSubset<T, ProfessionalLeaveUpsertArgs<ExtArgs>>): Prisma__ProfessionalLeaveClient<$Result.GetResult<Prisma.$ProfessionalLeavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfessionalLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalLeaveCountArgs} args - Arguments to filter ProfessionalLeaves to count.
     * @example
     * // Count the number of ProfessionalLeaves
     * const count = await prisma.professionalLeave.count({
     *   where: {
     *     // ... the filter for the ProfessionalLeaves we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalLeaveCountArgs>(
      args?: Subset<T, ProfessionalLeaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalLeaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfessionalLeave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalLeaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionalLeaveAggregateArgs>(args: Subset<T, ProfessionalLeaveAggregateArgs>): Prisma.PrismaPromise<GetProfessionalLeaveAggregateType<T>>

    /**
     * Group by ProfessionalLeave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalLeaveGroupByArgs} args - Group by arguments.
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
      T extends ProfessionalLeaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalLeaveGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalLeaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionalLeaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalLeaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfessionalLeave model
   */
  readonly fields: ProfessionalLeaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfessionalLeave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalLeaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professional<T extends ProfessionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalDefaultArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProfessionalLeave model
   */
  interface ProfessionalLeaveFieldRefs {
    readonly id: FieldRef<"ProfessionalLeave", 'String'>
    readonly professionalId: FieldRef<"ProfessionalLeave", 'String'>
    readonly startDate: FieldRef<"ProfessionalLeave", 'DateTime'>
    readonly endDate: FieldRef<"ProfessionalLeave", 'DateTime'>
    readonly startTime: FieldRef<"ProfessionalLeave", 'String'>
    readonly endTime: FieldRef<"ProfessionalLeave", 'String'>
    readonly reason: FieldRef<"ProfessionalLeave", 'String'>
    readonly createdAt: FieldRef<"ProfessionalLeave", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfessionalLeave", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfessionalLeave findUnique
   */
  export type ProfessionalLeaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalLeave to fetch.
     */
    where: ProfessionalLeaveWhereUniqueInput
  }

  /**
   * ProfessionalLeave findUniqueOrThrow
   */
  export type ProfessionalLeaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalLeave to fetch.
     */
    where: ProfessionalLeaveWhereUniqueInput
  }

  /**
   * ProfessionalLeave findFirst
   */
  export type ProfessionalLeaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalLeave to fetch.
     */
    where?: ProfessionalLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalLeaves to fetch.
     */
    orderBy?: ProfessionalLeaveOrderByWithRelationInput | ProfessionalLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessionalLeaves.
     */
    cursor?: ProfessionalLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalLeaves.
     */
    distinct?: ProfessionalLeaveScalarFieldEnum | ProfessionalLeaveScalarFieldEnum[]
  }

  /**
   * ProfessionalLeave findFirstOrThrow
   */
  export type ProfessionalLeaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalLeave to fetch.
     */
    where?: ProfessionalLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalLeaves to fetch.
     */
    orderBy?: ProfessionalLeaveOrderByWithRelationInput | ProfessionalLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessionalLeaves.
     */
    cursor?: ProfessionalLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalLeaves.
     */
    distinct?: ProfessionalLeaveScalarFieldEnum | ProfessionalLeaveScalarFieldEnum[]
  }

  /**
   * ProfessionalLeave findMany
   */
  export type ProfessionalLeaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalLeaves to fetch.
     */
    where?: ProfessionalLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalLeaves to fetch.
     */
    orderBy?: ProfessionalLeaveOrderByWithRelationInput | ProfessionalLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfessionalLeaves.
     */
    cursor?: ProfessionalLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalLeaves.
     */
    distinct?: ProfessionalLeaveScalarFieldEnum | ProfessionalLeaveScalarFieldEnum[]
  }

  /**
   * ProfessionalLeave create
   */
  export type ProfessionalLeaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfessionalLeave.
     */
    data: XOR<ProfessionalLeaveCreateInput, ProfessionalLeaveUncheckedCreateInput>
  }

  /**
   * ProfessionalLeave createMany
   */
  export type ProfessionalLeaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfessionalLeaves.
     */
    data: ProfessionalLeaveCreateManyInput | ProfessionalLeaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfessionalLeave createManyAndReturn
   */
  export type ProfessionalLeaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * The data used to create many ProfessionalLeaves.
     */
    data: ProfessionalLeaveCreateManyInput | ProfessionalLeaveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessionalLeave update
   */
  export type ProfessionalLeaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfessionalLeave.
     */
    data: XOR<ProfessionalLeaveUpdateInput, ProfessionalLeaveUncheckedUpdateInput>
    /**
     * Choose, which ProfessionalLeave to update.
     */
    where: ProfessionalLeaveWhereUniqueInput
  }

  /**
   * ProfessionalLeave updateMany
   */
  export type ProfessionalLeaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfessionalLeaves.
     */
    data: XOR<ProfessionalLeaveUpdateManyMutationInput, ProfessionalLeaveUncheckedUpdateManyInput>
    /**
     * Filter which ProfessionalLeaves to update
     */
    where?: ProfessionalLeaveWhereInput
    /**
     * Limit how many ProfessionalLeaves to update.
     */
    limit?: number
  }

  /**
   * ProfessionalLeave updateManyAndReturn
   */
  export type ProfessionalLeaveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * The data used to update ProfessionalLeaves.
     */
    data: XOR<ProfessionalLeaveUpdateManyMutationInput, ProfessionalLeaveUncheckedUpdateManyInput>
    /**
     * Filter which ProfessionalLeaves to update
     */
    where?: ProfessionalLeaveWhereInput
    /**
     * Limit how many ProfessionalLeaves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessionalLeave upsert
   */
  export type ProfessionalLeaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfessionalLeave to update in case it exists.
     */
    where: ProfessionalLeaveWhereUniqueInput
    /**
     * In case the ProfessionalLeave found by the `where` argument doesn't exist, create a new ProfessionalLeave with this data.
     */
    create: XOR<ProfessionalLeaveCreateInput, ProfessionalLeaveUncheckedCreateInput>
    /**
     * In case the ProfessionalLeave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalLeaveUpdateInput, ProfessionalLeaveUncheckedUpdateInput>
  }

  /**
   * ProfessionalLeave delete
   */
  export type ProfessionalLeaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
    /**
     * Filter which ProfessionalLeave to delete.
     */
    where: ProfessionalLeaveWhereUniqueInput
  }

  /**
   * ProfessionalLeave deleteMany
   */
  export type ProfessionalLeaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessionalLeaves to delete
     */
    where?: ProfessionalLeaveWhereInput
    /**
     * Limit how many ProfessionalLeaves to delete.
     */
    limit?: number
  }

  /**
   * ProfessionalLeave without action
   */
  export type ProfessionalLeaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalLeave
     */
    select?: ProfessionalLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalLeave
     */
    omit?: ProfessionalLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalLeaveInclude<ExtArgs> | null
  }


  /**
   * Model ProfessionalService
   */

  export type AggregateProfessionalService = {
    _count: ProfessionalServiceCountAggregateOutputType | null
    _min: ProfessionalServiceMinAggregateOutputType | null
    _max: ProfessionalServiceMaxAggregateOutputType | null
  }

  export type ProfessionalServiceMinAggregateOutputType = {
    id: string | null
    professionalId: string | null
    serviceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionalServiceMaxAggregateOutputType = {
    id: string | null
    professionalId: string | null
    serviceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfessionalServiceCountAggregateOutputType = {
    id: number
    professionalId: number
    serviceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfessionalServiceMinAggregateInputType = {
    id?: true
    professionalId?: true
    serviceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionalServiceMaxAggregateInputType = {
    id?: true
    professionalId?: true
    serviceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfessionalServiceCountAggregateInputType = {
    id?: true
    professionalId?: true
    serviceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfessionalServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessionalService to aggregate.
     */
    where?: ProfessionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalServices to fetch.
     */
    orderBy?: ProfessionalServiceOrderByWithRelationInput | ProfessionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfessionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProfessionalServices
    **/
    _count?: true | ProfessionalServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfessionalServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfessionalServiceMaxAggregateInputType
  }

  export type GetProfessionalServiceAggregateType<T extends ProfessionalServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateProfessionalService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfessionalService[P]>
      : GetScalarType<T[P], AggregateProfessionalService[P]>
  }




  export type ProfessionalServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfessionalServiceWhereInput
    orderBy?: ProfessionalServiceOrderByWithAggregationInput | ProfessionalServiceOrderByWithAggregationInput[]
    by: ProfessionalServiceScalarFieldEnum[] | ProfessionalServiceScalarFieldEnum
    having?: ProfessionalServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfessionalServiceCountAggregateInputType | true
    _min?: ProfessionalServiceMinAggregateInputType
    _max?: ProfessionalServiceMaxAggregateInputType
  }

  export type ProfessionalServiceGroupByOutputType = {
    id: string
    professionalId: string
    serviceId: string
    createdAt: Date
    updatedAt: Date
    _count: ProfessionalServiceCountAggregateOutputType | null
    _min: ProfessionalServiceMinAggregateOutputType | null
    _max: ProfessionalServiceMaxAggregateOutputType | null
  }

  type GetProfessionalServiceGroupByPayload<T extends ProfessionalServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfessionalServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfessionalServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfessionalServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ProfessionalServiceGroupByOutputType[P]>
        }
      >
    >


  export type ProfessionalServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalService"]>

  export type ProfessionalServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalService"]>

  export type ProfessionalServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    professionalId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["professionalService"]>

  export type ProfessionalServiceSelectScalar = {
    id?: boolean
    professionalId?: boolean
    serviceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfessionalServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "professionalId" | "serviceId" | "createdAt" | "updatedAt", ExtArgs["result"]["professionalService"]>
  export type ProfessionalServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ProfessionalServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type ProfessionalServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    professional?: boolean | ProfessionalDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ProfessionalServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProfessionalService"
    objects: {
      professional: Prisma.$ProfessionalPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      professionalId: string
      serviceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["professionalService"]>
    composites: {}
  }

  type ProfessionalServiceGetPayload<S extends boolean | null | undefined | ProfessionalServiceDefaultArgs> = $Result.GetResult<Prisma.$ProfessionalServicePayload, S>

  type ProfessionalServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfessionalServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfessionalServiceCountAggregateInputType | true
    }

  export interface ProfessionalServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProfessionalService'], meta: { name: 'ProfessionalService' } }
    /**
     * Find zero or one ProfessionalService that matches the filter.
     * @param {ProfessionalServiceFindUniqueArgs} args - Arguments to find a ProfessionalService
     * @example
     * // Get one ProfessionalService
     * const professionalService = await prisma.professionalService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfessionalServiceFindUniqueArgs>(args: SelectSubset<T, ProfessionalServiceFindUniqueArgs<ExtArgs>>): Prisma__ProfessionalServiceClient<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProfessionalService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfessionalServiceFindUniqueOrThrowArgs} args - Arguments to find a ProfessionalService
     * @example
     * // Get one ProfessionalService
     * const professionalService = await prisma.professionalService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfessionalServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfessionalServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfessionalServiceClient<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionalService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalServiceFindFirstArgs} args - Arguments to find a ProfessionalService
     * @example
     * // Get one ProfessionalService
     * const professionalService = await prisma.professionalService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfessionalServiceFindFirstArgs>(args?: SelectSubset<T, ProfessionalServiceFindFirstArgs<ExtArgs>>): Prisma__ProfessionalServiceClient<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProfessionalService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalServiceFindFirstOrThrowArgs} args - Arguments to find a ProfessionalService
     * @example
     * // Get one ProfessionalService
     * const professionalService = await prisma.professionalService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfessionalServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfessionalServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfessionalServiceClient<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProfessionalServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProfessionalServices
     * const professionalServices = await prisma.professionalService.findMany()
     * 
     * // Get first 10 ProfessionalServices
     * const professionalServices = await prisma.professionalService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const professionalServiceWithIdOnly = await prisma.professionalService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfessionalServiceFindManyArgs>(args?: SelectSubset<T, ProfessionalServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProfessionalService.
     * @param {ProfessionalServiceCreateArgs} args - Arguments to create a ProfessionalService.
     * @example
     * // Create one ProfessionalService
     * const ProfessionalService = await prisma.professionalService.create({
     *   data: {
     *     // ... data to create a ProfessionalService
     *   }
     * })
     * 
     */
    create<T extends ProfessionalServiceCreateArgs>(args: SelectSubset<T, ProfessionalServiceCreateArgs<ExtArgs>>): Prisma__ProfessionalServiceClient<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProfessionalServices.
     * @param {ProfessionalServiceCreateManyArgs} args - Arguments to create many ProfessionalServices.
     * @example
     * // Create many ProfessionalServices
     * const professionalService = await prisma.professionalService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfessionalServiceCreateManyArgs>(args?: SelectSubset<T, ProfessionalServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProfessionalServices and returns the data saved in the database.
     * @param {ProfessionalServiceCreateManyAndReturnArgs} args - Arguments to create many ProfessionalServices.
     * @example
     * // Create many ProfessionalServices
     * const professionalService = await prisma.professionalService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProfessionalServices and only return the `id`
     * const professionalServiceWithIdOnly = await prisma.professionalService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfessionalServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfessionalServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProfessionalService.
     * @param {ProfessionalServiceDeleteArgs} args - Arguments to delete one ProfessionalService.
     * @example
     * // Delete one ProfessionalService
     * const ProfessionalService = await prisma.professionalService.delete({
     *   where: {
     *     // ... filter to delete one ProfessionalService
     *   }
     * })
     * 
     */
    delete<T extends ProfessionalServiceDeleteArgs>(args: SelectSubset<T, ProfessionalServiceDeleteArgs<ExtArgs>>): Prisma__ProfessionalServiceClient<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProfessionalService.
     * @param {ProfessionalServiceUpdateArgs} args - Arguments to update one ProfessionalService.
     * @example
     * // Update one ProfessionalService
     * const professionalService = await prisma.professionalService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfessionalServiceUpdateArgs>(args: SelectSubset<T, ProfessionalServiceUpdateArgs<ExtArgs>>): Prisma__ProfessionalServiceClient<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProfessionalServices.
     * @param {ProfessionalServiceDeleteManyArgs} args - Arguments to filter ProfessionalServices to delete.
     * @example
     * // Delete a few ProfessionalServices
     * const { count } = await prisma.professionalService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfessionalServiceDeleteManyArgs>(args?: SelectSubset<T, ProfessionalServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionalServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProfessionalServices
     * const professionalService = await prisma.professionalService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfessionalServiceUpdateManyArgs>(args: SelectSubset<T, ProfessionalServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProfessionalServices and returns the data updated in the database.
     * @param {ProfessionalServiceUpdateManyAndReturnArgs} args - Arguments to update many ProfessionalServices.
     * @example
     * // Update many ProfessionalServices
     * const professionalService = await prisma.professionalService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProfessionalServices and only return the `id`
     * const professionalServiceWithIdOnly = await prisma.professionalService.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfessionalServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfessionalServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProfessionalService.
     * @param {ProfessionalServiceUpsertArgs} args - Arguments to update or create a ProfessionalService.
     * @example
     * // Update or create a ProfessionalService
     * const professionalService = await prisma.professionalService.upsert({
     *   create: {
     *     // ... data to create a ProfessionalService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfessionalService we want to update
     *   }
     * })
     */
    upsert<T extends ProfessionalServiceUpsertArgs>(args: SelectSubset<T, ProfessionalServiceUpsertArgs<ExtArgs>>): Prisma__ProfessionalServiceClient<$Result.GetResult<Prisma.$ProfessionalServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProfessionalServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalServiceCountArgs} args - Arguments to filter ProfessionalServices to count.
     * @example
     * // Count the number of ProfessionalServices
     * const count = await prisma.professionalService.count({
     *   where: {
     *     // ... the filter for the ProfessionalServices we want to count
     *   }
     * })
    **/
    count<T extends ProfessionalServiceCountArgs>(
      args?: Subset<T, ProfessionalServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfessionalServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProfessionalService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfessionalServiceAggregateArgs>(args: Subset<T, ProfessionalServiceAggregateArgs>): Prisma.PrismaPromise<GetProfessionalServiceAggregateType<T>>

    /**
     * Group by ProfessionalService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfessionalServiceGroupByArgs} args - Group by arguments.
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
      T extends ProfessionalServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfessionalServiceGroupByArgs['orderBy'] }
        : { orderBy?: ProfessionalServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfessionalServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfessionalServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProfessionalService model
   */
  readonly fields: ProfessionalServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfessionalService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfessionalServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    professional<T extends ProfessionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfessionalDefaultArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProfessionalService model
   */
  interface ProfessionalServiceFieldRefs {
    readonly id: FieldRef<"ProfessionalService", 'String'>
    readonly professionalId: FieldRef<"ProfessionalService", 'String'>
    readonly serviceId: FieldRef<"ProfessionalService", 'String'>
    readonly createdAt: FieldRef<"ProfessionalService", 'DateTime'>
    readonly updatedAt: FieldRef<"ProfessionalService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProfessionalService findUnique
   */
  export type ProfessionalServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalService to fetch.
     */
    where: ProfessionalServiceWhereUniqueInput
  }

  /**
   * ProfessionalService findUniqueOrThrow
   */
  export type ProfessionalServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalService to fetch.
     */
    where: ProfessionalServiceWhereUniqueInput
  }

  /**
   * ProfessionalService findFirst
   */
  export type ProfessionalServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalService to fetch.
     */
    where?: ProfessionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalServices to fetch.
     */
    orderBy?: ProfessionalServiceOrderByWithRelationInput | ProfessionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessionalServices.
     */
    cursor?: ProfessionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalServices.
     */
    distinct?: ProfessionalServiceScalarFieldEnum | ProfessionalServiceScalarFieldEnum[]
  }

  /**
   * ProfessionalService findFirstOrThrow
   */
  export type ProfessionalServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalService to fetch.
     */
    where?: ProfessionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalServices to fetch.
     */
    orderBy?: ProfessionalServiceOrderByWithRelationInput | ProfessionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProfessionalServices.
     */
    cursor?: ProfessionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalServices.
     */
    distinct?: ProfessionalServiceScalarFieldEnum | ProfessionalServiceScalarFieldEnum[]
  }

  /**
   * ProfessionalService findMany
   */
  export type ProfessionalServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProfessionalServices to fetch.
     */
    where?: ProfessionalServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProfessionalServices to fetch.
     */
    orderBy?: ProfessionalServiceOrderByWithRelationInput | ProfessionalServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProfessionalServices.
     */
    cursor?: ProfessionalServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProfessionalServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProfessionalServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProfessionalServices.
     */
    distinct?: ProfessionalServiceScalarFieldEnum | ProfessionalServiceScalarFieldEnum[]
  }

  /**
   * ProfessionalService create
   */
  export type ProfessionalServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProfessionalService.
     */
    data: XOR<ProfessionalServiceCreateInput, ProfessionalServiceUncheckedCreateInput>
  }

  /**
   * ProfessionalService createMany
   */
  export type ProfessionalServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProfessionalServices.
     */
    data: ProfessionalServiceCreateManyInput | ProfessionalServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProfessionalService createManyAndReturn
   */
  export type ProfessionalServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * The data used to create many ProfessionalServices.
     */
    data: ProfessionalServiceCreateManyInput | ProfessionalServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessionalService update
   */
  export type ProfessionalServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProfessionalService.
     */
    data: XOR<ProfessionalServiceUpdateInput, ProfessionalServiceUncheckedUpdateInput>
    /**
     * Choose, which ProfessionalService to update.
     */
    where: ProfessionalServiceWhereUniqueInput
  }

  /**
   * ProfessionalService updateMany
   */
  export type ProfessionalServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProfessionalServices.
     */
    data: XOR<ProfessionalServiceUpdateManyMutationInput, ProfessionalServiceUncheckedUpdateManyInput>
    /**
     * Filter which ProfessionalServices to update
     */
    where?: ProfessionalServiceWhereInput
    /**
     * Limit how many ProfessionalServices to update.
     */
    limit?: number
  }

  /**
   * ProfessionalService updateManyAndReturn
   */
  export type ProfessionalServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * The data used to update ProfessionalServices.
     */
    data: XOR<ProfessionalServiceUpdateManyMutationInput, ProfessionalServiceUncheckedUpdateManyInput>
    /**
     * Filter which ProfessionalServices to update
     */
    where?: ProfessionalServiceWhereInput
    /**
     * Limit how many ProfessionalServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProfessionalService upsert
   */
  export type ProfessionalServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProfessionalService to update in case it exists.
     */
    where: ProfessionalServiceWhereUniqueInput
    /**
     * In case the ProfessionalService found by the `where` argument doesn't exist, create a new ProfessionalService with this data.
     */
    create: XOR<ProfessionalServiceCreateInput, ProfessionalServiceUncheckedCreateInput>
    /**
     * In case the ProfessionalService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfessionalServiceUpdateInput, ProfessionalServiceUncheckedUpdateInput>
  }

  /**
   * ProfessionalService delete
   */
  export type ProfessionalServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
    /**
     * Filter which ProfessionalService to delete.
     */
    where: ProfessionalServiceWhereUniqueInput
  }

  /**
   * ProfessionalService deleteMany
   */
  export type ProfessionalServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProfessionalServices to delete
     */
    where?: ProfessionalServiceWhereInput
    /**
     * Limit how many ProfessionalServices to delete.
     */
    limit?: number
  }

  /**
   * ProfessionalService without action
   */
  export type ProfessionalServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfessionalService
     */
    select?: ProfessionalServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProfessionalService
     */
    omit?: ProfessionalServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalServiceInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    amount: number | null
    method: $Enums.PaymentMethod | null
    appointmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    method: $Enums.PaymentMethod | null
    appointmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    method: number
    appointmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    appointmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    appointmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    method?: true
    appointmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    amount: number
    method: $Enums.PaymentMethod
    appointmentId: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    method?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    method?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "method" | "appointmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      method: $Enums.PaymentMethod
      appointmentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly appointmentId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model BusinessHours
   */

  export type AggregateBusinessHours = {
    _count: BusinessHoursCountAggregateOutputType | null
    _avg: BusinessHoursAvgAggregateOutputType | null
    _sum: BusinessHoursSumAggregateOutputType | null
    _min: BusinessHoursMinAggregateOutputType | null
    _max: BusinessHoursMaxAggregateOutputType | null
  }

  export type BusinessHoursAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type BusinessHoursSumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type BusinessHoursMinAggregateOutputType = {
    id: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessHoursMaxAggregateOutputType = {
    id: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessHoursCountAggregateOutputType = {
    id: number
    dayOfWeek: number
    startTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessHoursAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type BusinessHoursSumAggregateInputType = {
    dayOfWeek?: true
  }

  export type BusinessHoursMinAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessHoursMaxAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessHoursCountAggregateInputType = {
    id?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessHoursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessHours to aggregate.
     */
    where?: BusinessHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessHours to fetch.
     */
    orderBy?: BusinessHoursOrderByWithRelationInput | BusinessHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessHours
    **/
    _count?: true | BusinessHoursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessHoursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessHoursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessHoursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessHoursMaxAggregateInputType
  }

  export type GetBusinessHoursAggregateType<T extends BusinessHoursAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessHours]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessHours[P]>
      : GetScalarType<T[P], AggregateBusinessHours[P]>
  }




  export type BusinessHoursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessHoursWhereInput
    orderBy?: BusinessHoursOrderByWithAggregationInput | BusinessHoursOrderByWithAggregationInput[]
    by: BusinessHoursScalarFieldEnum[] | BusinessHoursScalarFieldEnum
    having?: BusinessHoursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessHoursCountAggregateInputType | true
    _avg?: BusinessHoursAvgAggregateInputType
    _sum?: BusinessHoursSumAggregateInputType
    _min?: BusinessHoursMinAggregateInputType
    _max?: BusinessHoursMaxAggregateInputType
  }

  export type BusinessHoursGroupByOutputType = {
    id: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt: Date
    updatedAt: Date
    _count: BusinessHoursCountAggregateOutputType | null
    _avg: BusinessHoursAvgAggregateOutputType | null
    _sum: BusinessHoursSumAggregateOutputType | null
    _min: BusinessHoursMinAggregateOutputType | null
    _max: BusinessHoursMaxAggregateOutputType | null
  }

  type GetBusinessHoursGroupByPayload<T extends BusinessHoursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessHoursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessHoursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessHoursGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessHoursGroupByOutputType[P]>
        }
      >
    >


  export type BusinessHoursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["businessHours"]>

  export type BusinessHoursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["businessHours"]>

  export type BusinessHoursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["businessHours"]>

  export type BusinessHoursSelectScalar = {
    id?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessHoursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dayOfWeek" | "startTime" | "endTime" | "createdAt" | "updatedAt", ExtArgs["result"]["businessHours"]>

  export type $BusinessHoursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessHours"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dayOfWeek: number
      startTime: string
      endTime: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessHours"]>
    composites: {}
  }

  type BusinessHoursGetPayload<S extends boolean | null | undefined | BusinessHoursDefaultArgs> = $Result.GetResult<Prisma.$BusinessHoursPayload, S>

  type BusinessHoursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessHoursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessHoursCountAggregateInputType | true
    }

  export interface BusinessHoursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessHours'], meta: { name: 'BusinessHours' } }
    /**
     * Find zero or one BusinessHours that matches the filter.
     * @param {BusinessHoursFindUniqueArgs} args - Arguments to find a BusinessHours
     * @example
     * // Get one BusinessHours
     * const businessHours = await prisma.businessHours.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessHoursFindUniqueArgs>(args: SelectSubset<T, BusinessHoursFindUniqueArgs<ExtArgs>>): Prisma__BusinessHoursClient<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessHours that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessHoursFindUniqueOrThrowArgs} args - Arguments to find a BusinessHours
     * @example
     * // Get one BusinessHours
     * const businessHours = await prisma.businessHours.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessHoursFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessHoursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessHoursClient<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHoursFindFirstArgs} args - Arguments to find a BusinessHours
     * @example
     * // Get one BusinessHours
     * const businessHours = await prisma.businessHours.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessHoursFindFirstArgs>(args?: SelectSubset<T, BusinessHoursFindFirstArgs<ExtArgs>>): Prisma__BusinessHoursClient<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessHours that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHoursFindFirstOrThrowArgs} args - Arguments to find a BusinessHours
     * @example
     * // Get one BusinessHours
     * const businessHours = await prisma.businessHours.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessHoursFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessHoursFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessHoursClient<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHoursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessHours
     * const businessHours = await prisma.businessHours.findMany()
     * 
     * // Get first 10 BusinessHours
     * const businessHours = await prisma.businessHours.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessHoursWithIdOnly = await prisma.businessHours.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessHoursFindManyArgs>(args?: SelectSubset<T, BusinessHoursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessHours.
     * @param {BusinessHoursCreateArgs} args - Arguments to create a BusinessHours.
     * @example
     * // Create one BusinessHours
     * const BusinessHours = await prisma.businessHours.create({
     *   data: {
     *     // ... data to create a BusinessHours
     *   }
     * })
     * 
     */
    create<T extends BusinessHoursCreateArgs>(args: SelectSubset<T, BusinessHoursCreateArgs<ExtArgs>>): Prisma__BusinessHoursClient<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessHours.
     * @param {BusinessHoursCreateManyArgs} args - Arguments to create many BusinessHours.
     * @example
     * // Create many BusinessHours
     * const businessHours = await prisma.businessHours.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessHoursCreateManyArgs>(args?: SelectSubset<T, BusinessHoursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessHours and returns the data saved in the database.
     * @param {BusinessHoursCreateManyAndReturnArgs} args - Arguments to create many BusinessHours.
     * @example
     * // Create many BusinessHours
     * const businessHours = await prisma.businessHours.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessHours and only return the `id`
     * const businessHoursWithIdOnly = await prisma.businessHours.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessHoursCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessHoursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessHours.
     * @param {BusinessHoursDeleteArgs} args - Arguments to delete one BusinessHours.
     * @example
     * // Delete one BusinessHours
     * const BusinessHours = await prisma.businessHours.delete({
     *   where: {
     *     // ... filter to delete one BusinessHours
     *   }
     * })
     * 
     */
    delete<T extends BusinessHoursDeleteArgs>(args: SelectSubset<T, BusinessHoursDeleteArgs<ExtArgs>>): Prisma__BusinessHoursClient<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessHours.
     * @param {BusinessHoursUpdateArgs} args - Arguments to update one BusinessHours.
     * @example
     * // Update one BusinessHours
     * const businessHours = await prisma.businessHours.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessHoursUpdateArgs>(args: SelectSubset<T, BusinessHoursUpdateArgs<ExtArgs>>): Prisma__BusinessHoursClient<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessHours.
     * @param {BusinessHoursDeleteManyArgs} args - Arguments to filter BusinessHours to delete.
     * @example
     * // Delete a few BusinessHours
     * const { count } = await prisma.businessHours.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessHoursDeleteManyArgs>(args?: SelectSubset<T, BusinessHoursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHoursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessHours
     * const businessHours = await prisma.businessHours.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessHoursUpdateManyArgs>(args: SelectSubset<T, BusinessHoursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessHours and returns the data updated in the database.
     * @param {BusinessHoursUpdateManyAndReturnArgs} args - Arguments to update many BusinessHours.
     * @example
     * // Update many BusinessHours
     * const businessHours = await prisma.businessHours.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessHours and only return the `id`
     * const businessHoursWithIdOnly = await prisma.businessHours.updateManyAndReturn({
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
    updateManyAndReturn<T extends BusinessHoursUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessHoursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessHours.
     * @param {BusinessHoursUpsertArgs} args - Arguments to update or create a BusinessHours.
     * @example
     * // Update or create a BusinessHours
     * const businessHours = await prisma.businessHours.upsert({
     *   create: {
     *     // ... data to create a BusinessHours
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessHours we want to update
     *   }
     * })
     */
    upsert<T extends BusinessHoursUpsertArgs>(args: SelectSubset<T, BusinessHoursUpsertArgs<ExtArgs>>): Prisma__BusinessHoursClient<$Result.GetResult<Prisma.$BusinessHoursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHoursCountArgs} args - Arguments to filter BusinessHours to count.
     * @example
     * // Count the number of BusinessHours
     * const count = await prisma.businessHours.count({
     *   where: {
     *     // ... the filter for the BusinessHours we want to count
     *   }
     * })
    **/
    count<T extends BusinessHoursCountArgs>(
      args?: Subset<T, BusinessHoursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessHoursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHoursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessHoursAggregateArgs>(args: Subset<T, BusinessHoursAggregateArgs>): Prisma.PrismaPromise<GetBusinessHoursAggregateType<T>>

    /**
     * Group by BusinessHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHoursGroupByArgs} args - Group by arguments.
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
      T extends BusinessHoursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessHoursGroupByArgs['orderBy'] }
        : { orderBy?: BusinessHoursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessHoursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessHoursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessHours model
   */
  readonly fields: BusinessHoursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessHours.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessHoursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BusinessHours model
   */
  interface BusinessHoursFieldRefs {
    readonly id: FieldRef<"BusinessHours", 'String'>
    readonly dayOfWeek: FieldRef<"BusinessHours", 'Int'>
    readonly startTime: FieldRef<"BusinessHours", 'String'>
    readonly endTime: FieldRef<"BusinessHours", 'String'>
    readonly createdAt: FieldRef<"BusinessHours", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessHours", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessHours findUnique
   */
  export type BusinessHoursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * Filter, which BusinessHours to fetch.
     */
    where: BusinessHoursWhereUniqueInput
  }

  /**
   * BusinessHours findUniqueOrThrow
   */
  export type BusinessHoursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * Filter, which BusinessHours to fetch.
     */
    where: BusinessHoursWhereUniqueInput
  }

  /**
   * BusinessHours findFirst
   */
  export type BusinessHoursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * Filter, which BusinessHours to fetch.
     */
    where?: BusinessHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessHours to fetch.
     */
    orderBy?: BusinessHoursOrderByWithRelationInput | BusinessHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessHours.
     */
    cursor?: BusinessHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessHours.
     */
    distinct?: BusinessHoursScalarFieldEnum | BusinessHoursScalarFieldEnum[]
  }

  /**
   * BusinessHours findFirstOrThrow
   */
  export type BusinessHoursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * Filter, which BusinessHours to fetch.
     */
    where?: BusinessHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessHours to fetch.
     */
    orderBy?: BusinessHoursOrderByWithRelationInput | BusinessHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessHours.
     */
    cursor?: BusinessHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessHours.
     */
    distinct?: BusinessHoursScalarFieldEnum | BusinessHoursScalarFieldEnum[]
  }

  /**
   * BusinessHours findMany
   */
  export type BusinessHoursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * Filter, which BusinessHours to fetch.
     */
    where?: BusinessHoursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessHours to fetch.
     */
    orderBy?: BusinessHoursOrderByWithRelationInput | BusinessHoursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessHours.
     */
    cursor?: BusinessHoursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessHours.
     */
    distinct?: BusinessHoursScalarFieldEnum | BusinessHoursScalarFieldEnum[]
  }

  /**
   * BusinessHours create
   */
  export type BusinessHoursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * The data needed to create a BusinessHours.
     */
    data: XOR<BusinessHoursCreateInput, BusinessHoursUncheckedCreateInput>
  }

  /**
   * BusinessHours createMany
   */
  export type BusinessHoursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessHours.
     */
    data: BusinessHoursCreateManyInput | BusinessHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessHours createManyAndReturn
   */
  export type BusinessHoursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessHours.
     */
    data: BusinessHoursCreateManyInput | BusinessHoursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessHours update
   */
  export type BusinessHoursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * The data needed to update a BusinessHours.
     */
    data: XOR<BusinessHoursUpdateInput, BusinessHoursUncheckedUpdateInput>
    /**
     * Choose, which BusinessHours to update.
     */
    where: BusinessHoursWhereUniqueInput
  }

  /**
   * BusinessHours updateMany
   */
  export type BusinessHoursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessHours.
     */
    data: XOR<BusinessHoursUpdateManyMutationInput, BusinessHoursUncheckedUpdateManyInput>
    /**
     * Filter which BusinessHours to update
     */
    where?: BusinessHoursWhereInput
    /**
     * Limit how many BusinessHours to update.
     */
    limit?: number
  }

  /**
   * BusinessHours updateManyAndReturn
   */
  export type BusinessHoursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * The data used to update BusinessHours.
     */
    data: XOR<BusinessHoursUpdateManyMutationInput, BusinessHoursUncheckedUpdateManyInput>
    /**
     * Filter which BusinessHours to update
     */
    where?: BusinessHoursWhereInput
    /**
     * Limit how many BusinessHours to update.
     */
    limit?: number
  }

  /**
   * BusinessHours upsert
   */
  export type BusinessHoursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * The filter to search for the BusinessHours to update in case it exists.
     */
    where: BusinessHoursWhereUniqueInput
    /**
     * In case the BusinessHours found by the `where` argument doesn't exist, create a new BusinessHours with this data.
     */
    create: XOR<BusinessHoursCreateInput, BusinessHoursUncheckedCreateInput>
    /**
     * In case the BusinessHours was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessHoursUpdateInput, BusinessHoursUncheckedUpdateInput>
  }

  /**
   * BusinessHours delete
   */
  export type BusinessHoursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
    /**
     * Filter which BusinessHours to delete.
     */
    where: BusinessHoursWhereUniqueInput
  }

  /**
   * BusinessHours deleteMany
   */
  export type BusinessHoursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessHours to delete
     */
    where?: BusinessHoursWhereInput
    /**
     * Limit how many BusinessHours to delete.
     */
    limit?: number
  }

  /**
   * BusinessHours without action
   */
  export type BusinessHoursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHours
     */
    select?: BusinessHoursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHours
     */
    omit?: BusinessHoursOmit<ExtArgs> | null
  }


  /**
   * Model BusinessHoliday
   */

  export type AggregateBusinessHoliday = {
    _count: BusinessHolidayCountAggregateOutputType | null
    _min: BusinessHolidayMinAggregateOutputType | null
    _max: BusinessHolidayMaxAggregateOutputType | null
  }

  export type BusinessHolidayMinAggregateOutputType = {
    id: string | null
    date: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessHolidayMaxAggregateOutputType = {
    id: string | null
    date: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessHolidayCountAggregateOutputType = {
    id: number
    date: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessHolidayMinAggregateInputType = {
    id?: true
    date?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessHolidayMaxAggregateInputType = {
    id?: true
    date?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessHolidayCountAggregateInputType = {
    id?: true
    date?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessHolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessHoliday to aggregate.
     */
    where?: BusinessHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessHolidays to fetch.
     */
    orderBy?: BusinessHolidayOrderByWithRelationInput | BusinessHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessHolidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessHolidays
    **/
    _count?: true | BusinessHolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessHolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessHolidayMaxAggregateInputType
  }

  export type GetBusinessHolidayAggregateType<T extends BusinessHolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessHoliday[P]>
      : GetScalarType<T[P], AggregateBusinessHoliday[P]>
  }




  export type BusinessHolidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessHolidayWhereInput
    orderBy?: BusinessHolidayOrderByWithAggregationInput | BusinessHolidayOrderByWithAggregationInput[]
    by: BusinessHolidayScalarFieldEnum[] | BusinessHolidayScalarFieldEnum
    having?: BusinessHolidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessHolidayCountAggregateInputType | true
    _min?: BusinessHolidayMinAggregateInputType
    _max?: BusinessHolidayMaxAggregateInputType
  }

  export type BusinessHolidayGroupByOutputType = {
    id: string
    date: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: BusinessHolidayCountAggregateOutputType | null
    _min: BusinessHolidayMinAggregateOutputType | null
    _max: BusinessHolidayMaxAggregateOutputType | null
  }

  type GetBusinessHolidayGroupByPayload<T extends BusinessHolidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessHolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessHolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessHolidayGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessHolidayGroupByOutputType[P]>
        }
      >
    >


  export type BusinessHolidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["businessHoliday"]>

  export type BusinessHolidaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["businessHoliday"]>

  export type BusinessHolidaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["businessHoliday"]>

  export type BusinessHolidaySelectScalar = {
    id?: boolean
    date?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusinessHolidayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["businessHoliday"]>

  export type $BusinessHolidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessHoliday"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessHoliday"]>
    composites: {}
  }

  type BusinessHolidayGetPayload<S extends boolean | null | undefined | BusinessHolidayDefaultArgs> = $Result.GetResult<Prisma.$BusinessHolidayPayload, S>

  type BusinessHolidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessHolidayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessHolidayCountAggregateInputType | true
    }

  export interface BusinessHolidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessHoliday'], meta: { name: 'BusinessHoliday' } }
    /**
     * Find zero or one BusinessHoliday that matches the filter.
     * @param {BusinessHolidayFindUniqueArgs} args - Arguments to find a BusinessHoliday
     * @example
     * // Get one BusinessHoliday
     * const businessHoliday = await prisma.businessHoliday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessHolidayFindUniqueArgs>(args: SelectSubset<T, BusinessHolidayFindUniqueArgs<ExtArgs>>): Prisma__BusinessHolidayClient<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessHoliday that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessHolidayFindUniqueOrThrowArgs} args - Arguments to find a BusinessHoliday
     * @example
     * // Get one BusinessHoliday
     * const businessHoliday = await prisma.businessHoliday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessHolidayFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessHolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessHolidayClient<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessHoliday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHolidayFindFirstArgs} args - Arguments to find a BusinessHoliday
     * @example
     * // Get one BusinessHoliday
     * const businessHoliday = await prisma.businessHoliday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessHolidayFindFirstArgs>(args?: SelectSubset<T, BusinessHolidayFindFirstArgs<ExtArgs>>): Prisma__BusinessHolidayClient<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessHoliday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHolidayFindFirstOrThrowArgs} args - Arguments to find a BusinessHoliday
     * @example
     * // Get one BusinessHoliday
     * const businessHoliday = await prisma.businessHoliday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessHolidayFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessHolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessHolidayClient<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessHolidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHolidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessHolidays
     * const businessHolidays = await prisma.businessHoliday.findMany()
     * 
     * // Get first 10 BusinessHolidays
     * const businessHolidays = await prisma.businessHoliday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessHolidayWithIdOnly = await prisma.businessHoliday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessHolidayFindManyArgs>(args?: SelectSubset<T, BusinessHolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessHoliday.
     * @param {BusinessHolidayCreateArgs} args - Arguments to create a BusinessHoliday.
     * @example
     * // Create one BusinessHoliday
     * const BusinessHoliday = await prisma.businessHoliday.create({
     *   data: {
     *     // ... data to create a BusinessHoliday
     *   }
     * })
     * 
     */
    create<T extends BusinessHolidayCreateArgs>(args: SelectSubset<T, BusinessHolidayCreateArgs<ExtArgs>>): Prisma__BusinessHolidayClient<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessHolidays.
     * @param {BusinessHolidayCreateManyArgs} args - Arguments to create many BusinessHolidays.
     * @example
     * // Create many BusinessHolidays
     * const businessHoliday = await prisma.businessHoliday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessHolidayCreateManyArgs>(args?: SelectSubset<T, BusinessHolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessHolidays and returns the data saved in the database.
     * @param {BusinessHolidayCreateManyAndReturnArgs} args - Arguments to create many BusinessHolidays.
     * @example
     * // Create many BusinessHolidays
     * const businessHoliday = await prisma.businessHoliday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessHolidays and only return the `id`
     * const businessHolidayWithIdOnly = await prisma.businessHoliday.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessHolidayCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessHolidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessHoliday.
     * @param {BusinessHolidayDeleteArgs} args - Arguments to delete one BusinessHoliday.
     * @example
     * // Delete one BusinessHoliday
     * const BusinessHoliday = await prisma.businessHoliday.delete({
     *   where: {
     *     // ... filter to delete one BusinessHoliday
     *   }
     * })
     * 
     */
    delete<T extends BusinessHolidayDeleteArgs>(args: SelectSubset<T, BusinessHolidayDeleteArgs<ExtArgs>>): Prisma__BusinessHolidayClient<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessHoliday.
     * @param {BusinessHolidayUpdateArgs} args - Arguments to update one BusinessHoliday.
     * @example
     * // Update one BusinessHoliday
     * const businessHoliday = await prisma.businessHoliday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessHolidayUpdateArgs>(args: SelectSubset<T, BusinessHolidayUpdateArgs<ExtArgs>>): Prisma__BusinessHolidayClient<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessHolidays.
     * @param {BusinessHolidayDeleteManyArgs} args - Arguments to filter BusinessHolidays to delete.
     * @example
     * // Delete a few BusinessHolidays
     * const { count } = await prisma.businessHoliday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessHolidayDeleteManyArgs>(args?: SelectSubset<T, BusinessHolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessHolidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHolidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessHolidays
     * const businessHoliday = await prisma.businessHoliday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessHolidayUpdateManyArgs>(args: SelectSubset<T, BusinessHolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessHolidays and returns the data updated in the database.
     * @param {BusinessHolidayUpdateManyAndReturnArgs} args - Arguments to update many BusinessHolidays.
     * @example
     * // Update many BusinessHolidays
     * const businessHoliday = await prisma.businessHoliday.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessHolidays and only return the `id`
     * const businessHolidayWithIdOnly = await prisma.businessHoliday.updateManyAndReturn({
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
    updateManyAndReturn<T extends BusinessHolidayUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessHolidayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessHoliday.
     * @param {BusinessHolidayUpsertArgs} args - Arguments to update or create a BusinessHoliday.
     * @example
     * // Update or create a BusinessHoliday
     * const businessHoliday = await prisma.businessHoliday.upsert({
     *   create: {
     *     // ... data to create a BusinessHoliday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessHoliday we want to update
     *   }
     * })
     */
    upsert<T extends BusinessHolidayUpsertArgs>(args: SelectSubset<T, BusinessHolidayUpsertArgs<ExtArgs>>): Prisma__BusinessHolidayClient<$Result.GetResult<Prisma.$BusinessHolidayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessHolidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHolidayCountArgs} args - Arguments to filter BusinessHolidays to count.
     * @example
     * // Count the number of BusinessHolidays
     * const count = await prisma.businessHoliday.count({
     *   where: {
     *     // ... the filter for the BusinessHolidays we want to count
     *   }
     * })
    **/
    count<T extends BusinessHolidayCountArgs>(
      args?: Subset<T, BusinessHolidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessHolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessHoliday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessHolidayAggregateArgs>(args: Subset<T, BusinessHolidayAggregateArgs>): Prisma.PrismaPromise<GetBusinessHolidayAggregateType<T>>

    /**
     * Group by BusinessHoliday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessHolidayGroupByArgs} args - Group by arguments.
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
      T extends BusinessHolidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessHolidayGroupByArgs['orderBy'] }
        : { orderBy?: BusinessHolidayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessHolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessHoliday model
   */
  readonly fields: BusinessHolidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessHoliday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessHolidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BusinessHoliday model
   */
  interface BusinessHolidayFieldRefs {
    readonly id: FieldRef<"BusinessHoliday", 'String'>
    readonly date: FieldRef<"BusinessHoliday", 'String'>
    readonly description: FieldRef<"BusinessHoliday", 'String'>
    readonly createdAt: FieldRef<"BusinessHoliday", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessHoliday", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessHoliday findUnique
   */
  export type BusinessHolidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * Filter, which BusinessHoliday to fetch.
     */
    where: BusinessHolidayWhereUniqueInput
  }

  /**
   * BusinessHoliday findUniqueOrThrow
   */
  export type BusinessHolidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * Filter, which BusinessHoliday to fetch.
     */
    where: BusinessHolidayWhereUniqueInput
  }

  /**
   * BusinessHoliday findFirst
   */
  export type BusinessHolidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * Filter, which BusinessHoliday to fetch.
     */
    where?: BusinessHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessHolidays to fetch.
     */
    orderBy?: BusinessHolidayOrderByWithRelationInput | BusinessHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessHolidays.
     */
    cursor?: BusinessHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessHolidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessHolidays.
     */
    distinct?: BusinessHolidayScalarFieldEnum | BusinessHolidayScalarFieldEnum[]
  }

  /**
   * BusinessHoliday findFirstOrThrow
   */
  export type BusinessHolidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * Filter, which BusinessHoliday to fetch.
     */
    where?: BusinessHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessHolidays to fetch.
     */
    orderBy?: BusinessHolidayOrderByWithRelationInput | BusinessHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessHolidays.
     */
    cursor?: BusinessHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessHolidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessHolidays.
     */
    distinct?: BusinessHolidayScalarFieldEnum | BusinessHolidayScalarFieldEnum[]
  }

  /**
   * BusinessHoliday findMany
   */
  export type BusinessHolidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * Filter, which BusinessHolidays to fetch.
     */
    where?: BusinessHolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessHolidays to fetch.
     */
    orderBy?: BusinessHolidayOrderByWithRelationInput | BusinessHolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessHolidays.
     */
    cursor?: BusinessHolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessHolidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessHolidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessHolidays.
     */
    distinct?: BusinessHolidayScalarFieldEnum | BusinessHolidayScalarFieldEnum[]
  }

  /**
   * BusinessHoliday create
   */
  export type BusinessHolidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * The data needed to create a BusinessHoliday.
     */
    data: XOR<BusinessHolidayCreateInput, BusinessHolidayUncheckedCreateInput>
  }

  /**
   * BusinessHoliday createMany
   */
  export type BusinessHolidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessHolidays.
     */
    data: BusinessHolidayCreateManyInput | BusinessHolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessHoliday createManyAndReturn
   */
  export type BusinessHolidayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessHolidays.
     */
    data: BusinessHolidayCreateManyInput | BusinessHolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessHoliday update
   */
  export type BusinessHolidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * The data needed to update a BusinessHoliday.
     */
    data: XOR<BusinessHolidayUpdateInput, BusinessHolidayUncheckedUpdateInput>
    /**
     * Choose, which BusinessHoliday to update.
     */
    where: BusinessHolidayWhereUniqueInput
  }

  /**
   * BusinessHoliday updateMany
   */
  export type BusinessHolidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessHolidays.
     */
    data: XOR<BusinessHolidayUpdateManyMutationInput, BusinessHolidayUncheckedUpdateManyInput>
    /**
     * Filter which BusinessHolidays to update
     */
    where?: BusinessHolidayWhereInput
    /**
     * Limit how many BusinessHolidays to update.
     */
    limit?: number
  }

  /**
   * BusinessHoliday updateManyAndReturn
   */
  export type BusinessHolidayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * The data used to update BusinessHolidays.
     */
    data: XOR<BusinessHolidayUpdateManyMutationInput, BusinessHolidayUncheckedUpdateManyInput>
    /**
     * Filter which BusinessHolidays to update
     */
    where?: BusinessHolidayWhereInput
    /**
     * Limit how many BusinessHolidays to update.
     */
    limit?: number
  }

  /**
   * BusinessHoliday upsert
   */
  export type BusinessHolidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * The filter to search for the BusinessHoliday to update in case it exists.
     */
    where: BusinessHolidayWhereUniqueInput
    /**
     * In case the BusinessHoliday found by the `where` argument doesn't exist, create a new BusinessHoliday with this data.
     */
    create: XOR<BusinessHolidayCreateInput, BusinessHolidayUncheckedCreateInput>
    /**
     * In case the BusinessHoliday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessHolidayUpdateInput, BusinessHolidayUncheckedUpdateInput>
  }

  /**
   * BusinessHoliday delete
   */
  export type BusinessHolidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
    /**
     * Filter which BusinessHoliday to delete.
     */
    where: BusinessHolidayWhereUniqueInput
  }

  /**
   * BusinessHoliday deleteMany
   */
  export type BusinessHolidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessHolidays to delete
     */
    where?: BusinessHolidayWhereInput
    /**
     * Limit how many BusinessHolidays to delete.
     */
    limit?: number
  }

  /**
   * BusinessHoliday without action
   */
  export type BusinessHolidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessHoliday
     */
    select?: BusinessHolidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessHoliday
     */
    omit?: BusinessHolidayOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    role?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    professional?: boolean | User$professionalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    professional?: boolean | User$professionalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      professional: Prisma.$ProfessionalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      password: string
      role: $Enums.Role
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
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    professional<T extends User$professionalArgs<ExtArgs> = {}>(args?: Subset<T, User$professionalArgs<ExtArgs>>): Prisma__ProfessionalClient<$Result.GetResult<Prisma.$ProfessionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User.professional
   */
  export type User$professionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Professional
     */
    select?: ProfessionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Professional
     */
    omit?: ProfessionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfessionalInclude<ExtArgs> | null
    where?: ProfessionalWhereInput
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
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
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
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
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
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


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
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
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
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
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
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
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
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
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


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    duration: 'duration',
    category: 'category',
    active: 'active',
    overlap: 'overlap',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    whatsapp: 'whatsapp',
    profileImage: 'profileImage',
    technicalNotes: 'technicalNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    price: 'price',
    date: 'date',
    status: 'status',
    observations: 'observations',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const ScheduledServiceScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    price: 'price',
    serviceId: 'serviceId',
    professionalId: 'professionalId',
    appointmentId: 'appointmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduledServiceScalarFieldEnum = (typeof ScheduledServiceScalarFieldEnum)[keyof typeof ScheduledServiceScalarFieldEnum]


  export const ProfessionalScheduleScalarFieldEnum: {
    id: 'id',
    professionalId: 'professionalId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessionalScheduleScalarFieldEnum = (typeof ProfessionalScheduleScalarFieldEnum)[keyof typeof ProfessionalScheduleScalarFieldEnum]


  export const ProfessionalScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    whatsapp: 'whatsapp',
    bio: 'bio',
    profileImage: 'profileImage',
    category: 'category',
    active: 'active',
    rating: 'rating',
    commissionRate: 'commissionRate',
    commissionType: 'commissionType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ProfessionalScalarFieldEnum = (typeof ProfessionalScalarFieldEnum)[keyof typeof ProfessionalScalarFieldEnum]


  export const ProfessionalLeaveScalarFieldEnum: {
    id: 'id',
    professionalId: 'professionalId',
    startDate: 'startDate',
    endDate: 'endDate',
    startTime: 'startTime',
    endTime: 'endTime',
    reason: 'reason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessionalLeaveScalarFieldEnum = (typeof ProfessionalLeaveScalarFieldEnum)[keyof typeof ProfessionalLeaveScalarFieldEnum]


  export const ProfessionalServiceScalarFieldEnum: {
    id: 'id',
    professionalId: 'professionalId',
    serviceId: 'serviceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfessionalServiceScalarFieldEnum = (typeof ProfessionalServiceScalarFieldEnum)[keyof typeof ProfessionalServiceScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    method: 'method',
    appointmentId: 'appointmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const BusinessHoursScalarFieldEnum: {
    id: 'id',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessHoursScalarFieldEnum = (typeof BusinessHoursScalarFieldEnum)[keyof typeof BusinessHoursScalarFieldEnum]


  export const BusinessHolidayScalarFieldEnum: {
    id: 'id',
    date: 'date',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessHolidayScalarFieldEnum = (typeof BusinessHolidayScalarFieldEnum)[keyof typeof BusinessHolidayScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: IntFilter<"Service"> | number
    duration?: IntFilter<"Service"> | number
    category?: EnumCategoryFilter<"Service"> | $Enums.Category
    active?: BoolFilter<"Service"> | boolean
    overlap?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    appointments?: ScheduledServiceListRelationFilter
    professionals?: ProfessionalServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    duration?: SortOrder
    category?: SortOrder
    active?: SortOrder
    overlap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: ScheduledServiceOrderByRelationAggregateInput
    professionals?: ProfessionalServiceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: IntFilter<"Service"> | number
    duration?: IntFilter<"Service"> | number
    category?: EnumCategoryFilter<"Service"> | $Enums.Category
    active?: BoolFilter<"Service"> | boolean
    overlap?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    appointments?: ScheduledServiceListRelationFilter
    professionals?: ProfessionalServiceListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    duration?: SortOrder
    category?: SortOrder
    active?: SortOrder
    overlap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    price?: IntWithAggregatesFilter<"Service"> | number
    duration?: IntWithAggregatesFilter<"Service"> | number
    category?: EnumCategoryWithAggregatesFilter<"Service"> | $Enums.Category
    active?: BoolWithAggregatesFilter<"Service"> | boolean
    overlap?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    fullName?: StringFilter<"Client"> | string
    whatsapp?: StringNullableFilter<"Client"> | string | null
    profileImage?: StringNullableFilter<"Client"> | string | null
    technicalNotes?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    appointments?: AppointmentListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    technicalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    whatsapp?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    fullName?: StringFilter<"Client"> | string
    profileImage?: StringNullableFilter<"Client"> | string | null
    technicalNotes?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    appointments?: AppointmentListRelationFilter
  }, "id" | "whatsapp">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    technicalNotes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    fullName?: StringWithAggregatesFilter<"Client"> | string
    whatsapp?: StringNullableWithAggregatesFilter<"Client"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"Client"> | string | null
    technicalNotes?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    clientId?: StringFilter<"Appointment"> | string
    price?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    observations?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    services?: ScheduledServiceListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    status?: SortOrder
    observations?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    services?: ScheduledServiceOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    clientId?: StringFilter<"Appointment"> | string
    price?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    observations?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    services?: ScheduledServiceListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    status?: SortOrder
    observations?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    clientId?: StringWithAggregatesFilter<"Appointment"> | string
    price?: IntWithAggregatesFilter<"Appointment"> | number
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    observations?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type ScheduledServiceWhereInput = {
    AND?: ScheduledServiceWhereInput | ScheduledServiceWhereInput[]
    OR?: ScheduledServiceWhereInput[]
    NOT?: ScheduledServiceWhereInput | ScheduledServiceWhereInput[]
    id?: StringFilter<"ScheduledService"> | string
    startTime?: DateTimeFilter<"ScheduledService"> | Date | string
    endTime?: DateTimeFilter<"ScheduledService"> | Date | string
    price?: IntFilter<"ScheduledService"> | number
    serviceId?: StringFilter<"ScheduledService"> | string
    professionalId?: StringFilter<"ScheduledService"> | string
    appointmentId?: StringFilter<"ScheduledService"> | string
    createdAt?: DateTimeFilter<"ScheduledService"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledService"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type ScheduledServiceOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    price?: SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    service?: ServiceOrderByWithRelationInput
    professional?: ProfessionalOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type ScheduledServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduledServiceWhereInput | ScheduledServiceWhereInput[]
    OR?: ScheduledServiceWhereInput[]
    NOT?: ScheduledServiceWhereInput | ScheduledServiceWhereInput[]
    startTime?: DateTimeFilter<"ScheduledService"> | Date | string
    endTime?: DateTimeFilter<"ScheduledService"> | Date | string
    price?: IntFilter<"ScheduledService"> | number
    serviceId?: StringFilter<"ScheduledService"> | string
    professionalId?: StringFilter<"ScheduledService"> | string
    appointmentId?: StringFilter<"ScheduledService"> | string
    createdAt?: DateTimeFilter<"ScheduledService"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledService"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id">

  export type ScheduledServiceOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    price?: SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduledServiceCountOrderByAggregateInput
    _avg?: ScheduledServiceAvgOrderByAggregateInput
    _max?: ScheduledServiceMaxOrderByAggregateInput
    _min?: ScheduledServiceMinOrderByAggregateInput
    _sum?: ScheduledServiceSumOrderByAggregateInput
  }

  export type ScheduledServiceScalarWhereWithAggregatesInput = {
    AND?: ScheduledServiceScalarWhereWithAggregatesInput | ScheduledServiceScalarWhereWithAggregatesInput[]
    OR?: ScheduledServiceScalarWhereWithAggregatesInput[]
    NOT?: ScheduledServiceScalarWhereWithAggregatesInput | ScheduledServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduledService"> | string
    startTime?: DateTimeWithAggregatesFilter<"ScheduledService"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"ScheduledService"> | Date | string
    price?: IntWithAggregatesFilter<"ScheduledService"> | number
    serviceId?: StringWithAggregatesFilter<"ScheduledService"> | string
    professionalId?: StringWithAggregatesFilter<"ScheduledService"> | string
    appointmentId?: StringWithAggregatesFilter<"ScheduledService"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ScheduledService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduledService"> | Date | string
  }

  export type ProfessionalScheduleWhereInput = {
    AND?: ProfessionalScheduleWhereInput | ProfessionalScheduleWhereInput[]
    OR?: ProfessionalScheduleWhereInput[]
    NOT?: ProfessionalScheduleWhereInput | ProfessionalScheduleWhereInput[]
    id?: StringFilter<"ProfessionalSchedule"> | string
    professionalId?: StringFilter<"ProfessionalSchedule"> | string
    dayOfWeek?: IntFilter<"ProfessionalSchedule"> | number
    startTime?: StringFilter<"ProfessionalSchedule"> | string
    endTime?: StringFilter<"ProfessionalSchedule"> | string
    isAvailable?: BoolFilter<"ProfessionalSchedule"> | boolean
    createdAt?: DateTimeFilter<"ProfessionalSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalSchedule"> | Date | string
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
  }

  export type ProfessionalScheduleOrderByWithRelationInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professional?: ProfessionalOrderByWithRelationInput
  }

  export type ProfessionalScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    professionalId_dayOfWeek?: ProfessionalScheduleProfessionalIdDayOfWeekCompoundUniqueInput
    AND?: ProfessionalScheduleWhereInput | ProfessionalScheduleWhereInput[]
    OR?: ProfessionalScheduleWhereInput[]
    NOT?: ProfessionalScheduleWhereInput | ProfessionalScheduleWhereInput[]
    professionalId?: StringFilter<"ProfessionalSchedule"> | string
    dayOfWeek?: IntFilter<"ProfessionalSchedule"> | number
    startTime?: StringFilter<"ProfessionalSchedule"> | string
    endTime?: StringFilter<"ProfessionalSchedule"> | string
    isAvailable?: BoolFilter<"ProfessionalSchedule"> | boolean
    createdAt?: DateTimeFilter<"ProfessionalSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalSchedule"> | Date | string
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
  }, "id" | "professionalId_dayOfWeek">

  export type ProfessionalScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfessionalScheduleCountOrderByAggregateInput
    _avg?: ProfessionalScheduleAvgOrderByAggregateInput
    _max?: ProfessionalScheduleMaxOrderByAggregateInput
    _min?: ProfessionalScheduleMinOrderByAggregateInput
    _sum?: ProfessionalScheduleSumOrderByAggregateInput
  }

  export type ProfessionalScheduleScalarWhereWithAggregatesInput = {
    AND?: ProfessionalScheduleScalarWhereWithAggregatesInput | ProfessionalScheduleScalarWhereWithAggregatesInput[]
    OR?: ProfessionalScheduleScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalScheduleScalarWhereWithAggregatesInput | ProfessionalScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfessionalSchedule"> | string
    professionalId?: StringWithAggregatesFilter<"ProfessionalSchedule"> | string
    dayOfWeek?: IntWithAggregatesFilter<"ProfessionalSchedule"> | number
    startTime?: StringWithAggregatesFilter<"ProfessionalSchedule"> | string
    endTime?: StringWithAggregatesFilter<"ProfessionalSchedule"> | string
    isAvailable?: BoolWithAggregatesFilter<"ProfessionalSchedule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProfessionalSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfessionalSchedule"> | Date | string
  }

  export type ProfessionalWhereInput = {
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    id?: StringFilter<"Professional"> | string
    fullName?: StringFilter<"Professional"> | string
    whatsapp?: StringFilter<"Professional"> | string
    bio?: StringNullableFilter<"Professional"> | string | null
    profileImage?: StringNullableFilter<"Professional"> | string | null
    category?: EnumCategoryFilter<"Professional"> | $Enums.Category
    active?: BoolFilter<"Professional"> | boolean
    rating?: FloatNullableFilter<"Professional"> | number | null
    commissionRate?: IntFilter<"Professional"> | number
    commissionType?: StringFilter<"Professional"> | string
    createdAt?: DateTimeFilter<"Professional"> | Date | string
    updatedAt?: DateTimeFilter<"Professional"> | Date | string
    userId?: StringFilter<"Professional"> | string
    appointments?: ScheduledServiceListRelationFilter
    schedules?: ProfessionalScheduleListRelationFilter
    leaves?: ProfessionalLeaveListRelationFilter
    services?: ProfessionalServiceListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfessionalOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    bio?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    category?: SortOrder
    active?: SortOrder
    rating?: SortOrderInput | SortOrder
    commissionRate?: SortOrder
    commissionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    appointments?: ScheduledServiceOrderByRelationAggregateInput
    schedules?: ProfessionalScheduleOrderByRelationAggregateInput
    leaves?: ProfessionalLeaveOrderByRelationAggregateInput
    services?: ProfessionalServiceOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ProfessionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    whatsapp?: string
    userId?: string
    AND?: ProfessionalWhereInput | ProfessionalWhereInput[]
    OR?: ProfessionalWhereInput[]
    NOT?: ProfessionalWhereInput | ProfessionalWhereInput[]
    fullName?: StringFilter<"Professional"> | string
    bio?: StringNullableFilter<"Professional"> | string | null
    profileImage?: StringNullableFilter<"Professional"> | string | null
    category?: EnumCategoryFilter<"Professional"> | $Enums.Category
    active?: BoolFilter<"Professional"> | boolean
    rating?: FloatNullableFilter<"Professional"> | number | null
    commissionRate?: IntFilter<"Professional"> | number
    commissionType?: StringFilter<"Professional"> | string
    createdAt?: DateTimeFilter<"Professional"> | Date | string
    updatedAt?: DateTimeFilter<"Professional"> | Date | string
    appointments?: ScheduledServiceListRelationFilter
    schedules?: ProfessionalScheduleListRelationFilter
    leaves?: ProfessionalLeaveListRelationFilter
    services?: ProfessionalServiceListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "whatsapp" | "userId">

  export type ProfessionalOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    bio?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    category?: SortOrder
    active?: SortOrder
    rating?: SortOrderInput | SortOrder
    commissionRate?: SortOrder
    commissionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ProfessionalCountOrderByAggregateInput
    _avg?: ProfessionalAvgOrderByAggregateInput
    _max?: ProfessionalMaxOrderByAggregateInput
    _min?: ProfessionalMinOrderByAggregateInput
    _sum?: ProfessionalSumOrderByAggregateInput
  }

  export type ProfessionalScalarWhereWithAggregatesInput = {
    AND?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    OR?: ProfessionalScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalScalarWhereWithAggregatesInput | ProfessionalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Professional"> | string
    fullName?: StringWithAggregatesFilter<"Professional"> | string
    whatsapp?: StringWithAggregatesFilter<"Professional"> | string
    bio?: StringNullableWithAggregatesFilter<"Professional"> | string | null
    profileImage?: StringNullableWithAggregatesFilter<"Professional"> | string | null
    category?: EnumCategoryWithAggregatesFilter<"Professional"> | $Enums.Category
    active?: BoolWithAggregatesFilter<"Professional"> | boolean
    rating?: FloatNullableWithAggregatesFilter<"Professional"> | number | null
    commissionRate?: IntWithAggregatesFilter<"Professional"> | number
    commissionType?: StringWithAggregatesFilter<"Professional"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Professional"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Professional"> | Date | string
    userId?: StringWithAggregatesFilter<"Professional"> | string
  }

  export type ProfessionalLeaveWhereInput = {
    AND?: ProfessionalLeaveWhereInput | ProfessionalLeaveWhereInput[]
    OR?: ProfessionalLeaveWhereInput[]
    NOT?: ProfessionalLeaveWhereInput | ProfessionalLeaveWhereInput[]
    id?: StringFilter<"ProfessionalLeave"> | string
    professionalId?: StringFilter<"ProfessionalLeave"> | string
    startDate?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    endDate?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    startTime?: StringNullableFilter<"ProfessionalLeave"> | string | null
    endTime?: StringNullableFilter<"ProfessionalLeave"> | string | null
    reason?: StringNullableFilter<"ProfessionalLeave"> | string | null
    createdAt?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
  }

  export type ProfessionalLeaveOrderByWithRelationInput = {
    id?: SortOrder
    professionalId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professional?: ProfessionalOrderByWithRelationInput
  }

  export type ProfessionalLeaveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfessionalLeaveWhereInput | ProfessionalLeaveWhereInput[]
    OR?: ProfessionalLeaveWhereInput[]
    NOT?: ProfessionalLeaveWhereInput | ProfessionalLeaveWhereInput[]
    professionalId?: StringFilter<"ProfessionalLeave"> | string
    startDate?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    endDate?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    startTime?: StringNullableFilter<"ProfessionalLeave"> | string | null
    endTime?: StringNullableFilter<"ProfessionalLeave"> | string | null
    reason?: StringNullableFilter<"ProfessionalLeave"> | string | null
    createdAt?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
  }, "id">

  export type ProfessionalLeaveOrderByWithAggregationInput = {
    id?: SortOrder
    professionalId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfessionalLeaveCountOrderByAggregateInput
    _max?: ProfessionalLeaveMaxOrderByAggregateInput
    _min?: ProfessionalLeaveMinOrderByAggregateInput
  }

  export type ProfessionalLeaveScalarWhereWithAggregatesInput = {
    AND?: ProfessionalLeaveScalarWhereWithAggregatesInput | ProfessionalLeaveScalarWhereWithAggregatesInput[]
    OR?: ProfessionalLeaveScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalLeaveScalarWhereWithAggregatesInput | ProfessionalLeaveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfessionalLeave"> | string
    professionalId?: StringWithAggregatesFilter<"ProfessionalLeave"> | string
    startDate?: DateTimeWithAggregatesFilter<"ProfessionalLeave"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"ProfessionalLeave"> | Date | string
    startTime?: StringNullableWithAggregatesFilter<"ProfessionalLeave"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"ProfessionalLeave"> | string | null
    reason?: StringNullableWithAggregatesFilter<"ProfessionalLeave"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProfessionalLeave"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfessionalLeave"> | Date | string
  }

  export type ProfessionalServiceWhereInput = {
    AND?: ProfessionalServiceWhereInput | ProfessionalServiceWhereInput[]
    OR?: ProfessionalServiceWhereInput[]
    NOT?: ProfessionalServiceWhereInput | ProfessionalServiceWhereInput[]
    id?: StringFilter<"ProfessionalService"> | string
    professionalId?: StringFilter<"ProfessionalService"> | string
    serviceId?: StringFilter<"ProfessionalService"> | string
    createdAt?: DateTimeFilter<"ProfessionalService"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalService"> | Date | string
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ProfessionalServiceOrderByWithRelationInput = {
    id?: SortOrder
    professionalId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    professional?: ProfessionalOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type ProfessionalServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    professionalId_serviceId?: ProfessionalServiceProfessionalIdServiceIdCompoundUniqueInput
    AND?: ProfessionalServiceWhereInput | ProfessionalServiceWhereInput[]
    OR?: ProfessionalServiceWhereInput[]
    NOT?: ProfessionalServiceWhereInput | ProfessionalServiceWhereInput[]
    professionalId?: StringFilter<"ProfessionalService"> | string
    serviceId?: StringFilter<"ProfessionalService"> | string
    createdAt?: DateTimeFilter<"ProfessionalService"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalService"> | Date | string
    professional?: XOR<ProfessionalScalarRelationFilter, ProfessionalWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "professionalId_serviceId">

  export type ProfessionalServiceOrderByWithAggregationInput = {
    id?: SortOrder
    professionalId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfessionalServiceCountOrderByAggregateInput
    _max?: ProfessionalServiceMaxOrderByAggregateInput
    _min?: ProfessionalServiceMinOrderByAggregateInput
  }

  export type ProfessionalServiceScalarWhereWithAggregatesInput = {
    AND?: ProfessionalServiceScalarWhereWithAggregatesInput | ProfessionalServiceScalarWhereWithAggregatesInput[]
    OR?: ProfessionalServiceScalarWhereWithAggregatesInput[]
    NOT?: ProfessionalServiceScalarWhereWithAggregatesInput | ProfessionalServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProfessionalService"> | string
    professionalId?: StringWithAggregatesFilter<"ProfessionalService"> | string
    serviceId?: StringWithAggregatesFilter<"ProfessionalService"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProfessionalService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProfessionalService"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    appointmentId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: IntFilter<"Payment"> | number
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    appointmentId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: IntWithAggregatesFilter<"Payment"> | number
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    appointmentId?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type BusinessHoursWhereInput = {
    AND?: BusinessHoursWhereInput | BusinessHoursWhereInput[]
    OR?: BusinessHoursWhereInput[]
    NOT?: BusinessHoursWhereInput | BusinessHoursWhereInput[]
    id?: StringFilter<"BusinessHours"> | string
    dayOfWeek?: IntFilter<"BusinessHours"> | number
    startTime?: StringFilter<"BusinessHours"> | string
    endTime?: StringFilter<"BusinessHours"> | string
    createdAt?: DateTimeFilter<"BusinessHours"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessHours"> | Date | string
  }

  export type BusinessHoursOrderByWithRelationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessHoursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dayOfWeek?: number
    AND?: BusinessHoursWhereInput | BusinessHoursWhereInput[]
    OR?: BusinessHoursWhereInput[]
    NOT?: BusinessHoursWhereInput | BusinessHoursWhereInput[]
    startTime?: StringFilter<"BusinessHours"> | string
    endTime?: StringFilter<"BusinessHours"> | string
    createdAt?: DateTimeFilter<"BusinessHours"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessHours"> | Date | string
  }, "id" | "dayOfWeek">

  export type BusinessHoursOrderByWithAggregationInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessHoursCountOrderByAggregateInput
    _avg?: BusinessHoursAvgOrderByAggregateInput
    _max?: BusinessHoursMaxOrderByAggregateInput
    _min?: BusinessHoursMinOrderByAggregateInput
    _sum?: BusinessHoursSumOrderByAggregateInput
  }

  export type BusinessHoursScalarWhereWithAggregatesInput = {
    AND?: BusinessHoursScalarWhereWithAggregatesInput | BusinessHoursScalarWhereWithAggregatesInput[]
    OR?: BusinessHoursScalarWhereWithAggregatesInput[]
    NOT?: BusinessHoursScalarWhereWithAggregatesInput | BusinessHoursScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusinessHours"> | string
    dayOfWeek?: IntWithAggregatesFilter<"BusinessHours"> | number
    startTime?: StringWithAggregatesFilter<"BusinessHours"> | string
    endTime?: StringWithAggregatesFilter<"BusinessHours"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BusinessHours"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessHours"> | Date | string
  }

  export type BusinessHolidayWhereInput = {
    AND?: BusinessHolidayWhereInput | BusinessHolidayWhereInput[]
    OR?: BusinessHolidayWhereInput[]
    NOT?: BusinessHolidayWhereInput | BusinessHolidayWhereInput[]
    id?: StringFilter<"BusinessHoliday"> | string
    date?: StringFilter<"BusinessHoliday"> | string
    description?: StringNullableFilter<"BusinessHoliday"> | string | null
    createdAt?: DateTimeFilter<"BusinessHoliday"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessHoliday"> | Date | string
  }

  export type BusinessHolidayOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessHolidayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    date?: string
    AND?: BusinessHolidayWhereInput | BusinessHolidayWhereInput[]
    OR?: BusinessHolidayWhereInput[]
    NOT?: BusinessHolidayWhereInput | BusinessHolidayWhereInput[]
    description?: StringNullableFilter<"BusinessHoliday"> | string | null
    createdAt?: DateTimeFilter<"BusinessHoliday"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessHoliday"> | Date | string
  }, "id" | "date">

  export type BusinessHolidayOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessHolidayCountOrderByAggregateInput
    _max?: BusinessHolidayMaxOrderByAggregateInput
    _min?: BusinessHolidayMinOrderByAggregateInput
  }

  export type BusinessHolidayScalarWhereWithAggregatesInput = {
    AND?: BusinessHolidayScalarWhereWithAggregatesInput | BusinessHolidayScalarWhereWithAggregatesInput[]
    OR?: BusinessHolidayScalarWhereWithAggregatesInput[]
    NOT?: BusinessHolidayScalarWhereWithAggregatesInput | BusinessHolidayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusinessHoliday"> | string
    date?: StringWithAggregatesFilter<"BusinessHoliday"> | string
    description?: StringNullableWithAggregatesFilter<"BusinessHoliday"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BusinessHoliday"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessHoliday"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    professional?: XOR<ProfessionalNullableScalarRelationFilter, ProfessionalWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    professional?: ProfessionalOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    professional?: XOR<ProfessionalNullableScalarRelationFilter, ProfessionalWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
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
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
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
    user?: UserOrderByWithRelationInput
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
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
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
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    duration: number
    category: $Enums.Category
    active?: boolean
    overlap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: ScheduledServiceCreateNestedManyWithoutServiceInput
    professionals?: ProfessionalServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    duration: number
    category: $Enums.Category
    active?: boolean
    overlap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: ScheduledServiceUncheckedCreateNestedManyWithoutServiceInput
    professionals?: ProfessionalServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    overlap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: ScheduledServiceUpdateManyWithoutServiceNestedInput
    professionals?: ProfessionalServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    overlap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: ScheduledServiceUncheckedUpdateManyWithoutServiceNestedInput
    professionals?: ProfessionalServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    duration: number
    category: $Enums.Category
    active?: boolean
    overlap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    overlap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    overlap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    fullName: string
    whatsapp?: string | null
    profileImage?: string | null
    technicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    fullName: string
    whatsapp?: string | null
    profileImage?: string | null
    technicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    fullName: string
    whatsapp?: string | null
    profileImage?: string | null
    technicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    price: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    observations?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAppointmentsInput
    services?: ScheduledServiceCreateNestedManyWithoutAppointmentInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    clientId: string
    price: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    observations?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ScheduledServiceUncheckedCreateNestedManyWithoutAppointmentInput
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAppointmentsNestedInput
    services?: ScheduledServiceUpdateManyWithoutAppointmentNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ScheduledServiceUncheckedUpdateManyWithoutAppointmentNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    clientId: string
    price: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    observations?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledServiceCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    professional: ProfessionalCreateNestedOneWithoutAppointmentsInput
    appointment: AppointmentCreateNestedOneWithoutServicesInput
  }

  export type ScheduledServiceUncheckedCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    serviceId: string
    professionalId: string
    appointmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    professional?: ProfessionalUpdateOneRequiredWithoutAppointmentsNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ScheduledServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    serviceId?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledServiceCreateManyInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    serviceId: string
    professionalId: string
    appointmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    serviceId?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalScheduleCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: ProfessionalCreateNestedOneWithoutSchedulesInput
  }

  export type ProfessionalScheduleUncheckedCreateInput = {
    id?: string
    professionalId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: ProfessionalUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ProfessionalScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalScheduleCreateManyInput = {
    id?: string
    professionalId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalCreateInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: ScheduledServiceCreateNestedManyWithoutProfessionalInput
    schedules?: ProfessionalScheduleCreateNestedManyWithoutProfessionalInput
    leaves?: ProfessionalLeaveCreateNestedManyWithoutProfessionalInput
    services?: ProfessionalServiceCreateNestedManyWithoutProfessionalInput
    user: UserCreateNestedOneWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    appointments?: ScheduledServiceUncheckedCreateNestedManyWithoutProfessionalInput
    schedules?: ProfessionalScheduleUncheckedCreateNestedManyWithoutProfessionalInput
    leaves?: ProfessionalLeaveUncheckedCreateNestedManyWithoutProfessionalInput
    services?: ProfessionalServiceUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: ScheduledServiceUpdateManyWithoutProfessionalNestedInput
    schedules?: ProfessionalScheduleUpdateManyWithoutProfessionalNestedInput
    leaves?: ProfessionalLeaveUpdateManyWithoutProfessionalNestedInput
    services?: ProfessionalServiceUpdateManyWithoutProfessionalNestedInput
    user?: UserUpdateOneRequiredWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    appointments?: ScheduledServiceUncheckedUpdateManyWithoutProfessionalNestedInput
    schedules?: ProfessionalScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
    leaves?: ProfessionalLeaveUncheckedUpdateManyWithoutProfessionalNestedInput
    services?: ProfessionalServiceUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalCreateManyInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ProfessionalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfessionalLeaveCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    startTime?: string | null
    endTime?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: ProfessionalCreateNestedOneWithoutLeavesInput
  }

  export type ProfessionalLeaveUncheckedCreateInput = {
    id?: string
    professionalId: string
    startDate: Date | string
    endDate: Date | string
    startTime?: string | null
    endTime?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalLeaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: ProfessionalUpdateOneRequiredWithoutLeavesNestedInput
  }

  export type ProfessionalLeaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalLeaveCreateManyInput = {
    id?: string
    professionalId: string
    startDate: Date | string
    endDate: Date | string
    startTime?: string | null
    endTime?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalLeaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalLeaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalServiceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: ProfessionalCreateNestedOneWithoutServicesInput
    service: ServiceCreateNestedOneWithoutProfessionalsInput
  }

  export type ProfessionalServiceUncheckedCreateInput = {
    id?: string
    professionalId: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: ProfessionalUpdateOneRequiredWithoutServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutProfessionalsNestedInput
  }

  export type ProfessionalServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalServiceCreateManyInput = {
    id?: string
    professionalId: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    method?: $Enums.PaymentMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    amount: number
    method?: $Enums.PaymentMethod
    appointmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    appointmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    amount: number
    method?: $Enums.PaymentMethod
    appointmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    appointmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessHoursCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessHoursUncheckedCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessHoursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessHoursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessHoursCreateManyInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessHoursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessHoursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessHolidayCreateInput = {
    id?: string
    date: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessHolidayUncheckedCreateInput = {
    id?: string
    date: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessHolidayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessHolidayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessHolidayCreateManyInput = {
    id?: string
    date: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessHolidayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessHolidayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    professional?: ProfessionalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    professional?: ProfessionalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    professional?: ProfessionalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    professional?: ProfessionalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
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
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
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

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    user: UserCreateNestedOneWithoutAccountsInput
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
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
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
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ScheduledServiceListRelationFilter = {
    every?: ScheduledServiceWhereInput
    some?: ScheduledServiceWhereInput
    none?: ScheduledServiceWhereInput
  }

  export type ProfessionalServiceListRelationFilter = {
    every?: ProfessionalServiceWhereInput
    some?: ProfessionalServiceWhereInput
    none?: ProfessionalServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScheduledServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionalServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    category?: SortOrder
    active?: SortOrder
    overlap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    category?: SortOrder
    active?: SortOrder
    overlap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    category?: SortOrder
    active?: SortOrder
    overlap?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
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

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    profileImage?: SortOrder
    technicalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    profileImage?: SortOrder
    technicalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    profileImage?: SortOrder
    technicalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    status?: SortOrder
    observations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    status?: SortOrder
    observations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    price?: SortOrder
    date?: SortOrder
    status?: SortOrder
    observations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ProfessionalScalarRelationFilter = {
    is?: ProfessionalWhereInput
    isNot?: ProfessionalWhereInput
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type ScheduledServiceCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    price?: SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ScheduledServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    price?: SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledServiceMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    price?: SortOrder
    serviceId?: SortOrder
    professionalId?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduledServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProfessionalScheduleProfessionalIdDayOfWeekCompoundUniqueInput = {
    professionalId: string
    dayOfWeek: number
  }

  export type ProfessionalScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalScheduleAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type ProfessionalScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalScheduleSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProfessionalScheduleListRelationFilter = {
    every?: ProfessionalScheduleWhereInput
    some?: ProfessionalScheduleWhereInput
    none?: ProfessionalScheduleWhereInput
  }

  export type ProfessionalLeaveListRelationFilter = {
    every?: ProfessionalLeaveWhereInput
    some?: ProfessionalLeaveWhereInput
    none?: ProfessionalLeaveWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProfessionalScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionalLeaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfessionalCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    category?: SortOrder
    active?: SortOrder
    rating?: SortOrder
    commissionRate?: SortOrder
    commissionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalAvgOrderByAggregateInput = {
    rating?: SortOrder
    commissionRate?: SortOrder
  }

  export type ProfessionalMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    category?: SortOrder
    active?: SortOrder
    rating?: SortOrder
    commissionRate?: SortOrder
    commissionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    whatsapp?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    category?: SortOrder
    active?: SortOrder
    rating?: SortOrder
    commissionRate?: SortOrder
    commissionType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProfessionalSumOrderByAggregateInput = {
    rating?: SortOrder
    commissionRate?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ProfessionalLeaveCountOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalLeaveMaxOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalLeaveMinOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalServiceProfessionalIdServiceIdCompoundUniqueInput = {
    professionalId: string
    serviceId: string
  }

  export type ProfessionalServiceCountOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfessionalServiceMinOrderByAggregateInput = {
    id?: SortOrder
    professionalId?: SortOrder
    serviceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type BusinessHoursCountOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessHoursAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type BusinessHoursMaxOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessHoursMinOrderByAggregateInput = {
    id?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessHoursSumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type BusinessHolidayCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessHolidayMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessHolidayMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ProfessionalNullableScalarRelationFilter = {
    is?: ProfessionalWhereInput | null
    isNot?: ProfessionalWhereInput | null
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ScheduledServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<ScheduledServiceCreateWithoutServiceInput, ScheduledServiceUncheckedCreateWithoutServiceInput> | ScheduledServiceCreateWithoutServiceInput[] | ScheduledServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutServiceInput | ScheduledServiceCreateOrConnectWithoutServiceInput[]
    createMany?: ScheduledServiceCreateManyServiceInputEnvelope
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
  }

  export type ProfessionalServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProfessionalServiceCreateWithoutServiceInput, ProfessionalServiceUncheckedCreateWithoutServiceInput> | ProfessionalServiceCreateWithoutServiceInput[] | ProfessionalServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProfessionalServiceCreateOrConnectWithoutServiceInput | ProfessionalServiceCreateOrConnectWithoutServiceInput[]
    createMany?: ProfessionalServiceCreateManyServiceInputEnvelope
    connect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
  }

  export type ScheduledServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ScheduledServiceCreateWithoutServiceInput, ScheduledServiceUncheckedCreateWithoutServiceInput> | ScheduledServiceCreateWithoutServiceInput[] | ScheduledServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutServiceInput | ScheduledServiceCreateOrConnectWithoutServiceInput[]
    createMany?: ScheduledServiceCreateManyServiceInputEnvelope
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
  }

  export type ProfessionalServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ProfessionalServiceCreateWithoutServiceInput, ProfessionalServiceUncheckedCreateWithoutServiceInput> | ProfessionalServiceCreateWithoutServiceInput[] | ProfessionalServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProfessionalServiceCreateOrConnectWithoutServiceInput | ProfessionalServiceCreateOrConnectWithoutServiceInput[]
    createMany?: ProfessionalServiceCreateManyServiceInputEnvelope
    connect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ScheduledServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ScheduledServiceCreateWithoutServiceInput, ScheduledServiceUncheckedCreateWithoutServiceInput> | ScheduledServiceCreateWithoutServiceInput[] | ScheduledServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutServiceInput | ScheduledServiceCreateOrConnectWithoutServiceInput[]
    upsert?: ScheduledServiceUpsertWithWhereUniqueWithoutServiceInput | ScheduledServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ScheduledServiceCreateManyServiceInputEnvelope
    set?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    disconnect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    delete?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    update?: ScheduledServiceUpdateWithWhereUniqueWithoutServiceInput | ScheduledServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ScheduledServiceUpdateManyWithWhereWithoutServiceInput | ScheduledServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ScheduledServiceScalarWhereInput | ScheduledServiceScalarWhereInput[]
  }

  export type ProfessionalServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProfessionalServiceCreateWithoutServiceInput, ProfessionalServiceUncheckedCreateWithoutServiceInput> | ProfessionalServiceCreateWithoutServiceInput[] | ProfessionalServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProfessionalServiceCreateOrConnectWithoutServiceInput | ProfessionalServiceCreateOrConnectWithoutServiceInput[]
    upsert?: ProfessionalServiceUpsertWithWhereUniqueWithoutServiceInput | ProfessionalServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProfessionalServiceCreateManyServiceInputEnvelope
    set?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    disconnect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    delete?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    connect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    update?: ProfessionalServiceUpdateWithWhereUniqueWithoutServiceInput | ProfessionalServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProfessionalServiceUpdateManyWithWhereWithoutServiceInput | ProfessionalServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProfessionalServiceScalarWhereInput | ProfessionalServiceScalarWhereInput[]
  }

  export type ScheduledServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ScheduledServiceCreateWithoutServiceInput, ScheduledServiceUncheckedCreateWithoutServiceInput> | ScheduledServiceCreateWithoutServiceInput[] | ScheduledServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutServiceInput | ScheduledServiceCreateOrConnectWithoutServiceInput[]
    upsert?: ScheduledServiceUpsertWithWhereUniqueWithoutServiceInput | ScheduledServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ScheduledServiceCreateManyServiceInputEnvelope
    set?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    disconnect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    delete?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    update?: ScheduledServiceUpdateWithWhereUniqueWithoutServiceInput | ScheduledServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ScheduledServiceUpdateManyWithWhereWithoutServiceInput | ScheduledServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ScheduledServiceScalarWhereInput | ScheduledServiceScalarWhereInput[]
  }

  export type ProfessionalServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ProfessionalServiceCreateWithoutServiceInput, ProfessionalServiceUncheckedCreateWithoutServiceInput> | ProfessionalServiceCreateWithoutServiceInput[] | ProfessionalServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ProfessionalServiceCreateOrConnectWithoutServiceInput | ProfessionalServiceCreateOrConnectWithoutServiceInput[]
    upsert?: ProfessionalServiceUpsertWithWhereUniqueWithoutServiceInput | ProfessionalServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ProfessionalServiceCreateManyServiceInputEnvelope
    set?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    disconnect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    delete?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    connect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    update?: ProfessionalServiceUpdateWithWhereUniqueWithoutServiceInput | ProfessionalServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ProfessionalServiceUpdateManyWithWhereWithoutServiceInput | ProfessionalServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ProfessionalServiceScalarWhereInput | ProfessionalServiceScalarWhereInput[]
  }

  export type AppointmentCreateNestedManyWithoutClientInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type AppointmentUpdateManyWithoutClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClientInput | AppointmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClientInput | AppointmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClientInput | AppointmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClientInput | AppointmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClientInput | AppointmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClientInput | AppointmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ClientCreateWithoutAppointmentsInput, ClientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAppointmentsInput
    connect?: ClientWhereUniqueInput
  }

  export type ScheduledServiceCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<ScheduledServiceCreateWithoutAppointmentInput, ScheduledServiceUncheckedCreateWithoutAppointmentInput> | ScheduledServiceCreateWithoutAppointmentInput[] | ScheduledServiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutAppointmentInput | ScheduledServiceCreateOrConnectWithoutAppointmentInput[]
    createMany?: ScheduledServiceCreateManyAppointmentInputEnvelope
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ScheduledServiceUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<ScheduledServiceCreateWithoutAppointmentInput, ScheduledServiceUncheckedCreateWithoutAppointmentInput> | ScheduledServiceCreateWithoutAppointmentInput[] | ScheduledServiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutAppointmentInput | ScheduledServiceCreateOrConnectWithoutAppointmentInput[]
    createMany?: ScheduledServiceCreateManyAppointmentInputEnvelope
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type ClientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ClientCreateWithoutAppointmentsInput, ClientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAppointmentsInput
    upsert?: ClientUpsertWithoutAppointmentsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAppointmentsInput, ClientUpdateWithoutAppointmentsInput>, ClientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ScheduledServiceUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<ScheduledServiceCreateWithoutAppointmentInput, ScheduledServiceUncheckedCreateWithoutAppointmentInput> | ScheduledServiceCreateWithoutAppointmentInput[] | ScheduledServiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutAppointmentInput | ScheduledServiceCreateOrConnectWithoutAppointmentInput[]
    upsert?: ScheduledServiceUpsertWithWhereUniqueWithoutAppointmentInput | ScheduledServiceUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: ScheduledServiceCreateManyAppointmentInputEnvelope
    set?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    disconnect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    delete?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    update?: ScheduledServiceUpdateWithWhereUniqueWithoutAppointmentInput | ScheduledServiceUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: ScheduledServiceUpdateManyWithWhereWithoutAppointmentInput | ScheduledServiceUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: ScheduledServiceScalarWhereInput | ScheduledServiceScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutAppointmentInput | PaymentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutAppointmentInput | PaymentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutAppointmentInput | PaymentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ScheduledServiceUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<ScheduledServiceCreateWithoutAppointmentInput, ScheduledServiceUncheckedCreateWithoutAppointmentInput> | ScheduledServiceCreateWithoutAppointmentInput[] | ScheduledServiceUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutAppointmentInput | ScheduledServiceCreateOrConnectWithoutAppointmentInput[]
    upsert?: ScheduledServiceUpsertWithWhereUniqueWithoutAppointmentInput | ScheduledServiceUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: ScheduledServiceCreateManyAppointmentInputEnvelope
    set?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    disconnect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    delete?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    update?: ScheduledServiceUpdateWithWhereUniqueWithoutAppointmentInput | ScheduledServiceUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: ScheduledServiceUpdateManyWithWhereWithoutAppointmentInput | ScheduledServiceUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: ScheduledServiceScalarWhereInput | ScheduledServiceScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput> | PaymentCreateWithoutAppointmentInput[] | PaymentUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutAppointmentInput | PaymentCreateOrConnectWithoutAppointmentInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutAppointmentInput | PaymentUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: PaymentCreateManyAppointmentInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutAppointmentInput | PaymentUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutAppointmentInput | PaymentUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ProfessionalCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ProfessionalCreateWithoutAppointmentsInput, ProfessionalUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutAppointmentsInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutServicesInput = {
    create?: XOR<AppointmentCreateWithoutServicesInput, AppointmentUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutServicesInput
    connect?: AppointmentWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAppointmentsInput
    upsert?: ServiceUpsertWithoutAppointmentsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAppointmentsInput, ServiceUpdateWithoutAppointmentsInput>, ServiceUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ProfessionalUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<ProfessionalCreateWithoutAppointmentsInput, ProfessionalUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutAppointmentsInput
    upsert?: ProfessionalUpsertWithoutAppointmentsInput
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutAppointmentsInput, ProfessionalUpdateWithoutAppointmentsInput>, ProfessionalUncheckedUpdateWithoutAppointmentsInput>
  }

  export type AppointmentUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<AppointmentCreateWithoutServicesInput, AppointmentUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutServicesInput
    upsert?: AppointmentUpsertWithoutServicesInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutServicesInput, AppointmentUpdateWithoutServicesInput>, AppointmentUncheckedUpdateWithoutServicesInput>
  }

  export type ProfessionalCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<ProfessionalCreateWithoutSchedulesInput, ProfessionalUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutSchedulesInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type ProfessionalUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<ProfessionalCreateWithoutSchedulesInput, ProfessionalUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutSchedulesInput
    upsert?: ProfessionalUpsertWithoutSchedulesInput
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutSchedulesInput, ProfessionalUpdateWithoutSchedulesInput>, ProfessionalUncheckedUpdateWithoutSchedulesInput>
  }

  export type ScheduledServiceCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ScheduledServiceCreateWithoutProfessionalInput, ScheduledServiceUncheckedCreateWithoutProfessionalInput> | ScheduledServiceCreateWithoutProfessionalInput[] | ScheduledServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutProfessionalInput | ScheduledServiceCreateOrConnectWithoutProfessionalInput[]
    createMany?: ScheduledServiceCreateManyProfessionalInputEnvelope
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
  }

  export type ProfessionalScheduleCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ProfessionalScheduleCreateWithoutProfessionalInput, ProfessionalScheduleUncheckedCreateWithoutProfessionalInput> | ProfessionalScheduleCreateWithoutProfessionalInput[] | ProfessionalScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalScheduleCreateOrConnectWithoutProfessionalInput | ProfessionalScheduleCreateOrConnectWithoutProfessionalInput[]
    createMany?: ProfessionalScheduleCreateManyProfessionalInputEnvelope
    connect?: ProfessionalScheduleWhereUniqueInput | ProfessionalScheduleWhereUniqueInput[]
  }

  export type ProfessionalLeaveCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ProfessionalLeaveCreateWithoutProfessionalInput, ProfessionalLeaveUncheckedCreateWithoutProfessionalInput> | ProfessionalLeaveCreateWithoutProfessionalInput[] | ProfessionalLeaveUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalLeaveCreateOrConnectWithoutProfessionalInput | ProfessionalLeaveCreateOrConnectWithoutProfessionalInput[]
    createMany?: ProfessionalLeaveCreateManyProfessionalInputEnvelope
    connect?: ProfessionalLeaveWhereUniqueInput | ProfessionalLeaveWhereUniqueInput[]
  }

  export type ProfessionalServiceCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ProfessionalServiceCreateWithoutProfessionalInput, ProfessionalServiceUncheckedCreateWithoutProfessionalInput> | ProfessionalServiceCreateWithoutProfessionalInput[] | ProfessionalServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalServiceCreateOrConnectWithoutProfessionalInput | ProfessionalServiceCreateOrConnectWithoutProfessionalInput[]
    createMany?: ProfessionalServiceCreateManyProfessionalInputEnvelope
    connect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProfessionalInput = {
    create?: XOR<UserCreateWithoutProfessionalInput, UserUncheckedCreateWithoutProfessionalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduledServiceUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ScheduledServiceCreateWithoutProfessionalInput, ScheduledServiceUncheckedCreateWithoutProfessionalInput> | ScheduledServiceCreateWithoutProfessionalInput[] | ScheduledServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutProfessionalInput | ScheduledServiceCreateOrConnectWithoutProfessionalInput[]
    createMany?: ScheduledServiceCreateManyProfessionalInputEnvelope
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
  }

  export type ProfessionalScheduleUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ProfessionalScheduleCreateWithoutProfessionalInput, ProfessionalScheduleUncheckedCreateWithoutProfessionalInput> | ProfessionalScheduleCreateWithoutProfessionalInput[] | ProfessionalScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalScheduleCreateOrConnectWithoutProfessionalInput | ProfessionalScheduleCreateOrConnectWithoutProfessionalInput[]
    createMany?: ProfessionalScheduleCreateManyProfessionalInputEnvelope
    connect?: ProfessionalScheduleWhereUniqueInput | ProfessionalScheduleWhereUniqueInput[]
  }

  export type ProfessionalLeaveUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ProfessionalLeaveCreateWithoutProfessionalInput, ProfessionalLeaveUncheckedCreateWithoutProfessionalInput> | ProfessionalLeaveCreateWithoutProfessionalInput[] | ProfessionalLeaveUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalLeaveCreateOrConnectWithoutProfessionalInput | ProfessionalLeaveCreateOrConnectWithoutProfessionalInput[]
    createMany?: ProfessionalLeaveCreateManyProfessionalInputEnvelope
    connect?: ProfessionalLeaveWhereUniqueInput | ProfessionalLeaveWhereUniqueInput[]
  }

  export type ProfessionalServiceUncheckedCreateNestedManyWithoutProfessionalInput = {
    create?: XOR<ProfessionalServiceCreateWithoutProfessionalInput, ProfessionalServiceUncheckedCreateWithoutProfessionalInput> | ProfessionalServiceCreateWithoutProfessionalInput[] | ProfessionalServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalServiceCreateOrConnectWithoutProfessionalInput | ProfessionalServiceCreateOrConnectWithoutProfessionalInput[]
    createMany?: ProfessionalServiceCreateManyProfessionalInputEnvelope
    connect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScheduledServiceUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ScheduledServiceCreateWithoutProfessionalInput, ScheduledServiceUncheckedCreateWithoutProfessionalInput> | ScheduledServiceCreateWithoutProfessionalInput[] | ScheduledServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutProfessionalInput | ScheduledServiceCreateOrConnectWithoutProfessionalInput[]
    upsert?: ScheduledServiceUpsertWithWhereUniqueWithoutProfessionalInput | ScheduledServiceUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ScheduledServiceCreateManyProfessionalInputEnvelope
    set?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    disconnect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    delete?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    update?: ScheduledServiceUpdateWithWhereUniqueWithoutProfessionalInput | ScheduledServiceUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ScheduledServiceUpdateManyWithWhereWithoutProfessionalInput | ScheduledServiceUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ScheduledServiceScalarWhereInput | ScheduledServiceScalarWhereInput[]
  }

  export type ProfessionalScheduleUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ProfessionalScheduleCreateWithoutProfessionalInput, ProfessionalScheduleUncheckedCreateWithoutProfessionalInput> | ProfessionalScheduleCreateWithoutProfessionalInput[] | ProfessionalScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalScheduleCreateOrConnectWithoutProfessionalInput | ProfessionalScheduleCreateOrConnectWithoutProfessionalInput[]
    upsert?: ProfessionalScheduleUpsertWithWhereUniqueWithoutProfessionalInput | ProfessionalScheduleUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ProfessionalScheduleCreateManyProfessionalInputEnvelope
    set?: ProfessionalScheduleWhereUniqueInput | ProfessionalScheduleWhereUniqueInput[]
    disconnect?: ProfessionalScheduleWhereUniqueInput | ProfessionalScheduleWhereUniqueInput[]
    delete?: ProfessionalScheduleWhereUniqueInput | ProfessionalScheduleWhereUniqueInput[]
    connect?: ProfessionalScheduleWhereUniqueInput | ProfessionalScheduleWhereUniqueInput[]
    update?: ProfessionalScheduleUpdateWithWhereUniqueWithoutProfessionalInput | ProfessionalScheduleUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ProfessionalScheduleUpdateManyWithWhereWithoutProfessionalInput | ProfessionalScheduleUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ProfessionalScheduleScalarWhereInput | ProfessionalScheduleScalarWhereInput[]
  }

  export type ProfessionalLeaveUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ProfessionalLeaveCreateWithoutProfessionalInput, ProfessionalLeaveUncheckedCreateWithoutProfessionalInput> | ProfessionalLeaveCreateWithoutProfessionalInput[] | ProfessionalLeaveUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalLeaveCreateOrConnectWithoutProfessionalInput | ProfessionalLeaveCreateOrConnectWithoutProfessionalInput[]
    upsert?: ProfessionalLeaveUpsertWithWhereUniqueWithoutProfessionalInput | ProfessionalLeaveUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ProfessionalLeaveCreateManyProfessionalInputEnvelope
    set?: ProfessionalLeaveWhereUniqueInput | ProfessionalLeaveWhereUniqueInput[]
    disconnect?: ProfessionalLeaveWhereUniqueInput | ProfessionalLeaveWhereUniqueInput[]
    delete?: ProfessionalLeaveWhereUniqueInput | ProfessionalLeaveWhereUniqueInput[]
    connect?: ProfessionalLeaveWhereUniqueInput | ProfessionalLeaveWhereUniqueInput[]
    update?: ProfessionalLeaveUpdateWithWhereUniqueWithoutProfessionalInput | ProfessionalLeaveUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ProfessionalLeaveUpdateManyWithWhereWithoutProfessionalInput | ProfessionalLeaveUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ProfessionalLeaveScalarWhereInput | ProfessionalLeaveScalarWhereInput[]
  }

  export type ProfessionalServiceUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ProfessionalServiceCreateWithoutProfessionalInput, ProfessionalServiceUncheckedCreateWithoutProfessionalInput> | ProfessionalServiceCreateWithoutProfessionalInput[] | ProfessionalServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalServiceCreateOrConnectWithoutProfessionalInput | ProfessionalServiceCreateOrConnectWithoutProfessionalInput[]
    upsert?: ProfessionalServiceUpsertWithWhereUniqueWithoutProfessionalInput | ProfessionalServiceUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ProfessionalServiceCreateManyProfessionalInputEnvelope
    set?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    disconnect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    delete?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    connect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    update?: ProfessionalServiceUpdateWithWhereUniqueWithoutProfessionalInput | ProfessionalServiceUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ProfessionalServiceUpdateManyWithWhereWithoutProfessionalInput | ProfessionalServiceUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ProfessionalServiceScalarWhereInput | ProfessionalServiceScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProfessionalNestedInput = {
    create?: XOR<UserCreateWithoutProfessionalInput, UserUncheckedCreateWithoutProfessionalInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfessionalInput
    upsert?: UserUpsertWithoutProfessionalInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfessionalInput, UserUpdateWithoutProfessionalInput>, UserUncheckedUpdateWithoutProfessionalInput>
  }

  export type ScheduledServiceUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ScheduledServiceCreateWithoutProfessionalInput, ScheduledServiceUncheckedCreateWithoutProfessionalInput> | ScheduledServiceCreateWithoutProfessionalInput[] | ScheduledServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ScheduledServiceCreateOrConnectWithoutProfessionalInput | ScheduledServiceCreateOrConnectWithoutProfessionalInput[]
    upsert?: ScheduledServiceUpsertWithWhereUniqueWithoutProfessionalInput | ScheduledServiceUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ScheduledServiceCreateManyProfessionalInputEnvelope
    set?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    disconnect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    delete?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    connect?: ScheduledServiceWhereUniqueInput | ScheduledServiceWhereUniqueInput[]
    update?: ScheduledServiceUpdateWithWhereUniqueWithoutProfessionalInput | ScheduledServiceUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ScheduledServiceUpdateManyWithWhereWithoutProfessionalInput | ScheduledServiceUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ScheduledServiceScalarWhereInput | ScheduledServiceScalarWhereInput[]
  }

  export type ProfessionalScheduleUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ProfessionalScheduleCreateWithoutProfessionalInput, ProfessionalScheduleUncheckedCreateWithoutProfessionalInput> | ProfessionalScheduleCreateWithoutProfessionalInput[] | ProfessionalScheduleUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalScheduleCreateOrConnectWithoutProfessionalInput | ProfessionalScheduleCreateOrConnectWithoutProfessionalInput[]
    upsert?: ProfessionalScheduleUpsertWithWhereUniqueWithoutProfessionalInput | ProfessionalScheduleUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ProfessionalScheduleCreateManyProfessionalInputEnvelope
    set?: ProfessionalScheduleWhereUniqueInput | ProfessionalScheduleWhereUniqueInput[]
    disconnect?: ProfessionalScheduleWhereUniqueInput | ProfessionalScheduleWhereUniqueInput[]
    delete?: ProfessionalScheduleWhereUniqueInput | ProfessionalScheduleWhereUniqueInput[]
    connect?: ProfessionalScheduleWhereUniqueInput | ProfessionalScheduleWhereUniqueInput[]
    update?: ProfessionalScheduleUpdateWithWhereUniqueWithoutProfessionalInput | ProfessionalScheduleUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ProfessionalScheduleUpdateManyWithWhereWithoutProfessionalInput | ProfessionalScheduleUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ProfessionalScheduleScalarWhereInput | ProfessionalScheduleScalarWhereInput[]
  }

  export type ProfessionalLeaveUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ProfessionalLeaveCreateWithoutProfessionalInput, ProfessionalLeaveUncheckedCreateWithoutProfessionalInput> | ProfessionalLeaveCreateWithoutProfessionalInput[] | ProfessionalLeaveUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalLeaveCreateOrConnectWithoutProfessionalInput | ProfessionalLeaveCreateOrConnectWithoutProfessionalInput[]
    upsert?: ProfessionalLeaveUpsertWithWhereUniqueWithoutProfessionalInput | ProfessionalLeaveUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ProfessionalLeaveCreateManyProfessionalInputEnvelope
    set?: ProfessionalLeaveWhereUniqueInput | ProfessionalLeaveWhereUniqueInput[]
    disconnect?: ProfessionalLeaveWhereUniqueInput | ProfessionalLeaveWhereUniqueInput[]
    delete?: ProfessionalLeaveWhereUniqueInput | ProfessionalLeaveWhereUniqueInput[]
    connect?: ProfessionalLeaveWhereUniqueInput | ProfessionalLeaveWhereUniqueInput[]
    update?: ProfessionalLeaveUpdateWithWhereUniqueWithoutProfessionalInput | ProfessionalLeaveUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ProfessionalLeaveUpdateManyWithWhereWithoutProfessionalInput | ProfessionalLeaveUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ProfessionalLeaveScalarWhereInput | ProfessionalLeaveScalarWhereInput[]
  }

  export type ProfessionalServiceUncheckedUpdateManyWithoutProfessionalNestedInput = {
    create?: XOR<ProfessionalServiceCreateWithoutProfessionalInput, ProfessionalServiceUncheckedCreateWithoutProfessionalInput> | ProfessionalServiceCreateWithoutProfessionalInput[] | ProfessionalServiceUncheckedCreateWithoutProfessionalInput[]
    connectOrCreate?: ProfessionalServiceCreateOrConnectWithoutProfessionalInput | ProfessionalServiceCreateOrConnectWithoutProfessionalInput[]
    upsert?: ProfessionalServiceUpsertWithWhereUniqueWithoutProfessionalInput | ProfessionalServiceUpsertWithWhereUniqueWithoutProfessionalInput[]
    createMany?: ProfessionalServiceCreateManyProfessionalInputEnvelope
    set?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    disconnect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    delete?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    connect?: ProfessionalServiceWhereUniqueInput | ProfessionalServiceWhereUniqueInput[]
    update?: ProfessionalServiceUpdateWithWhereUniqueWithoutProfessionalInput | ProfessionalServiceUpdateWithWhereUniqueWithoutProfessionalInput[]
    updateMany?: ProfessionalServiceUpdateManyWithWhereWithoutProfessionalInput | ProfessionalServiceUpdateManyWithWhereWithoutProfessionalInput[]
    deleteMany?: ProfessionalServiceScalarWhereInput | ProfessionalServiceScalarWhereInput[]
  }

  export type ProfessionalCreateNestedOneWithoutLeavesInput = {
    create?: XOR<ProfessionalCreateWithoutLeavesInput, ProfessionalUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutLeavesInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type ProfessionalUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<ProfessionalCreateWithoutLeavesInput, ProfessionalUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutLeavesInput
    upsert?: ProfessionalUpsertWithoutLeavesInput
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutLeavesInput, ProfessionalUpdateWithoutLeavesInput>, ProfessionalUncheckedUpdateWithoutLeavesInput>
  }

  export type ProfessionalCreateNestedOneWithoutServicesInput = {
    create?: XOR<ProfessionalCreateWithoutServicesInput, ProfessionalUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutServicesInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutProfessionalsInput = {
    create?: XOR<ServiceCreateWithoutProfessionalsInput, ServiceUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutProfessionalsInput
    connect?: ServiceWhereUniqueInput
  }

  export type ProfessionalUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ProfessionalCreateWithoutServicesInput, ProfessionalUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutServicesInput
    upsert?: ProfessionalUpsertWithoutServicesInput
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutServicesInput, ProfessionalUpdateWithoutServicesInput>, ProfessionalUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutProfessionalsNestedInput = {
    create?: XOR<ServiceCreateWithoutProfessionalsInput, ServiceUncheckedCreateWithoutProfessionalsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutProfessionalsInput
    upsert?: ServiceUpsertWithoutProfessionalsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutProfessionalsInput, ServiceUpdateWithoutProfessionalsInput>, ServiceUncheckedUpdateWithoutProfessionalsInput>
  }

  export type AppointmentCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type AppointmentUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentsInput
    upsert?: AppointmentUpsertWithoutPaymentsInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutPaymentsInput, AppointmentUpdateWithoutPaymentsInput>, AppointmentUncheckedUpdateWithoutPaymentsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProfessionalCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProfessionalUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput
    connect?: ProfessionalWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
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
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProfessionalUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput
    upsert?: ProfessionalUpsertWithoutUserInput
    disconnect?: ProfessionalWhereInput | boolean
    delete?: ProfessionalWhereInput | boolean
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutUserInput, ProfessionalUpdateWithoutUserInput>, ProfessionalUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
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
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProfessionalUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfessionalCreateOrConnectWithoutUserInput
    upsert?: ProfessionalUpsertWithoutUserInput
    disconnect?: ProfessionalWhereInput | boolean
    delete?: ProfessionalWhereInput | boolean
    connect?: ProfessionalWhereUniqueInput
    update?: XOR<XOR<ProfessionalUpdateToOneWithWhereWithoutUserInput, ProfessionalUpdateWithoutUserInput>, ProfessionalUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
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

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ScheduledServiceCreateWithoutServiceInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: ProfessionalCreateNestedOneWithoutAppointmentsInput
    appointment: AppointmentCreateNestedOneWithoutServicesInput
  }

  export type ScheduledServiceUncheckedCreateWithoutServiceInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    professionalId: string
    appointmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledServiceCreateOrConnectWithoutServiceInput = {
    where: ScheduledServiceWhereUniqueInput
    create: XOR<ScheduledServiceCreateWithoutServiceInput, ScheduledServiceUncheckedCreateWithoutServiceInput>
  }

  export type ScheduledServiceCreateManyServiceInputEnvelope = {
    data: ScheduledServiceCreateManyServiceInput | ScheduledServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalServiceCreateWithoutServiceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    professional: ProfessionalCreateNestedOneWithoutServicesInput
  }

  export type ProfessionalServiceUncheckedCreateWithoutServiceInput = {
    id?: string
    professionalId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalServiceCreateOrConnectWithoutServiceInput = {
    where: ProfessionalServiceWhereUniqueInput
    create: XOR<ProfessionalServiceCreateWithoutServiceInput, ProfessionalServiceUncheckedCreateWithoutServiceInput>
  }

  export type ProfessionalServiceCreateManyServiceInputEnvelope = {
    data: ProfessionalServiceCreateManyServiceInput | ProfessionalServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ScheduledServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: ScheduledServiceWhereUniqueInput
    update: XOR<ScheduledServiceUpdateWithoutServiceInput, ScheduledServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<ScheduledServiceCreateWithoutServiceInput, ScheduledServiceUncheckedCreateWithoutServiceInput>
  }

  export type ScheduledServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: ScheduledServiceWhereUniqueInput
    data: XOR<ScheduledServiceUpdateWithoutServiceInput, ScheduledServiceUncheckedUpdateWithoutServiceInput>
  }

  export type ScheduledServiceUpdateManyWithWhereWithoutServiceInput = {
    where: ScheduledServiceScalarWhereInput
    data: XOR<ScheduledServiceUpdateManyMutationInput, ScheduledServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type ScheduledServiceScalarWhereInput = {
    AND?: ScheduledServiceScalarWhereInput | ScheduledServiceScalarWhereInput[]
    OR?: ScheduledServiceScalarWhereInput[]
    NOT?: ScheduledServiceScalarWhereInput | ScheduledServiceScalarWhereInput[]
    id?: StringFilter<"ScheduledService"> | string
    startTime?: DateTimeFilter<"ScheduledService"> | Date | string
    endTime?: DateTimeFilter<"ScheduledService"> | Date | string
    price?: IntFilter<"ScheduledService"> | number
    serviceId?: StringFilter<"ScheduledService"> | string
    professionalId?: StringFilter<"ScheduledService"> | string
    appointmentId?: StringFilter<"ScheduledService"> | string
    createdAt?: DateTimeFilter<"ScheduledService"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduledService"> | Date | string
  }

  export type ProfessionalServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: ProfessionalServiceWhereUniqueInput
    update: XOR<ProfessionalServiceUpdateWithoutServiceInput, ProfessionalServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<ProfessionalServiceCreateWithoutServiceInput, ProfessionalServiceUncheckedCreateWithoutServiceInput>
  }

  export type ProfessionalServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: ProfessionalServiceWhereUniqueInput
    data: XOR<ProfessionalServiceUpdateWithoutServiceInput, ProfessionalServiceUncheckedUpdateWithoutServiceInput>
  }

  export type ProfessionalServiceUpdateManyWithWhereWithoutServiceInput = {
    where: ProfessionalServiceScalarWhereInput
    data: XOR<ProfessionalServiceUpdateManyMutationInput, ProfessionalServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type ProfessionalServiceScalarWhereInput = {
    AND?: ProfessionalServiceScalarWhereInput | ProfessionalServiceScalarWhereInput[]
    OR?: ProfessionalServiceScalarWhereInput[]
    NOT?: ProfessionalServiceScalarWhereInput | ProfessionalServiceScalarWhereInput[]
    id?: StringFilter<"ProfessionalService"> | string
    professionalId?: StringFilter<"ProfessionalService"> | string
    serviceId?: StringFilter<"ProfessionalService"> | string
    createdAt?: DateTimeFilter<"ProfessionalService"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalService"> | Date | string
  }

  export type AppointmentCreateWithoutClientInput = {
    id?: string
    price: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    observations?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ScheduledServiceCreateNestedManyWithoutAppointmentInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutClientInput = {
    id?: string
    price: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    observations?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ScheduledServiceUncheckedCreateNestedManyWithoutAppointmentInput
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput>
  }

  export type AppointmentCreateManyClientInputEnvelope = {
    data: AppointmentCreateManyClientInput | AppointmentCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutClientInput, AppointmentUncheckedUpdateWithoutClientInput>
    create: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutClientInput, AppointmentUncheckedUpdateWithoutClientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutClientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutClientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    clientId?: StringFilter<"Appointment"> | string
    price?: IntFilter<"Appointment"> | number
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    observations?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type ClientCreateWithoutAppointmentsInput = {
    id?: string
    fullName: string
    whatsapp?: string | null
    profileImage?: string | null
    technicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    fullName: string
    whatsapp?: string | null
    profileImage?: string | null
    technicalNotes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutAppointmentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAppointmentsInput, ClientUncheckedCreateWithoutAppointmentsInput>
  }

  export type ScheduledServiceCreateWithoutAppointmentInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    professional: ProfessionalCreateNestedOneWithoutAppointmentsInput
  }

  export type ScheduledServiceUncheckedCreateWithoutAppointmentInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    serviceId: string
    professionalId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledServiceCreateOrConnectWithoutAppointmentInput = {
    where: ScheduledServiceWhereUniqueInput
    create: XOR<ScheduledServiceCreateWithoutAppointmentInput, ScheduledServiceUncheckedCreateWithoutAppointmentInput>
  }

  export type ScheduledServiceCreateManyAppointmentInputEnvelope = {
    data: ScheduledServiceCreateManyAppointmentInput | ScheduledServiceCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutAppointmentInput = {
    id?: string
    amount: number
    method?: $Enums.PaymentMethod
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutAppointmentInput = {
    id?: string
    amount: number
    method?: $Enums.PaymentMethod
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
  }

  export type PaymentCreateManyAppointmentInputEnvelope = {
    data: PaymentCreateManyAppointmentInput | PaymentCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutAppointmentsInput = {
    update: XOR<ClientUpdateWithoutAppointmentsInput, ClientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ClientCreateWithoutAppointmentsInput, ClientUncheckedCreateWithoutAppointmentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAppointmentsInput, ClientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ClientUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    technicalNotes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledServiceUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: ScheduledServiceWhereUniqueInput
    update: XOR<ScheduledServiceUpdateWithoutAppointmentInput, ScheduledServiceUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ScheduledServiceCreateWithoutAppointmentInput, ScheduledServiceUncheckedCreateWithoutAppointmentInput>
  }

  export type ScheduledServiceUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: ScheduledServiceWhereUniqueInput
    data: XOR<ScheduledServiceUpdateWithoutAppointmentInput, ScheduledServiceUncheckedUpdateWithoutAppointmentInput>
  }

  export type ScheduledServiceUpdateManyWithWhereWithoutAppointmentInput = {
    where: ScheduledServiceScalarWhereInput
    data: XOR<ScheduledServiceUpdateManyMutationInput, ScheduledServiceUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutAppointmentInput, PaymentUncheckedUpdateWithoutAppointmentInput>
    create: XOR<PaymentCreateWithoutAppointmentInput, PaymentUncheckedCreateWithoutAppointmentInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutAppointmentInput, PaymentUncheckedUpdateWithoutAppointmentInput>
  }

  export type PaymentUpdateManyWithWhereWithoutAppointmentInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    appointmentId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type ServiceCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    duration: number
    category: $Enums.Category
    active?: boolean
    overlap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professionals?: ProfessionalServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    duration: number
    category: $Enums.Category
    active?: boolean
    overlap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    professionals?: ProfessionalServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutAppointmentsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
  }

  export type ProfessionalCreateWithoutAppointmentsInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: ProfessionalScheduleCreateNestedManyWithoutProfessionalInput
    leaves?: ProfessionalLeaveCreateNestedManyWithoutProfessionalInput
    services?: ProfessionalServiceCreateNestedManyWithoutProfessionalInput
    user: UserCreateNestedOneWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    schedules?: ProfessionalScheduleUncheckedCreateNestedManyWithoutProfessionalInput
    leaves?: ProfessionalLeaveUncheckedCreateNestedManyWithoutProfessionalInput
    services?: ProfessionalServiceUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutAppointmentsInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutAppointmentsInput, ProfessionalUncheckedCreateWithoutAppointmentsInput>
  }

  export type AppointmentCreateWithoutServicesInput = {
    id?: string
    price: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    observations?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAppointmentsInput
    payments?: PaymentCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutServicesInput = {
    id?: string
    clientId: string
    price: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    observations?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutServicesInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutServicesInput, AppointmentUncheckedCreateWithoutServicesInput>
  }

  export type ServiceUpsertWithoutAppointmentsInput = {
    update: XOR<ServiceUpdateWithoutAppointmentsInput, ServiceUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ServiceCreateWithoutAppointmentsInput, ServiceUncheckedCreateWithoutAppointmentsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAppointmentsInput, ServiceUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ServiceUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    overlap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionals?: ProfessionalServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    overlap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professionals?: ProfessionalServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ProfessionalUpsertWithoutAppointmentsInput = {
    update: XOR<ProfessionalUpdateWithoutAppointmentsInput, ProfessionalUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ProfessionalCreateWithoutAppointmentsInput, ProfessionalUncheckedCreateWithoutAppointmentsInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutAppointmentsInput, ProfessionalUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ProfessionalUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: ProfessionalScheduleUpdateManyWithoutProfessionalNestedInput
    leaves?: ProfessionalLeaveUpdateManyWithoutProfessionalNestedInput
    services?: ProfessionalServiceUpdateManyWithoutProfessionalNestedInput
    user?: UserUpdateOneRequiredWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    schedules?: ProfessionalScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
    leaves?: ProfessionalLeaveUncheckedUpdateManyWithoutProfessionalNestedInput
    services?: ProfessionalServiceUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type AppointmentUpsertWithoutServicesInput = {
    update: XOR<AppointmentUpdateWithoutServicesInput, AppointmentUncheckedUpdateWithoutServicesInput>
    create: XOR<AppointmentCreateWithoutServicesInput, AppointmentUncheckedCreateWithoutServicesInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutServicesInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutServicesInput, AppointmentUncheckedUpdateWithoutServicesInput>
  }

  export type AppointmentUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAppointmentsNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type ProfessionalCreateWithoutSchedulesInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: ScheduledServiceCreateNestedManyWithoutProfessionalInput
    leaves?: ProfessionalLeaveCreateNestedManyWithoutProfessionalInput
    services?: ProfessionalServiceCreateNestedManyWithoutProfessionalInput
    user: UserCreateNestedOneWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutSchedulesInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    appointments?: ScheduledServiceUncheckedCreateNestedManyWithoutProfessionalInput
    leaves?: ProfessionalLeaveUncheckedCreateNestedManyWithoutProfessionalInput
    services?: ProfessionalServiceUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutSchedulesInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutSchedulesInput, ProfessionalUncheckedCreateWithoutSchedulesInput>
  }

  export type ProfessionalUpsertWithoutSchedulesInput = {
    update: XOR<ProfessionalUpdateWithoutSchedulesInput, ProfessionalUncheckedUpdateWithoutSchedulesInput>
    create: XOR<ProfessionalCreateWithoutSchedulesInput, ProfessionalUncheckedCreateWithoutSchedulesInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutSchedulesInput, ProfessionalUncheckedUpdateWithoutSchedulesInput>
  }

  export type ProfessionalUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: ScheduledServiceUpdateManyWithoutProfessionalNestedInput
    leaves?: ProfessionalLeaveUpdateManyWithoutProfessionalNestedInput
    services?: ProfessionalServiceUpdateManyWithoutProfessionalNestedInput
    user?: UserUpdateOneRequiredWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    appointments?: ScheduledServiceUncheckedUpdateManyWithoutProfessionalNestedInput
    leaves?: ProfessionalLeaveUncheckedUpdateManyWithoutProfessionalNestedInput
    services?: ProfessionalServiceUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type ScheduledServiceCreateWithoutProfessionalInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutAppointmentsInput
    appointment: AppointmentCreateNestedOneWithoutServicesInput
  }

  export type ScheduledServiceUncheckedCreateWithoutProfessionalInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    serviceId: string
    appointmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledServiceCreateOrConnectWithoutProfessionalInput = {
    where: ScheduledServiceWhereUniqueInput
    create: XOR<ScheduledServiceCreateWithoutProfessionalInput, ScheduledServiceUncheckedCreateWithoutProfessionalInput>
  }

  export type ScheduledServiceCreateManyProfessionalInputEnvelope = {
    data: ScheduledServiceCreateManyProfessionalInput | ScheduledServiceCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalScheduleCreateWithoutProfessionalInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalScheduleUncheckedCreateWithoutProfessionalInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalScheduleCreateOrConnectWithoutProfessionalInput = {
    where: ProfessionalScheduleWhereUniqueInput
    create: XOR<ProfessionalScheduleCreateWithoutProfessionalInput, ProfessionalScheduleUncheckedCreateWithoutProfessionalInput>
  }

  export type ProfessionalScheduleCreateManyProfessionalInputEnvelope = {
    data: ProfessionalScheduleCreateManyProfessionalInput | ProfessionalScheduleCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalLeaveCreateWithoutProfessionalInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    startTime?: string | null
    endTime?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalLeaveUncheckedCreateWithoutProfessionalInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    startTime?: string | null
    endTime?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalLeaveCreateOrConnectWithoutProfessionalInput = {
    where: ProfessionalLeaveWhereUniqueInput
    create: XOR<ProfessionalLeaveCreateWithoutProfessionalInput, ProfessionalLeaveUncheckedCreateWithoutProfessionalInput>
  }

  export type ProfessionalLeaveCreateManyProfessionalInputEnvelope = {
    data: ProfessionalLeaveCreateManyProfessionalInput | ProfessionalLeaveCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalServiceCreateWithoutProfessionalInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service: ServiceCreateNestedOneWithoutProfessionalsInput
  }

  export type ProfessionalServiceUncheckedCreateWithoutProfessionalInput = {
    id?: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalServiceCreateOrConnectWithoutProfessionalInput = {
    where: ProfessionalServiceWhereUniqueInput
    create: XOR<ProfessionalServiceCreateWithoutProfessionalInput, ProfessionalServiceUncheckedCreateWithoutProfessionalInput>
  }

  export type ProfessionalServiceCreateManyProfessionalInputEnvelope = {
    data: ProfessionalServiceCreateManyProfessionalInput | ProfessionalServiceCreateManyProfessionalInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProfessionalInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfessionalInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfessionalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfessionalInput, UserUncheckedCreateWithoutProfessionalInput>
  }

  export type ScheduledServiceUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: ScheduledServiceWhereUniqueInput
    update: XOR<ScheduledServiceUpdateWithoutProfessionalInput, ScheduledServiceUncheckedUpdateWithoutProfessionalInput>
    create: XOR<ScheduledServiceCreateWithoutProfessionalInput, ScheduledServiceUncheckedCreateWithoutProfessionalInput>
  }

  export type ScheduledServiceUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: ScheduledServiceWhereUniqueInput
    data: XOR<ScheduledServiceUpdateWithoutProfessionalInput, ScheduledServiceUncheckedUpdateWithoutProfessionalInput>
  }

  export type ScheduledServiceUpdateManyWithWhereWithoutProfessionalInput = {
    where: ScheduledServiceScalarWhereInput
    data: XOR<ScheduledServiceUpdateManyMutationInput, ScheduledServiceUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type ProfessionalScheduleUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: ProfessionalScheduleWhereUniqueInput
    update: XOR<ProfessionalScheduleUpdateWithoutProfessionalInput, ProfessionalScheduleUncheckedUpdateWithoutProfessionalInput>
    create: XOR<ProfessionalScheduleCreateWithoutProfessionalInput, ProfessionalScheduleUncheckedCreateWithoutProfessionalInput>
  }

  export type ProfessionalScheduleUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: ProfessionalScheduleWhereUniqueInput
    data: XOR<ProfessionalScheduleUpdateWithoutProfessionalInput, ProfessionalScheduleUncheckedUpdateWithoutProfessionalInput>
  }

  export type ProfessionalScheduleUpdateManyWithWhereWithoutProfessionalInput = {
    where: ProfessionalScheduleScalarWhereInput
    data: XOR<ProfessionalScheduleUpdateManyMutationInput, ProfessionalScheduleUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type ProfessionalScheduleScalarWhereInput = {
    AND?: ProfessionalScheduleScalarWhereInput | ProfessionalScheduleScalarWhereInput[]
    OR?: ProfessionalScheduleScalarWhereInput[]
    NOT?: ProfessionalScheduleScalarWhereInput | ProfessionalScheduleScalarWhereInput[]
    id?: StringFilter<"ProfessionalSchedule"> | string
    professionalId?: StringFilter<"ProfessionalSchedule"> | string
    dayOfWeek?: IntFilter<"ProfessionalSchedule"> | number
    startTime?: StringFilter<"ProfessionalSchedule"> | string
    endTime?: StringFilter<"ProfessionalSchedule"> | string
    isAvailable?: BoolFilter<"ProfessionalSchedule"> | boolean
    createdAt?: DateTimeFilter<"ProfessionalSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalSchedule"> | Date | string
  }

  export type ProfessionalLeaveUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: ProfessionalLeaveWhereUniqueInput
    update: XOR<ProfessionalLeaveUpdateWithoutProfessionalInput, ProfessionalLeaveUncheckedUpdateWithoutProfessionalInput>
    create: XOR<ProfessionalLeaveCreateWithoutProfessionalInput, ProfessionalLeaveUncheckedCreateWithoutProfessionalInput>
  }

  export type ProfessionalLeaveUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: ProfessionalLeaveWhereUniqueInput
    data: XOR<ProfessionalLeaveUpdateWithoutProfessionalInput, ProfessionalLeaveUncheckedUpdateWithoutProfessionalInput>
  }

  export type ProfessionalLeaveUpdateManyWithWhereWithoutProfessionalInput = {
    where: ProfessionalLeaveScalarWhereInput
    data: XOR<ProfessionalLeaveUpdateManyMutationInput, ProfessionalLeaveUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type ProfessionalLeaveScalarWhereInput = {
    AND?: ProfessionalLeaveScalarWhereInput | ProfessionalLeaveScalarWhereInput[]
    OR?: ProfessionalLeaveScalarWhereInput[]
    NOT?: ProfessionalLeaveScalarWhereInput | ProfessionalLeaveScalarWhereInput[]
    id?: StringFilter<"ProfessionalLeave"> | string
    professionalId?: StringFilter<"ProfessionalLeave"> | string
    startDate?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    endDate?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    startTime?: StringNullableFilter<"ProfessionalLeave"> | string | null
    endTime?: StringNullableFilter<"ProfessionalLeave"> | string | null
    reason?: StringNullableFilter<"ProfessionalLeave"> | string | null
    createdAt?: DateTimeFilter<"ProfessionalLeave"> | Date | string
    updatedAt?: DateTimeFilter<"ProfessionalLeave"> | Date | string
  }

  export type ProfessionalServiceUpsertWithWhereUniqueWithoutProfessionalInput = {
    where: ProfessionalServiceWhereUniqueInput
    update: XOR<ProfessionalServiceUpdateWithoutProfessionalInput, ProfessionalServiceUncheckedUpdateWithoutProfessionalInput>
    create: XOR<ProfessionalServiceCreateWithoutProfessionalInput, ProfessionalServiceUncheckedCreateWithoutProfessionalInput>
  }

  export type ProfessionalServiceUpdateWithWhereUniqueWithoutProfessionalInput = {
    where: ProfessionalServiceWhereUniqueInput
    data: XOR<ProfessionalServiceUpdateWithoutProfessionalInput, ProfessionalServiceUncheckedUpdateWithoutProfessionalInput>
  }

  export type ProfessionalServiceUpdateManyWithWhereWithoutProfessionalInput = {
    where: ProfessionalServiceScalarWhereInput
    data: XOR<ProfessionalServiceUpdateManyMutationInput, ProfessionalServiceUncheckedUpdateManyWithoutProfessionalInput>
  }

  export type UserUpsertWithoutProfessionalInput = {
    update: XOR<UserUpdateWithoutProfessionalInput, UserUncheckedUpdateWithoutProfessionalInput>
    create: XOR<UserCreateWithoutProfessionalInput, UserUncheckedCreateWithoutProfessionalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfessionalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfessionalInput, UserUncheckedUpdateWithoutProfessionalInput>
  }

  export type UserUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfessionalCreateWithoutLeavesInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: ScheduledServiceCreateNestedManyWithoutProfessionalInput
    schedules?: ProfessionalScheduleCreateNestedManyWithoutProfessionalInput
    services?: ProfessionalServiceCreateNestedManyWithoutProfessionalInput
    user: UserCreateNestedOneWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutLeavesInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    appointments?: ScheduledServiceUncheckedCreateNestedManyWithoutProfessionalInput
    schedules?: ProfessionalScheduleUncheckedCreateNestedManyWithoutProfessionalInput
    services?: ProfessionalServiceUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutLeavesInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutLeavesInput, ProfessionalUncheckedCreateWithoutLeavesInput>
  }

  export type ProfessionalUpsertWithoutLeavesInput = {
    update: XOR<ProfessionalUpdateWithoutLeavesInput, ProfessionalUncheckedUpdateWithoutLeavesInput>
    create: XOR<ProfessionalCreateWithoutLeavesInput, ProfessionalUncheckedCreateWithoutLeavesInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutLeavesInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutLeavesInput, ProfessionalUncheckedUpdateWithoutLeavesInput>
  }

  export type ProfessionalUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: ScheduledServiceUpdateManyWithoutProfessionalNestedInput
    schedules?: ProfessionalScheduleUpdateManyWithoutProfessionalNestedInput
    services?: ProfessionalServiceUpdateManyWithoutProfessionalNestedInput
    user?: UserUpdateOneRequiredWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    appointments?: ScheduledServiceUncheckedUpdateManyWithoutProfessionalNestedInput
    schedules?: ProfessionalScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
    services?: ProfessionalServiceUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalCreateWithoutServicesInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: ScheduledServiceCreateNestedManyWithoutProfessionalInput
    schedules?: ProfessionalScheduleCreateNestedManyWithoutProfessionalInput
    leaves?: ProfessionalLeaveCreateNestedManyWithoutProfessionalInput
    user: UserCreateNestedOneWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutServicesInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    appointments?: ScheduledServiceUncheckedCreateNestedManyWithoutProfessionalInput
    schedules?: ProfessionalScheduleUncheckedCreateNestedManyWithoutProfessionalInput
    leaves?: ProfessionalLeaveUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutServicesInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutServicesInput, ProfessionalUncheckedCreateWithoutServicesInput>
  }

  export type ServiceCreateWithoutProfessionalsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    duration: number
    category: $Enums.Category
    active?: boolean
    overlap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: ScheduledServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutProfessionalsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    duration: number
    category: $Enums.Category
    active?: boolean
    overlap?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: ScheduledServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutProfessionalsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProfessionalsInput, ServiceUncheckedCreateWithoutProfessionalsInput>
  }

  export type ProfessionalUpsertWithoutServicesInput = {
    update: XOR<ProfessionalUpdateWithoutServicesInput, ProfessionalUncheckedUpdateWithoutServicesInput>
    create: XOR<ProfessionalCreateWithoutServicesInput, ProfessionalUncheckedCreateWithoutServicesInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutServicesInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutServicesInput, ProfessionalUncheckedUpdateWithoutServicesInput>
  }

  export type ProfessionalUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: ScheduledServiceUpdateManyWithoutProfessionalNestedInput
    schedules?: ProfessionalScheduleUpdateManyWithoutProfessionalNestedInput
    leaves?: ProfessionalLeaveUpdateManyWithoutProfessionalNestedInput
    user?: UserUpdateOneRequiredWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    appointments?: ScheduledServiceUncheckedUpdateManyWithoutProfessionalNestedInput
    schedules?: ProfessionalScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
    leaves?: ProfessionalLeaveUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type ServiceUpsertWithoutProfessionalsInput = {
    update: XOR<ServiceUpdateWithoutProfessionalsInput, ServiceUncheckedUpdateWithoutProfessionalsInput>
    create: XOR<ServiceCreateWithoutProfessionalsInput, ServiceUncheckedCreateWithoutProfessionalsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutProfessionalsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutProfessionalsInput, ServiceUncheckedUpdateWithoutProfessionalsInput>
  }

  export type ServiceUpdateWithoutProfessionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    overlap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: ScheduledServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutProfessionalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    duration?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    overlap?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: ScheduledServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type AppointmentCreateWithoutPaymentsInput = {
    id?: string
    price: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    observations?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAppointmentsInput
    services?: ScheduledServiceCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPaymentsInput = {
    id?: string
    clientId: string
    price: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    observations?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ScheduledServiceUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPaymentsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
  }

  export type AppointmentUpsertWithoutPaymentsInput = {
    update: XOR<AppointmentUpdateWithoutPaymentsInput, AppointmentUncheckedUpdateWithoutPaymentsInput>
    create: XOR<AppointmentCreateWithoutPaymentsInput, AppointmentUncheckedCreateWithoutPaymentsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutPaymentsInput, AppointmentUncheckedUpdateWithoutPaymentsInput>
  }

  export type AppointmentUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAppointmentsNestedInput
    services?: ScheduledServiceUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ScheduledServiceUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
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

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfessionalCreateWithoutUserInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: ScheduledServiceCreateNestedManyWithoutProfessionalInput
    schedules?: ProfessionalScheduleCreateNestedManyWithoutProfessionalInput
    leaves?: ProfessionalLeaveCreateNestedManyWithoutProfessionalInput
    services?: ProfessionalServiceCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalUncheckedCreateWithoutUserInput = {
    id?: string
    fullName: string
    whatsapp: string
    bio?: string | null
    profileImage?: string | null
    category: $Enums.Category
    active?: boolean
    rating?: number | null
    commissionRate: number
    commissionType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: ScheduledServiceUncheckedCreateNestedManyWithoutProfessionalInput
    schedules?: ProfessionalScheduleUncheckedCreateNestedManyWithoutProfessionalInput
    leaves?: ProfessionalLeaveUncheckedCreateNestedManyWithoutProfessionalInput
    services?: ProfessionalServiceUncheckedCreateNestedManyWithoutProfessionalInput
  }

  export type ProfessionalCreateOrConnectWithoutUserInput = {
    where: ProfessionalWhereUniqueInput
    create: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
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

  export type ProfessionalUpsertWithoutUserInput = {
    update: XOR<ProfessionalUpdateWithoutUserInput, ProfessionalUncheckedUpdateWithoutUserInput>
    create: XOR<ProfessionalCreateWithoutUserInput, ProfessionalUncheckedCreateWithoutUserInput>
    where?: ProfessionalWhereInput
  }

  export type ProfessionalUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfessionalWhereInput
    data: XOR<ProfessionalUpdateWithoutUserInput, ProfessionalUncheckedUpdateWithoutUserInput>
  }

  export type ProfessionalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: ScheduledServiceUpdateManyWithoutProfessionalNestedInput
    schedules?: ProfessionalScheduleUpdateManyWithoutProfessionalNestedInput
    leaves?: ProfessionalLeaveUpdateManyWithoutProfessionalNestedInput
    services?: ProfessionalServiceUpdateManyWithoutProfessionalNestedInput
  }

  export type ProfessionalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    active?: BoolFieldUpdateOperationsInput | boolean
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    commissionRate?: IntFieldUpdateOperationsInput | number
    commissionType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: ScheduledServiceUncheckedUpdateManyWithoutProfessionalNestedInput
    schedules?: ProfessionalScheduleUncheckedUpdateManyWithoutProfessionalNestedInput
    leaves?: ProfessionalLeaveUncheckedUpdateManyWithoutProfessionalNestedInput
    services?: ProfessionalServiceUncheckedUpdateManyWithoutProfessionalNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    professional?: ProfessionalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    professional?: ProfessionalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    professional?: ProfessionalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    professional?: ProfessionalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    professional?: ProfessionalCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    fullName: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    professional?: ProfessionalUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    professional?: ProfessionalUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    professional?: ProfessionalUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ScheduledServiceCreateManyServiceInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    professionalId: string
    appointmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalServiceCreateManyServiceInput = {
    id?: string
    professionalId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledServiceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: ProfessionalUpdateOneRequiredWithoutAppointmentsNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ScheduledServiceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    professionalId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    professionalId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalServiceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    professional?: ProfessionalUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ProfessionalServiceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalServiceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyClientInput = {
    id?: string
    price: number
    date: Date | string
    status?: $Enums.AppointmentStatus
    observations?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ScheduledServiceUpdateManyWithoutAppointmentNestedInput
    payments?: PaymentUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ScheduledServiceUncheckedUpdateManyWithoutAppointmentNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledServiceCreateManyAppointmentInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    serviceId: string
    professionalId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyAppointmentInput = {
    id?: string
    amount: number
    method?: $Enums.PaymentMethod
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledServiceUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    professional?: ProfessionalUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type ScheduledServiceUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    serviceId?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledServiceUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    serviceId?: StringFieldUpdateOperationsInput | string
    professionalId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledServiceCreateManyProfessionalInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    price: number
    serviceId: string
    appointmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalScheduleCreateManyProfessionalInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalLeaveCreateManyProfessionalInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    startTime?: string | null
    endTime?: string | null
    reason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfessionalServiceCreateManyProfessionalInput = {
    id?: string
    serviceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduledServiceUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutAppointmentsNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ScheduledServiceUncheckedUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduledServiceUncheckedUpdateManyWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    serviceId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalScheduleUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalScheduleUncheckedUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalScheduleUncheckedUpdateManyWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalLeaveUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalLeaveUncheckedUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalLeaveUncheckedUpdateManyWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalServiceUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutProfessionalsNestedInput
  }

  export type ProfessionalServiceUncheckedUpdateWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfessionalServiceUncheckedUpdateManyWithoutProfessionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
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