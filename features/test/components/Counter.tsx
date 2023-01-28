import NoSSR from "@/components/NoSSR";
import { counterState } from "@/states/counter";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { useRecoilState } from "recoil";

const Counter: React.FC = () => {
  const [count, setCount] = useRecoilState(counterState);
  return (
    <div className="w-full p-2 border-2 border-dotted border-blue-500 bg-blue-100 rounded flex justify-center flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Counter</h1>
      <NoSSR>
        <p className="text-3xl">{count}</p>
      </NoSSR>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          <PlusCircleIcon className="w-4" />
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}
        >
          <MinusCircleIcon className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
