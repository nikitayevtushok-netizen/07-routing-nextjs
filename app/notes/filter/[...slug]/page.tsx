import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import { isNoteTag } from "@/types/note";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesPage({ params }: Props) {
  const { slug } = await params;
  if (slug.length !== 1 || (slug[0] !== "all" && !isNoteTag(slug[0]))) {
    notFound();
  }

  const rawTag = slug[0];
  const tag = rawTag === "all" ? undefined : rawTag;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", { page: 1, perPage: 12, search: "", tag: tag ?? "" }],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        ...(tag && { tag }),
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={rawTag} />
    </HydrationBoundary>
  );
}
