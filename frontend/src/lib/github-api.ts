// GitHub API service for managing tool submissions
const GITHUB_TOKEN = '';
const REPO_OWNER = 'HexmosTech'; // Updated to match your organization
const REPO_NAME = 'FreeDevTools'; // Repository name
const SUBMISSION_LABEL = 'submission-request';

// Validate configuration
if (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME) {
  console.error(
    'GitHub API configuration is incomplete. Please check your environment variables.'
  );
}

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  body: string;
  state: 'open' | 'closed';
  created_at: string;
  updated_at: string;
  labels: Array<{
    id: number;
    name: string;
    color: string;
  }>;
  user: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
}

export interface CreateIssueRequest {
  title: string;
  body: string;
  email?: string;
}

export interface CreateIssueResponse {
  success: boolean;
  issue?: GitHubIssue;
  error?: string;
}

export interface ListIssuesResponse {
  success: boolean;
  issues?: GitHubIssue[];
  error?: string;
}

// Create a new issue
export async function createIssue(
  data: CreateIssueRequest
): Promise<CreateIssueResponse> {
  try {
    const body = data.email
      ? `${data.body}\n\n---\n**Submitted by:** ${data.email}`
      : data.body;

    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: data.title,
          body: body,
          labels: [SUBMISSION_LABEL],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    const issue = await response.json();
    return {
      success: true,
      issue: {
        id: issue.id,
        number: issue.number,
        title: issue.title,
        body: issue.body,
        state: issue.state,
        created_at: issue.created_at,
        updated_at: issue.updated_at,
        labels: issue.labels || [],
        user: issue.user,
        html_url: issue.html_url,
      },
    };
  } catch (error) {
    console.error('Error creating issue:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create issue',
    };
  }
}

// List issues with submission-request label
export async function listSubmissionIssues(): Promise<ListIssuesResponse> {
  try {
    // For public repositories, we don't need authentication for reading issues
    const headers: HeadersInit = {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };

    // Only add authorization if we have a token (for private repos or higher rate limits)
    if (GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?labels=${SUBMISSION_LABEL}&state=all&sort=created&direction=desc`,
      { headers }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    const issues = await response.json();

    // Filter out pull requests (GitHub API returns both issues and PRs)
    const filteredIssues = issues.filter((issue: any) => !issue.pull_request);

    return {
      success: true,
      issues: filteredIssues.map((issue: any) => ({
        id: issue.id,
        number: issue.number,
        title: issue.title,
        body: issue.body,
        state: issue.state,
        created_at: issue.created_at,
        updated_at: issue.updated_at,
        labels: issue.labels || [],
        user: issue.user,
        html_url: issue.html_url,
      })),
    };
  } catch (error) {
    console.error('Error fetching issues:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch issues',
    };
  }
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

// Get status from issue state and labels
export function getIssueStatus(issue: GitHubIssue): string {
  if (issue.state === 'closed') {
    return 'Completed';
  }

  // Check for specific labels that might indicate status
  const statusLabels = issue.labels.map((label) => label.name.toLowerCase());
  if (statusLabels.includes('in-progress')) {
    return 'In Progress';
  }
  if (statusLabels.includes('under-review')) {
    return 'Under Review';
  }
  if (statusLabels.includes('planned')) {
    return 'Planned';
  }

  return 'Open';
}
