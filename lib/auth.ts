
const DEFAULT_ADMIN_PASSWORD = 'RyderAdmin2024!';
export const verifyAdminPassword = (password: string): boolean => {
  return password === 'RyderAdmin2024!';
};

export const isAdminLoggedIn = (): boolean => {
  return localStorage.getItem('admin_logged_in') === 'true';
};

export const loginAdmin = (password: string): boolean => {
  if (verifyAdminPassword(password)) {
    localStorage.setItem('admin_logged_in', 'true');
    return true;
  }
  return false;
};

export const logoutAdmin = (): void => {
  localStorage.removeItem('admin_logged_in');
};