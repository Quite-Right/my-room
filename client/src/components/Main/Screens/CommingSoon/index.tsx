import React, { ReactElement } from 'react'

interface Props {
    
}

export default function CommingSoon({}: Props): ReactElement {
    return (
        <div className="__comming-soon">
            <img className="__comming-soon_gif" src="https://thumbs.gfycat.com/AnguishedBasicAntelope-size_restricted.gif" alt="fake"/>
            <div className="__comming-soon_text">This page is comming soon, chekout for updates</div>
            {/* <div style={{width: 200, height: 200, display: "flex"}}>
                <div style={{margin: "auto"}}>
a
                </div>
            </div> */}
        </div>
    )
}
