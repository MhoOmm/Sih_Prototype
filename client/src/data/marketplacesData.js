import kaveri from "../assets/MarketPlaces/Kanveri.avif"
import Tribal from "../assets/MarketPlaces/Tribal Treasures.avif"
import rest2 from "../assets/MarketPlaces/rest2.avif"
import souv1 from "../assets/MarketPlaces/souvenier1.jpg"
import dokra from "../assets/MarketPlaces/dokra.jpg"
import last from "../assets/MarketPlaces/last.avif"


export const sellersData = {
  handicrafts: [
    {
      id: "hc01",
      name: "Jharkhandi Crafts",
      description: "Authentic Dokra art, tribal paintings, and handcrafted wooden artifacts.",
      imageUrl: dokra,
      location: "Main Road, Ranchi",
    },
    {
      id: "hc02",
      name: "Tribal Treasures",
      description: "A collection of unique bamboo crafts, pottery, and handwoven textiles.",
      imageUrl:  Tribal,
      location: "Near Albert Ekka Chowk, Ranchi",
    },
  ],
  souvenirs: [
    {
      id: "sv01",
      name: "Ranchi Remembrances",
      description: "Find the perfect souvenir, from miniature landmarks to local art prints.",
      imageUrl: last,
      location: "GEL Church Complex, Ranchi",
    },
    {
        id: "sv02",
        name: "Gifts of Jharkhand",
        description: "Small gifts, keychains, and memorabilia that capture the spirit of the region.",
        imageUrl: souv1,
        location: "Nucleus Mall, Ranchi",
      },
  ],
  "food-and-beverage": [
    {
      id: "fb01",
      name: "Kavery Restaurant",
      description: "Serving authentic Jharkhandi thalis, including Dhuska, Rugra, and Chilka Roti.",
      imageUrl: kaveri,
      location: "Lalpur, Ranchi",
    },
    {
      id: "fb02",
      name: "Rajkamal Restaurant",
      description: "A popular spot for delicious local snacks and a variety of Indian cuisine.",
      imageUrl: rest2,
      location: "Bariyatu, Ranchi",
    },
  ],
  "tour-guides": [
    {
      id: "tg01",
      name: "Ramesh Mahto - Certified Guide",
      description: "Specializing in historical tours and treks to all major waterfalls.",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
      location: "Available on call: +91 9894829848",
    },
    {
      id: "tg02",
      name: "Priya Singh - Cultural Expert",
      description: "Expert in temple tours, local culture, and tribal village experiences.",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
      location: "Book online at jharkhandguides.com",
    },
  ],
};
