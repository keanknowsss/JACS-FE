function getEnv(name) {
	return process.env[name];
}

export const JACS_BE_API = getEnv("REACT_APP_JACS_API_URL") 
