import { useSession } from "next-auth/client";
import StoryCard from "./StoryCard";

function Stories() {
  const [session] = useSession();
  const stories = [
    {
      name: session.user.name,
      src: session.user.image,
      profile: session.user.image,
    },
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
    },
    {
      name: "Jeff Bezoz",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
    },
    {
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
    },
  ];
  return (
    <div className="flex items-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
}

export default Stories;
