// Parse API base URL
const PARSE_API_BASE_URL = 'https://parse.apps.hexmos.com/parse';

// App ID for freedevtools
const FREEDEVTOOLS_APP_ID = 'GQIJtnbPZq';

// Get JWT from localStorage
function getJWT(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('hexmos-one');
}

// Get active licence from localStorage
export function getActiveLicence(): ActiveLicence | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('fdt_active_licence');
  if (!stored) return null;
  try {
    return JSON.parse(stored) as ActiveLicence;
  } catch {
    return null;
  }
}

// Set active licence in localStorage
export function setActiveLicence(licence: ActiveLicence | null): void {
  if (typeof window === 'undefined') return;
  if (licence) {
    localStorage.setItem('fdt_active_licence', JSON.stringify(licence));
  } else {
    localStorage.removeItem('fdt_active_licence');
  }
  window.dispatchEvent(new Event('active-licence-changed'));
}

// Get pro status from cookie
export function getProStatusFromCookie(): boolean {
  if (typeof window === 'undefined') return false;
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name.trim() === 'hexmos-one-fdt-p-status' && value === 'true') {
      return true;
    }
  }
  return false;
}

// Check if user has active pro licence
// Returns true only if activeStatus is true/active and not expired
export function hasActiveProLicence(): boolean {
  const licence = getActiveLicence();
  if (!licence) return false;
  
  // Check activeStatus - must be true/active
  const isActive = licence.activeStatus === true || 
                   licence.activeStatus === 'true' || 
                   licence.activeStatus === 'active';
  
  if (!isActive) return false;
  
  // Check expiration date if available - if expired, return false
  if (licence.expirationDate || licence.expireAt) {
    const expiryDate = licence.expirationDate || licence.expireAt;
    if (expiryDate) {
      try {
        const expiry = new Date(expiryDate);
        const now = new Date();
        if (expiry < now) return false;
      } catch (e) {
        console.error('[API] Error parsing expiry date:', e);
      }
    }
  }
  
  return true;
}

// Set or clear pro status cookie
function setProStatusCookie(isPro: boolean): void {
  if (typeof window === 'undefined') return;
  
  const isSecure = window.location.protocol === 'https:';
  const isProduction = window.location.hostname.includes('hexmos.com');
  const domain = isProduction ? '.hexmos.com' : 'localhost';
  const sameSite = isProduction ? 'None' : 'Lax';
  
  if (isPro) {
    // Set cookie
    const cookieOptions = `path=/; SameSite=${sameSite}${isSecure ? '; Secure' : ''}${domain ? `; domain=${domain}` : ''}`;
    document.cookie = `hexmos-one-fdt-p-status=true; ${cookieOptions}`;
  } else {
    // Clear cookie
    document.cookie = `hexmos-one-fdt-p-status=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain ? `; domain=${domain}` : ''}`;
    if (isProduction) {
      document.cookie = `hexmos-one-fdt-p-status=; path=/; domain=.hexmos.com; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  }
  
  // Dispatch event to notify banners to re-check pro status
  window.dispatchEvent(new CustomEvent('pro-status-changed', { detail: { isPro } }));
}

// Make API call using fetch (same approach as purchases)
async function callAPIParse(
  endpoint: string,
  body: any,
  options: { headers?: Record<string, string> } = {}
): Promise<any> {
  const url = `${PARSE_API_BASE_URL}${endpoint}`;
  const jwt = getJWT();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(jwt && { Authorization: `Bearer ${jwt}` }),
    ...(options.headers || {}),
  };

  console.log('[API] Making request to:', url);
  console.log('[API] Headers:', headers);
  console.log('[API] Body:', body);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      // Do NOT use credentials - this causes CORS issues
    });

    if (!response.ok) {
      if (response.status === 402) {
        console.error('Trial Expired - Unlock premium features by purchasing a plan.');
      }
      const errorText = await response.text();
      console.error('[API] Response error:', response.status, errorText);
      throw new Error(`API request failed: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('[API] Response received:', data);
    return { data };
  } catch (error: any) {
    console.error('[API] Fetch error:', error);
    throw error;
  }
}

// Extract userId from JWT payload
function getUserIdFromJWT(): string | null {
  if (typeof window === 'undefined') return null;

  const jwt = localStorage.getItem('hexmos-one');
  console.log('[API] JWT from localStorage:', jwt ? 'exists' : 'not found');

  if (!jwt) return null;

  try {
    const payload = JSON.parse(atob(jwt.split('.')[1]));
    console.log('[API] JWT payload:', payload);
    // Check uId first (as seen in actual JWT), then fallback to other fields
    const userId = payload.uId || payload.parseUserId || payload.userId || payload.sub || null;
    console.log('[API] Extracted userId:', userId);
    return userId;
  } catch (e) {
    console.error('[API] Failed to parse JWT:', e);
    return null;
  }
}

// Interface for licence details
export interface LicenceDetails {
  activeStatus: boolean;
  amount: string;
  expirationDate: string;
  licenceId: string;
  name: string;
  noOfDays: number;
  platform?: string;
  type: 'paid' | 'trial';
  expireAt: string;
}

// Interface for licence renewal
export interface LicenceRenewal {
  action: string;
  activeStatus: boolean;
  amount: string;
  description: string;
  expirationDate: string;
  licenceId: string;
  licencePlansPointer: string;
  name: string;
  noOfDays: number;
  platform: string;
  receiptUrl: string;
  renewalId: string;
  renewedOn: string;
}

// Interface for plan details response
export interface PlanDetailsResponse {
  success: boolean;
  data: {
    lastPurchasedLicence: LicenceDetails;
    licenceHistory?: LicenceRenewal[];
  };
  error?: string;
}

// Interface for available plan (matching the API response structure)
export interface AvailablePlan {
  objectId?: string;
  name: string;
  description?: string; // JSON string array
  actualAmount?: number;
  discountedAmount?: number;
  currencySymbol?: string;
  currency?: string;
  durationType?: string;
  purchaseType?: string;
  type?: string;
  durationDays?: number;
  features?: string[];
  planId?: string;
  [key: string]: any; // Allow other properties from API
}

// Get default currency from IP client
export async function getDefaultCurrency(): Promise<string> {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
    });
    const data = await response.json();
    const detectedCurrency = data.currency || 'USD';
    // Normalize to INR or USD (fallback to USD)
    return detectedCurrency === 'INR' ? 'INR' : 'USD';
  } catch {
    return 'USD';
  }
}

