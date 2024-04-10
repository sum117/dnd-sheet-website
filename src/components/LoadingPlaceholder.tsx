import { Spinner } from "@/components/ui/spinner";

export function LoadingPlaceholder() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Spinner size="large" show />
    </div>
  );
}
