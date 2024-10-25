import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";



export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {"Find the stuff you like in the"}
            <span className=""> moment </span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Hey! We are the moment and live in the moment. This is a shop where
            you can find items that you love and finally remove from your
            wishlist. Come join us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products">
              <button className="rounded-2xl border-2 border-[#2A2A2B] bg-[#d4cdc3] px-6 py-3 font-black uppercase text-[#2A2A2B] transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#2A2A2B] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                come shop with us
              </button>
            </Link>
          </div>
        </div>

        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/products?sort=recent"
          title="This just came in"

        />
      </MaxWidthWrapper>

      <section className="">
        <MaxWidthWrapper className="py-20">
         hi
        </MaxWidthWrapper>
      </section>
    </>
  );
}
