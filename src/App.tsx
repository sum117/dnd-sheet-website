import { CharacterDroppable } from "@/components/CharacterDroppable";
import { DndDraggableItemGrid } from "@/components/DndDraggableItemGrid";
import { DndSheet } from "@/components/DndSheet";
import { EquipmentCard } from "@/components/EquipmentCard";
import { Header } from "@/components/Header";
import { LoadingPlaceholder } from "@/components/LoadingPlaceholder";
import { useDnDEquipments } from "@/hooks/useDNDEquipments";
import { useEquipmentDragAndDrop } from "@/hooks/useEquipmentDragAndDrop";
import { useSyncElementHeight } from "@/hooks/useSyncElementHeight";
import { DndContext as DragAndDropContext, DragOverlay } from "@dnd-kit/core";
import { Fragment } from "react";

function App() {
  const {
    equipments: dndEquipments,
    error: dndEquipmentError,
    loading: loadingDndItems,
    setEquipments: setDndEquipments,
  } = useDnDEquipments({
    sortBy: "weapon",
    removeToolsAndMounts: true,
    removeEmptyDescriptionAdventuringGear: true,
  });

  const { equipmentSlots, handleDragStart, handleDragEnd, equipmentBeingDragged } = useEquipmentDragAndDrop(dndEquipments, setDndEquipments);

  const { sourceRef: characterEditorRef, targetRef: itemGridRef } = useSyncElementHeight(dndEquipments);

  return (
    <Fragment>
      <Header />
      <main className="grid grid-cols-3 place-items-start gap-4 px-4">
        <DndSheet />
        <DragAndDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <DragOverlay>{equipmentBeingDragged && <EquipmentCard equipment={equipmentBeingDragged} />}</DragOverlay>
          <CharacterDroppable
            ref={characterEditorRef}
            imageUrl="https://i.pinimg.com/originals/79/c3/de/79c3dec7541874812a123e3d7a9fcc24.jpg"
            equipmentSlots={equipmentSlots}
          />
          {loadingDndItems ? (
            <LoadingPlaceholder />
          ) : (
            <DndDraggableItemGrid ref={itemGridRef} dndEquipments={dndEquipments} dndEquipmentError={dndEquipmentError} loadingDndItems={loadingDndItems} />
          )}
        </DragAndDropContext>
      </main>
    </Fragment>
  );
}

export default App;
