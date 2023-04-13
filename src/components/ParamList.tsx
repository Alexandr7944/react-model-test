import { useState } from 'react';
import { ParamValue, Props } from '../interface';
import ParamItem from './ParamItem';
import data from '../data.json';

const ParamList: React.FC = () => {

  const [paramValues, setParamValues] = useState<ParamValue[]>(data.model.paramValues);

  const modelList: Props = data;
  modelList.model.paramValues = paramValues;

  const changeParamValues = (id: number, value: string): void => {
    setParamValues(
      paramValues.map(item => {
        return item.paramId === id ? {...item, value: value} : item
      })
    );
  }

  return (
    <div className='list'>
      <h2>Список параметров</h2>
      {
        data.params.map(item => <ParamItem
          key={item.id}
          param={item}
          paramValues={data.model.paramValues}
          setModelList={changeParamValues}
        />)
      }
    </div>
  )
}

export default ParamList;
