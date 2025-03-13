import { SkeletonCard, SkeletonImage, SkeletonTitle } from "../../style/SkeletonStyles"

function SkeletonMovie () {
    return (
        <SkeletonCard>
            <SkeletonImage />
            <SkeletonTitle></SkeletonTitle>
        </SkeletonCard>
    )
}

export default SkeletonMovie