import "./ArrayHookExample.css";
import { useArray } from "./useArray";

const INITIAL_ARRAY = [1, 2, 3];

function ArrayHookExample() {
    const { array, set, push, replace, filter, remove, clear, reset } =
        useArray(INITIAL_ARRAY);

    return (
        <>
            <div className="array-hook-example-title">
                <h1>Array</h1>
                <h2>{array.length === 0 ? "Empty array" : array.join(", ")}</h2>
            </div>
            <div className="array-hook-example-container">
                <button onClick={() => set([4, 5, 6])}>
                    Set Array to [4, 5, 6]
                </button>
                <button onClick={() => push(4)}>Push 4</button>
                <button disabled={array.length <= 1} onClick={() => replace(1, 9)}>
                    Replace the second element with 9
                </button>
                <button onClick={() => filter((n) => n < 3)}>
                    Keep numbers less than 3
                </button>
                <button onClick={() => filter((n) => n > 2)}>
                    Keep numbers bigger than 2
                </button>
                <button onClick={() => remove(1)}>Remove second element</button>
                <button onClick={() => clear()}>Clear the array</button>
                <button onClick={() => reset()}>Reset the array</button>
            </div>
        </>
    );
}

export default ArrayHookExample;
