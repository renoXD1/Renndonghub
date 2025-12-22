interface animeConfig {
  Renndonghub: {
    siteName: string;
    description: string;
    logo: string;
    favicon: string;
    image: string;
  };

  sankadonghubApi: {
    apiUrl: string;
    baseUrlPath: string;
  };
}

const animeConfig: animeConfig = {
  Renndonghub: {
    siteName: "Renndonghub",
    description: "Nonton donghua gratis ga pake karcis hanya di Renndonghub,iklan tanggung sendiri🗿",
    logo: "/images/logo.png",
    favicon: "/favicon.png",
    image: "/images/sankadonghub.jpg",
  },

  sankadonghubApi: {
    apiUrl: "https://www.sankavollerei.com",
    baseUrlPath: "/anime/donghua",
  },
};

export default animeConfig;
