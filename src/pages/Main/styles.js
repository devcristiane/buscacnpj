import styled from 'styled-components';

export const Title = styled.form`
  margin-top: 50px;
  font-size: 30px;
  color: #3a8970;
  font-weight: normal;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    padding-left: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    max-width: 300px;
  }
`;
export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  background: #3a8970;
  border: 0;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BgGradient = styled.form`
  margin-top: 60px;
  height: 70vh;
  padding: 60px 0;
  background: #3a8970;
`;

export const Container = styled.form`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
