-- Add see_also column to mcp_pages table
ALTER TABLE mcp_pages ADD COLUMN see_also TEXT DEFAULT '';

