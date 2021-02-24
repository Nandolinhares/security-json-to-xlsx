import XlsxPopulate from '../../xlsx/xlsx-populate.min.js'

// Convert Json to Xlsx
export class CalopsitaXlsx {
  public convertJsonToXlsx (data: Array<object>, filename: string, password?: string) {
    XlsxPopulate.fromBlankAsync()
      .then(workbook => {
        const arrayOfLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        
        data.forEach((value, index) => {
          let arrayNamesValue = Object.keys(value);
          if(index < 26) {
            workbook.sheet(0).name('Valores').cell(`${arrayOfLetters[index]}${1}`).value(Object.keys(value)[index]);
          }
          for(let i = 1; i <= Object.keys(value).length; i++) {
            workbook.sheet(0).name('Valores').cell(`${arrayOfLetters[i - 1]}${index + 2}`).value(value[arrayNamesValue[i - 1]]);
          }
        })
        
        return workbook.outputAsync({ password: password ? password : '' });
      })
      .then(function (blob) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, `${filename}.xlsx`);
        } else {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.href = url;
            a.download = `${filename}.xlsx`;
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
    })
    .catch(function (err) {
        alert(err.message || err);
        throw err;
    });
  }
}