// Get available subscription plans (public endpoint, no auth required)
export async function getAvailablePlans(currencyCode?: string): Promise<{ success: boolean; data?: AvailablePlan[]; error?: string }> {
  console.log('[API] getAvailablePlans called');

  // Get currency if not provided
  if (!currencyCode) {
    currencyCode = await getDefaultCurrency();
  }

  console.log('[API] Using currency:', currencyCode);
  console.log('[API] API URL:', `${PARSE_API_BASE_URL}/functions/getLicencePlans`);

  try {
    const body = {
      appName: 'freedevtools',
      currencyCode: currencyCode,
    };

    console.log('[API] Request body:', body);
    
    const response = await callAPIParse('/functions/getLicencePlans', body);
    console.log('[API] Available plans response:', response.data);

    const result = response.data.result;
    if (result && result.data && Array.isArray(result.data)) {
      // Filter out null values
      const validPlans = result.data.filter((plan: any): plan is AvailablePlan =>
        plan !== null && plan !== undefined && plan.name
      );

      console.log('[API] Valid plans:', validPlans);

      return {
        success: true,
        data: validPlans,
      };
    }

    // Fallback if structure is different
    if (Array.isArray(response.data)) {
      return {
        success: true,
        data: response.data.filter((plan: any): plan is AvailablePlan => 
          plan !== null && plan !== undefined && plan.name
        ),
      };
    }

    throw new Error('Invalid response structure');
  } catch (error: any) {
    console.error('[API] Error fetching available plans:', error);
    return {
      success: false,
      data: [],
      error: error.message || 'Failed to fetch available plans',
    };
  }
}

// Interface for active licence (from getLicences)
export interface ActiveLicence {
  expirationDate: string | null;
  expireAt: string | null;
  name: string;
  activeStatus: boolean | string;
  licencePlansPointer: string;
  licenceId: string;
  platform: string;
}

// Interface for licence details (from getLicenceDetails)
export interface LicenceDetailsInfo {
  numberOfPurchased: number;
  numberOfUsed: number;
  name: string;
  usersLeftToAttach: number;
  type: string;
  expirationDate: string | null;
  createdAt: {
    __type: string;
    iso: string;
  };
}

// Interface for purchases data (renewal format)
export interface PurchasesData {
  lastPurchasedLicence?: {
    name: string;
    activeStatus: string;
    platform: string;
    type: string;
    licenceId: string;
    uId: string;
    amount: string;
    noOfDays: number;
    expirationDate: string | null;
    expireAt: string | null;
  };
  licenceHistory?: LicenceRenewal[];
}

