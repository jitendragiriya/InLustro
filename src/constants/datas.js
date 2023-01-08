//export card datas
export const cardDatas = [
  {
    name: "today's sale",
    value: 12426,
    percent: 36,
    isIncreament: true,
  },
  {
    name: "total sales",
    value: 248485,
    percent: 14,
    isIncreament: false,
  },
  {
    name: "total orders",
    value: 84382,
    percent: 36,
    isIncreament: true,
  },
  {
    name: "total customers",
    value: 33493,
    percent: 36,
    isIncreament: true,
  },
];

//sales chart data
export const salesData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [
        12, 19, 3, 5, 2, 3, 2, 4, 5, 6, 7, 5, 4, 3, 12, 19, 3, 5, 2, 3, 2, 4, 5,
        6, 7, 5, 4, 6, 7, 5, 4,
      ],
      backgroundColor: ["#45bf76"],
      borderWidth: 0,
    },
  ],
};

// traffic sources
export const trafficSourcesData = [
  {
    name: "direct",
    value: 143382,
    percent: 90,
  },
  {
    name: "referral",
    value: 87974,
    value: 87974,
    percent: 50,
  },
  {
    name: "social media",
    value: 45211,
    value: 45211,
    percent: 40,
  },
  {
    name: "twitter",
    value: 21893,
    value: 21893,
    percent: 20,
  },
];

// transactions
export const transactionsData = [
  {
    status: "complete",
    method: "card",
    cardNumber: "99994831",
    cardType: "visa",
    date: "jan 17, 2022",
    money: 182.94,
    to: "amazon",
    _id: 123,
  },
  {
    status: "complete",
    method: "card",
    cardNumber: "45676442",
    cardType: "master",
    date: "jan 17, 2022",
    money: 99,
    to: "facebook",
    _id: 124,
  },
  {
    status: "pending",
    method: "bank",
    cardNumber: "34534842",
    cardType: "account",
    date: "jan 17, 2022",
    money: 249.94,
    to: "netflix",
    _id: 125,
  },
  {
    status: "cancelled",
    method: "card",
    cardNumber: "34535666",
    cardType: "amex card",
    date: "jan 17, 2022",
    money: 249.94,
    to: "amazon prime",
    _id: 126,
  },
];

// customers
export const customersData = [
  {
    name: "jenny wilson",
    email: "w.lawson@example.com",
    price: "11.234",
    country: "austin",
  },
  {
    name: "devon lane",
    email: "dat.roberts@example.com",
    price: "11.159",
    country: "new york",
  },
  {
    name: "jane cooper",
    email: "jgraham@exmaple.com",
    price: "10.483",
    country: "toledo",
  },
  {
    name: "jenny wilson",
    email: "curtis.d@example.com",
    price: "9.084",
    country: "naperville",
  },
];
