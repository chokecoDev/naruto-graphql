import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Clan = {
  __typename?: 'Clan';
  /** ID del clan */
  id: Scalars['ID']['output'];
  /** Clan del ninja */
  name: Scalars['String']['output'];
};

/** Una colección de ninjas */
export type Ninja = {
  __typename?: 'Ninja';
  /** ID del ninja */
  id: Scalars['ID']['output'];
  /** Jutsu del ninja */
  jutsu?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Nombre del ninja */
  name: Scalars['String']['output'];
  /** Datos personales del ninja */
  personal?: Maybe<PersonalData>;
};

/** Datos personales del ninja */
export type PersonalData = {
  __typename?: 'PersonalData';
  /** Clan del ninja */
  clan: Clan;
  /** Sexo del ninja */
  sex: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Retorna un ninja específico */
  ninja?: Maybe<Ninja>;
  /** Retorna los ninjas */
  ninjas: Array<Ninja>;
};


export type QueryNinjaArgs = {
  id: Scalars['ID']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Clan: ResolverTypeWrapper<Clan>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Ninja: ResolverTypeWrapper<Ninja>;
  PersonalData: ResolverTypeWrapper<PersonalData>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Clan: Clan;
  ID: Scalars['ID']['output'];
  Ninja: Ninja;
  PersonalData: PersonalData;
  Query: {};
  String: Scalars['String']['output'];
};

export type ClanResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Clan'] = ResolversParentTypes['Clan']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NinjaResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Ninja'] = ResolversParentTypes['Ninja']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jutsu?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  personal?: Resolver<Maybe<ResolversTypes['PersonalData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonalDataResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PersonalData'] = ResolversParentTypes['PersonalData']> = {
  clan?: Resolver<ResolversTypes['Clan'], ParentType, ContextType>;
  sex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  ninja?: Resolver<Maybe<ResolversTypes['Ninja']>, ParentType, ContextType, RequireFields<QueryNinjaArgs, 'id'>>;
  ninjas?: Resolver<Array<ResolversTypes['Ninja']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Clan?: ClanResolvers<ContextType>;
  Ninja?: NinjaResolvers<ContextType>;
  PersonalData?: PersonalDataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

