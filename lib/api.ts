import axios, { AxiosResponse } from "axios";
import { Note, NoteTag } from "@/types/note";

const noteApi = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
  tag?: NoteTag;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  tag: NoteTag;
}

export const fetchNotes = async (
  params: FetchNotesParams
): Promise<FetchNotesResponse> => {
  const response: AxiosResponse<FetchNotesResponse> = await noteApi.get(
    "/notes",
    { params }
  );

  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await noteApi.get(`/notes/${id}`);
  return response.data;
};

export const createNote = async (payload: CreateNotePayload): Promise<Note> => {
  const response: AxiosResponse<Note> = await noteApi.post("/notes", payload);

  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await noteApi.delete(`/notes/${id}`);

  return response.data;
};
