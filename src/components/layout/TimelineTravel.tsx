import PhotoCarousel from "./PhotoCarousel"

interface Props {
    folderId: string;
}

const TimelineTravel = ({folderId}: Props) =>{
    return (
        <PhotoCarousel folderId={folderId} height="350px"/>
    )
}

export default TimelineTravel