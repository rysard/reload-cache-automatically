const nameProperty = 'is-cache-reloaded';
var cacheReloaded = sessionStorage.getItem(nameProperty);

if(cacheReloaded !== 'true') {
    sessionStorage.setItem(nameProperty,'true');
    location.reload(true);
}