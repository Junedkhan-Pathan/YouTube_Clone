const conf_variables = {
    secretKey: String(import.meta.env.VITE_GOOGLE_API_KEY),
    baseUrl: "https://youtube.googleapis.com/youtube/v3/",
    searchSuggestionsUrl: String("https://corsproxy.org/?https%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26"),
    defaultVideos: String("videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key="),
    channelInfo: String("channels?part=snippet%2CcontentDetails%2Cstatistics&key="),
    commentsUrl: String("commentThreads?part=snippet%2Creplies&maxResults=20&videoId=&key="),
    categoriesTags: String("videoCategories?part=snippet&regionCode=IN&key="),
    searchUrl: String("search?part=snippet&maxResults=20&"),
    videoById:String("videos?part=snippet%2CcontentDetails%2Cstatistics&key=")

}
export default conf_variables