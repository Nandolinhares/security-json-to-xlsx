<h1 align="center">Welcome to security-json-to-xlsx 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/security-json-to-xlsx" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/security-json-to-xlsx.svg">
  </a>
  <a href="https://github.com/Nandolinhares/security-json-to-xlsx" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Lib to convert JSON to XLSX and apply password options

### 🏠 [Homepage](https://github.com/Nandolinhares/security-json-to-xlsx)

### ✨ [Demo](https://github.com/Nandolinhares/security-json-to-xlsx)

## Install

```sh
yarn add security-json-to-xlsx
```

## Usage

```sh
import { CalopsitaXlsx } from 'security-json-to-xlsx'
const values = [
  {
    name: 'teste11',
    email: 'teste21',
    password: 'teste31'
  },
  {
    name: 'teste12',
    email: 'teste22',
    password: 'teste32'
  }]
  
const handleClick = async (): Promise<any> => {
    const calopsitaCsv = new CalopsitaXlsx()
   
    await calopsitaCsv.convertJsonToXlsx(values, 'filename', 'password');
  }
```

## Author

👤 **Fernando Linhares**

* Website: https://github.com/Nandolinhares
* Github: [@nandolinhares](https://github.com/nandolinhares)
* LinkedIn: [@fernandovianalinhares](https://linkedin.com/in/fernandovianalinhares)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Nandolinhares/security-json-to-xlsx/issues). 

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_