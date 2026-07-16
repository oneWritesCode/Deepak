export type BlogCategory = "Blog";

export type BlogData = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: BlogCategory;
  techStack: string[];
  liveUrl?: string;
};

export const BLOGS: BlogData[] = [
  {
    id: "web-scraper",
    title: "Build a Web Scraper in Under 10 Minutes from Scratch",
    description: "Hey there, today we are going to learn about web scraping and how you can build it locally within minutes. So, as you know, web scraping is one of the most powerful skills for developers, data analysts, researchers, and entrepreneurs. It's a beginner-friendly tutorial, so don't worry and stick to me till the end.",
    image: "/assets/images/webScrapper.png",
    category: "Blog",
    techStack: ["web scraping", "python"],
    liveUrl: "https://medium.com/@triordeep/build-a-web-scraper-in-under-10-minutes-from-scratch-0af9c379e565"
  },
  {
    id: "python-engine",
    title: "How python engine gets down",
    description: "Python's got that clean, readable syntax that makes coding feel like a breeze, but behind the scenes, it's got a straight-up beast of an engine turning your code into reality. We're talking CPython here — the standard Python implementation that's running the show. Let's break down the steps of how your Python code goes from a .py file to straight-up magic.",
    image: "/assets/images/Python-blog.png",
    category: "Blog",
    techStack: ["Python", "CPython"],
    liveUrl: "https://medium.com/@triordeep/how-pythons-engine-gets-down-a-guide-to-python-s-inner-workings-699ea581ad96"
  },
  {
    id: "os-blog",
    title: "All You Need to Know About Operating Systems",
    description: "Hey there! If you've ever wondered what makes your computer or phone tick, you're in the right place. This article is your quick, no-BS guide to understanding operating systems (OS). Let's dive in and figure out why these things are so important and what they're all about.",
    image: "/assets/images/OS-blog.png",
    category: "Blog",
    techStack: ["operating systems"],
    liveUrl: "https://medium.com/@triordeep/all-you-need-to-know-about-operating-systems-3394cd4eb444"
  }
];
