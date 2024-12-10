function applyTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const root = document.documentElement;

    if (isDarkMode) {
        root.style.setProperty('--card-bg', '#121212'); /* 暗色模式背景 */
    } else {
        root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.75)'); /* 亮色模式背景 */
    }
}

// 初次加载时应用主题
applyTheme();

// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
