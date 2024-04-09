import { useEffect, useMemo, useState } from "react";
import { EquipmentType, Reference } from "../typings";

export const API_BASE_URL = "https://www.dnd5eapi.co";
export const EQUIPMENT_API_URL = `${API_BASE_URL}/api/equipment`;

type UseDnDEquipmentsOptions = {
  sortBy?: "weapon" | "armor" | "adventuring-gear";
  removeToolsAndMounts: boolean;
};

export function useDnDEquipments(
  { sortBy, removeToolsAndMounts }: UseDnDEquipmentsOptions = {
    sortBy: "weapon",
    removeToolsAndMounts: false,
  }
) {
  const noToolsAndMounts = useMemo(
    () =>
      (equipment: EquipmentType): boolean =>
        ["weapon", "armor", "adventuring-gear"].includes(
          equipment.equipment_category.index
        ),
    []
  );

  const sortEquipments = useMemo(
    () =>
      (a: EquipmentType, b: EquipmentType): number => {
        const categoryOrder: Record<string, number> = {
          weapon: sortBy === "weapon" ? 0 : 1,
          armor: sortBy === "armor" ? 0 : 1,
          "adventuring-gear": sortBy === "adventuring-gear" ? 0 : 1,
        };
        const categoryA = categoryOrder[a.equipment_category.index];
        const categoryB = categoryOrder[b.equipment_category.index];

        if (categoryA !== categoryB) return categoryA - categoryB;
        return a.name.localeCompare(b.name);
      },
    [sortBy]
  );

  const [equipments, setEquipments] = useState<Array<EquipmentType>>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getEquipment() {
      setLoading(true);
      try {
        const response = await fetch(EQUIPMENT_API_URL, { signal });
        const data = await response.json();
        const equipmentPromises = data.results.map(
          async (equipmentReference: Reference) => {
            try {
              const equipmentResponse = await fetch(
                `${API_BASE_URL}${equipmentReference.url}`,
                { signal }
              );
              return await equipmentResponse.json();
            } catch (error) {
              return { error };
            }
          }
        );
        const results = await Promise.all(equipmentPromises);
        const successfulEquipments = results.filter(
          (equipment) => !equipment.error
        ) as EquipmentType[];

        if (removeToolsAndMounts) {
          setEquipments(
            successfulEquipments.filter(noToolsAndMounts).sort(sortEquipments)
          );
        } else {
          setEquipments(successfulEquipments.sort(sortEquipments));
        }
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") return;
          setError(error.message);
        } else {
          setError("An error occurred while fetching data.");
        }
        setLoading(false);
      }
    }

    getEquipment();

    return () => {
      controller.abort();
    };
  }, [noToolsAndMounts, sortEquipments, sortBy, removeToolsAndMounts]);

  return { equipments, error, loading };
}
