import Link from "next/link";
import { CarouselItem } from "../ui/carousel";

const SliderItem = ({ item }) => {
  return (
    <CarouselItem className={("basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 cursor-pointer sm:border-l-2")}>
      <Link href="#">{item?.excerpt}</Link>
    </CarouselItem>
  );
};

export default SliderItem;
