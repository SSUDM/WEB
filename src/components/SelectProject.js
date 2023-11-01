import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 558px;
  min-height: 252px;
  background-color: white;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
`;

const Title = styled.span`
  width: 450px;
  font-size: 15px;
  font-weight: 700;
`;

const Delete = styled.div`
  margin-left: 520px;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const SelectProject = ({ setIsOpen }) => {
  const onDelete = () => {
    setIsOpen(false);
  };
  return (
    <Container>
      <Delete onClick={onDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#bcbcbc"
          width="20px"
          height="20px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Delete>
      <Title>프로젝트를 선택해주세요.</Title>
    </Container>
  );
};
export default SelectProject;
