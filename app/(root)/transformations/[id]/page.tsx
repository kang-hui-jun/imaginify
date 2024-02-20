import Header from "@/components/shared/Header"
import { getImageById } from "@/lib/actions/image.actions";
import { auth } from "@clerk/nextjs";

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
    const { userId } = auth();
  
    const image = await getImageById(id);
    return <Header title={image.title} />
}

export default ImageDetails