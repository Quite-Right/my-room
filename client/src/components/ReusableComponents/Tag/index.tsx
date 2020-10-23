import React, { ReactElement } from 'react'
import {TagType} from "../../../constants";

interface Props {
    type: TagType,
    tag: string,
}

export default function Tag({ type, tag }: Props): ReactElement {
    return (
        <div className={`__tag__${type}`}>{tag}</div>
    )
}
