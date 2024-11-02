import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-around">
        <div className="bg-blue-400 ">hi I am subh</div>
        <div className="bg-red-400 ">hi i am subh</div>
        <div className="bg-yellow-400 ">hi i am subh</div>
      </div>

      <div className="grid grid-cols-12">
        <div className="bg-blue-400 col-span-4 ">hi I am subh</div>
        <div className="bg-red-400 col-span-6">hi i am subh</div>
        <div className="bg-yellow-400 col-span-2 ">hi i am subh</div>
      </div>

      <div className=" sm:bg-blue-500 bg-red-500">
        {/* mobile first --> anything above small will be blue */}
        <div>hi I am subh</div>
      </div>
    </>
  );
}

export default App;
