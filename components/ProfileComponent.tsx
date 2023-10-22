import { Profile } from "@/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { RichTextComponents } from ".";
interface ProfileProps {
  profile: Profile;
}
const ProfileComponent = ({ profile }: ProfileProps) => {
  return (
    <section className="flex flex-col w-full lg:w-72 h-full lg:sticky lg:top-20 pb-6">
      <div className="bg-white p-2 dark:bg-zinc-800/90 ring-1 rounded ring-zinc-900/5 dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/90">
        <Image
          src={profile?.image}
          alt={profile?.name}
          width={150}
          height={150}
          className="object-contain w-full p-2 ring-2 ring-zinc-900/5 dark:ring-white/10"
        />

        <div className="flex flex-col items-center w-full gap-1 mt-3 mb-2">
          <h3 className="text-lg lg:text-2xl font-bold">{profile?.name}</h3>
          <p className="italic text-zinc-900 dark:text-zinc-400">
            {profile?.role}
          </p>
        </div>

        <PortableText value={profile?.bio} components={RichTextComponents} />
      </div>
      <div className="mt-2 p-2 lg:p-6 bg-white/90 dark:bg-zinc-800/90 ring-1 rounded-lg ring-zinc-900/5 dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/90">
        <h2>Socials</h2>
        <div className="flex items-center gap-2 justify-evenly mt-4 lg:mt-6 p-2">
          {Object.entries(profile?.socialLinks).map(([key, value], index) => (
            <Link
              target="_blank"
              title={key}
              href={`${value}`}
              key={index}
              className="bg-white/90 dark:bg-zinc-800/90 ring-1 rounded-lg ring-zinc-900/5 dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/90 p-3"
            >
              {Icons[key as keyof typeof Icons]}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileComponent;

const Icons = {
  github: (
    <FaGithub
      size={25}
      className="text-zinc-950 dark:text-zinc-100 group-hover:text-teal-400 dark:hover:text-teal-600 duration-200"
    />
  ),
  twitter: (
    <FaXTwitter
      size={25}
      className="text-zinc-950 dark:text-zinc-100 group-hover:text-teal-400 dark:hover:text-teal-600 duration-200"
    />
  ),
  instagram: (
    <FaInstagram
      size={25}
      className="text-zinc-950 dark:text-zinc-100 group-hover:text-teal-400 dark:hover:text-teal-600 duration-200"
    />
  ),
  linkedin: (
    <FaLinkedin
      size={25}
      className="text-zinc-950 dark:text-zinc-100 group-hover:text-teal-400 dark:hover:text-teal-600 duration-200"
    />
  ),
};
