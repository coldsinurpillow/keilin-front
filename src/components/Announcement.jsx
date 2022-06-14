import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`

const Announcement = () =>{
    return(
        <Container>
            <marquee direction="right" scrollamount="10">Супер Сделка! Бесплатная доставка при заказе свыше 500.000 KZT</marquee>
        </Container>
    )
}
export default Announcement