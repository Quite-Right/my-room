import React, { ReactElement } from 'react'


interface Props {

}
interface Input {
    url: string;
    tag: string;
    name: string;
}

export default function App({ }: Props): ReactElement {
    const input: Array<Input> = [
        { url: "https://www.adorama.com/images/Large/ro33.jpg", tag: "new", name: "Pink1" },
        { url: "https://www.adorama.com/images/Large/ro33.jpg", tag: "update", name: "Pink2" },
        { url: "https://www.adorama.com/images/Large/ro33.jpg", tag: "closed", name: "Pink3" },
        { url: "https://www.adorama.com/images/Large/ro33.jpg", tag: "break", name: "Pink4" },
    ];





    return (
        <>
            <div className="__wrapper">
                {input.map(({ url, tag, name }: Input, id) => {
                    return (
                        <div key={id} className="__wrapper__app" style={{ backgroundImage: `url(${url})` }}>
                            <div className={`__wrapper__app__${tag}`}>{tag}</div>
                            <div className="__wrapper__app__name">{name}</div>
                        </div>
                    )
                })}
            </div>
            <div className="__wrapper">
                {input.map(({ url, tag, name }: Input, id) => {
                    return (
                        <div key={id} className="__wrapper__app" style={{ backgroundImage: `url(${url})` }}>
                            <div className={`__wrapper__app__${tag}`}>{tag}</div>
                            <div className="__wrapper__app__name">{name}</div>
                        </div>
                    )
                })}
            </div>
            <hr></hr>
            <div className="__wrapper2">
                {input.map(({ url, tag, name }: Input, id) => {
                    return (
                        <div className="__wrapper2__cell">
                            <div key={id} className="__wrapper2__app" style={{ backgroundImage: `url(${url})` }}>
                                <div className={`__wrapper2__app__${tag}`}>{tag}</div>
                            </div>
                            <div className="__wrapper2__name">{name}</div>
                        </div>
                    )
                })}
            </div>
            <div className="__wrapper2">
                {input.map(({ url, tag, name }: Input, id) => {
                    return (
                        <div className="__wrapper2__cell">
                            <div key={id} className="__wrapper2__app" style={{ backgroundImage: `url(${url})` }}>
                                <div className={`__wrapper2__app__${tag}`}>{tag}</div>
                            </div>
                            <div className="__wrapper2__name">{name}</div>
                        </div>
                    )
                })}
            </div>
        </>


    )
}

