import React from 'react'
import '../css/imagedetail.css'
import { Paper } from '@material-ui/core'


export default function ImageDetail({state}){

console.log(state)

    return (
        <div>
            <Paper className="dashboard" >
                <div className="rowdis" >
                    <div style={{margin:'3%'}} >
                        <img   src={state.image.urls.thumb} />
                    </div>
                    <div className="coldis" >
                        <div className="rowdis" >
                        <span>Posted By :</span>
                        <span className="svgf" >{`${state.image.user.name}`}</span>
                        </div>
                        <div className="coldis1" >
                        <span style={{whiteSpace:'nowrap'}} >{`Social Links of ${state.image.user.name} :`}</span>
                        <span className="svgf" >{`${state.image.user.portfolio_url}`?`${state.image.user.portfolio_url}`:'No Links'}</span>
                        </div>
                        <div className="rowdis" >
                        <span>Likes :</span>
                        <span className="svgf" >{`${state.image.likes}`}</span>
                        </div>
                        <div className="coldis1" >
                        <span>{`Check ${state.image.user.name} instagram`}  :</span>
                        <span className="svgf" >{`${state.image.user.instagram_username}`}</span>
                        </div>
                    </div>
                </div>
            </Paper>


           
        </div>
    )

}