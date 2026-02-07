package core

import (
	"encoding/json"
	"b2m/config"
	"os/exec"
)

func sendDiscord(content string) {
	payload := map[string]string{"content": content}
	data, _ := json.Marshal(payload)
	err := exec.CommandContext(GetContext(), "curl", "-H", "Content-Type: application/json", "-d", string(data), config.AppConfig.DiscordWebhookURL, "-s", "-o", "/dev/null").Run()
	if err != nil {
		LogError("Failed to send discord notification: %v", err)
	}
}
