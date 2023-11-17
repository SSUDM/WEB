import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import Select from 'react-select';

const SelectBox = ({content, title}) => {
    const [ selectValue, setSelectValue ] = useState(null);
    const handleChange = (selectedOption) => {
        setSelectValue(selectedOption);
      };
    useEffect(()=>{
        console.log(selectValue);
    },[selectValue])
  return (
    <div>
        <SelectListWrapper>
            <Select 
                options={content}
                onChange={handleChange}
                placeholder={title}
                isMulti
                hideSelectedOptions={false}
                isSearchable={false} 
                closeMenuOnSelect={false} />
        </SelectListWrapper>

    </div>
  )
}

const SelectListWrapper = styled.div`
    width: 880px;
    margin-bottom: 30px;
`;

export default SelectBox;