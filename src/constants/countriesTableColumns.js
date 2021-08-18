export const tableColumns = [
  {
    title: "Country",
    dataIndex: "Country",
    key: "ID",
    sorter: (a, b) => a.Country.localeCompare(b.Country),
    width: 300,
  },
  {
    title: "Confirmed",
    children: [
      {
        title: "New",
        dataIndex: "NewConfirmed",
        key: "ID",
        sorter: (a, b) => a.NewConfirmed - b.NewConfirmed,
        width: 150,
      },
      {
        title: "Total",
        dataIndex: "TotalConfirmed",
        key: "ID",
        sorter: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
        width: 150,
      },
    ],
  },
  {
    title: "Deaths",
    children: [
      {
        title: "New",
        dataIndex: "NewDeaths",
        key: "ID",
        sorter: (a, b) => a.NewDeaths - b.NewDeaths,
        width: 150,
      },
      {
        title: "Total",
        dataIndex: "TotalDeaths",
        key: "ID",
        sorter: (a, b) => a.TotalDeaths - b.TotalDeaths,
        width: 150,
      },
    ],
  },
  {
    title: "Recovered",
    children: [
      {
        title: "New",
        dataIndex: "NewRecovered",
        key: "ID",
        sorter: (a, b) => a.NewRecovered - b.NewRecovered,
        width: 150,
      },
      {
        title: "Total",
        dataIndex: "TotalRecovered",
        key: "ID",
        sorter: (a, b) => a.TotalRecovered - b.TotalRecovered,
        width: 150,
      },
    ],
  },
];
