import { formatDate } from "./../lib/utils";
import { EyeIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

function StartupCard({ post }: { post: StartupTypeCard }) {
  return (
    <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100">
      <div className="flex justify-between items-center">
        <p className="font-medium text-[16px] bg-primary-100 py-2 rounded-full group-hover:bg-white-100">
          {formatDate(post._createdAt)}
        </p>
        <div className="flex gap-3 relative top-5 left-10">
          <EyeIcon className="size-6 text-primary" />
          <span className="font-medium size-16">{post.views}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`}>
            <p className="font-medium text-[16px] text-black line-clamp-1">
              {post.author?.name}
            </p>
          </Link>
          <Link href={`/startup/${post._id}`}>
            <h3 className="font-semibold text-[26px] text-black line-clamp-1">
              {post.title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${post.author?._id}`}>
          <img
            src="https://placehold.co/48x48"
            width={48}
            height={48}
            className="rounded-full"
            alt="Picture"
          />
        </Link>
      </div>
      <Link href={`/startup/${post._id}`}>
        <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">
          {post.description}
        </p>
        <img
          src={post.image}
          alt=""
          className="w-full h-[164px] rounded-[10px] object-cover"
        />
      </Link>

      <div className="flex justify-between items-center gap-3 mt-5">
        <Link href={`/?query=${post.category?.toLowerCase()}`}>
          <p className="font-medium text-[16px] text-black">{post.category}</p>
        </Link>
        <Button className="flex justify-between items-center rounded-full bg-[#121212] font-medium text-[16px] text-white px-5 py-3" asChild>
          <Link href={`/startup/${post._id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}

export default StartupCard;
