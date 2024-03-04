import {
  HomeIcon,
  SubscriptionsIcon,
  ShortsIcon,
  TrendingIcon,
  ShopingIcon,
  MusicIcon,
  FilmIcon,
  LiveIcon,
  SportsIcon,
  NewsIcon,
  GamingIcon,
  LearningIcon,
  FashionBeautyIcon,
  PodcastIcon,
  YouTubePremiumIcon,
  YouTubeStudioIcon,
  YouTubeMusic,
  YouTubeKids,
  SettingIcon,
  ReportHistoryIcon,
  HelpIcon,
  FeedbackIcon,
} from "../assets/Index";

export const Home = [
  {
    icon: <HomeIcon />,
    name: "Home",
    to: "/",
  },
  {
    icon: <ShortsIcon />,
    name: "Shorts",
    to: "/shorts",
  },
  {
    icon: <SubscriptionsIcon />,
    name: "Subscriptions",
    to: "/feed/subscription",
  },
];

export const Subscriptions = [
  {
    src: "https://yt3.ggpht.com/1FEdfq3XpKE9UrkT4eOc5wLF2Bz-42sskTi0RkK4nPh4WqCbVmmrDZ5SVEV3WyvPdkfR8sw2=s176-c-k-c0x00ffffff-no-rj-mo",
    fullname: "chai aur code",
  },
  {
    src: "https://yt3.googleusercontent.com/ytc/AOPolaSj48pypV9ilqNUztYjQ8Q760NYCAw3w1LwoWbJYQ=s176-c-k-c0x00ffffff-no-rj",
    fullname: "Akshay Saini",
  },
  {
    src: "https://yt3.googleusercontent.com/ytc/AIdro_krnyU9zev1u94JYs4opG8p1sYE3HQ9oButitIb7A=s176-c-k-c0x00ffffff-no-rj-mo",
    fullname: "CodeWithHarry",
  },
  {
    src: "https://yt3.googleusercontent.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s176-c-k-c0x00ffffff-no-rj",
    fullname: "Apna College",
  },
  {
    src: "https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s176-c-k-c0x00ffffff-no-rj-mo",
    fullname: "Sheryians Coding School",
  },
  {
    src: "https://yt3.googleusercontent.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s176-c-k-c0x00ffffff-no-rj",
    fullname: "freeCodeCamp",
  },
  {
    src: "https://yt3.googleusercontent.com/ytc/AIf8zZTPIL9EkFafJj8HqxgEj9avK-OBX-U6p0V9NrEwSw=s176-c-k-c0x00ffffff-no-rj",
    fullname: "GeeksforGeeks",
  },
];

export const Explore = [
  {
    icon: <TrendingIcon className="w-5 h-10" />,
    name: "Trending",
  },
  {
    icon: <ShopingIcon className="w-5 h-10" />,
    name: "Shopping",
  },
  {
    icon: <MusicIcon className="w-5 h-10" />,
    name: "Music",
  },
  {
    icon: <FilmIcon className="w-5 h-10" />,
    name: "Movies",
  },
  {
    icon: <LiveIcon className="w-5 h-10" />,
    name: "Live",
  },
  {
    icon: <SportsIcon className="w-5 h-10" />,
    name: "Sports",
  },
  {
    icon: <NewsIcon className="w-5 h-10" />,
    name: "News",
  },
  {
    icon: <GamingIcon className="w-5 h-10" />,
    name: "Gaming",
  },
  {
    icon: <LearningIcon className="w-5 h-10" />,
    name: "Learning",
  },
  {
    icon: <FashionBeautyIcon className="w-5 h-10" />,
    name: "Fashion & Beauty",
  },
  {
    icon: <PodcastIcon className="w-5 h-10" />,
    name: "Podcasts",
  },
];

