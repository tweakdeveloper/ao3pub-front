import { redirect } from '@sveltejs/kit';

export async function load({ fetch, url }) {
  const workID = url.searchParams.get('work');

  if (!workID) {
    redirect(307, '/');
  }

  const metadataReq = await fetch(`/api/work/${workID}/metadata`);
  const workMetadata = await metadataReq.text();

  return { workID, metadata: workMetadata };
}
