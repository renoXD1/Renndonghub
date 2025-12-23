import Renn from "@utils/Renn";

interface NewApiSearchItem {
  title: string;
  slug: string;
  poster: string;
  status: string;
  type: string;
}

interface NewApiSearch {
    data: NewApiSearchItem[];
}

interface animes {
  animeList: animeCard2[];
}

export default async function searchService(queryParam: {
  q?: string | null;
  page?: string | number | null;
} = {}) {
  const { q } = queryParam;
  if (!q) {
      return { 
          statusCode: 200, 
          statusMessage: "OK", 
          message: "No query", 
          ok: true, 
          data: { animeList: [] }, 
          pagination: null 
      };
  }

  const result = await Renn<NewApiSearch>(`/search/${q}`);
  
  const animeList: animeCard2[] = (result.data.data || []).map((item) => ({
      title: item.title,
      poster: item.poster,
      status: item.status,
      type: item.type,
      score: "N/A",
      animeId: item.slug,
      href: `/anime/${item.slug}`,
      genreList: []
  }));

  return { ...result, data: { animeList } };
}
