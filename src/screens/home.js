import React, { useState, useEffect } from 'react'
import { createApi } from 'unsplash-js';
import InfiniteScroll from "react-infinite-scroller";
import Masonry from "react-masonry-component";
import "../App.css";
import { masonryOptions } from "../exports";
import { Modal } from '@material-ui/core'
import ImageDetail from './imagedetail';
import { accesskey } from '../config';


export default function Home() {
    const [images, setImages] = useState([])
    const [show, setshow] = useState(false)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0);
    const [img,setimg]=useState({});
    const [initialized, setInitialized] = useState(false);
    const [open, setOpen] = React.useState(false);
    const unsplash = createApi({
        accessKey: accesskey,
    });
    const openModal = (img) => {
        setshow(true)
        setOpen(true)
        setimg(img)
    }
    const handleClose = () => {
        setOpen(false);
    };
    const getAllImages = async (pg = 1) => {
        const result = await unsplash.photos.list({});
        console.log(result)
        let imgs = images.concat(result.response.results);
        console.log(imgs)
        setImages(imgs);
        console.log(images)
        setTotal(result.response.total);
        pg++;
        setPage(pg);
    };

    useEffect(async () => {
        if (!initialized) {
            getAllImages();
            setInitialized(true);
        }

    }, [])



    return (
        <div className="page" >
            <h1 className="text-center">Home</h1>
            <InfiniteScroll
                pageStart={1}
                loadMore={getAllImages}
                hasMore={total > images.length}
            >
                <Masonry
                    className={"grid"}
                    elementType={"div"}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                >
                    {images.map((img, i) => {
                        console.log(img)
                        return (
                            <div  style={{position:'relative'}} >
                            <div  className="rowdis" key={i}>
                                <img src={img.urls.thumb} style={{ width: 300, cursor:'pointer' }} onClick={()=>openModal(img)} />
                            </div>
                            <div style={{position:'absolute'}} > Text</div>
                            </div>
                        );
                    })}
                </Masonry>
            </InfiniteScroll>

            {
                show ?
                    <div  >
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <ImageDetail state={{image:img}} />
                        </Modal>
                    </div>
                    :
                    <></>
            }

        </div>



    )


}