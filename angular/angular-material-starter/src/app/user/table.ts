export class Table {
  totalElements = 0;
  page: {
    offset: 0,
    limit: number
  };
  sort: {
    prop: string,
    dir: string
  };
  filter: Filter;
};

export class Filter {
  login: string;
  role: string;
  enabled: string;
}
