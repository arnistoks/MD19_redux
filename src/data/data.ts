export type Lawnmower = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  count: number;
  quantity: number;
  inCart?: boolean;
};

const lawnmowers: Lawnmower[] = [
  {
    id: 1,
    name: 'Stiga 01',
    price: 75.50,
    imgSrc: '/images/stiga01_75-50.png',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 2,
    name: 'Stiga 02',
    price: 130.20,
    imgSrc: '/images/stiga02_130-20.png',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 3,
    name: 'Stiga 03',
    price: 172.05,
    imgSrc: '/images/stiga03_172-05.png',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 4,
    name: 'Stiga 04',
    price: 247.00,
    imgSrc: '/images/stiga04_247-00.png',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 5,
    name: 'Stiga 05',
    price: 259.45,
    imgSrc: '/images/stiga05_259-45.jpg',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 6,
    name: 'Stiga 06',
    price: 364.00,
    imgSrc: '/images/stiga06_364-00.jpg',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 7,
    name: 'Stiga 07',
    price: 417.00,
    imgSrc: '/images/stiga07_417-00.png',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 8,
    name: 'Stiga 08',
    price: 427.80,
    imgSrc: '/images/stiga08_427-80.png',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 9,
    name: 'Stiga 09',
    price: 544.00,
    imgSrc: '/images/stiga09_544-00.png',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 10,
    name: 'Stiga 10',
    price: 585.90,
    imgSrc: '/images/stiga10_585-90.png',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 11,
    name: 'Stiga 11',
    price: 859.00,
    imgSrc: '/images/stiga11_859-00.jpg',
    count: 1,
    quantity: 0,
    inCart: false,
  },
  {
    id: 12,
    name: 'Stiga 12',
    price: 1638.00,
    imgSrc: '/images/stiga12_1638-00.jpg',
    count: 1,
    quantity: 0,
    inCart: false,
  },
];

export default lawnmowers;
