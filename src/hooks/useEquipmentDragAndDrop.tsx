import { EquipmentType } from "@/typings";
import { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import { useState } from "react";

export function useEquipmentDragAndDrop(dndEquipments: EquipmentType[], setDndEquipments: React.Dispatch<React.SetStateAction<EquipmentType[]>>) {
  const [equipmentSlots, setEquipmentSlots] = useState<Record<string, EquipmentType | null>>({
    head: null,
    ringOne: null,
    chest: null,
    ringTwo: null,
    feet: null,
    amulet: null,
    hands: null,
    leftArm: null,
    rightArm: null,
    back: null,
  });

  const [equipmentBeingDragged, setEquipmentBeingDragged] = useState<EquipmentType | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const equipmentBeingDragged = dndEquipments.find((equipment) => equipment.index === event.active.id);
    if (equipmentBeingDragged) {
      setEquipmentBeingDragged(equipmentBeingDragged);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const equipmentBeingDragged = event.active.data.current as EquipmentType;
    const equipmentEntries = Object.entries(equipmentSlots);
    const [oldSlot, oldEquipment] = equipmentEntries.find(([, equipment]) => equipment?.index === equipmentBeingDragged.index) ?? [];

    if (event.over) {
      const newSlot = event.over.id;
      if (oldSlot && oldEquipment) {
        setEquipmentSlots((prev) => ({ ...prev, [oldSlot]: null, [newSlot]: oldEquipment }));
      } else if (!oldSlot) {
        setEquipmentSlots((prev) => ({ ...prev, [newSlot]: equipmentBeingDragged }));
        setDndEquipments((prev) => prev.filter((equipment) => equipment.index !== equipmentBeingDragged.index));
      }
    } else {
      if (oldSlot && oldEquipment) {
        setEquipmentSlots((prev) => ({ ...prev, [oldSlot]: null }));
      }
      const alreadyInEquipment = dndEquipments.some((equipment) => equipment.index === equipmentBeingDragged.index);
      if (!alreadyInEquipment) setDndEquipments((prev) => [...prev, equipmentBeingDragged]);
    }

    setEquipmentBeingDragged(null);
  };

  return {
    equipmentSlots,
    setEquipmentSlots,
    equipmentBeingDragged,
    handleDragStart,
    handleDragEnd,
  };
}
