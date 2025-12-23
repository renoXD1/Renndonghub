import Renn from "@utils/Renn";

export interface Allanimes {
  list: {
    startWith: string;
    animeList: animeLinkCard[];
  }[];
}

export default async function homeService() {
  const result = await Renn<Allanimes>("/anime");

  return result;
}
