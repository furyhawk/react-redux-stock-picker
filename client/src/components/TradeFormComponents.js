import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap';

export const LegendLabel = ({legendTxt, labelTxt}) => {
  return (
    <div>
      <legend>{legendTxt}</legend>
      <Label>{labelTxt}</Label>
    </div>
  );
};

export const LegendInput = ({legendTxt, formGroupCheck, children}) => {
  return (
    <div>
      <legend>{legendTxt}</legend>
      <FormGroup check={formGroupCheck}>
        {children}
      </FormGroup>

    </div>
  );
};

export const LegendValidatedInput = (
  {legendTxt, labelText, formGroupCheck, validation, valueIfTrue, errorTextIfFalse, onChange}
) => {
  const InputIfTrue = <Input onChange={onChange} type="radio" name={labelText} />;
  const InputIfFalse = <Input type="radio" name={labelText} disabled />;
  return (
    <FormGroup check={formGroupCheck}>
      <legend>{legendTxt}</legend>
      <Label>
        {validation ? InputIfTrue : InputIfFalse}{'  '}
        {
          validation
          ? <div>{`${labelText}    Max:${valueIfTrue}`}</div>
          : <div className="text-muted">{labelText}</div>
        }
      </Label>{'  '}
      {!validation && <div className="text-danger">{errorTextIfFalse}</div>}
    </FormGroup>
  );
};

