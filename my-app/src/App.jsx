import Button from "./components/common/button";
function App() {
  return (
    <>
      <Button variant="primary" buttonType="outline">Primary</Button>
      <Button variant="error">Error</Button>
      <Button variant="warning" disabled>Warning</Button>
      <Button variant="success">Success</Button>
    </>
  );
}
export default App;
