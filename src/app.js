const settings = {
  theme: 'dark',
  isAuthenticated: true,
  options: [1, 2, 3],
};

const a = localStorage.setItem('settings', JSON.stringify(settings));

console.log(a);