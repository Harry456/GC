const minus = document.querySelectorAll('[data-minus]');
const items = document.querySelector('.items');
const inputs = document.querySelectorAll('.form-control');
const page = document.querySelector('[name=page]');

minus.forEach((item) => {
  item.addEventListener('click', () => {
    const filter = item.parentNode.nextElementSibling;
    filter.classList.toggle('d-none');
    item.classList.toggle('fa-plus');
  });
});

// Query Creation
// /*
// 1) After Every API Call Reload Page - to get the current query Str.
// 2) On Next API Call add on the previous queryStr.
//     a)TO add on - validate all inputs which are all checked.
//     b) Based on the Checked value form a queryStr.
//     c) Reload is to form queryStr based on the current checked value.
//     d) Add On the QueryStr to URl as query
// 3)
// */
class APICalls {
  constructor() {
    this.url = `http://127.0.0.1:4500/api/v1/products?limit=8`;
    this.queryStr = '';
    this.products = [];
  }

  pagination = (Num) => {
    fetch(`http://127.0.0.1:4500/api/v1/products?limit=8&page=${Num}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  createQueryStr = () => {
    let query = [];
    inputs.forEach((input) => {
      if (input.checked) {
        let operator;
        if (input.name === 'price' && input.id === 'lte') {
          operator = 'lte';
          console.log(`${input.name}[${operator}]=${input.value}&`);
          query.push(`${input.name}[${operator}]=${input.value}&`);
        } else if (input.name === 'price' && input.id !== 'lte') {
          operator = 'gte';
          console.log(`${input.name}[${operator}]=${input.value}&`);
          query.push(`${input.name}[${operator}]=${input.value}&`);
        } else if (input.name === 'ratingsAverage') {
          operator = 'gte';
          console.log(`${input.name}[${operator}]=${input.value}&`);
          query.push(`${input.name}[${operator}]=${input.value}&`);
        } else {
          console.log(`${input.name}=${input.value}&`);
          query.push(`${input.name}=${input.value}&`);
        }
      }
    });
    this.queryStr = query.join('');
  };

  showInitialProducts = () => {
    window.addEventListener('load', async () => {
      try {
        const res = await fetch(`${this.url}`);
        const Data = await res.json();
        console.log(Data);
        const {
          data: { Products },
        } = Data;
      } catch (error) {
        console.log(error);
      }
    });
  };

  getProducts = () => {
    fetch(`${this.url}&${this.queryStr}`)
      .then((res) => res.json())
      .then((Data) => {
        console.log(Data);
        const {
          data: { Products },
        } = Data;
      })
      .catch((err) => console.log(err));
  };
}

const FetchProducts = new APICalls();

inputs.forEach((filterItem) => {
  filterItem.addEventListener('change', (e) => {
    FetchProducts.createQueryStr();
    FetchProducts.getProducts();
  });
});

page.addEventListener('change', (e) => {
  FetchProducts.pagination(e.target.value);
});
