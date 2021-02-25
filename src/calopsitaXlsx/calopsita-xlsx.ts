import XlsxPopulate from '../../xlsx/xlsx-populate.min.js'

// Convert Json to Xlsx versão
export class CalopsitaXlsx {
  public async convertJsonToXlsx (data: Array<object>, filename: string, password?: string): Promise<any> {
    return await new Promise(async (resolve, reject) => {
      const workbook = await XlsxPopulate.fromBlankAsync();

      const arrayOfLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

      data.forEach((value, index) => {
        let arrayNamesValue = Object.keys(value);
        // Fill header
        if(index < 26) {
          workbook.sheet(0).name('Valores').cell(`${arrayOfLetters[index]}${1}`).value(Object.keys(value)[index]);
        }

        for(let i = 1; i <= Object.keys(value).length; i++) {
          workbook.sheet(0).name('Valores').cell(`${arrayOfLetters[i - 1]}${index + 2}`).value(value[arrayNamesValue[i - 1]]);
        }
      })
      
      const blob = await workbook.outputAsync({ password: password ? password : '' });

      try {
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
            resolve (false);
          }
        } catch(err) {
          alert(err.message || err);
          reject (err);
        }
      }
    )
  }

  public async convertJsonToXlsxBase64(data: Array<object>, filename: string, password?: string): Promise<any> {
    return await new Promise(async (resolve, reject) => {
      const workbook = await XlsxPopulate.fromBlankAsync();

      const arrayOfLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

      data.forEach((value, index) => {
        let arrayNamesValue = Object.keys(value);
        // Fill header
        if(index < 26) {
          workbook.sheet(0).name('Valores').cell(`${arrayOfLetters[index]}${1}`).value(Object.keys(value)[index]);
        }

        for(let i = 1; i <= Object.keys(value).length; i++) {
          workbook.sheet(0).name('Valores').cell(`${arrayOfLetters[i - 1]}${index + 2}`).value(value[arrayNamesValue[i - 1]]);
        }
      })

      const base64 = await workbook.outputAsync({ password: password ? password : '', type: 'base64' });

      try {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          reject (new Error("Navigating to data URI is not supported in IE."));
        } else {
            location.href = "data:" + XlsxPopulate.MIME_TYPE + ";base64," + base64;
            resolve(false);
        }
      } catch(error) {
          alert(error.message || error);
          reject(error);
      }
    })
  }
}