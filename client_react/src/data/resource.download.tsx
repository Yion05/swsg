import { FaBookmark, FaImage, FaPlayCircle } from "react-icons/fa";
import type { downloadStructSchema } from "../types/component.type";

export const downloadData: downloadStructSchema[] = [
    {
        content_name: "Brochure_1_Title Here XXX",
        content_type: "bookmark",
        download_linK: "/"
    }
]

export const download_icon = {
    "image": FaImage,
    "video": FaPlayCircle,
    "bookmark": FaBookmark
}