// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/router";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-9 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, idx) => {
          return (
            <Link
              className={`${
                link.path === router.pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all`}
              href={link.path}
              key={idx}
            >
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
