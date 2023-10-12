import SearchBarWithAutocomplete from "@/components/SearchBarWithAutocomplete";
import Image from "next/image";

export default function Home() {
  const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "eggplant",
    "equipment",
    "eqree",
    "Fig",
    "Grape",
    "Honeydew",
    "eren",
    "Kiwi",
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBarWithAutocomplete suggestions={suggestions} />
    </main>
  );
}
