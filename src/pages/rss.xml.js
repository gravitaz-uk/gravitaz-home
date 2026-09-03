import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
	const engagements = await getCollection("engagements");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: engagements.map((engagement) => ({
			...engagement.data,
			link: `/engagements/${engagement.id}/`,
		})),
	});
}
