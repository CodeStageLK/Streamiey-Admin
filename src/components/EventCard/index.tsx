import { useNavigate } from "react-router-dom";
import Lucide from "../Base/Lucide";
import Tippy from "../Base/Tippy";

function Main({ faker, key }: any) {

    const navigate = useNavigate();

    const gotoDetails = () => {
      navigate("/events/event1");
    };
  return (
    <div
      key={key}
      className="col-span-12 sm:col-span-6 xl:col-span-3 px-5 py-5 flex flex-col cursor-pointer"
      onClick={gotoDetails}
    >
      <div className="overflow-hidden rounded-xl h-80 image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-slate-900/90 before:to-black/20">
        <img
          alt="event thumbnail"
          className="rounded-xl p-1"
          src={faker?.products[0]?.images[0]?.path}
        />

        <div className="absolute bottom-0 z-10 w-full px-5 pb-6 text-white">
          {faker?.orderId.length > 30 ? (
            <Tippy as="a" content={faker?.orderId}>
              <a href="" className="block text-md font-medium truncate">
                {`${faker?.orderId.slice(0, 30)}...`}
              </a>
            </Tippy>
          ) : (
            <a href="" className="block text-md font-medium truncate">
              {faker?.orderId}
            </a>
          )}
          <span className="mt-3 text-xs text-white/80">
            {faker?.category?.name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
