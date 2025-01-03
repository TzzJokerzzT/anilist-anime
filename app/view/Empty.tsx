import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "keep-react";
import Image from "next/image";
import Link from "next/link";

export const EmptyComponent = () => {
  return (
    <Empty className="h-[90vh]">
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle className="mb-[14px] mt-5">
        Oops! Please add you favorite anime
      </EmptyTitle>
      <EmptyDescription className="mb-8">
        Remember to add your favorite anime to the list and enjoy watching them
      </EmptyDescription>
      <Link href="/" className={buttonVariants({ color: "primary" })}>
        Go to home
      </Link>
    </Empty>
  );
};
