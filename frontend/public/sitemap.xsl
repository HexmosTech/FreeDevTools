<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <!-- Root template decides between sitemapindex and urlset -->
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>Sitemap</title>
        <style>
          body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; margin: 24px; color: #0f172a; }
          h1 { font-size: 20px; margin: 0 0 16px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { text-align: left; padding: 8px 10px; border-bottom: 1px solid #e2e8f0; }
          th { background: #f8fafc; font-weight: 600; color: #334155; }
          .muted { color: #64748b; }
        </style>
      </head>
      <body>
        <xsl:choose>
          <xsl:when test="/s:sitemapindex">
            <h1>Sitemap Index</h1>
            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th class="muted">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="/s:sitemapindex/s:sitemap">
                  <tr>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                    <td class="muted"><xsl:value-of select="s:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>
          <xsl:when test="/s:urlset">
            <h1>Sitemap</h1>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th class="muted">Last Modified</th>
                  <th class="muted">Changefreq</th>
                  <th class="muted">Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="/s:urlset/s:url">
                  <tr>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                    <td class="muted"><xsl:value-of select="s:lastmod"/></td>
                    <td class="muted"><xsl:value-of select="s:changefreq"/></td>
                    <td class="muted"><xsl:value-of select="s:priority"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>
        </xsl:choose>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>


