export interface UserPreferencesBody {
  gentle_nudge_preference: string;
  seeking_preference: string;
  support_preference: string;
}

export interface DeleteUserBody {
  reason_id: string;
  reason_text: string;
}

// RESPONSE

export interface PreferenceOption {
  name: string;
  options: string[];
}

export interface PreferenceResponse {
  options: PreferenceOption[];
}
