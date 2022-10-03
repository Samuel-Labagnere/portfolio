lightSchemeIcon = document.querySelector('link#lightThemeIcon');
darkSchemeIcon = document.querySelector('link#darkThemeIcon');

matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();

function onUpdate() {
if (matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
} else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
}
}