export const Premium = [
  {
    icon: <YouTubePremiumIcon className="w-5 h-10" />,
    name: "YouTube Premium",
  },
  {
    icon: <YouTubeStudioIcon className="w-5 h-10" />,
    name: "YouTube Studio",
  },
  {
    icon: <YouTubeMusic className="w-5 h-10" />,
    name: "YouTube Music",
  },
  {
    icon: <YouTubeKids className="w-5 h-10" />,
    name: "YouTube Kids",
  },
];

export const Setting = [
  {
    icon: <SettingIcon className="w-5 h-10" />,
    name: "Settings",
  },
  {
    icon: <ReportHistoryIcon className="w-5 h-10" />,
    name: "Report History",
  },
  {
    icon: <HelpIcon className="w-5 h-10" />,
    name: "Help",
  },
  {
    icon: <FeedbackIcon className="w-5 h-10" />,
    name: "Send Feedback",
  },
];

export const DummyTags = [
  "Gaming",
  "Mixes",
  "React JS",
  "Freecodecamp",
  "Fortnite",
  "Namaste JavaScript",
  "Rohit Sharma",
  "Comedy",
  "T-series",
  "Thrillers",
  "Indian Premier League",
  "Programming",
  "Dramedy",
  "Cricket",
  "Football",
  "News",
  "JavaScript",
  "Prodcasts",
  "Comedy Clubs",
  "Data Structures",
];

export const CHAT_COUNT = 25;

export const formatTime = (time) => {
  let currentDate = new Date();
  let inputDate = new Date(time);
  let differenceInMilliseconds = currentDate - inputDate;
  let differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);

  if (differenceInDays > 30) {
    let monthsAgo = Math.ceil(differenceInDays / 30.44);

    if (monthsAgo === 1) {
      return <span>{monthsAgo} Month ago</span>;
    } else {
      return <span>{monthsAgo} Months ago</span>;
    }
  } else {
    let daysAgo = Math.ceil(differenceInDays);

    if (daysAgo === 1) {
      return <span>{daysAgo} day ago</span>;
    } else {
      return <span>{daysAgo} days ago</span>;
    }
  }
};

// export function timeDuration(duration) {
//   const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

//   const hours = parseInt(match[1]) || 0;
//   const minutes = parseInt(match[2]) || 0;
//   const seconds = parseInt(match[3]) || 0;

//   const formattedHours = String(hours).padStart(2, '0');
//   const formattedMinutes = String(minutes).padStart(2, '0');
//   const formattedSeconds = String(seconds).padStart(2, '0');

//   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// }

export const timeDuration = (isoDuration) => {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let minutesIndex;
  let hoursIndex;

  if (typeof isoDuration !== "string" || !isoDuration.trim()) {
    return "00:00"; // Default value when isoDuration is not valid
  }

  if (isoDuration.includes("H")) {
    hoursIndex = isoDuration.indexOf("H");
    hours = parseInt(isoDuration.slice(2, hoursIndex));
  }

  if (!hoursIndex) {
    hoursIndex = 1;
  }

  if (isoDuration.includes("M")) {
    minutesIndex = isoDuration.indexOf("M");
    minutes = parseInt(isoDuration.slice(hoursIndex + 1, minutesIndex));
  }
  if (!minutesIndex) {
    minutesIndex = 1;
  }
  const secondsIndex = isoDuration.indexOf("S");
  if (secondsIndex !== -1) {
    seconds = parseInt(isoDuration.slice(minutesIndex + 1, secondsIndex));
  }

  // Format the time
  if (!hours) {
    const formattedTime = `${padZero(minutes)}:${padZero(seconds)}`;
    return formattedTime;
  } else {
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )}`;
    return formattedTime;
  }
};

// Function to pad single-digit numbers with leading zeros
function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

export const formatNumberWithSuffix = (x) => {
  if (x === undefined) {
    return 0;
  }
  if (x >= 1000000) {
    return (x / 1000000).toFixed(1) + "M";
  } else if (x >= 1000) {
    return (x / 1000).toFixed(1) + "K";
  }
  return x.toString();
};
