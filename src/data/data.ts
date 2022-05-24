export type Lawnmower = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  quantity: number;
};

const lawnmowers: Lawnmower[] = [
  {
    id: 1,
    name: 'Stiga 01',
    price: 75.50,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/s/c/screen_shot_2016-02-18_at_15.16.56/neoshop.lv-Stiga-293320068-S14-36.png',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Stiga 02',
    price: 130.20,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/s/c/screen_shot_2018-02-15_at_15.41.24/neoshop.lv-Stiga-SLS-8008984799851-38.png',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Stiga 03',
    price: 172.05,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/s/c/screen_shot_2016-02-18_at_14.53.14/neoshop.lv-Stiga-SLS-8008984637085-36.png',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Stiga 04',
    price: 247.00,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/s/c/screen_shot_2016-02-18_at_16.01.08/neoshop.lv-Stiga-291500668-S16-39.png',
    quantity: 1,
  },
  {
    id: 5,
    name: 'Stiga 05',
    price: 259.45,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/c/o/combi_48_e/neoshop.lv-Stiga-SLS-8008984622838-36.jpg',
    quantity: 1,
  },
  {
    id: 6,
    name: 'Stiga 06',
    price: 364.00,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/f/i/file_2178_2/neoshop.lv-Stiga-291502048-S16-319.jpg',
    quantity: 1,
  },
  {
    id: 7,
    name: 'Stiga 07',
    price: 417.00,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/s/c/screen_shot_2016-02-18_at_16.18.14/neoshop.lv-Stiga-294385068-S15-38.png',
    quantity: 1,
  },
  {
    id: 8,
    name: 'Stiga 08',
    price: 427.80,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/s/c/screen_shot_2015-03-13_at_11.34.56/neoshop.lv-Stiga-SLS-8008984813410-321.png',
    quantity: 1,
  },
  {
    id: 9,
    name: 'Stiga 09',
    price: 544.00,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/s/c/screen_shot_2015-06-19_at_14.22.34/neoshop.lv-Stiga-291502128-S14-36.png',
    quantity: 1,
  },
  {
    id: 10,
    name: 'Stiga 10',
    price: 585.90,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/s/c/screen_shot_2017-03-27_at_10.36.19/neoshop.lv-Stiga-SLS-8008984812673-35.png',
    quantity: 1,
  },
  {
    id: 11,
    name: 'Stiga 11',
    price: 859.00,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/2/1/210870022-09_12/neoshop.lv-Stiga-210870022-09-312.jpg',
    quantity: 1,
  },
  {
    id: 12,
    name: 'Stiga 12',
    price: 1638.00,
    imgSrc: 'https://www.neoshop.lv/media/catalog/product/cache/3/image/500x500/9df78eab33525d08d6e5fb8d27136e95/m/u/multi-cut-900tg/neoshop.lv-Texas-DMT-90068051-318.jpg',
    quantity: 1,
  },
];

export const getLawnmowers = () => [...lawnmowers];
export const getLawnmowerById = (id: number) => (
  lawnmowers.find((item) => (
    item.id === id
  ))
);

export default lawnmowers;
