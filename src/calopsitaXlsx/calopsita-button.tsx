import React from 'react'
import { CalopsitaXlsx } from './calopsita-xlsx'

const CalopsitaButton: React.FC = () => {
  const filename = 'teste';
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
    },
    {
      name: 'teste13',
      email: 'teste23',
      password: 'teste33'
    },
    {
      name: 'teste14',
      email: 'teste24',
      password: 'teste34',
      testando: 'oi'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste12',
      email: 'teste22',
      password: 'teste32'
    },
    {
      name: 'teste13',
      email: 'teste23',
      password: 'teste33'
    },
    {
      name: 'teste14',
      email: 'teste24',
      password: 'teste34',
      testando: 'oi'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste12',
      email: 'teste22',
      password: 'teste32'
    },
    {
      name: 'teste13',
      email: 'teste23',
      password: 'teste33'
    },
    {
      name: 'teste14',
      email: 'teste24',
      password: 'teste34',
      testando: 'oi'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste12',
      email: 'teste22',
      password: 'teste32'
    },
    {
      name: 'teste13',
      email: 'teste23',
      password: 'teste33'
    },
    {
      name: 'teste14',
      email: 'teste24',
      password: 'teste34',
      testando: 'oi'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste12',
      email: 'teste22',
      password: 'teste32'
    },
    {
      name: 'teste13',
      email: 'teste23',
      password: 'teste33'
    },
    {
      name: 'teste14',
      email: 'teste24',
      password: 'teste34',
      testando: 'oi'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31',
      testando: 'ewfwef',
      oi: 'fewfwe'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31',
      oi: 'fewfwe'
    }
  ]
  const handleClick = (): void => {
    const calopsitaCsv = new CalopsitaXlsx()
    calopsitaCsv.convertJsonToXlsx(values, filename, '123');
  }
  return(
    <button onClick={handleClick}>Converter</button>
  )
}

export default CalopsitaButton