import { cardItems } from "@/components/home/cards/item";
import Metadata from "./metadata";

export async function generateMetadata({ params }: any) {
  let item = cardItems[params.id - 1];
  return {
    title: item.title,
    description: item.description,
  };
}

export default function cardContent({ params }: any) {
  let item = cardItems[params.id - 1];
  return (
    <>
      <Metadata item={item} />
    </>
  );
}
