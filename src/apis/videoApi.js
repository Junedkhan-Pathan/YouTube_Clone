import conf_variables from "../conf/conf"


//for the home page all videos
export const getAllVideos = async () => {
    try {
        const videos = await fetch(
            conf_variables.baseUrl
            + conf_variables.defaultVideos
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


//Comments api function 

export const getCommentsData = async () => {
    try {
        const res = await fetch(conf_variables.baseUrl + conf_variables.categoriesTags + conf_variables.secretKey)
            .then((data) => data.json())
            .then((data) => data.items?.map((item) => item.snippet?.title))
        return res
    } catch (error) {
        console.log("Erroe while fetching category tags", error)
    }
}