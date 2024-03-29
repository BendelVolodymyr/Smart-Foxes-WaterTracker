const HomeWaterPage = () => {
  const RightBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 592px;
    height: 680px;
    padding: 32px 24px;
  `;

  return (
    <>
      <div></div>
      <RightBoxWrapper>
        <TodayWaterList></TodayWaterList>
        <MonthStateTable></MonthStateTable>
      </RightBoxWrapper>
    </>
  );
};

export default HomeWaterPage;
