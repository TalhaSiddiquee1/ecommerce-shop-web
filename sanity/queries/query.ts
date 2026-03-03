import { defineQuery } from 'next-sanity';

const BRANDS_QUERY = defineQuery(`
  *[_type == "brand"] | order(title asc){
    _id,
    title,
    slug,
    "imageUrl": coalesce(image.asset->url, logo.asset->url),
    "mimeType": coalesce(image.asset->mimeType, logo.asset->mimeType)
  }
`);

const LATEST_BLOG_QUERY = defineQuery(
  ` *[_type == 'blog' && isLatest == true]|order(name asc){
      ...,
      blogcategories[]->{
      title
    }
    }`
);

export { BRANDS_QUERY, LATEST_BLOG_QUERY };
