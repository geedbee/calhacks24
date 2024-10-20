"use client";

import * as R from "remeda";

export default function Sentiment(props) {
    let top3 = null;
    if (props.values){
        top3 = R.pipe(
            props.values,
            R.entries(),
            R.sortBy(R.pathOr([1], 0)),
            R.reverse(),
            R.take(3)
        );
    }

    return (
        <>
            {top3 && top3.map((t,i) => {
                return (
                  <div key={i}>{t[0]} {t[1].toString().substring(2,4)}</div>
                );
            })}
        </>
    );
}
