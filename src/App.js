import Buton from "./components/buton/Buton";
import Card from "./components/card/Card";
import data from "./util/data";

function App() {
  return (
    <>
      {data.map((item) => {
        const { id, language, img, btnName } = item;
        console.log(btnName);

        return (
          <Card key={id} language={language} images={img} buton={btnName} />
        );
      })}

      <Buton />
    </>
  );
}

export default App;
