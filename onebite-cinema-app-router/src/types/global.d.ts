interface NextPage {
  params: Promise<{ [slug: string]: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
