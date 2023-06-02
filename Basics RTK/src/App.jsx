import "./App.css";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "./store/apiSlice";

function App() {
  const { data } = useGetAllProductsQuery();
  console.log(data);

  const { data: singleData } = useGetSingleProductQuery("Samsung");
  console.log(singleData);
  return (
    <>
      <p>hello</p>
    </>
  );
}

export default App;
