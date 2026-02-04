# FCP Improvment

FCP in lighthouse most of the pages are arround 1.7s to 1.8s (Even reaches 2s)
In pagespeed also they are similar to lighthouse

## TLDr

![image](https://hackmd.io/_uploads/S1n3igSLWg.png)
https://pagespeed.web.dev/analysis/https-hexmos-com-freedevtools-tldr-amass-amass/9v2preykai?form_factor=mobile

## MCP

![image](https://hackmd.io/_uploads/S1Ot7-BIZg.png)
https://pagespeed.web.dev/analysis/https-hexmos-com-freedevtools-mcp-git-workflow-management-HeskeyBaozi--servers/xw0jnar2p6?form_factor=mobile

1. Major issues is from image delivery issues.
2. Most of the mcp pages has images majorly embeded from external sources.
3. Majorly the images tags used are not optimized.

```html
<img
  alt="Swagger UI Image Placeholder"
  src="https://fastapi.tiangolo.com/img/index/index-01-swagger-ui-simple.png"
/>
```

4. There are total `34215` tags used in mcp pages.
5. This page had small images which was fetching full size and reduced the dimention in html img tag.
   https://pagespeed.web.dev/analysis/https-hexmos-com-freedevtools-mcp-git-workflow-management-HeskeyBaozi--servers/xw0jnar2p6?form_factor=mobile
6. Other pages which has large image dimention.
   https://pagespeed.web.dev/analysis/https-hexmos-com-freedevtools-mcp-apis-and-http-requests-cetinibs--fastapi/2h3eldq2hu?form_factor=mobile

## How to enable image (Hide 12px images)

To hide all images with `height="12"` (renaming `src` to `no-src`):

```bash
go run scripts/mcp/imgtag.go
```

## How to disable image (Restore hidden images)

To restore the hidden images (renaming `no-src` back to `src`):

```bash
go run scripts/mcp/imgtag.go -revert
```
