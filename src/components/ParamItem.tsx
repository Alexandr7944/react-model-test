import { useState } from "react";
import { Param, ParamValue } from "../interface";

type ParamItemProps = {
  param: Param,
  paramValues: ParamValue[],
  setModelList: (id: number, value: string) => void
}

const ParamItem: React.FC<ParamItemProps> = ({ param, paramValues, setModelList }) => {
  
  const searchParamsValue = (): string => {
    const parameter = paramValues.find(item => item.paramId === param.id);
    return parameter ? parameter.value : '';
  }

  const [input, setInput] = useState(searchParamsValue())

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    setModelList(param.id, input);
  }

  return (
    <label className="item">
      <span>{param.name}</span>
      <input 
        value={input}
        onChange={onChange}
      />
    </label>
  )
}

export default ParamItem