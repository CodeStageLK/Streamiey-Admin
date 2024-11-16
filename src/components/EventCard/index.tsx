import { useNavigate } from "react-router-dom";
import Lucide from "../Base/Lucide";
import Tippy from "../Base/Tippy";
import appLogo from "../../assets/images/app_logo.png";

function Main({ data, key }: any) {
  const navigate = useNavigate();

  const gotoDetails = () => {
    navigate(`/events/${data?.eventID}`);
  };
  return (
    <div
      key={key}
      className="flex flex-col col-span-12 px-5 py-5 cursor-pointer sm:col-span-6 xl:col-span-3"
      onClick={gotoDetails}
    >
      <div className="overflow-hidden rounded-xl h-80 image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-slate-900/90 before:to-black/20">
        <img
          alt="event thumbnail"
          className="p-1 rounded-xl"
          src={data?.eventThumbnailUrl || appLogo}
        />

        <div className="absolute bottom-0 z-10 w-full px-5 pb-6 text-white">
          {data?.eventName.length > 30 ? (
            <Tippy as="a" content={data?.eventName}>
              <a href="" className="block font-medium truncate text-md">
                {`${data?.eventName.slice(0, 30)}...`}
              </a>
            </Tippy>
          ) : (
            <a href="" className="block font-medium truncate text-md">
              {data?.eventName}
            </a>
          )}
          <span className="mt-3 text-xs text-white/80">
            {data?.Category?.catName}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
