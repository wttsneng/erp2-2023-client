import React from "react";
function ProtectedPage({ element }) {
  const [isPageDisplayed, setIsPageDisplayed] = React.useState(false);
  const [PageComponent, setPageComponent] = React.useState(null);
  const loadPage = async () => {
    const loadResult = await import(`./Page_${element}`);
    setPageComponent(() => loadResult.default);
  };
  React.useEffect(() => {
    setIsPageDisplayed(false);
    loadPage();
    setIsPageDisplayed(true);
  }, [element]);
  return <div>{isPageDisplayed && PageComponent && <PageComponent />}</div>;
}

export default ProtectedPage;
