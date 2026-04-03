import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export default async function Home() {
  const client = createClient();
  const homepage = await client.getSingle("homepage");

  return (
    <>
      <h1 className="sr-only">Alexandria</h1>
      <SliceZone slices={homepage.data.slices} components={components} />
    </>
  );
}
