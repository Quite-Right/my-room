import React, { ReactElement } from 'react'

interface Props {

}
interface Input {
    url:string;
    tag:string;
    name:string;
}

export default function App({ }: Props): ReactElement {
    const input:Array<Input> = [{ url: "asd", tag: "asd", name: "dasdada" }, { url: "1", tag: "2", name: "3" }, { url: "1", tag: "2", name: "3" }];

    return (
        <div className="__test">
            {input.map(({url, tag, name}:Input, id) => {
                return (
                    <div key={id} className="__test__app" style={{backgroundImage: `url(${url})`}}>
                        {url}
                        {tag}
                        {name}
                    </div>
                )
            })}
        </div>
    )
}

