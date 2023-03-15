import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default async function getImgUrl(url) {
    let photoUrl;
    const storage = getStorage();

    await getDownloadURL(ref(storage, url))
        .then((url) => {
            photoUrl = url;
        })
    return photoUrl;
}
