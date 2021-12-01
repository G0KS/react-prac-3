import create from "zustand";

const useStore = create((set) => ({
  brands: [
    {
      id: "1",
      name: "Puma",
      img: "https://i.pinimg.com/originals/8b/c8/be/8bc8be698d73566fac6dd992fd9864b4.jpg",
    },
    {
      id: "2",
      name: "Nike",
      img: "https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png",
    },
    {
      id: "3",
      name: "Adidas",
      img: "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
    },
    {
      id: "4",
      name: "Gucci",
      img: "https://www.designyourway.net/blog/wp-content/uploads/2019/11/s1-10.png",
    },
    {
      id: "5",
      name: "Converse",
      img: "https://wallpaperaccess.com/full/1176586.jpg",
    },
  ],
  removeBrand: (id) =>
    set((state) => ({
      brands: state.brands.filter((brand) => brand.id !== id),
    })),
}));

export const useBrandStore = useStore;
