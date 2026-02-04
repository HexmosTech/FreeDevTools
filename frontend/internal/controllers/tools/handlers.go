package tools

import (
	"fdt-templ/components"
	"fdt-templ/components/pages/t"
	"fdt-templ/internal/db/tools"
	"net/http"

	"github.com/a-h/templ"
)

const (
	RedirectMacLookup          = "mac-lookup"
	RedirectMacLookupTarget    = "mac-address-lookup"
	RedirectBase64Decode       = "base64-decode"
	RedirectBase64DecodeTarget = "base64-decoder"
	RedirectBase64Encode       = "base64-encode"
	RedirectBase64EncodeTarget = "base64-encoder"
)

// HandleIndex renders the tools index page.
func HandleIndex(w http.ResponseWriter, r *http.Request) {
	handler := templ.Handler(t.Index())
	handler.ServeHTTP(w, r)
}

// HandleTool renders a specific tool page.
func HandleTool(w http.ResponseWriter, r *http.Request, slug string, toolsConfig *tools.Config) {	
	// Check if tool exists in config
	tool, ok := toolsConfig.GetTool(slug)
	if !ok {
		http.NotFound(w, r)
		return
	}

	// Render appropriate component based on slug
	var component templ.Component


	switch slug {
	case "password-generator":
		component = t.PasswordGenerator()
	case "anthropic-token-counter":
		component = t.AnthropicTokenCounter()
	case "character-count":
		component = t.CharacterCount()
	case "chmod-calculator":
		component = t.ChmodCalculator()
	case "cron-tester":
		component = t.CronTester()
	case "css-inliner-for-email":
		component = t.CssInlinerForEmail()
	case "css-units-converter":
		component = t.CssUnitsConverter()
	case "csv-to-json":
		component = t.CsvToJson()
	case "curl-to-js-fetch":
		component = t.CurlToJsFetch()
	case "date-time-converter":
		component = t.DateTimeConverter()
	case "deepseek-token-counter":
		component = t.DeepseekTokenCounter()
	case "diff-checker":
		component = t.DiffChecker()
	case "dockerfile-linter":
		component = t.DockerfileLinter()
	case "env-to-netlify-toml":
		component = t.EnvToNetlifyToml()
	case "faker":
		component = t.Faker()
	case "har-file-viewer":
		component = t.HarFileViewer()
	case "hash-generator":
		component = t.HashGenerator()
	case "html-to-markdown":
		component = t.HtmlToMarkdown()
	case "json-to-csv-converter":
		component = t.JsonToCsvConverter()
	case "json-to-xml":
		component = t.JsonToXml()
	case "json-to-yaml":
		component = t.JsonToYaml()
	case "jwt-parser":
		component = t.JwtParser()
	case "llama-token-counter":
		component = t.LlamaTokenCounter()
	case "lorem-ipsum-generator":
		component = t.LoremIpsumGenerator()
	case "mac-address-generator":
		component = t.MacAddressGenerator()
	case "mac-address-lookup":
		component = t.MacAddressLookup()
	case "markdown-to-html-converter":
		component = t.MarkdownToHtmlConverter()
	case "og-meta-generator":
		component = t.OgMetaGenerator()
	case "openai-cost-calculator":
		component = t.OpenaiCostCalculator()
	case "openai-token-counter":
		component = t.OpenAiTokenCounter()
	case "qrcode-generator":
		component = t.QrcodeGenerator()
	case "query-params-to-json":
		component = t.QueryParamsToJson()
	case "regex-tester":
		component = t.RegexTester()
	case "rgb-to-hex":
		component = t.RgbToHex()
	case "slugify-string":
		component = t.SlugifyString()
	case "svg-placeholder-generator":
		component = t.SvgPlaceholderGenerator()
	case "svg-viewer":
		component = t.SvgViewer()
	case "user-agent-parser":
		component = t.UserAgentParser()
	case "uuid-generator":
		component = t.UuidGenerator()
	case "webp-converter":
		component = t.WebpConverter()
	case "xml-formatter":
		component = t.XmlFormatter()
	case "xml-to-json":
		component = t.XmlToJson()
	case "yaml-to-json":
		component = t.YamlToJson()
	case "yaml-to-toml":
		component = t.YamlToToml()
	case "rsa-key-pair-generator":
		component = t.RsaKeyPairGenerator()
	case "json-utilities", "json-prettifier", "json-validator", "json-minifier", "json-fixer":
		component = t.JsonPrettifier(slug)
	case "base64-encoder", "base64-decoder", "base64-utilities":
		component = t.Base64Encoder(slug)
	case "zstd-compress", "zstd-decompress":
		component = t.ZstdCompress(slug)
	case "image-to-base64":
		component = t.ImageToBase64()
	case "sql-minifier":
		component = t.SqlMinifier()
	default:
		// Tool exists in config but no component mapped yet
		http.NotFound(w, r)
		return
	}

	handler := templ.Handler(components.Layout(tool.Title, component))
	handler.ServeHTTP(w, r)
}
