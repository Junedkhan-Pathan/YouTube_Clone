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

export const formatTime = (time) => {
  const uploadDate = new Date(time);
  const currentDate = new Date();

  const difference = currentDate - uploadDate;
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (
    !years &&
    !months &&
    !weeks &&
    !days &&
    !hours &&
    minutes > 0 &&
    minutes < 60
  ) {
    return minutes <= 1 ? "just now" : `${minutes} minutes ago`;
  }
  if (!years && !months && !weeks && !days && hours > 0 && hours < 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }
  if ((!years && !months && !weeks) || (weeks <= 1 && days > 1 && days < 14)) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }
  if (!years && !months && weeks > 0 && weeks < 4) {
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }
  if (!years && months > 0 && months < 12) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }
  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  }
};

export function timeDuration(isoDuration) {
  const match = String(isoDuration)?.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) {
    return "00:00";
  }
  // Extract hours, minutes, and seconds from the match groups
  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const seconds = parseInt(match[3]) || 0;

  // Format the duration as HH:MM:SS
  let formattedDuration = "";

  if (hours > 0) {
    formattedDuration += hours.toString().padStart(1, "0") + ":";
  }
  formattedDuration += [
    minutes.toString().padStart(1, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");

  return formattedDuration;
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
