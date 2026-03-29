package bookmarks

import (
	"fmt"
	"time"
)

// IPMNotification represents a notification setting for a repo event
type IPMNotification struct {
	ID         int       `json:"id"`
	Repo       string    `json:"repo"`
	Event      string    `json:"event"`
	Service    string    `json:"service"`
	WebhookURL string    `json:"webhook_url"`
	CreatedAt  time.Time `json:"created_at"`
}

// SaveIPMNotification saves a notification setting to the database
func (db *DB) SaveIPMNotification(repo, event, service, webhookURL string) error {
	query := `
		INSERT INTO ipm_notifications (repo, event, service, webhook_url)
		VALUES ($1, $2, $3, $4)
	`
	_, err := db.conn.Exec(query, repo, event, service, webhookURL)
	if err != nil {
		return fmt.Errorf("failed to save ipm notification: %v", err)
	}
	return nil
}

// GetIPMNotifications retrieves notifications for a given repo and event
func (db *DB) GetIPMNotifications(repo, event string) ([]IPMNotification, error) {
	query := `
		SELECT id, repo, event, service, webhook_url, created_at
		FROM ipm_notifications
		WHERE LOWER(repo) = LOWER($1) AND event = $2
	`
	rows, err := db.conn.Query(query, repo, event)
	if err != nil {
		return nil, fmt.Errorf("failed to query ipm notifications: %v", err)
	}
	defer rows.Close()

	var notifications []IPMNotification
	for rows.Next() {
		var n IPMNotification
		if err := rows.Scan(&n.ID, &n.Repo, &n.Event, &n.Service, &n.WebhookURL, &n.CreatedAt); err != nil {
			return nil, fmt.Errorf("failed to scan ipm notification: %v", err)
		}
		notifications = append(notifications, n)
	}

	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("rows iteration error in ipm notifications: %v", err)
	}

	return notifications, nil
}

// GetAllIPMNotifications retrieves all notifications for a given repo
func (db *DB) GetAllIPMNotifications(repo string) ([]IPMNotification, error) {
	query := `
		SELECT id, repo, event, service, webhook_url, created_at
		FROM ipm_notifications
		WHERE LOWER(repo) = LOWER($1)
		ORDER BY created_at DESC
	`
	rows, err := db.conn.Query(query, repo)
	if err != nil {
		return nil, fmt.Errorf("failed to query all ipm notifications: %v", err)
	}
	defer rows.Close()

	var notifications []IPMNotification
	for rows.Next() {
		var n IPMNotification
		if err := rows.Scan(&n.ID, &n.Repo, &n.Event, &n.Service, &n.WebhookURL, &n.CreatedAt); err != nil {
			return nil, fmt.Errorf("failed to scan ipm notification: %v", err)
		}
		notifications = append(notifications, n)
	}

	return notifications, nil
}
// DeleteIPMNotification deletes a notification setting from the database
func (db *DB) DeleteIPMNotification(id int) error {
	query := `DELETE FROM ipm_notifications WHERE id = $1`
	_, err := db.conn.Exec(query, id)
	if err != nil {
		return fmt.Errorf("failed to delete ipm notification: %v", err)
	}
	return nil
}

// UpdateIPMNotificationWebhook updates the webhook URL of a notification setting
func (db *DB) UpdateIPMNotificationWebhook(id int, webhookURL string) error {
	query := `UPDATE ipm_notifications SET webhook_url = $1 WHERE id = $2`
	_, err := db.conn.Exec(query, webhookURL, id)
	if err != nil {
		return fmt.Errorf("failed to update ipm notification webhook: %v", err)
	}
	return nil
}