// Get licences (similar to Purchases.tsx)
export async function getLicences(): Promise<{
  success: boolean;
  activeLicence?: ActiveLicence;
  purchasesData?: PurchasesData;
  licenceDetails?: LicenceDetailsInfo;
  error?: string;
}> {
  console.log('[API] getLicences called');
  const userId = getUserIdFromJWT();
  console.log('[API] User ID from JWT:', userId);

  if (!userId) {
    console.error('[API] User ID not found in JWT');
    return {
      success: false,
      error: 'User ID not found in JWT',
    };
  }

  try {
    const payload = {
      appId: FREEDEVTOOLS_APP_ID,
      userId: userId,
      renewal: false,
    };

    console.log('[API] Calling getLicences with payload:', payload);
    const response = await callAPIParse('/functions/getLicences', payload);
    console.log('[API] getLicences response:', response.data);

    const result = response.data.result || response.data;

    if (result?.success) {
      // Check if it's active licence format (has expirationDate directly or licenceId)
      if (result.data?.expirationDate !== undefined || result.data?.licenceId) {
        const activeLicence = result.data as ActiveLicence;
        let licenceDetails: LicenceDetailsInfo | undefined;

        // Call getLicenceDetails API with the licenceId
        if (result.data.licenceId) {
          try {
            const licenceDetailsResponse = await callAPIParse('/functions/getLicenceDetails', {
              licenceID: result.data.licenceId,
            });

            if (licenceDetailsResponse.data?.result?.success && licenceDetailsResponse.data?.result?.data) {
              licenceDetails = licenceDetailsResponse.data.result.data as LicenceDetailsInfo;
            }
          } catch (detailsError: any) {
            console.error('[API] Error fetching licence details:', detailsError);
            // Don't fail the whole request if details fail
          }
        }

        // Store licence in localStorage even if activeStatus is false
        // User wants to show Pro status even if activeStatus is false
        setActiveLicence(activeLicence);

        // Set or clear pro status cookie based on activeStatus
        const isActive = activeLicence.activeStatus === true || 
                        activeLicence.activeStatus === 'true' || 
                        activeLicence.activeStatus === 'active';
        setProStatusCookie(isActive);

        return {
          success: true,
          activeLicence,
          licenceDetails,
        };
      }
      // Check if it's renewal format (has lastPurchasedLicence)
      else if (result.data?.lastPurchasedLicence) {
        const purchasesData = result.data as PurchasesData;
        
        // If lastPurchasedLicence has activeStatus, create an ActiveLicence and store it
        if (purchasesData.lastPurchasedLicence) {
          const lastLicence = purchasesData.lastPurchasedLicence;
          // Handle both string and boolean activeStatus
          const activeStatusValue = typeof lastLicence.activeStatus === 'string' 
            ? (lastLicence.activeStatus === 'true' || lastLicence.activeStatus === 'active')
            : lastLicence.activeStatus === true;
          
          if (activeStatusValue) {
            const activeLicence: ActiveLicence = {
              expirationDate: lastLicence.expirationDate,
              expireAt: lastLicence.expireAt,
              name: lastLicence.name,
              activeStatus: activeStatusValue,
              licencePlansPointer: '',
              licenceId: lastLicence.licenceId,
              platform: lastLicence.platform || '',
            };
            setActiveLicence(activeLicence);
            setProStatusCookie(true);
          } else {
            setActiveLicence(null);
            setProStatusCookie(false);
          }
        } else {
          setProStatusCookie(false);
        }
        
        return {
          success: true,
          purchasesData,
        };
      } else {
        return {
          success: false,
          error: 'No purchase data found',
        };
      }
    } else {
      // No active licence found, clear it from localStorage
      setActiveLicence(null);
      setProStatusCookie(false);
      return {
        success: false,
        error: result?.message || 'Failed to fetch licences',
      };
    }
  } catch (error: any) {
    console.error('[API] Error fetching licences:', error);
    // Clear active licence on error
    setActiveLicence(null);
    setProStatusCookie(false);
    return {
      success: false,
      error: error.message || 'Failed to fetch licences',
    };
  }
}

// Cancel subscription
export interface CancelSubscriptionPayload {
  licenceId: string;
  provider?: string;
}

export async function cancelSubscription(
  payload: CancelSubscriptionPayload
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await callAPIParse('/functions/cancelSubscription', payload);
    return {
      success: response.data.success !== false,
    };
  } catch (error: any) {
    console.error('Error cancelling subscription:', error);
    return {
      success: false,
      error: error.message || 'Failed to cancel subscription',
    };
  }
}

// Get user ID from hexmos-one-id cookie
function getUserIdFromCookie(): string | null {
  if (typeof window === 'undefined') return null;
  
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');
    if (name.trim() === 'hexmos-one-id' && value) {
      return decodeURIComponent(value);
    }
  }
  return null;
}

