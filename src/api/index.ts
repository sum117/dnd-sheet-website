import { gql } from "@/__generated__/gql";
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://www.dnd5eapi.co/graphql",
  cache: new InMemoryCache(),
});

export const GET_WEAPONS_WITH_METADATA = gql(`query Weapons($equipmentCategory: StringFilter) {
  equipments(equipment_category: $equipmentCategory) {
    ... on Weapon {
      index
      name
      cost {
        quantity
        unit
      }
      desc
      equipment_category {
        index
        name
      }
      weight
      damage {
        damage_dice
        damage_type {
          index
          name
          desc
        }
      }
      range {
        normal
        long
      }
      throw_range {
        normal
        long
      }
      weapon_category {
        index
        name
      }
      weapon_range
      category_range {
        index
        name
      }
      two_handed_damage {
        damage_dice
      }
      properties {
        index
        name
        desc
      }
      special
    }
  }
}`);
