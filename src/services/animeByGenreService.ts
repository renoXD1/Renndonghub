import sanka from "@utils/sanka";

interface NewApiGenreList {
    data: any[];
}

interface anime {
  animeList: animeCard2[];
}

export default async function animeByGenreService(
  routeParams: {
    genreId: string;
  },
  queryParam: {
    page?: string | number | null;
  }
) {
  const { genreId } = routeParams;
  const { page } = queryParam;
  const isSeason = /^(\d{4}|(spring|summer|fall|winter)(-|\s)?\d{4}?)/i.test(genreId);
  
  let endpoint = "";
  if (isSeason) {
      endpoint = `/seasons/${genreId}`;
  } else {
      endpoint = `/genres/${genreId}/${page || 1}`;
  }

  const result = await sanka<NewApiGenreList>(endpoint);

  const AnimeList: animeCard2[] = (result.data.data || []).map((item) => ({
      title: item.title,
      poster: item.poster,
      status: item.status,
      type: item.type || "anime",
      score: item.rating ? String(item.rating) : "N/A",
      animeId: item.slug,
      href: `/anime/${item.slug}`,
      genreList: []
  }));

  return { ...result, data: { AnimeList } };
}