// Check bookmark status
// Note: This does NOT redirect - it just checks status
// Redirect only happens on toggle when user actually tries to bookmark
export async function checkBookmark(url: string): Promise<{ bookmarked: boolean }> {
  try {
    const userId = getUserIdFromCookie();
    if (!userId) {
      // No user ID, return not bookmarked
      return { bookmarked: false };
    }

    // Check pro status from cookie - if not pro, return not bookmarked
    const isPro = getProStatusFromCookie();
    if (!isPro) {
      return { bookmarked: false };
    }

    const encodedURL = encodeURIComponent(url);
    const response = await fetch(`/freedevtools/api/pro/bookmark/check?url=${encodedURL}`, {
      method: 'GET',
      credentials: 'include', // Include cookies
    });

    if (!response.ok) {
      console.error('[Bookmark] Error checking bookmark:', response.status);
      return { bookmarked: false };
    }

    const data = await response.json();
    return { bookmarked: data.bookmarked || false };
  } catch (error: any) {
    console.error('[Bookmark] Error checking bookmark:', error);
    return { bookmarked: false };
  }
}

// Toggle bookmark
export async function toggleBookmark(url: string): Promise<{ success: boolean; bookmarked: boolean; redirect?: string; requiresPro?: boolean }> {
  try {
    const userId = getUserIdFromCookie();
    if (!userId) {
      // If user is not signed in, store source URL in sessionStorage and redirect to pro page
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('bookmark_source_url', url);
      }
      const redirectURL = '/freedevtools/pro/?feature=bookmark';
      // Return immediately with redirect info - let the component handle the redirect
      return { success: false, bookmarked: false, redirect: redirectURL, requiresPro: true };
    }

    // Check pro status from cookie before making API call
    const isPro = getProStatusFromCookie();
    if (!isPro) {
      // User is logged in but not pro - store source URL and redirect
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('bookmark_source_url', url);
      }
      const redirectURL = '/freedevtools/pro/?feature=bookmark';
      return { success: false, bookmarked: false, redirect: redirectURL, requiresPro: true };
    }

    const response = await fetch('/freedevtools/api/pro/bookmark/toggle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      console.error('[Bookmark] Error toggling bookmark:', response.status);
      return { success: false, bookmarked: false };
    }

    const data = await response.json();
    
    // Check if pro is required
    if (data.requiresPro && data.redirect) {
      // Store source URL in sessionStorage before redirecting
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('bookmark_source_url', url);
      }
      window.location.href = data.redirect;
      return { success: false, bookmarked: false, redirect: data.redirect, requiresPro: true };
    }
    
    return {
      success: data.success || false,
      bookmarked: data.bookmarked || false,
    };
  } catch (error: any) {
    console.error('[Bookmark] Error toggling bookmark:', error);
    return { success: false, bookmarked: false };
  }
}

// Bookmark interface
export interface Bookmark {
  uId: string;
  url: string;
  category: string;
  category_hash_id: number;
  uId_hash_id: number;
  created_at: string;
}

// Get all bookmarks
export async function getAllBookmarks(): Promise<{ success: boolean; bookmarks: Bookmark[]; redirect?: string; requiresPro?: boolean }> {
  try {
    // Check pro status from cookie before making API call
    const isPro = getProStatusFromCookie();
    if (!isPro) {
      // User is not pro - redirect to pro page
      const redirectURL = '/freedevtools/pro/?feature=bookmark';
      if (typeof window !== 'undefined') {
        // Store current URL as source if on bookmarks page
        const currentUrl = window.location.href;
        if (currentUrl.includes('/pro/bookmarks/')) {
          sessionStorage.setItem('bookmark_source_url', currentUrl);
        }
        window.location.href = redirectURL;
      }
      return { success: false, bookmarks: [], redirect: redirectURL, requiresPro: true };
    }

    const response = await fetch('/freedevtools/api/pro/bookmark/list', {
      method: 'GET',
      credentials: 'include', // Include cookies
    });

    if (!response.ok) {
      console.error('[Bookmark] Error getting bookmarks:', response.status);
      return { success: false, bookmarks: [] };
    }

    const data = await response.json();
    
    // Check if pro is required (backend fallback check)
    if (data.requiresPro && data.redirect) {
      if (typeof window !== 'undefined') {
        window.location.href = data.redirect;
      }
      return { success: false, bookmarks: [], redirect: data.redirect, requiresPro: true };
    }
    
    return {
      success: data.success || false,
      bookmarks: data.bookmarks || [],
    };
  } catch (error: any) {
    console.error('[Bookmark] Error getting bookmarks:', error);
    return { success: false, bookmarks: [] };
  }
}

