
import Renn from "@utils/Renn";

interface AZList {
  az_list_letters: {
    letter: string;
    slug: string;
    url: string;
  }[];
}

export default async function azListService() {
  const result = await Renn<AZList>("/az-list");
  return result;
}
