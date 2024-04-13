/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query Weapons($equipmentCategory: StringFilter) {\n  equipments(equipment_category: $equipmentCategory) {\n    ... on Weapon {\n      index\n      name\n      cost {\n        quantity\n        unit\n      }\n      desc\n      equipment_category {\n        index\n        name\n      }\n      weight\n      damage {\n        damage_dice\n        damage_type {\n          index\n          name\n          desc\n        }\n      }\n      range {\n        normal\n        long\n      }\n      throw_range {\n        normal\n        long\n      }\n      weapon_category {\n        index\n        name\n      }\n      weapon_range\n      category_range {\n        index\n        name\n      }\n      two_handed_damage {\n        damage_dice\n      }\n      properties {\n        index\n        name\n        desc\n      }\n      special\n    }\n  }\n}": types.WeaponsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Weapons($equipmentCategory: StringFilter) {\n  equipments(equipment_category: $equipmentCategory) {\n    ... on Weapon {\n      index\n      name\n      cost {\n        quantity\n        unit\n      }\n      desc\n      equipment_category {\n        index\n        name\n      }\n      weight\n      damage {\n        damage_dice\n        damage_type {\n          index\n          name\n          desc\n        }\n      }\n      range {\n        normal\n        long\n      }\n      throw_range {\n        normal\n        long\n      }\n      weapon_category {\n        index\n        name\n      }\n      weapon_range\n      category_range {\n        index\n        name\n      }\n      two_handed_damage {\n        damage_dice\n      }\n      properties {\n        index\n        name\n        desc\n      }\n      special\n    }\n  }\n}"): (typeof documents)["query Weapons($equipmentCategory: StringFilter) {\n  equipments(equipment_category: $equipmentCategory) {\n    ... on Weapon {\n      index\n      name\n      cost {\n        quantity\n        unit\n      }\n      desc\n      equipment_category {\n        index\n        name\n      }\n      weight\n      damage {\n        damage_dice\n        damage_type {\n          index\n          name\n          desc\n        }\n      }\n      range {\n        normal\n        long\n      }\n      throw_range {\n        normal\n        long\n      }\n      weapon_category {\n        index\n        name\n      }\n      weapon_range\n      category_range {\n        index\n        name\n      }\n      two_handed_damage {\n        damage_dice\n      }\n      properties {\n        index\n        name\n        desc\n      }\n      special\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;