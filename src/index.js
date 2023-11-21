const BASE_UNIT = 300;
const ONE_ICON = 48;
const SCALE = ONE_ICON / (BASE_UNIT - 44);
const ICONS_PER_LINE = 15;
const THEME_LIGHT = "555555";
const THEME_DARK = "CCCCCC";

async function handleRequest(request) {
  const { pathname, searchParams } = new URL(request.url);

  const path = pathname.replace(/^\/|\/$/g, "");

  if (path === "svg") {
    const iconParam = searchParams.get("i") || searchParams.get("icons");
    if (!iconParam)
      return new Response("You didn't specify any icons!", { status: 400 });

    const icons = iconParam.split(",");
    if (!icons.length)
      return new Response(
        "You didn't specify any icons. Please get icon name from https://simpleicons.org",
        { status: 400 }
      );

    const theme = searchParams.get("t") || searchParams.get("theme");
    if (theme && theme !== "dark" && theme !== "light")
      return new Response('Theme must be either "light" or "dark"', {
        status: 400,
      });

    const perLine = searchParams.get("perline") || searchParams.get("perLine") || searchParams.get("perLines") || searchParams.get("perlines") || ICONS_PER_LINE;

    if (isNaN(perLine) || perLine < -1 || perLine > 50)
      return new Response("Icons per line must be a number between 1 and 50", {
        status: 400,
      });

    const iconData = [];
    for (let i = 0; i < icons.length; i++) {
        const url = generateIconUrl(icons[i], theme);

        const response = await fetch(url);
        let data = await response.text();

        // The icon received from simpleicons doesn't have width height defined
        data = data.replace(
          `viewBox="0 0 24 24"`,
          `width="256" height="256" viewBox="0 0 24 24"`
        );
				// data = data.replace(`<path`,`<rect width="24" height="24" rx="4" fill="#F5F5F5"/> <path`)
        iconData.push(data);
      }
      const svgData = generateSvg(iconData, perLine);

    return new Response(svgData, { headers: { "Content-Type": "image/svg+xml" } });
  } else {
    return new Response(`This url is not supported`, { status: 500 })
  }
}

function generateSvg(iconData, perLine) {
  const length =
    Math.min(perLine * BASE_UNIT, iconData.length * BASE_UNIT) - 44;
  const height = Math.ceil(iconData.length / perLine) * BASE_UNIT - 44;
  const scaledHeight = height * SCALE;
  const scaledWidth = length * SCALE;

  return `
    <svg width="${scaledWidth}" height="${scaledHeight}" viewBox="0 0 ${length} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    ${iconData
      .map(
        (i, index) =>
          `
          <g transform="translate(${(index % perLine) * 300}, ${
            Math.floor(index / perLine) * 300
          })">
            ${i}
          </g>
          `
      )
      .join(" ")}
    </svg>
    `;
}

function generateIconUrl(iconName, theme){
	let themeSuffix = ""
	if(theme === 'light'){
		themeSuffix = `/${THEME_LIGHT}`
	} else if(theme === 'dark'){
		themeSuffix = `/_/${THEME_DARK}`
	}
	return `https://cdn.simpleicons.org/${iconName.trim()}${themeSuffix}`;
}

export default {
	async fetch(request, env, ctx) {
		return handleRequest(request);
	},
};

// addEventListener('fetch', event => {
//   event.respondWith(
//     handleRequest(event.request).catch(
//       err => new Response(err.stack, { status: 500 })
//     )
//   );
// });
