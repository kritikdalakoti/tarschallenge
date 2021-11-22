import React,{useState} from "react";
import InfiniteScroll from "react-infinite-scroller";
import Masonry from "react-masonry-component";
import { masonryOptions } from "../exports";
import { searchImages } from "../request";
import { Modal, useTheme } from '@material-ui/core'
import ImageDetail from './imagedetail';

export default function ImageSearchPage() {
    const [images, setImages] = React.useState([]);
    const [show, setshow] = useState(false)
    const [keyword, setKeyword] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(0);
    const [searching, setSearching] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [img,setimg]=useState({});


    const handlechange=(e)=>{
        setKeyword(e.target.value)
        searchAllImages(e.target.value)
    }
    const searchAllImages = async (keyword, pg = 1) => {
        setSearching(true);
        const res = await searchImages(keyword, page);
        console.log(res)
        let imgs = res.response.results;
        console.log(imgs)
        setImages(imgs);
        setTotal(res.response.total);
        setPage(pg);
    };
    const getMoreImages = async () => {
        let pg = page;
        pg++;
        const res = await searchImages(keyword, pg);
        const imgs = images.concat(res.response.results);
        setImages(imgs);
        setTotal(res.response.total);
        setPage(pg);
    };

    const openModal = (img) => {
        setshow(true)
        setOpen(true)
        setimg(img)
    }
    const handleClose = () => {
        setOpen(false);
    };


    React.useEffect(() => { });
    return (
        <div className="page">
            <h1 className="text-center">Search</h1>
            <input type="text" 
            onChange={handlechange} 
            value={keyword}
            />
            <br />
            <InfiniteScroll
                pageStart={1}
                loadMore={getMoreImages}
                hasMore={searching && total > images.length}
            >
                <Masonry
                    className={"grid"}
                    elementType={"div"}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}
                >
                    {images.map((img, i) => {
                        return (
                            <div key={i}>
                                <img src={img.urls.thumb} style={{ width: 300, cursor:'pointer' }} onClick={()=>openModal(img)} />
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
    );
}
