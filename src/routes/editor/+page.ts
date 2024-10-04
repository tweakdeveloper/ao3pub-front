import { redirect } from '@sveltejs/kit';

import { WorkMetadata } from '$lib/api/work/metadata';

export async function load({ fetch, url }) {
  const workID = url.searchParams.get('work');

  if (!workID) {
    redirect(307, '/');
  }

  const metadataReq = await fetch(`/api/work/${workID}/metadata`);
  const workMetadata = WorkMetadata.parse(await metadataReq.json());

  return { workID, metadata: workMetadata };
}
