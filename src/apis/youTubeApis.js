import conf_variables from "../conf/conf"
//for the home page all videos
export const getAllVideos = async (query = "All") => {
    const videosCategory = query === "All" ? conf_variables.defaultVideos : `${conf_variables.searchUrl}q=${query}&regionCode=IN&type=video&key=`;
    try {
        const videos = await fetch(
            conf_variables.baseUrl
            + videosCategory
            + conf_variables.secretKey)
            .then((data) => data.json());
        if (!videos) {
            return null
        }
        return videos.items

    } catch (error) {
        console.log("Error while fetching getAllVideos :", error)
        throw error
    }
}

// export const getAllVideosBySearchOrCategory = async (query) => {
//     const videosCategory = `${conf_variables.searchUrl}q=${query}&regionCode=IN&type=video&key=`;
//     try {
//         const videos = await fetch(
//             conf_variables.baseUrl
//             + videosCategory
//             + conf_variables.secretKey)
//             .then((data) => data.json());
//         if (!videos) {
//             return null
//         }
//         return videos.items
//     } catch (error) {
//         console.log("Error while fetching getAllVideos :", error)
//         throw error
//     }
// }

//For getting the channel by id
export const getChannelInfo = async (id) => {
    try {
        const channel = await fetch(
            conf_variables.baseUrl
            + conf_variables.channelInfo
            + conf_variables.secretKey
            + `&id=${id}`)
            .then((data) => data.json());
        if (!channel) {
            return null
        }
        return channel.items[0]
    } catch (error) {
        console.log("Error while fetching channel info :", error)
        throw error
    }
}

//For fetching the releted serch suggestions
export const getSearchSuggestions = async (query) => {
    try {
        if (!query) {
            return null
        }
        const res = await fetch(conf_variables.searchSuggestionsUrl + `q=${query}`).then((data) => data.json());
        return res[1]
    } catch (error) {
        console.log("Erroe while fetching search suggestions", error)
    }
}

//For Fetching the category tags
export const getVideoCategoryTags = async () => {
    try {
        const res = await fetch(conf_variables.baseUrl + conf_variables.categoriesTags + conf_variables.secretKey)
            .then((data) => data.json())
            .then((data) => data.items?.map((item) => item.snippet?.title))
        return res
    } catch (error) {
        console.log("Erroe while fetching category tags", error)
    }
}

//For getting the perticular video data by id
export const getVideoDataById = async (id) => {
    try {
        const video = await fetch(
            conf_variables.baseUrl
            + conf_variables.videoById
            + conf_variables.secretKey
            + `&id=${id}`)
            .then((data) => data.json());
        if (!video) {
            return null
        }
        return video.items[0]
    } catch (error) {
        console.log("Error while fetching video by its ID :", error)
        throw error
    }
}

//For perticular video comments data
export const getCommentsOfVideos = async (id) => {
    try {
        const comments = await fetch(
            conf_variables.baseUrl
            + conf_variables.commentsUrl
            + conf_variables.secretKey
            + `&videoId=${id}`)
            .then((data) => data.json());
        if (!comments) {
            return null
        }
        return comments.items
    } catch (error) {
        console.log("Error while fetching comments of video :", error)
        throw error
    }
}